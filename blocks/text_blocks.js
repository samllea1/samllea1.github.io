Blockly.Blocks["TEXT_string"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("text")
            .appendField(new Blockly.FieldTextInput("Hello, world!"), "TextString");
        this.setOutput(true, "String");
        this.setColour("#00a800");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['TEXT_string'] = function(block, generator) {
    const TextString = block.getFieldValue('TextString');
    const code = `"${TextString}"`;
    return [code, javascript.Order.ATOMIC];
};


Blockly.Blocks["TEXT_string_join"] = {
    init: function () {
        this.appendValueInput("join1")
        this.appendDummyInput()
            .appendField("join");
        this.appendValueInput("join2")
        this.setOutput(true, "String");
        this.setColour("#00a800");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['TEXT_string_join'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'join1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'join2', javascript.Order.ADDITION);
    const code = `${join1} + ${join2}`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["TEXT_length"] = {
    init: function() {
      this.setOutput(true, "String");
      this.appendValueInput("Num")
          .appendField("length");
      this.setInputsInline(true);
      this.setPreviousStatement(false, null);
      this.setNextStatement(false, null);
      this.setColour("#00a800");
      this.setTooltip("Moves The Targeted Object");
      this.setHelpUrl("");
    }
  };
  
javascript.javascriptGenerator.forBlock['TEXT_length'] = function(block, generator) {
  var Num = generator.valueToCode(block, 'Num', javascript.Order.ATOMIC);
  var code = `${Num}.len`;
  return [code, javascript.Order.MEMBER];
};

Blockly.Blocks["TEXT_string_contains"] = {
    init: function () {
        this.appendValueInput("string")
            .appendField("does string:")
            .setCheck("String");
        this.appendDummyInput()
            .appendField("contain:");
        this.appendValueInput("target")
            .setCheck("String");
        this.setOutput(true, "Boolean");
        this.setColour("#00a800");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['TEXT_string_contains'] = function(block, generator) {
    const string = generator.valueToCode(block, 'string', javascript.Order.ADDITION);
    const target = generator.valueToCode(block, 'target', javascript.Order.ADDITION);
    const code = `StringContains({"string": ${string}, "target": ${target}})`;
    return [code, javascript.Order.ADDITION];
};