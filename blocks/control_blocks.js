Blockly.Blocks['GB_wait'] = {
    init: function() {
        this.appendValueInput("timeVal")
            .setCheck("Number")
            .appendField("wait");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  javascript.javascriptGenerator.forBlock['GB_wait'] = function(block, generator) {
    const timeVal = generator.valueToCode(block, 'timeVal', javascript.Order.ATOMIC);
    const code = `wait ${timeVal}\n`;
    return code;
};

Blockly.Blocks["CONTROL_while"] = {
    init: function () {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendValueInput("Num")
            .setCheck("Boolean")
            .appendField("while");
        this.appendDummyInput()
            .appendField("run code:");
        this.appendStatementInput("code")
            .setCheck(null);
    },
};
  
javascript.javascriptGenerator.forBlock['CONTROL_while'] = function(block) {
    const condition = Blockly.JavaScript.valueToCode(block, 'Num', Blockly.JavaScript.ORDER_NONE) || 'false';
    const code = Blockly.JavaScript.statementToCode(block, 'code');
    return `while ${condition}\n${code}\nend while\n`;
};

Blockly.Blocks["CONTROL_repeat"] = {
    init: function () {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendValueInput("Num")
            .setCheck("Number")
            .appendField("repeat");
        this.appendDummyInput()
            .appendField("times:");
        this.appendStatementInput("code")
            .setCheck(null);
    },
};
  
javascript.javascriptGenerator.forBlock['CONTROL_repeat'] = function(block) {
    const repeat = Blockly.JavaScript.valueToCode(block, 'Num', Blockly.JavaScript.ORDER_NONE) || 'false';
    const code = Blockly.JavaScript.statementToCode(block, 'code');
    return `for iRepeatInRange5532 in range(1, ${repeat})\n${code}\nend for\n`;
};

Blockly.Blocks["CONTROL_for"] = {
    init: function () {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendDummyInput()
            .appendField("for")
            .appendField(new Blockly.FieldTextInput("i"), "variable");
        this.appendValueInput("start")
            .appendField("in range");
        this.appendValueInput("end")
            .appendField("to");
        this.appendStatementInput("code")
            .setCheck(null);
        this.setInputsInline(true);
    },
};
  
javascript.javascriptGenerator.forBlock['CONTROL_for'] = function(block) {
    const variable = block.getFieldValue('variable');
    const start = Blockly.JavaScript.valueToCode(block, 'start', Blockly.JavaScript.ORDER_NONE) || 'false';
    const end = Blockly.JavaScript.valueToCode(block, 'end', Blockly.JavaScript.ORDER_NONE) || 'false';
    const code = Blockly.JavaScript.statementToCode(block, 'code');
    return `for ${variable} in range(${start}, ${end})\n${code}\nend for\n`;
};

Blockly.Blocks["CONTROL_if"] = {
    init: function () {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendValueInput("Num")
            .setCheck("Boolean")
            .appendField("if");
        this.appendDummyInput()
            .appendField("run code:");
        this.appendStatementInput("code")
            .setCheck(null);
    },
};
  
javascript.javascriptGenerator.forBlock['CONTROL_if'] = function(block) {
    const condition = Blockly.JavaScript.valueToCode(block, 'Num', Blockly.JavaScript.ORDER_NONE) || 'false';
    const code = Blockly.JavaScript.statementToCode(block, 'code');
    return `if ${condition} then\n${code}\nend if\n`;
};

Blockly.Blocks["CONTROL_if_else"] = {
    init: function () {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendValueInput("Num")
            .setCheck("Boolean")
            .appendField("if");
        this.appendDummyInput()
            .appendField("run code:");
        this.appendStatementInput("code")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("else");
        this.appendStatementInput("elseCode")
            .setCheck(null);
    },
};
  
javascript.javascriptGenerator.forBlock['CONTROL_if_else'] = function(block) {
    const condition = Blockly.JavaScript.valueToCode(block, 'Num', Blockly.JavaScript.ORDER_NONE) || 'false';
    const code = Blockly.JavaScript.statementToCode(block, 'code');
    const elseCode = Blockly.JavaScript.statementToCode(block, 'elseCode');
    return `if ${condition} then\n${code}\nelse\n${elseCode}\nend if\n`;
};

Blockly.Blocks["CONTROL_else_if"] = {
    init: function () {
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
        this.appendValueInput("Num1")
            .setCheck("Boolean")
            .appendField("if");
        this.appendDummyInput()
            .appendField("run code:");
        this.appendStatementInput("code")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("else");
        this.appendValueInput("Num2")
            .setCheck("Boolean")
            .appendField("if");
        this.appendDummyInput()
            .appendField("run code:");
        this.appendStatementInput("elseCode")
            .setCheck(null);
    },
};
  
javascript.javascriptGenerator.forBlock['CONTROL_else_if'] = function(block) {
    const condition1 = Blockly.JavaScript.valueToCode(block, 'Num1', Blockly.JavaScript.ORDER_NONE) || 'false';
    const condition2 = Blockly.JavaScript.valueToCode(block, 'Num2', Blockly.JavaScript.ORDER_NONE) || 'false';
    const code = Blockly.JavaScript.statementToCode(block, 'code');
    const elseCode = Blockly.JavaScript.statementToCode(block, 'elseCode');
    return `if ${condition1} then\n${code}\nelse if ${condition2} then\n${elseCode}\nend if\n`;
};

Blockly.Blocks["CONTROL_or"] = {
    init: function () {
        this.appendValueInput("if1")
            .setCheck("Boolean");
        this.appendDummyInput()
            .appendField("or");
        this.appendValueInput("if2")
            .setCheck("Boolean");
        this.setOutput(true, "Boolean");
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['CONTROL_or'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'if1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'if2', javascript.Order.ADDITION);
    const code = `(${join1} or ${join2})`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["CONTROL_and"] = {
    init: function () {
        this.appendValueInput("if1")
            .setCheck("Boolean");
        this.appendDummyInput()
            .appendField("and");
        this.appendValueInput("if2")
            .setCheck("Boolean");
        this.setOutput(true, "Boolean");
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['CONTROL_and'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'if1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'if2', javascript.Order.ADDITION);
    const code = `(${join1} and ${join2})`;
    return [code, javascript.Order.ADDITION];
};

  Blockly.Blocks["CONTROL_equals"] = {
    init: function () {
        this.appendValueInput("if1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("==");
        this.appendValueInput("if2")
            .setCheck(null);
        this.setOutput(true, "Boolean");
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['CONTROL_equals'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'if1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'if2', javascript.Order.ADDITION);
    const code = `(${join1} == ${join2})`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["CONTROL_not_equals"] = {
    init: function () {
        this.appendValueInput("if1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("!=");
        this.appendValueInput("if2")
            .setCheck(null);
        this.setOutput(true, "Boolean");
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['CONTROL_not_equals'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'if1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'if2', javascript.Order.ADDITION);
    const code = `(${join1} != ${join2})`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["CONTROL_equals_over"] = {
    init: function () {
        this.appendValueInput("if1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(">=");
        this.appendValueInput("if2")
            .setCheck(null);
        this.setOutput(true, "Boolean");
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['CONTROL_equals_over'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'if1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'if2', javascript.Order.ADDITION);
    const code = `(${join1} >= ${join2})`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["CONTROL_equals_under"] = {
    init: function () {
        this.appendValueInput("if1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("<=");
        this.appendValueInput("if2")
            .setCheck(null);
        this.setOutput(true, "Boolean");
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['CONTROL_equals_under'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'if1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'if2', javascript.Order.ADDITION);
    const code = `(${join1} <= ${join2})`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["CONTROL_over"] = {
    init: function () {
        this.appendValueInput("if1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(">");
        this.appendValueInput("if2")
            .setCheck(null);
        this.setOutput(true, "Boolean");
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['CONTROL_over'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'if1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'if2', javascript.Order.ADDITION);
    const code = `(${join1} > ${join2})`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["CONTROL_under"] = {
    init: function () {
        this.appendValueInput("if1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("<");
        this.appendValueInput("if2")
            .setCheck(null);
        this.setOutput(true, "Boolean");
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['CONTROL_under'] = function(block, generator) {
    const join1 = generator.valueToCode(block, 'if1', javascript.Order.ADDITION);
    const join2 = generator.valueToCode(block, 'if2', javascript.Order.ADDITION);
    const code = `(${join1} < ${join2})`;
    return [code, javascript.Order.ADDITION];
};

Blockly.Blocks["CONTROL_true"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("true");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['CONTROL_true'] = function(block, generator) {
    const code = 'true';
    return [code, javascript.Order.FUNCTION_CALL];
};

Blockly.Blocks["CONTROL_false"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("false");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setColour("#de8900");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['CONTROL_false'] = function(block, generator) {
    const code = 'true';
    return [code, javascript.Order.FUNCTION_CALL];
};