Blockly.Blocks['create_input'] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Create Input");
    this.appendDummyInput()
      .appendField("ID")
      .appendField(new Blockly.FieldTextInput("ID"), "ID");
    this.appendDummyInput()
      .appendField("type")
      .appendField(
        new Blockly.FieldDropdown([
          ["string", "String"],
          ["number", "Number"],
          ["boolean", "Boolean"],
          ["empty", "Empty"],
          ["color", "Color"],
          ["costume", "Costume"],
          ["sound", "Sound"],
          ["angle", "Angle"],
          ["note", "Note"],
          ["matrix", "Matrix"],
        ]),
        "Type"
      );
    this.appendDummyInput()
      .appendField("default text")
      .appendField(new Blockly.FieldTextInput(""), "_default");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock['create_input'] = function(block) {
  const id = block.getFieldValue('ID');
  const type = block.getFieldValue('Type');
  const defaultValue = block.getFieldValue('_default');

  const code = `"${id}": {
    type: Scratch.ArgumentType.${(() => {
      switch (type) {
        case "String":
          return "STRING";
        case "Number":
          return "NUMBER";
        case "Boolean":
          return "BOOLEAN";
        case "Empty":
          return "empty";
        case "Color":
          return "COLOR";
        case "Costume":
          return "COSTUME";
        case "Sound":
          return "SOUND";
        case "Angle":
          return "ANGLE";
        case "Note":
          return "NOTE";
        case "Matrix":
          return "MATRIX";
      }
    })()},
    defaultValue: \`${defaultValue}\`
  },\n`;

  return code;
};
