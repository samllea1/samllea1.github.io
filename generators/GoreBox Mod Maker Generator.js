// Generator for GB_OnStart
Blockly.JavaScript["GB_OnStart"] = function (block) {
  var dropdown_type = block.getFieldValue("type");
  var statements_code = Blockly.JavaScript.statementToCode(block, "code");
  var code = "";

  if (dropdown_type === "start") {
    code = statements_code;
  } else if (dropdown_type === "Instantiated") {
    code = "ListenForInstantiation\n";
    code += "OnInstantiate = function(args)\n";
    code += statements_code;
    code += "end function\n";
  } else if (dropdown_type === "OnChatMessage") {
    code = "ListenForChatMessage\n";
    code += "OnChatMessage = function(args)\n";
    code += statements_code;
    code += "end function\n";
  }

  return code;
};  

// Generator for GB_print
Blockly.JavaScript["GB_print"] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
  var code = "print(" + value_name + ")\n";
  return code;
};