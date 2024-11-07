"use strict";
const Penguin = {
    _getType(type) {
        if (Array.isArray(type)) {
            return type.map((v) => v === "Any" ? null : v);
        }
        else {
            return type === "Any" ? null : type;
        }
    },
    _setFields(input, fields) {
        if (Array.isArray(fields)) {
            for (const field of fields) {
                switch (field.kind) {
                    case "text":
                        input.appendField(field.value);
                        break;
                    case "text_input":
                        input.appendField(new Blockly.FieldTextInput(field.default), field.ID);
                        break;
                    case "number_input":
                        input.appendField(new Blockly.FieldNumber(field.default), field.ID);
                        break;
                    case "angle_input":
                        input.appendField(new Blockly.FieldAngle(field.default), field.ID);
                        break;
                    case "menu_input":
                        input.appendField(new Blockly.FieldDropdown(this._getMenuItems(field.value)), field.ID);
                        break;
                    case "checkbox_input":
                        input.appendField(new Blockly.FieldCheckbox(field.default ? "TRUE" : "FALSE"), field.ID);
                        break;
                    case "color_input":
                        input.appendField(new Blockly.FieldColour(field.default), field.ID);
                        break;
                }
            }
        }
    },
    _getMenuItems(value) {
        if (Array.isArray(value)) {
            return value.map((v) => [v, v]);
        }
        else {
            return Object.entries(value);
        }
    },
    LoadExtension(Extension) {
        const ext = new Extension();
        const inf = ext.Info();
        const id = inf.ID;
        const blocks = [];
        const self = this;
        toolbox.contents.push(category(inf.name, inf.color, blocks));
        for (const _block of inf.blocks) {
            const name = `${id}_${_block.blockType.kind}_${_block.opcode}`;
            blocks.push(block(name));
            Blockly.Blocks[name] = {
                init: function () {
                    if (_block.blockType.kind === "Statement") {
                        this.setPreviousStatement(true, null);
                        this.setNextStatement(true, null);
                    }
                    else if (_block.blockType.kind === "Value") {
                        this.setOutput(true, self._getType(_block.blockType.type));
                    }
                    for (const arg of _block.args) {
                        switch (arg.kind) {
                            case "Statement":
                                self._setFields(this.appendStatementInput(arg.ID)
                                    .setCheck(null), arg.fields);
                                break;
                            case "Value":
                                self._setFields(this.appendValueInput(arg.ID)
                                    .setCheck(self._getType(arg.type)), arg.fields);
                                break;
                            case "Dummy":
                                self._setFields(this.appendDummyInput(), arg.fields);
                                break;
                        }
                    }
                    this.setColour(_block.color);
                    this.setTooltip("");
                    this.setHelpUrl("");
                },
            };
            javascript.javascriptGenerator.forBlock[name] = function (block, generator) {
                const code = ext.generator[_block.opcode](new self.Block(block, generator));
                if (_block.blockType.kind === "Value") {
                    return [code, Blockly.JavaScript.ORDER_ATOMIC];
                }
                else {
                    return code;
                }
            };
        }
        workspace.updateToolbox(toolbox);
        workspace.refreshToolboxSelection();
    },
    Block: class Block {
        BlocklyBlock;
        BlocklyGenerator;
        constructor(BlocklyBlock, BlocklyGenerator) {
            this.BlocklyBlock = BlocklyBlock;
            this.BlocklyGenerator = BlocklyGenerator;
        }
        getField(ID) {
            return this.BlocklyBlock.getFieldValue(ID) + "";
        }
        getValue(ID) {
            return this.BlocklyGenerator?.valueToCode(this.BlocklyBlock, ID, javascript.Order.ATOMIC) + "";
        }
        getStatement(ID) {
            return this.BlocklyGenerator?.statementToCode(this.BlocklyBlock, ID) + "";
        }
        get parent() {
            if (this.BlocklyBlock.parentBlock_ === null)
                return null;
            return new Penguin.Block(this.BlocklyBlock.parentBlock_, undefined);
        }
        get top() {
            if (this.parent === null) {
                return this;
            }
            return this.parent.top;
        }
        get ID() {
            return this.BlocklyBlock.type;
        }
    },
    blockType: {
        Statement() {
            return { kind: "Statement" };
        },
        Value(type) {
            return { kind: "Value", type };
        },
        Hat() {
            return { kind: "Hat" };
        },
    },
    Argument: {
        Value(ID, type, fields = []) {
            return { kind: "Value", ID, type, fields };
        },
        Statement(ID, fields = []) {
            return { kind: "Statement", ID, fields };
        },
        Dummy(fields = []) {
            return { kind: "Dummy", fields };
        },
    },
    Field: {
        Text(value) {
            return { kind: "text", value };
        },
        TextInput(ID, _default = "") {
            return { kind: "text_input", ID, default: _default };
        },
        NumberInput(ID, _default = 0) {
            return { kind: "number_input", ID, default: _default };
        },
        AngleInput(ID, _default = 0) {
            return { kind: "angle_input", ID, default: _default };
        },
        MenuInput(ID, items) {
            return { kind: "menu_input", ID, value: items };
        },
        CheckboxInput(ID, _default = true) {
            return { kind: "checkbox_input", ID, default: _default };
        },
        ColorInput(ID, _default = "#FFFFFF") {
            return { kind: "color_input", ID, default: _default };
        },
    },
};
