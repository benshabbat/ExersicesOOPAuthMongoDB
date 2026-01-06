# 🚀 Getting Started with Node.js Testing Exercises

Welcome to the comprehensive Node.js testing exercises! This guide will help you get started.

## 📦 What's Included

This testing-exercises folder contains:

- **8 Progressive Exercises** (01-08) covering beginner to advanced topics
- **Exercise Files (.md)** with explanations and instructions
- **Test Files (.test.js)** with exercise templates to fill in
- **Solutions Folder** with complete solutions for reference

## 🎯 Exercise Structure

Each exercise includes:
1. **Markdown File** (`.md`) - Theory, instructions, and examples
2. **Test File** (`.test.js`) - Code template for you to complete
3. **Solutions** - Reference implementations in `solutions/` folder

## 📚 Exercise Overview

### Beginner Level (Start Here!)
- **Exercise 01** - Basic Tests → Learn test syntax and simple assertions
- **Exercise 02** - Function Tests → Test functions with parameters and return values
- **Exercise 03** - Assertions → Master different assertion methods

### Intermediate Level
- **Exercise 04** - Object Tests → Work with objects and arrays
- **Exercise 05** - Async Tests → Handle Promises and async/await
- **Exercise 06** - Hooks → Setup and teardown with before/after hooks
- **Exercise 07** - Mocking → Create mocks, stubs, and spies

### Advanced Level
- **Exercise 08** - Class Tests → Test OOP, inheritance, and private fields

## 🏃 Quick Start

### Step 1: Prerequisites
Ensure you have Node.js 18+ installed:
```bash
node --version
```

### Step 2: Navigate to the folder
```bash
cd testing-exercises
```

### Step 3: Start with Exercise 01
1. Read `exercise-01-basic-tests.md` for instructions
2. Open `exercise-01-basic-tests.test.js` in your editor
3. Fill in the code for each exercise
4. Run the tests:
```bash
node --test exercise-01-basic-tests.test.js
```

### Step 4: Check your solution
- Compare with `solutions/solution-01-basic-tests.test.js`
- Learn from any differences
- Move to the next exercise!

## 🎓 Learning Path

```
Exercise 01 (Basic Tests)
    ↓
Exercise 02 (Functions)
    ↓
Exercise 03 (Assertions)
    ↓
Exercise 04 (Objects/Arrays)
    ↓
Exercise 05 (Async)
    ↓
Exercise 06 (Hooks)
    ↓
Exercise 07 (Mocking)
    ↓
Exercise 08 (Classes/OOP)
```

## 💡 Pro Tips

1. **Read First** - Always read the `.md` file before coding
2. **One at a Time** - Complete each exercise fully before moving on
3. **Run Often** - Test your code frequently
4. **Learn from Failures** - Error messages teach you a lot
5. **Try Before Looking** - Attempt solutions before checking answers
6. **Experiment** - Add your own tests and scenarios

## 🔧 Running Tests

### Run a single test file
```bash
node --test exercise-01-basic-tests.test.js
```

### Run all tests
```bash
node --test
```

### Run with detailed output
```bash
node --test --test-reporter=spec
```

### Run with code coverage (Node 20+)
```bash
node --test --experimental-test-coverage
```

## 📖 What You'll Learn

By completing these exercises, you'll master:

✅ Writing unit tests with Node.js Test Runner  
✅ Using assertions (strictEqual, deepStrictEqual, ok, throws)  
✅ Testing functions, objects, and arrays  
✅ Handling asynchronous code (Promises, async/await)  
✅ Using test hooks (before, after, beforeEach, afterEach)  
✅ Creating mocks and spies  
✅ Testing classes and OOP patterns  
✅ Test-Driven Development (TDD) principles  

## 🆘 Need Help?

- **Stuck on an exercise?** Check the corresponding solution file
- **Error messages?** Read them carefully - they contain helpful info
- **Want more practice?** Try adding your own test cases
- **Found a bug?** Create an issue or pull request

## 🎉 Ready to Start?

Begin your testing journey with:
```bash
node --test exercise-01-basic-tests.test.js
```

**Happy Testing! 🧪✨**
