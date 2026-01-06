# 🚀 Quick Start Guide - OOP + Testing Projects

## Welcome! 👋

This folder contains project-based exercises that teach Object-Oriented Programming (OOP) and Testing together through hands-on practice.

## 📂 What's Inside?

### 🟢 Beginner Projects (Start Here!)

**[Project 01 - Todo List App](./project-01-todo-list/)** 📝
- **Time**: 2-3 hours
- **Concepts**: Classes, methods, arrays, basic testing
- **Difficulty**: ⭐ Beginner
- **Perfect for**: First OOP project

**[Project 02 - Bank Account System](./project-02-bank-account/)** 💰
- **Time**: 3-4 hours
- **Concepts**: Private fields, validation, inheritance, error handling
- **Difficulty**: ⭐⭐ Beginner-Intermediate
- **Perfect for**: Learning encapsulation and class inheritance

### 🟡 Intermediate Projects

**[Project 03 - Library Management System](./project-03-library-system/)** 📚
- **Time**: 4-6 hours
- **Concepts**: Multiple classes, relationships, complex logic
- **Difficulty**: ⭐⭐⭐ Intermediate
- **Perfect for**: Understanding how objects interact

## 🎯 How to Use These Projects

### Option 1: Test-Driven Development (TDD) 🧪
**Recommended for learning**

1. Read the README for requirements
2. Write tests first (in `.test.js` file)
3. Run tests (they'll fail - that's OK!)
4. Write code to make tests pass
5. Refactor and improve
6. Repeat

```bash
# Write a test
# Run it
node --test project-01-todo-list/todo.test.js
# It fails
# Write code to make it pass
# Run again - it passes!
```

### Option 2: Implementation First 💻
**Good for quick prototyping**

1. Read the README for requirements
2. Implement the classes in `.js` file
3. Write tests to verify
4. Fix any bugs found
5. Add more tests for edge cases

### Option 3: Hybrid Approach ⚖️
**Most practical**

1. Write basic structure
2. Write some tests
3. Implement features
4. Write more tests
5. Refactor and improve

## 🎓 Learning Path

### Week 1: Foundations
- Complete Project 01 (Todo List)
- Master: Classes, methods, basic testing
- Challenge: Add 2 bonus features

### Week 2: Intermediate Concepts
- Complete Project 02 (Bank Account)
- Master: Private fields, validation, inheritance
- Challenge: Add overdraft protection

### Week 3: Complex Systems
- Complete Project 03 (Library System)
- Master: Multiple classes, relationships
- Challenge: Add book reservations

## 💡 Tips for Success

### 1. **Read Everything First** 📖
- Don't skip the README
- Understand requirements before coding
- Check the user stories

### 2. **Use Hints Wisely** 🎯
- Try solving without hints first
- Use hints when stuck (not immediately!)
- Each hint reveals more information

### 3. **Test Thoroughly** 🧪
```javascript
// Test happy path
test('should add task successfully', () => {
  // Normal case
});

// Test edge cases
test('should handle empty input', () => {
  // What if user enters nothing?
});

// Test errors
test('should throw error for invalid data', () => {
  // What if data is wrong?
});
```

### 4. **Review the Solution** 🔍
- Only after trying yourself!
- Compare your approach
- Learn different techniques
- Understand why it's written that way

### 5. **Extend the Projects** 🚀
- Add bonus features
- Try your own ideas
- Share your improvements

## 🧪 Running Tests

### Run single project
```bash
cd project-01-todo-list
node --test
```

### Run specific test file
```bash
node --test todo.test.js
```

### Run with detailed output
```bash
node --test --test-reporter=spec
```

### Run with coverage
```bash
node --test --experimental-test-coverage
```

## 📚 What You'll Learn

### OOP Concepts
- ✅ Classes and Objects
- ✅ Constructors
- ✅ Methods and Properties
- ✅ Private Fields (#)
- ✅ Getters and Setters
- ✅ Static Members
- ✅ Inheritance (extends)
- ✅ Polymorphism
- ✅ Encapsulation
- ✅ Abstraction

### Testing Skills
- ✅ Writing unit tests
- ✅ Test-Driven Development
- ✅ Assertions (strictEqual, deepStrictEqual, throws)
- ✅ Testing edge cases
- ✅ Testing error conditions
- ✅ Test organization
- ✅ Code coverage
- ✅ Integration testing

### Best Practices
- ✅ Input validation
- ✅ Error handling
- ✅ Data encapsulation
- ✅ Code organization
- ✅ Documentation
- ✅ Clean code principles

## 🎯 Project Completion Checklist

For each project, make sure you:

- [ ] ✅ Read and understood all requirements
- [ ] ✅ Planned your class structure
- [ ] ✅ Wrote tests (before or during implementation)
- [ ] ✅ Implemented all required features
- [ ] ✅ All tests are passing
- [ ] ✅ Handled edge cases
- [ ] ✅ Validated all inputs
- [ ] ✅ Code is clean and readable
- [ ] ✅ Tried at least one bonus challenge
- [ ] ✅ Reviewed the solution
- [ ] ✅ Understood what you learned

## 🆘 Need Help?

### Stuck on a concept?
1. Check the hints in the README
2. Review the theory section
3. Look at simpler examples
4. Check the solution (last resort!)

### Tests not passing?
1. Read the error message carefully
2. Check your logic
3. Add console.log() to debug
4. Test one thing at a time

### Need more practice?
1. Redo a project from scratch
2. Try the bonus challenges
3. Create your own variations
4. Help others understand

## 🏆 Challenge Yourself

After completing all projects:

### 🥉 Bronze Level
- Complete all 3 projects
- All tests passing
- Code works correctly

### 🥈 Silver Level
- Complete 2+ bonus challenges per project
- Add 10+ additional tests
- Achieve 90%+ code coverage

### 🥇 Gold Level
- Create your own 4th project
- Implement all bonus features
- Write comprehensive documentation
- Share your solutions

## 📖 Additional Resources

- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Node.js Test Runner](https://nodejs.org/api/test.html)
- [Clean Code Principles](https://github.com/ryanmcdermott/clean-code-javascript)
- [OOP Design Patterns](https://refactoring.guru/design-patterns)

## 🎉 Ready to Start?

Begin with:
```bash
cd project-01-todo-list
# Read the README.md
# Then start coding!
```

**Good luck and happy coding! 🚀**

---

*Remember: The goal is learning, not just completing. Take your time, understand the concepts, and enjoy the process!*
