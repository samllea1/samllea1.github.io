Blockly.Blocks['json_from'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("json from {");
    this.appendStatementInput("JSON")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("}");
    this.setOutput(true, "Object");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['json_from'] = function(block, generator) {
  const json = generator.statementToCode(block, 'JSON');
  const code = `{${json}}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['json_from_key_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("key")
        .appendField(new Blockly.FieldTextInput("key"), "key");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField(": value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['json_from_key_value'] = function(block, generator) {
  const _key = block.getFieldValue('key');
  const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
  const code = `"${_key}":${value},`;
  return code;
};
