Blockly.Blocks['json_get_keys'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["keys","KEYS"], ["values","VALUES"]]), "VALUE");
    this.appendValueInput("Object")
        .setCheck("Object")
        .appendField("from");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['json_get_keys'] = function(block, generator) {
  const value = block.getFieldValue('VALUE');
  const object = generator.valueToCode(block, 'Object', javascript.Order.ATOMIC);
  const code = `Object.${value.toLowerCase()}(${object})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
