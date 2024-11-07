Blockly.Blocks['json_empty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create empty Object");
    this.setOutput(true, "Object");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['json_empty'] = function(block, generator) {
  const code = `{}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};