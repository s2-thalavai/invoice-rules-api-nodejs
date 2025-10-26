const { getAllRules, addRule } = require('../src/services/rules.service');

describe('Rule Service', () => {
  it('should start with an empty rule list', () => {
    expect(getAllRules()).toEqual([]);
  });

  it('should add a rule and return it', () => {
    const rule = {
      id: '1234',
      name: 'Late Fee',
      condition: 'invoice.daysOverdue > 30',
      action: 'invoice.applyFee(50)'
    };
    const result = addRule(rule);
    expect(result).toEqual(rule);
    expect(getAllRules()).toContainEqual(rule);
  });
});
