Blockly.Blocks['comment_one'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("//");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock["comment_one"] = function() {
  return "";
}

Blockly.Blocks['comment_multi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("/*");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("*/");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock["comment_multi"] = function() {
  return "";
}
