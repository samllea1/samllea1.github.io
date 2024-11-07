Blockly.Blocks['eval'] = {
  init: function() {
    this.appendValueInput("eval")
        .setCheck("String")
        .appendField("eval");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['eval'] = function(block, generator) {
  const _eval = generator.valueToCode(block, 'eval', javascript.Order.ATOMIC);
  const code = `eval(${_eval});\n`;
  return code;
};

Blockly.Blocks['eval_return'] = {
  init: function() {
    this.appendValueInput("eval")
        .setCheck("String")
        .appendField("eval");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['eval_return'] = function(block, generator) {
  const _eval = generator.valueToCode(block, 'eval', javascript.Order.ATOMIC);
  const code = `eval(${_eval})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['raw'] = {
  init: function() {
    this.appendValueInput("raw")
        .setCheck("String")
        .appendField("raw");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['raw'] = function(block, generator) {
  const raw = generator.valueToCode(block, 'raw', javascript.Order.ATOMIC);
  const code = `${eval(raw)}\n`;
  return code;
};

Blockly.Blocks['raw_ret'] = {
  init: function() {
    this.appendValueInput("raw")
        .setCheck("String")
        .appendField("raw");
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['raw_ret'] = function(block, generator) {
  const raw = generator.valueToCode(block, 'raw', javascript.Order.ATOMIC);
  const code = `${eval(raw)}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
