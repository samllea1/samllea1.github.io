const version = "1.1.3 (TESTING)";

const whats_new = `
-Removed Listen Blocks\n-fixed major bugs
`;

$("html").on("keydown", (e) => {
    if(e.ctrlKey && e.key == "s") {
        $("#Save").click();
        e.preventDefault();
    }
})

class Search extends JSQuery.Plugin {
    Element() {
        return {
            $(q = "") {
                return $.from(this.elt.querySelector(q));
            },
            all(q = "") {
                return $.from(this.elt.querySelectorAll(q));
            },
        };
    }
}

$.loadPlugin(Search, true);

class Templates extends JSQuery.Plugin {
    Element() {
        return {
            replace(elt) {
                this.elt.replaceWith(elt.elt);
                return elt;
            },
            getProps() {
                const obj = {};
                for (const { name, value } of this.elt.attributes) {
                    obj[name] = value;
                }
                return obj;
            },
            create() {
                if (this.elt.tagName.toLowerCase() === "template") {
                    const temp = $.create("div");
                    const props = this.getProps();
                    delete props.id;
                    for (const [k, v] of Object.entries(props)) {
                        temp.props({ [k]: v });
                    }
                    temp.class(this.id()).html(this.html());
                    return temp;
                } else {
                    throw new Error("element isn't a template");
                }
            },
        };
    }
}

$.loadPlugin(Templates, true);


$("#version").text("v" + version);

let name = "Mod Name";

function getTopBlocks(block) {
    if (block.parentBlock_ === null) {
        return block;
    }
    return getTopBlocks(block.parentBlock_);
}

((inputs) => {
    for (const inp of inputs) {
        inp.addEventListener("keydown", function () {
            const self = this;
            setTimeout(function () {
                for (let i = 0; i < 5; i++) {
                    self.value = self.value.toLowerCase().replace(/[^a-z0-9]/g, "");
                }
            }, 0.1);
        });
    }
})(document.querySelectorAll("input.no"));

function getID() {

    name = $("#ModName").value();
    if (name === "") {
        name = "ModName";
    }

}

const todo = [];

let end = "";
let menus = 0;

function block(name) {
    return {
        kind: "block",
        type: name,
        gap: 8,
    };
}

function button(name, callbackID) {
    return {
        kind: "button",
        text: name,
        callbackKey: callbackID
    };
}

function category(name, color, contents) {
    return {
        kind: "category",
        name,
        colour: color,
        contents
    }
}

const toolbox = {
    kind: "categoryToolbox",
    contents: [
        /*
        {
            kind: "category",
            name: "testing",
            colour: "#ebeb34",
            contents: [
                block("create_block"),
                block("controls_wait"),

                // block(""),
            ],
        },
        */
        {
            kind: "category",
            name: "Events",
            colour: "#ffbc03",
            contents: [
                block("GB_OnStart"),
                block("GB_OnFunction"),
                block("GB_args"),

                // block(""),
            ],
        },
        {
            kind: "category",
            name: "Transform",
            colour: "#0048ff",
            contents: [
                block("GB_move"),
                block("GB_move_local"),
                block("GB_set_position"),
                block("GB_set_local_position"),
                block("GB_set_rotation"),
                block("GB_set_local_rotation"),
                block("GB_add_scale"),
                block("GB_set_scale"),
                block("GB_pos_x"),
                block("GB_pos_y"),
                block("GB_pos_z"),
                block("GB_rot_x"),
                block("GB_rot_y"),
                block("GB_rot_z"),
                block("GB_scale_x"),
                block("GB_scale_y"),
                block("GB_scale_z"),

                // block(""),
            ],
        },
        {
            kind: "category",
            name: "objects",
            colour: "#00aaff",
            contents: [
                block("OBJECTS_register"),
                block("OBJECTS_execute_as"),
                block("OBJECTS_execute_on_children"),
                block("OBJECTS_name"),
                block("OBJECTS_child_count"),

                // block(""),
            ],
        },
        {
            kind: "category",
            name: "control",
            colour: "#de8900",
            contents: [
                block("GB_wait"),
                block("CONTROL_while"),
                block("CONTROL_for"),
                block("CONTROL_repeat"),
                block("CONTROL_if"),
                block("CONTROL_if_else"),
                block("CONTROL_else_if"),
                block("CONTROL_and"),
                block("CONTROL_or"),
                block("CONTROL_equals"),
                block("CONTROL_not_equals"),
                block("CONTROL_equals_over"),
                block("CONTROL_equals_under"),
                block("CONTROL_over"),
                block("CONTROL_under"),
                block("CONTROL_true"),
                block("CONTROL_false"),

                // block(""),
            ],
        },
        {
            kind: "category",
            name: "text",
            colour: "#00a800",
            contents: [
                block("TEXT_string"),
                block("TEXT_string_join"),
                block("TEXT_length"),
                block("TEXT_string_contains"),

                // block(""),
            ],
        },
        {
            kind: "category",
            name: "math",
            colour: "#6b00de",
            contents: [
                block("MATH_number"),
                block("MATH_addition"),
                block("MATH_subtraction"),
                block("MATH_multiplication"),
                block("MATH_division"),
                block("MATH_power"),
                block("MATH_modulo"),
                block("MATH_random_integer"),
                block("MATH_random_float"),
                block("MATH_special"),
                block("MATH_pi"),

                // block(""),
            ],
        },
        {
            kind: "category",
            name: "variables",
            colour: "#ff7b00",
            contents: [
                block("VARIABLES_set_variable"),
                block("VARIABLES_variable"),
                block("VARIABLES_globals"),

                // block(""),
            ],
        },
        {
            kind: "category",
            name: "console",
            colour: "#696969",
            contents: [
                block("GB_print"),
                block("GB_open_console"),
                block("GB_close_console"),

                // block(""),
            ],
        },
    ],
};

