Blockly.Blocks['get_input'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("get Input")
      .appendField(new Blockly.FieldTextInput("inputID"), "ID");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock['get_input'] = function(block) {
  const id = block.getFieldValue('ID');

  const code = `args["${id}"]`;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
