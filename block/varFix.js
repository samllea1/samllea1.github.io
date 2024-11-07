//stole the code from the github with a few modifications
//the github is: https://github.com/google/blockly

function procedures_def(block, generator) {
  const funcName = generator.getProcedureName(block.getFieldValue("NAME"));
  let xfix1 = "";
  if (generator.STATEMENT_PREFIX) {
    xfix1 += generator.injectId(generator.STATEMENT_PREFIX, block);
  }
  if (generator.STATEMENT_SUFFIX) {
    xfix1 += generator.injectId(generator.STATEMENT_SUFFIX, block);
  }
  if (xfix1) {
    xfix1 = generator.prefixLines(xfix1, generator.INDENT);
  }
  let loopTrap = "";
  if (generator.INFINITE_LOOP_TRAP) {
    loopTrap = generator.prefixLines(
      generator.injectId(generator.INFINITE_LOOP_TRAP, block),
      generator.INDENT
    );
  }
  const branch = generator.statementToCode(block, "STACK");
  let returnValue = block.getInput("RETURN")? generator.valueToCode(block, "RETURN", javascript.Order.NONE): "";
  let xfix2 = "";
  if (branch && returnValue) {
    // After executing the function body, revisit this block for the return.
    xfix2 = xfix1;
  }
  if (returnValue) {
    returnValue = generator.INDENT + "return " + returnValue + ";\n";
  }
  const args = [];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    args[i] = generator.getVariableName(variables[i]);
  }
  let code =
    "async function " +
    Extension_id + "_" + funcName +
    "(" +
    args.join(", ") +
    ") {\nconst localVars = {};\n" +
    xfix1 +
    loopTrap +
    branch +
    xfix2 +
    returnValue +
    "}";
  code = generator.scrub_(block, code);
  generator.definitions_["%" + funcName] = code;
  return null;
}

//adds the new generation to the procedure block

javascript.javascriptGenerator.forBlock.procedures_defreturn = procedures_def;
//according to the github, uses the same generator function
javascript.javascriptGenerator.forBlock.procedures_defnoreturn = procedures_def;


//all I added was await
function procedures_call(
  block,
  generator,
) {
  // Call a procedure with a return value.
  const funcName = generator.getProcedureName(block.getFieldValue('NAME'));
  const args = [];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    args[i] = generator.valueToCode(block, 'ARG' + i, Blockly.JavaScript.ORDER_NONE) || 'null';
  }
  const code = "(await " + Extension_id + "_" + funcName + '(' + args.join(', ') + '))';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

javascript.javascriptGenerator.forBlock.procedures_callreturn = procedures_call;
