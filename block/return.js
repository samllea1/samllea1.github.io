Blockly.Blocks['return_block'] = {
  init: function() {
    this.appendValueInput('value')
      .setCheck(null)
      .appendField('return');
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

javascript.javascriptGenerator.forBlock['return_block'] = function(block) {
  const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);

  const code = `return ${value};`;

  return code;
};
