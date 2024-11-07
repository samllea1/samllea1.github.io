Blockly.Blocks["vars_set"] = {
  init: function () {
    this.appendValueInput("name")
      .setCheck("String")
      .appendField("set")
      .appendField(
        new Blockly.FieldDropdown([
          ["local", "localVars"],
          ["global", "vars"],
        ]),
        "type"
      )
      .appendField("var");
    this.appendValueInput("value").setCheck(null).appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["vars_set"] = function (
  block,
  generator
) {
  const type = block.getFieldValue("type");
  const name = generator.valueToCode(block, "name", javascript.Order.ATOMIC);
  const value = generator.valueToCode(block, "value", javascript.Order.ATOMIC);
  const code = `${type}[${name}] = ${value};\n`;
  return code;
};

Blockly.Blocks["vars_get"] = {
  init: function () {
    this.appendValueInput("name")
      .setCheck("String")
      .appendField("get")
      .appendField(
        new Blockly.FieldDropdown([
          ["local", "localVars"],
          ["global", "vars"],
        ]),
        "type"
      )
      .appendField("var");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["vars_get"] = function (
  block,
  generator
) {
  const type = block.getFieldValue("type");
  const name = generator.valueToCode(block, "name", javascript.Order.ATOMIC);
  const code = `${type}[${name}]`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

