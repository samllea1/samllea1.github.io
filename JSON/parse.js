Blockly.Blocks['json_parse'] = {
  init: function() {
    this.appendValueInput("JSON")
        .setCheck("String")
        .appendField("parse");
    this.setOutput(true, "Object");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['json_parse'] = function(block, generator) {
  const json = generator.valueToCode(block, 'JSON', javascript.Order.ATOMIC);
  const code = `JSON.parse(${json})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};