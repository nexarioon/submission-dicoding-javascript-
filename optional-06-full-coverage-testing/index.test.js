import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test(`sum adds two posstitive number correctly`, () => {
    const result = sum(2, 4);
    assert.strictEqual(result, 6, `2 + 4 should equal 6`);
});

test(`sum return 0 if either argumen is not number`, () => {
    let result = sum(`a`, 4);
    assert.strictEqual(result, 0, `a + 4 should return 0`);

    result = sum(4, `a`);
    assert.strictEqual(result, 0, `4 + a should return 0`);
});

test(`sum return 0 if either argumen is negative`, () => {
    const result1 = sum(-1, 3);
    assert.strictEqual(result1, 0, `expected sum (-1, 3) to rturn 0 `);

    const result2 = sum(3, -1);
    assert.strictEqual(result2, 0, `expected sum (3, -1) to return 0`);

    const result3 = sum(-1, -3);
    assert.strictEqual(result3, 0, `expected sum (-1, -3) to return 0`);

});

test(`sum returns the correct sum for two positive numbers`, () => {
    const result = sum(10, 15);
    assert.strictEqual(result, 25, `Expected sum(10, 15) to return 25`);
});