function addCategory(name, color, display = name, remove = []) {
    toolbox.contents.push({
        kind: "category",
        name: display,
        colour: color,
        contents: (() => {
            const blocks = [];
            for (const Block in Blockly.libraryBlocks[name].blocks) {
                if ([...remove, ...todo].includes(Block)) {
                    continue;
                }
                blocks.push(block(Block));
            }
            return blocks;
        })(),
    });
}

function addFromPrefix(Prefix, name, color, excludes = []) {
    toolbox.contents.push({
        kind: "category",
        name,
        colour: color,
        contents: (() => {
            const blocks = [];
            for (const Block in Blockly.Blocks) {
                if (Block.startsWith(Prefix)) {
                    if ([...excludes, ...todo].includes(Block)) {
                        continue;
                    }
                    blocks.push(block(Block));
                }
            }
            return blocks;
        })(),
    });
}

toolbox.contents.push({kind: "sep"});

const Hats = Blockly.Theme.defineTheme('hats', {
    base: Blockly.Themes.Classic,
    startHats: true,
});

const Dark = Blockly.Theme.defineTheme('dark', {
    base: Hats,
    componentStyles: {
        workspaceBackgroundColour: '#1e1e1e',
        toolboxBackgroundColour: 'blackBackground',
        toolboxForegroundColour: '#fff',
        flyoutBackgroundColour: '#252526',
        flyoutForegroundColour: '#ccc',
        flyoutOpacity: 1,
        scrollbarColour: '#797979',
        insertionMarkerColour: '#fff',
        insertionMarkerOpacity: 0.3,
        scrollbarOpacity: 0.4,
        cursorColour: '#d0d0d0',
        blackBackground: '#333',
    },
    startHats: true,
});

const workspace = Blockly.inject("block-editor", {
    plugins: {
        toolbox: ContinuousToolbox,
        flyoutsVerticalToolbox: ContinuousFlyout,
        metricsManager: ContinuousMetrics,
    },
    renderer: "zelos",
    toolbox,
    theme: Hats,
});

$("#darkmode").click(() => {
    const self = $("#darkmode");
    self.toggleClass("dark");
    $(".blocklyTreeSeparator").toggleClass("dark");
    localStorage.setItem("PenguinBuilder", JSON.stringify({
        shown_version: version,
        dark: self.hasClass("dark"),
    }));  
    if(self.hasClass("dark")) {
        workspace.setTheme(Dark);
    } else {
        workspace.setTheme(Hats);
    }
});

workspace.scale = 0.7;

workspace.addChangeListener(Blockly.Events.disableOrphans);

let extensionWindow;

let extensions = {};

window.addEventListener("message", (e) => {
    const data = e.data.data;
    switch (e.data.type) {
        case "extension":
            if (extensions[data.id]) {
                extensionWindow.close();
                alert("this extension has already been loaded");
                return;
            };
            extensionWindow.close();
            setTimeout(() => {
                try {
                    (new Function(data.code))();
                    extensions[data.id] = data.code;
                } catch (e) { };
            }, 20);
            break;
    }
}, false);

const disableTopBlocksPlugin = new DisableTopBlocks();
disableTopBlocksPlugin.init();

const workspaceSearch = new WorkspaceSearch(workspace);

workspaceSearch.init();

let very_end = "";

