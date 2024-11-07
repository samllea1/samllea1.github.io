Blockly.Blocks['order_category'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Order Category");
        this.appendStatementInput("types")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

javascript.javascriptGenerator.forBlock['order_category'] = function (block, generator) {
    const types = generator.statementToCode(block, 'types');
    very_end += `
    (() => {
    const temp = [
        ${types}
    ];
    blocks.sort((a, b) => {
        a = temp.indexOf(a.opcode);
        b = temp.indexOf(b.opcode);
        if(a === -1) {
          if(b === -1) {
            return 0;
          } else {
            return 1;
          }
        } else if(b === -1) {
          return -1;
        }
        return a - b;
      })
})();`
    return "";
};
