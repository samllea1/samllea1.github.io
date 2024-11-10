Blockly.Blocks['OBJECTS_execute_as'] = {
    init: function() {
        this.appendValueInput("scriptName")
            .setCheck("String")
            .appendField("execute script:");
        this.appendValueInput("objectName")
            .setCheck("String")
            .appendField("as:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

  
  javascript.javascriptGenerator.forBlock['OBJECTS_execute_as'] = function(block, generator) {
    const scriptName = generator.valueToCode(block, 'scriptName', javascript.Order.ATOMIC);
    const objectName = generator.valueToCode(block, 'objectName', javascript.Order.ATOMIC);
    const code = `ExecuteScript({"target": ${objectName}, "script": ${scriptName}})\n`;
    return code;
};

Blockly.Blocks['OBJECTS_execute_on_children'] = {
    init: function() {
        this.appendValueInput("scriptName")
            .setCheck("String")
            .appendField("execute script:");
        this.appendDummyInput()
            .appendField("on children");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

  
  javascript.javascriptGenerator.forBlock['OBJECTS_execute_on_children'] = function(block, generator) {
    const scriptName = generator.valueToCode(block, 'scriptName', javascript.Order.ATOMIC);
    const code = `ExecuteScriptOnChildren({"script": ${scriptName}})\n`;
    return code;
};

Blockly.Blocks['OBJECTS_register'] = {
    init: function() {
        this.appendValueInput("objectName")
            .setCheck("String")
            .appendField("register game object, object name:");
        this.appendValueInput("objectRegisteredName")
            .setCheck("String")
            .appendField("objects registered name:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

  
  javascript.javascriptGenerator.forBlock['OBJECTS_register'] = function(block, generator) {
    const objectName = generator.valueToCode(block, 'objectName', javascript.Order.ATOMIC);
    const ObjectRegisteredName = generator.valueToCode(block, 'objectRegisteredName', javascript.Order.ATOMIC);
    const code = `RegisterGameObject({"name": ${objectName}, "registeredName": ${ObjectRegisteredName}})\n`;
    return code;
};

Blockly.Blocks["OBJECTS_name"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("name");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['OBJECTS_name'] = function(block, generator) {
    const code = 'name';
    return [code, javascript.Order.FUNCTION_CALL];
};

Blockly.Blocks["OBJECTS_child_count"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("child count");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour("#00aaff");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascript.javascriptGenerator.forBlock['OBJECTS_child_count'] = function(block, generator) {
    const code = 'childCount';
    return [code, javascript.Order.FUNCTION_CALL];
};