$("#Export").click(() => {
    end = "";
    very_end = "";
    menus = 0;
    getID();
    
    // Check for multiple "GB_OnStart" blocks
    const topBlocks = workspace.getTopBlocks(true);
    const onStartBlocks = topBlocks.filter(block => block.type === 'GB_OnStart');
    
    if (onStartBlocks.length > 1) {
        alert("Only one Main Hat block is allowed. Please remove the extra blocks.");
        return;
    }
    
    // Check for GB_OnFunction blocks with duplicate dropdown values
    const onFunctionBlocks = topBlocks.filter(block => block.type === 'GB_OnFunction');
    const functionValues = new Map();
    let listenForInstantiation = false;
    let listenForChat = false;
    
    onFunctionBlocks.forEach(block => {
        const functionValue = block.getFieldValue('eventName'); // Correct field name for the dropdown
        console.log(`Function Block: ${block.id}, Dropdown Value: ${functionValue}`); // Debug log
        if (functionValue === 'Instantiated') {
            listenForInstantiation = true;
        }
        if (functionValue === 'Chatted') {
            listenForChat = true;
        }
        if (functionValues.has(functionValue)) {
            functionValues.set(functionValue, functionValues.get(functionValue) + 1);
        } else {
            functionValues.set(functionValue, 1);
        }
    });

    let duplicateFound = false;
    functionValues.forEach((count, value) => {
        console.log(`Dropdown Value: ${value}, Count: ${count}`); // Debug log
        if (count > 1) {
            duplicateFound = true;
        }
    });

    if (duplicateFound) {
        alert("Only one function per script is allowed with the same dropdown value. Please change or remove the extra blocks.");
        return;
    }

    if (Object.keys(Blockly.serialization.workspaces.save(workspace)).length !== 0) {
        workspace.getAllVariables().forEach(v => v.name = name + "_" + v.name);
        let listeners = "";
        if (listenForInstantiation) {
            listeners += "ListenForInstantiation\n";
        }
        if (listenForChat) {
            listeners += "ListenForChat\n";
        }
        download(
            `// Made with GoreBox Mod Maker ${version}
// use GoreBox Mod Maker at "https://samllea1.github.io/GoreBox-Mod-Maker/"
${listeners}\n\n` +
            getCode() +
            `
${end}
${very_end}
while true 
    while _events.len > 0 
        _nextEvent = _events.pull 
        _nextEvent.invoke(_nextEvent.args) 
    end while 
    yield 
end while`,
            name + ".txt"
        );
        workspace.getAllVariables().forEach(v => v.name = v.name.replace(new RegExp("^" + Mod_Id + "_", "g"), ""));
    }
});

function getCode() {
    // Initialize workspace
    const topBlocks = workspace.getTopBlocks(true);
    let onStartBlockCode = '';
    let otherBlocksCode = '';

    // Iterate through all top-level blocks
    topBlocks.forEach(block => {
        if (block.type === 'GB_OnStart') {
            onStartBlockCode += Blockly.JavaScript.blockToCode(block);
        } else {
            otherBlocksCode += Blockly.JavaScript.blockToCode(block);
        }
    });

    // Combine other blocks' code and the "GB_OnStart" block at the end
    return otherBlocksCode + "\n" + onStartBlockCode;
}

function download(content, filename, contentType = "text/plain") {
    const blob = new Blob([content], { type: contentType });

    const a = document.createElement("a");
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

function saveProject(saveName) {
    if (
        Object.keys(Blockly.serialization.workspaces.save(workspace)).length === 0
    ) {
        return;
    }
    getID();
    const blocks = JSON.stringify(Blockly.serialization.workspaces.save(workspace));
    download(
        JSON.stringify({ name, blocks, newdata: true }),
        name + ".gmms"
    );
}

function loadProject(file) {
    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const content = e.target.result;
            const blocks = JSON.parse(content);
            if(blocks.newdata) {
                blocks.blocks = JSON.parse(blocks.blocks);
            }
            $("#ModName").elt.value = blocks.name === "ModName" ? "" : blocks.name;


            getID();

            while (toolbox.contents.length > 17) {
                toolbox.contents.pop();
            }

            workspace.updateToolbox(toolbox);
            workspace.refreshToolboxSelection();

            if (blocks.extensions) {
                extensions = blocks.extensions;
                for (const code of Object.values(extensions)) {
                    (new Function(code))();
                }
            } else {
                extensions = {};
            }

            Blockly.serialization.workspaces.load(blocks.blocks, workspace);
        } catch (er) {
            alert(`An unexpected error occured:
                ${er}`);
        }
    };

    reader.readAsText(file);
}

$("#Save").click(() => {
    getID();
    saveProject(name);
});

$("#Load").click(() => {
    getID();
    $("#fileInput").click();
});

$("#fileInput").on("change", (event) => {
    const fileInput = event.target;
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        if (checkFileExtension(selectedFile, ".gmms")) {
            loadProject(selectedFile);
        } else {
            alert("Please select a .gmms file");
            fileInput.value = "";
        }
    }
});

function checkFileExtension(file, allowedExtension) {
    const fileNameParts = file.name.split(".");
    const fileExtension = fileNameParts.at(-1).toLowerCase();
    return fileExtension === allowedExtension.substring(1);
}

if (localStorage.getItem("PenguinBuilder") === null) {
    localStorage.setItem("PenguinBuilder", JSON.stringify({
        shown_version: "0",
        dark: false,
    }))
}

if (JSON.parse(localStorage.getItem("PenguinBuilder")).shown_version !== version) {
    const update = $("#whats-new").create();
    update.$(".update").text(whats_new);
    update.$(".close").click(() => update.remove());
    $.body().child(update);
    update.$(".whats-new-dialog").elt.showModal();
    localStorage.setItem("PenguinBuilder", JSON.stringify({
        shown_version: version,
        dark: JSON.parse(localStorage.getItem("PenguinBuilder")).dark,
    }))
}

if(JSON.parse(localStorage.getItem("PenguinBuilder")).dark) {
    $("#darkmode").click();
}