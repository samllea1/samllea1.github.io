Blockly.Blocks['json_get'] = {
  init: function() {
    this.appendValueInput("in")
        .setCheck("Object")
        .appendField("in Object");
    this.appendValueInput("key")
        .setCheck("String")
        .appendField("get");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['json_get'] = function(block, generator) {
  const _in = generator.valueToCode(block, 'in', javascript.Order.ATOMIC);
  const _key = generator.valueToCode(block, 'key', javascript.Order.ATOMIC);
  const code = `${_in}[${_key}]`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};