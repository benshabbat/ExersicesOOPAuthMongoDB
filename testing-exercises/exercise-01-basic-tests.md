# Exercise 01 - Basic Tests 🎯

## Goal
Understand the fundamentals of Node.js Test Runner and write your first tests.

## Background
Node.js Test Runner is a built-in module that allows us to write and run tests without external libraries.

## Theory

### Basic Test Structure

```javascript
import { test } from 'node:test';
import assert from 'node:assert';

test('test description', () => {
  // Code that tests something
  assert.strictEqual(1 + 1, 2);
});
```

### Basic Assertions
- `assert.strictEqual(actual, expected)` - Strict equality check
- `assert.ok(value)` - Check that value is truthy
- `assert.notStrictEqual(actual, expected)` - Check that two values are different

## Exercises

### Exercise 1.1 - Your First Test ✅
Write a test that checks that 2+2 equals 4.

```javascript
// Add your code here
```

### Exercise 1.2 - Number Tests 🔢
Write 3 tests:
1. Check that 5 * 3 equals 15
2. Check that 10 - 4 equals 6
3. Check that 8 / 2 equals 4

```javascript
// Add your code here
```

### Exercise 1.3 - String Tests 📝
Write tests for:
1. String concatenation: "Hello" + " " + "World" = "Hello World"
2. String length: "JavaScript".length = 10
3. String comparison: "test".toUpperCase() = "TEST"

```javascript
// Add your code here
```

### Exercise 1.4 - Boolean Tests ✔️
Write tests for:
1. Check that true is true
2. Check that 5 > 3 is true
3. Check that "abc" === "abc" is true
4. Check that false !== true

```javascript
// Add your code here
```

### Exercise 1.5 - Test Suite 📦
Create a test suite for basic math operations:
- Addition
- Subtraction
- Multiplication
- Division

```javascript
// Hint: Use test.describe or call test function multiple times
```

### Exercise 1.6 - Failing Test ❌
Write a test that expects 5 but gets 3.
This should cause the test to fail (that's OK, it's part of the exercise).

```javascript
// Add your code here
```

### Exercise 1.7 - assert.ok 👍
Use `assert.ok()` to check:
1. That the number 100 is truthy
2. That a non-empty string is truthy
3. That a non-empty array is truthy

```javascript
// Add your code here
```

### Exercise 1.8 - Summary Exercise 🎓
Create 5 different tests that check different things:
- Numbers
- Strings
- Booleans
- Comparisons
- Math operations

Each test should have a clear, descriptive name.

```javascript
// Add your code here
```

## Running the Tests

```bash
node --test exercise-01-basic-tests.test.js
```

## Tips 💡
1. Use descriptive test names
2. Each test should check one thing only
3. Make sure the code passes before moving on
4. Try to understand why a test fails

## What's Next? ⏭️
After completing this, move to [Exercise 02 - Function Tests](./exercise-02-function-tests.md)
