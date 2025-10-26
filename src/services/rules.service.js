const rules = [];

exports.getAllRules = () => rules;

exports.addRule = (rule) => {
    rules.push(rule);
    return rule;
};