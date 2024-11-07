Blockly.Blocks['json_set'] = {
  init: function() {
    this.appendValueInput("Object")
        .setCheck("Object")
        .appendField("in");
    this.appendValueInput("Key")
        .setCheck("String")
        .appendField("set");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setOutput(true, "Object");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['json_set'] = function(block, generator) {
  const object = generator.valueToCode(block, 'Object', javascript.Order.ATOMIC);
  const _key = generator.valueToCode(block, 'Key', javascript.Order.ATOMIC);
  const value = generator.valueToCode(block, 'value', javascript.Order.ATOMIC);
  const code = `(() => {
const temp = structuredClone(${object});
temp[${_key}] = ${value};
return temp;
})()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};