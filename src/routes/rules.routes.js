const express = require('express');
const router = express.Router();
const { getRules, createRule } = require('../controllers/rules.controller');

router.get('/', getRules);
router.post('/', createRule);

module.exports = router;
