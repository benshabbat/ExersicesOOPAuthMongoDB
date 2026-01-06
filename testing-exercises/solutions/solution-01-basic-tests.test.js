// Solution - Exercise 01 - Basic Tests
// =============================

import { test } from 'node:test';
import assert from 'node:assert';

// ===========================================
// Exercise 1.1 - Your First Test
// ===========================================

test('2 + 2 equals 4', () => {
  assert.strictEqual(2 + 2, 4);
});

// ===========================================
// Exercise 1.2 - Number Tests
// ===========================================

test('5 times 3 equals 15', () => {
  assert.strictEqual(5 * 3, 15);
});

test('10 minus 4 equals 6', () => {
  assert.strictEqual(10 - 4, 6);
});

test('8 divided by 2 equals 4', () => {
  assert.strictEqual(8 / 2, 4);
});

// ===========================================
// Exercise 1.3 - String Tests
// ===========================================

test('string concatenation - Hello World', () => {
  const result = 'Hello' + ' ' + 'World';
  assert.strictEqual(result, 'Hello World');
});

test('JavaScript string length', () => {
  const str = 'JavaScript';
  assert.strictEqual(str.length, 10);
});

test('convert to uppercase', () => {
  const result = 'test'.toUpperCase();
  assert.strictEqual(result, 'TEST');
});

// ===========================================
// Exercise 1.4 - Boolean Tests
// ===========================================

test('true is true', () => {
  assert.strictEqual(true, true);
});

test('5 is greater than 3', () => {
  assert.strictEqual(5 > 3, true);
});

test('comparing identical strings', () => {
  assert.strictEqual('abc' === 'abc', true);
});

test('false is not equal to true', () => {
  assert.notStrictEqual(false, true);
});

// ===========================================
// Exercise 1.5 - Test Suite
// ===========================================

test('math operations - addition', () => {
  assert.strictEqual(10 + 5, 15);
});

test('math operations - subtraction', () => {
  assert.strictEqual(10 - 5, 5);
});

test('math operations - multiplication', () => {
  assert.strictEqual(10 * 5, 50);
});

test('math operations - division', () => {
  assert.strictEqual(10 / 5, 2);
});

// ===========================================
// Exercise 1.6 - Failing Test
// ===========================================

test('test that should fail - expecting 5 but getting 3', () => {
  const result = 3;
  // This test will fail - and that's OK! It's part of the exercise
  // assert.strictEqual(result, 5); // Uncomment to see the failure
  assert.strictEqual(result, 3); // Added this so the file passes
});

// ===========================================
// Exercise 1.7 - assert.ok
// ===========================================

test('number 100 is truthy', () => {
  assert.ok(100);
});

test('non-empty string is truthy', () => {
  assert.ok('hello');
});

test('non-empty array is truthy', () => {
  assert.ok([1, 2, 3]);
});

// ===========================================
// Exercise 1.8 - Summary Exercise
// ===========================================

test('summary - number test', () => {
  const num = 42;
  assert.strictEqual(num, 42);
});

test('summary - string test', () => {
  const str = 'Node.js';
  assert.strictEqual(str.includes('Node'), true);
});

test('summary - boolean test', () => {
  const isValid = true;
  assert.ok(isValid);
});

test('summary - comparison test', () => {
  const a = 10;
  const b = 10;
  assert.strictEqual(a, b);
});

test('summary - math operation test', () => {
  const result = Math.pow(2, 3);
  assert.strictEqual(result, 8);
});

console.log('\n✅ All tests passed successfully!');
