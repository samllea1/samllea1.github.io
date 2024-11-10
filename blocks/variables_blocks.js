Blockly.Blocks['VARIABLES_set_variable'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set variable:")
            .appendField(new Blockly.FieldTextInput("MyVariable"), "variableName");
        this.appendValueInput("value")
            .appendField("to value:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#ff7b00");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['VARIABLES_set_variable'] = function(block, generator) {
    const variableName = block.getFieldValue('variableName');
    const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
    const code = `${variableName} = ${value}\n`;
    return code;
};

Blockly.Blocks["VARIABLES_variable"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("variable:")
            .appendField(new Blockly.FieldTextInput("MyVariable"), "variableName");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour("#ff7b00");
        this.setTooltip("");
        this.setHelpUrl("");
    },
  };
  
  javascript.javascriptGenerator.forBlock['VARIABLES_variable'] = function(block, generator) {
    const variableName = block.getFieldValue('variableName');
    const code = variableName;
    return [code, javascript.Order.FUNCTION_CALL];
  };

  Blockly.Blocks["VARIABLES_globals"] = {
    init: function() {
      this.setOutput(true);
      this.appendValueInput("variable")
          .appendField("global");
      this.setInputsInline(true);
      this.setPreviousStatement(false, null);
      this.setNextStatement(false, null);
      this.setColour("#ff7b00");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['VARIABLES_globals'] = function(block, generator) {
  var variable = generator.valueToCode(block, 'variable', javascript.Order.NONE);
  var code = `globals.${variable}`;
  return [code, javascript.Order.MEMBER];
};