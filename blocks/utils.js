Blockly.Blocks["newline"] = {
    init: function () {
        this.appendDummyInput().appendField("new line");
        this.setOutput(true, "String");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["newline"] = function (
    block,
    generator
) {
    const code = '"\\n"';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["alert"] = {
    init: function () {
        this.appendValueInput("alert").setCheck("String").appendField("alert");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["alert"] = function (block, generator) {
    const value = generator.valueToCode(block, "alert", javascript.Order.ATOMIC);
    const code = `alert(${value});\n`;
    return code;
};

Blockly.Blocks["alert_confirm"] = {
    init: function () {
        this.appendValueInput("val").setCheck("String").appendField("confirm");
        this.setOutput(true, "Boolean");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["alert_confirm"] = function (
    block,
    generator
) {
    const val = generator.valueToCode(block, "val", javascript.Order.ATOMIC);
    const code = `confirm(${val})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["alert_prompt"] = {
    init: function () {
        this.appendValueInput("val").setCheck("String").appendField("prompt");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["alert_prompt"] = function (
    block,
    generator
) {
    const val = generator.valueToCode(block, "val", javascript.Order.ATOMIC);
    const code = `prompt(${val})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["to_any"] = {
    init: function () {
        this.appendValueInput("in").setCheck(null).appendField("to any");
        this.setOutput(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["to_any"] = function (
    block,
    generator
) {
    const _in = generator.valueToCode(block, "in", javascript.Order.ATOMIC);
    const code = _in;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["equals_exactly"] = {
    init: function () {
        this.appendValueInput("v1").setCheck(null);
        this.appendValueInput("v2").setCheck(null).appendField("===");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["equals_exactly"] = function (
    block,
    generator
) {
    const v1 = generator.valueToCode(block, "v1", javascript.Order.ATOMIC);
    const v2 = generator.valueToCode(block, "v2", javascript.Order.ATOMIC);
    const code = `${v1} === ${v2}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["not_equals_exactly"] = {
    init: function () {
        this.appendValueInput("v1").setCheck(null);
        this.appendValueInput("v2").setCheck(null).appendField("!==");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["not_equals_exactly"] = function (
    block,
    generator
) {
    const v1 = generator.valueToCode(block, "v1", javascript.Order.ATOMIC);
    const v2 = generator.valueToCode(block, "v2", javascript.Order.ATOMIC);
    const code = `${v1} !== ${v2}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["random_bool"] = {
    init: function () {
        this.appendDummyInput().appendField("random bool");
        this.setOutput(true, "Boolean");
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["random_bool"] = function (
    block,
    generator
) {
    const code = "(Math.round(Math.random()) === 1)";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["inline_function_a"] = {
    init: function () {
        this.appendDummyInput().appendField("inline function");
        this.appendStatementInput("statement").setCheck(null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["inline_function_a"] = function (
    block,
    generator
) {
    const statement = generator.statementToCode(block, "statement");
    const code = `(await (async () => {
        const localVars = {};
        ${statement}
    })());\n`;
    return code;
};

Blockly.Blocks["inline_function_b"] = {
    init: function () {
        this.appendDummyInput().appendField("inline function");
        this.appendStatementInput("statement").setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["inline_function_b"] = function (
    block,
    generator
) {
    const statement = generator.statementToCode(block, "statement");
    const code = `(await (async () => {
        const localVars = {};
        ${statement}
    })());\n`;
    return code;
};

Blockly.Blocks["inline_function_c"] = {
    init: function () {
        this.appendDummyInput().appendField("inline function");
        this.appendStatementInput("statement").setCheck(null);
        this.setOutput(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock["inline_function_c"] = function (
    block,
    generator
) {
    const statement = generator.statementToCode(block, "statement");
    const code = `(await (async () => {
        const localVars = {};
        ${statement}
    })())`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['controls_wait'] = {
    init: function() {
        this.appendValueInput("millis")
            .setCheck("Number")
            .appendField("wait");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['controls_wait'] = function(block, generator) {
    const millis = generator.valueToCode(block, 'millis', javascript.Order.ATOMIC);
    const code = `await wait(${millis});\n`;
    return code;
};

Blockly.Blocks['controls_wait_until'] = {
    init: function() {
        this.appendValueInput("bool")
            .setCheck("Boolean")
            .appendField("wait until");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['controls_wait_until'] = function(block, generator) {
    const bool = generator.valueToCode(block, 'bool', javascript.Order.ATOMIC);
    const code = `await new Promise(r => {
        let i = setInterval(() => {
            if (${bool}) {
                clearInterval(i);
                r()
            }
        }, 50)
    });`;
    return code;
};

textMultiline.installBlock({
    javascript: javascript.javascriptGenerator,
});

javascript.javascriptGenerator.forBlock["text_multiline"] = function(
    block,
    generator,
) {
    const code = generator.multiline_quote_(block.getFieldValue('TEXT'));
    return [code, Blockly.JavaScript.ORDER_ATOMIC]
}

installAllBlocks({
    javascript: javascript.javascriptGenerator,
});

Blockly.Blocks['colour_hsv_sliders'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('hsv ')
            .appendField(new FieldColourHsvSliders('#ff0000'), 'COLOUR');
        this.setOutput(true, 'Colour');
        this.setStyle('colour_blocks');
    },
};

javascript.javascriptGenerator.forBlock['colour_hsv_sliders'] = function (
    block,
    generator,
) {
    const code = generator.quote_(block.getFieldValue('COLOUR'));
    return [code, Blockly.JavaScript.ORDER_ATOMIC]
};

registerFieldAngle();
Blockly.Blocks['math_angle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new FieldAngle(90), 'Angle');
        this.setOutput(true, 'Number');
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    },
}

javascript.javascriptGenerator.forBlock['math_angle'] = function (
    block,
    generator,
) {
    const code = block.getFieldValue('Angle', );
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['math_convert_degrees'] = {
    init: function() {
        this.appendValueInput("Degrees")
            .setCheck("Number")
            .appendField(new Blockly.FieldDropdown([["to degrees","degrees"], ["to radians","radians"]]), "to");
        this.setOutput(true, "Number");
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['math_convert_degrees'] = function(block, generator) {
    const to = block.getFieldValue('to');
    const  degrees = generator.valueToCode(block, 'Degrees', javascript.Order.ATOMIC);
    let code;
    if(to === "degrees") {
        code = `(${degrees}*180/Math.PI)`;
    } else {
        code = `(${degrees}*Math.PI/180)`;
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['controls_try'] = {
    init: function() {
        this.appendStatementInput("stmt")
            .setCheck(null)
            .appendField("try");
        this.setInputsInline(false);
        this.setOutput(true, "Boolean");
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['controls_try'] = function(block, generator) {
    const stmt = generator.statementToCode(block, 'stmt');
    const code = `((() => {
        const localVars = {};
        try {
            ${stmt}
            return true;
        } catch(e) {
            return false;
        }
    })())`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["test123"] = {
    init: function () {
        this.appendDummyInput().appendField("new line sigma");
        this.setOutput(false, "Boolean");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};