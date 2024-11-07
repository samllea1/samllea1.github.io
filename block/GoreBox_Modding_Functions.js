Blockly.Blocks["GB_OnStart"] = {
    init: function () {
        this.setPreviousStatement(false, null);
        this.setNextStatement(true, null);
        this.setColour("#990a00");
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendDummyInput()
        .appendField("When ever a ")
        .appendField(
          new Blockly.FieldDropdown([
            ["Script Starts", "start"],
            ["Object Is Spawned", "Instantiated"],
            ["Chat Message is Sent", "OnChatMessage"],
          ]),
          "type"
        );
        this.appendDummyInput()
        .appendField("code:");
      this.appendStatementInput("code").setCheck(null);
      this.setNextStatement(false, null);
    },
};


Blockly.Blocks["GB_print"] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("print");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#990a00");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["GB_args"] = {
    init: function () {
        this.appendDummyInput()
        .appendField("args.")
        .appendField(
          new Blockly.FieldDropdown([
            ["message", "args.message"],
            ["sender", "args.sender"],
          ]),
          "type"
        );
        this.setOutput(true, "String");
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        this.setColour("#990a00");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks["GB_move"] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Move - X:");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Y:");
    this.appendValueInput("Z")
        .setCheck(null)
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#990a00");
 this.setTooltip("Moves The Targeted Object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["GB_move_local"] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Move Local - X:");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Y:");
    this.appendValueInput("Z")
        .setCheck(null)
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#990a00");
 this.setTooltip("Moves The Targeted Object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["GB_set_position"] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Set Position - X:");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Y:");
    this.appendValueInput("Z")
        .setCheck(null)
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#990a00");
 this.setTooltip("Moves The Targeted Object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["GB_set_local_position"] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Set Local Position - X:");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Y:");
    this.appendValueInput("Z")
        .setCheck(null)
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#990a00");
 this.setTooltip("Moves The Targeted Object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["GB_set_rotation"] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Set Rotation - X:");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Y:");
    this.appendValueInput("Z")
        .setCheck(null)
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#990a00");
 this.setTooltip("Moves The Targeted Object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["GB_set_local_rotation"] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Set Local Rotation - X:");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Y:");
    this.appendValueInput("Z")
        .setCheck(null)
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#990a00");
 this.setTooltip("Moves The Targeted Object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["GB_rotate"] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Rotate - X:");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Y:");
    this.appendValueInput("Z")
        .setCheck(null)
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#990a00");
 this.setTooltip("Moves The Targeted Object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["GB_rotate_local"] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Rotate Local - X:");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Y:");
    this.appendValueInput("Z")
        .setCheck(null)
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#990a00");
 this.setTooltip("Moves The Targeted Object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["GB_add_scale"] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Add Scale - X:");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Y:");
    this.appendValueInput("Z")
        .setCheck(null)
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#990a00");
 this.setTooltip("Moves The Targeted Object");
 this.setHelpUrl("");
  }
};

Blockly.Blocks["GB_set_scale"] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Set Scale - X:");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Y:");
    this.appendValueInput("Z")
        .setCheck(null)
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#990a00");
 this.setTooltip("Moves The Targeted Object");
 this.setHelpUrl("");
  }
};





/*
Blockly.Blocks["test123"] = {
    init: function () {
        this.appendDummyInput().appendField("new line sigma");
        this.setOutput(false, "Boolean");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    },
};
*/