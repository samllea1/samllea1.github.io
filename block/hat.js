Blockly.Blocks['create_hat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Create Hat");
        this.appendDummyInput()
            .appendField("ID")
            .appendField(new Blockly.FieldTextInput("ID"), "ID");
        this.appendDummyInput()
            .appendField("Text")
            .appendField(new Blockly.FieldTextInput("Text"), "Text");
        this.appendDummyInput()
            .appendField("Inputs");
        this.appendStatementInput("Inputs")
            .setCheck(null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['create_hat'] = function (block, generator) {
    const id = `${Extension_id}_Hat_${block.getFieldValue('ID')}`;
    const text = block.getFieldValue('Text');
    const inputs = generator.statementToCode(block, 'Inputs');
    return `blocks.push({
        blockType: Scratch.BlockType.EVENT,
            opcode: "${id}",
            text: "${text}",
            arguments: {
                ${inputs}
            },
            isEdgeActivated: false
    })`;
};

Blockly.Blocks['call_hat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Call Hat")
            .appendField(new Blockly.FieldTextInput("ID"), "ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['call_hat'] = function (block, generator) {
    const id = `${Extension_id}_Hat_${block.getFieldValue('ID')}`;
    if (getTopBlocks(block).type === "create_block") {
        var code = `util.startHats('${Extension_id}_${id}');\n`;
    } else {
        var code = `Scratch.vm.runtime.startHats('${Extension_id}_${id}');\n`;
    }
    return code;
};

Blockly.Blocks['call_hat_with_args'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Call Hat")
            .appendField(new Blockly.FieldTextInput("ID"), "ID");
        this.appendValueInput("Args")
            .setCheck("Object")
            .appendField("with Args");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['call_hat_with_args'] = function (block, generator) {
    const id = `${Extension_id}_Hat_${block.getFieldValue('ID')}`;
    const args = generator.valueToCode(block, 'Args', javascript.Order.ATOMIC);
    if (getTopBlocks(block).type === "create_block") {
        var code = `util.startHats('${Extension_id}_${id}', ${args});\n`;
    } else {
        var code = `Scratch.vm.runtime.startHats('${Extension_id}_${id}', ${args});\n`;
    }
    return code;
};
