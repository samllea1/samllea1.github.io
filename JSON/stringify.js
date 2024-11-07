Blockly.Blocks['json_stringify'] = {
  init: function() {
    this.appendValueInput("JSON")
        .setCheck("Object")
        .appendField("stringify");
    this.setOutput(true, "String");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['json_stringify'] = function(block, generator) {
  const json = generator.valueToCode(block, 'JSON', javascript.Order.ATOMIC);
  const code = `JSON.stringify(${json})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};