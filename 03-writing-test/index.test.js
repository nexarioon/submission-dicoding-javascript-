import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum two of number', () => {
    const result = sum(3, 3);
    assert.strictEqual(result, 6, '3 + 3 should equal 6');
});
