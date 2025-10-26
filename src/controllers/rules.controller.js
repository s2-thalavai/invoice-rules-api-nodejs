const { getAllRules, addRule } = require('../services/rules.service');
const Rule = require('../models/rule.model');
const { ruleSchema } = require('../validators/rule.validator');

exports.getRules = (req, res) => {
    res.json(getAllRules());
};

exports.createRule = (req, res, next) => {
    const { error, value } = ruleSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const rule = new Rule(value);
    const saved = addRule(rule);
    res.status(201).json(saved);
};