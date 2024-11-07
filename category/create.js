Blockly.Blocks['create_label'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("create label with text")
            .appendField(new Blockly.FieldTextInput("text"), "text");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['create_label'] = function (block, generator) {
    const text = block.getFieldValue('text');
    const id = "label_" + crypto.randomUUID();
    end += `
    blocks.push({
        opcode: "${id}",
        blockType: Scratch.BlockType.LABEL,
        text: "${text}",
    });
    `;
    const code = `"${id}", `;
    return code;
};

Blockly.Blocks['create_button'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("create button");
        this.appendDummyInput()
            .appendField("text")
            .appendField(new Blockly.FieldTextInput("text"), "text");
        this.appendStatementInput("on_click")
            .setCheck(null)
            .appendField("on click");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['create_button'] = function (block, generator) {
    const text = block.getFieldValue('text');
    const on_click = generator.statementToCode(block, 'on_click');
    const id = "button_" + crypto.randomUUID();
    end += `
    blocks.push({
        opcode: "${id}",
        func: "${id}",
        blockType: Scratch.BlockType.BUTTON,
        text: "${text}",
      });
      Extension.prototype["${id}"] = async function(util) {
        const localVars = {};
        ${on_click}
      };`
    const code = `"${id}", `;
    return code;
};
