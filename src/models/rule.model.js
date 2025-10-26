module.exports = class Rule {
    constructor({ id, name, condition, action }) {
        this.id = id;
        this.name = name;
        this.condition = condition;
        this.action = action;
    }
};