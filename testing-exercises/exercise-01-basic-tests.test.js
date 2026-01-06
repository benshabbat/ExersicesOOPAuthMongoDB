// Exercise 01 - Basic Tests
// =============================
// Instructions: Fill in the missing code for each exercise
// Run with: node --test exercise-01-basic-tests.test.js

import { test } from 'node:test';
import assert from 'node:assert';

// ===========================================
// Exercise 1.1 - Your First Test
// ===========================================

test('2 + 2 equals 4', () => {
  // Write your test here
});

// ===========================================
// Exercise 1.2 - Number Tests
// ===========================================

test('5 times 3 equals 15', () => {
  // Write here
});

test('10 minus 4 equals 6', () => {
  // Write here
});

test('8 divided by 2 equals 4', () => {
  // Write here
});

// ===========================================
// Exercise 1.3 - String Tests
// ===========================================

test('string concatenation - Hello World', () => {
  // Write here
});

test('JavaScript string length', () => {
  // Write here
});

test('convert to uppercase', () => {
  // Write here
});

// ===========================================
// Exercise 1.4 - Boolean Tests
// ===========================================

test('true is true', () => {
  // Write here
});

test('5 is greater than 3', () => {
  // Write here
});

test('comparing identical strings', () => {
  // Write here
});

test('false is not equal to true', () => {
  // Write here
});

// ===========================================
// Exercise 1.5 - Test Suite
// ===========================================

test('math operations - addition', () => {
  // Write here
});

test('math operations - subtraction', () => {
  // Write here
});

test('math operations - multiplication', () => {
  // Write here
});

test('math operations - division', () => {
  // Write here
});

// ===========================================
// Exercise 1.6 - Failing Test
// ===========================================

test('test that should fail - expecting 5 but getting 3', () => {
  // Write a test that expects 5 but actually gets 3
  // This should cause an error!
});

// ===========================================
// Exercise 1.7 - assert.ok
// ===========================================

test('number 100 is truthy', () => {
  // Use assert.ok
});

test('non-empty string is truthy', () => {
  // Use assert.ok
});

test('non-empty array is truthy', () => {
  // Use assert.ok
});

// ===========================================
// Exercise 1.8 - Summary Exercise
// ===========================================

test('summary - number test', () => {
  // Test something with numbers
});

test('summary - string test', () => {
  // Test something with strings
});

test('summary - boolean test', () => {
  // Test something with booleans
});

test('summary - comparison test', () => {
  // Test some comparison
});

test('summary - math operation test', () => {
  // Test a math operation
});

console.log('\n✅ All passing tests succeeded!');
console.log('💡 Don\'t forget to check the failing test (1.6) too');
