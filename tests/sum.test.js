const userModule = require('../routes/users')

test('adds 1 + 2 to equal 3', () => {
    expect(userModule.sum(1, 2)).toBe(3);
});