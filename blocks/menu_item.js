Blockly.Blocks["menu_item"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("menu item text:")
      .appendField(new Blockly.FieldTextInput("text"), "TEXT")
      .appendField(" value:")
      .appendField(new Blockly.FieldTextInput("value"), "VALUE");
    this.setOutput(true, "Object");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["menu_item"] = function (
  block,
  generator
) {
  const _text = block.getFieldValue("TEXT");
  const value = block.getFieldValue("VALUE");
  const code = `{text:"${_text}", value: "${value}"}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
