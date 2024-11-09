Blockly.Blocks["input_menu"] = {
  init: function () {
    this.appendDummyInput().appendField("Create Input Menu");
    this.appendDummyInput()
      .appendField("ID")
      .appendField(new Blockly.FieldTextInput("ID"), "ID");
    this.appendDummyInput()
      .appendField("Accept Reporters")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "REPORTERS");
    this.appendValueInput("MENU").setCheck("Array").appendField("menu");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["input_menu"] = function (
  block,
  generator
) {
  const id = block.getFieldValue("ID");
  const reporters = block.getFieldValue("REPORTERS") === "TRUE";
  const menu = generator.valueToCode(block, "MENU", javascript.Order.ATOMIC);
  const code = `"${id}": {
  type: Scratch.ArgumentType.STRING,
  menu: "${Extension_id}_menu_${menus}",
},\n`;
  end += `
menus["${Extension_id}_menu_${menus}"] = {
acceptReporters: ${reporters},
items: ${menu},
};
\n`;
  menus++;
  return code;
};

Blockly.Blocks['create_menu'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Create Menu");
    this.appendDummyInput()
      .appendField("ID")
      .appendField(new Blockly.FieldTextInput("ID"), "ID");
    this.appendDummyInput()
      .appendField("Accept Reporters")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "REPORTERS");
    this.appendValueInput("MENU")
      .setCheck("Array")
      .appendField("menu");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock["create_menu"] = function (
  block,
  generator
) {
  const ID = block.getFieldValue("ID");
  const reporters = block.getFieldValue("REPORTERS") === "TRUE";
  const menu = generator.valueToCode(block, "MENU", javascript.Order.ATOMIC);
  const code = `menus["${Extension_id}_customMenu_${ID}"] = {
acceptReporters: ${reporters},
items: ${menu},
};`;
  return code;
};

Blockly.Blocks['create_input_menu'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("create Input from menu");
    this.appendDummyInput()
      .appendField("ID")
      .appendField(new Blockly.FieldTextInput("ID"), "ID");
    this.appendDummyInput()
      .appendField("Menu ID")
      .appendField(new Blockly.FieldTextInput("MenuID"), "MenuID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['create_input_menu'] = function (block, generator) {
  const ID = block.getFieldValue('ID');
  const menuId = block.getFieldValue('MenuID');
  const code = `"${ID}": {
  type: Scratch.ArgumentType.STRING,
  menu: "${Extension_id}_customMenu_${menuId}",
},\n`;
  return code;
};

Blockly.Blocks['create_dynamic_menu'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Create Dynamic Menu");
    this.appendDummyInput()
      .appendField("ID")
      .appendField(new Blockly.FieldTextInput("ID"), "ID");
    this.appendDummyInput()
      .appendField("Accept Reporters")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "Accept");
    this.appendStatementInput("Function")
      .setCheck(null)
      .appendField("Function");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['create_dynamic_menu'] = function (block, generator) {
  const ID = block.getFieldValue('ID');
  const reporters = block.getFieldValue('Accept') === 'TRUE';
  const func = generator.statementToCode(block, 'Function');
  const code = `
  menus["${Extension_id}_customMenu_${ID}"] = {
    acceptReporters: ${reporters},
    items: "${Extension_id}_customMenu_${ID}_func",
  };
  Extension.prototype["${Extension_id}_customMenu_${ID}_func"] = async function() {
    const localVars = {};
    ${func}
  };
  `;
  return code;
};
