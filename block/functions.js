Blockly.Blocks['function_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("define function");
        this.appendStatementInput("body")
            .setCheck(null);
        this.setOutput(true, "Function");
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


javascript.javascriptGenerator.forBlock['function_value'] = function (block, generator) {
    const body = generator.statementToCode(block, 'body');
    const code = `(async (args = {}) => {
        const localVars = {};
        ${body}
    })`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['run_function_return'] = {
    init: function () {
        this.appendValueInput("function")
            .setCheck("Function")
            .appendField("run function");
        this.setOutput(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['run_function_return'] = function (block, generator) {
    const func = generator.valueToCode(block, 'function', Blockly.JavaScript.ORDER_NONE);
    const code = `(await ${func}())`;
    return [code, Blockly.javascript.ORDER_NONE];
};

Blockly.Blocks['run_function_no_return'] = {
    init: function () {
        this.appendValueInput("function")
            .setCheck("Function")
            .appendField("run function");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['run_function_no_return'] = function (block, generator) {
    const func = generator.valueToCode(block, 'function', Blockly.JavaScript.ORDER_NONE);
    const code = `(await ${func}());\n`;
    return code;
};

Blockly.Blocks['run_function_return_args'] = {
    init: function () {
        this.appendValueInput("function")
            .setCheck("Function")
            .appendField("run function");
        this.appendValueInput("args")
            .setCheck("Object")
            .appendField("with args");
        this.setOutput(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['run_function_return_args'] = function (block, generator) {
    const func = generator.valueToCode(block, 'function', Blockly.JavaScript.ORDER_NONE);
    const args = generator.valueToCode(block, 'args', Blockly.JavaScript.ORDER_NONE);
    const code = `(await ${func}(${args}))`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['run_function_no_return_args'] = {
    init: function () {
        this.appendValueInput("function")
            .setCheck("Function")
            .appendField("run function");
        this.appendValueInput("args")
            .setCheck("Object")
            .appendField("with args");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['run_function_no_return_args'] = function (block, generator) {
    const func = generator.valueToCode(block, 'function', Blockly.JavaScript.ORDER_NONE);
    const args = generator.valueToCode(block, 'args', Blockly.JavaScript.ORDER_NONE);
    const code = `(await ${func}(${args}));`;
    return code;
};

Blockly.Blocks['get_function_args'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get arg")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setOutput(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['get_function_args'] = function (block, generator) {
    const name = block.getFieldValue('NAME');
    const code = `(args[${name}])`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['return_block_function'] = {
    init: function() {
      this.appendValueInput('value')
        .setCheck(null)
        .appendField('return');
      this.setPreviousStatement(true, null);
      this.setColour(270);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  javascript.javascriptGenerator.forBlock['return_block_function'] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);

    const code = `return ${value};`;

    return code;
  };
