Blockly.Blocks['use_block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("use block id:")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['use_block'] = function (block, generator) {
    const id = block.getFieldValue('id');
    const code = `"${Extension_id}_Block_${id}",`;
    return code;
};

Blockly.Blocks['use_hat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("use hat id:")
            .appendField(new Blockly.FieldTextInput("id"), "id");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['use_hat'] = function (block, generator) {
    const id = block.getFieldValue('id');
    const code = `"${Extension_id}_Hat_${id}",`;
    return code;
};
