# Exercise 2: Object Methods

**Difficulty Level:** Easy-Medium ⭐⭐  
**Estimated Time:** 45-60 minutes

## Goal
Understand how to add functions (methods) to objects and use `this`

---

## Part A: Basic Calculator

Create a `calculator` object with the following properties and methods:

### Properties:
- `currentValue` - the current value (start from 0)

### Methods:
- `add(number)` - adds a number to currentValue
- `subtract(number)` - subtracts a number from currentValue
- `multiply(number)` - multiplies currentValue by a number
- `reset()` - resets currentValue
- `getValue()` - returns the current value

**Write your code here:**

```javascript
const calculator = {
    currentValue: 0,
    
    add: function(number) {
        // Write your code here
        // Hint: use this.currentValue
    },
    
    subtract: function(number) {
        // Write your code here
    },
    
    multiply: function(number) {
        // Write your code here
    },
    
    reset: function() {
        // Write your code here
    },
    
    getValue: function() {
        // Write your code here
    }
};
```

### Testing:

```javascript
calculator.add(10);
console.log("After adding 10:", calculator.getValue()); // Should print 10

calculator.multiply(5);
console.log("After multiplying by 5:", calculator.getValue()); // Should print 50

calculator.subtract(20);
console.log("After subtracting 20:", calculator.getValue()); // Should print 30

calculator.reset();
console.log("After reset:", calculator.getValue()); // Should print 0
```

---

## Part B: Person Object

Create a `person` object with the following methods:

```javascript
const person = {
    firstName: "Danny",
    lastName: "Cohen",
    age: 25,
    
    // Add method getFullName that returns the full name
    getFullName: function() {
        // Write your code here
    },
    
    // Add method introduce that prints an introduction
    introduce: function() {
        console.log(`Hello, my name is ${this.getFullName()} and I'm ${this.age} years old`);
    },
    
    // Add method haveBirthday that increases age by 1
    haveBirthday: function() {
        // Write your code here
    }
};
```

### Testing:

```javascript
console.log("\n=== Person Object Test ===");
person.introduce();
person.haveBirthday();
person.introduce(); // Should print age 26
```

---

## Expected Output

```
After adding 10: 10
After multiplying by 5: 50
After subtracting 20: 30
After reset: 0

=== Person Object Test ===
Hello, my name is Danny Cohen and I'm 25 years old
Hello, my name is Danny Cohen and I'm 26 years old
```

---

## Tips

- `this` refers to the current object
- A method is a function inside an object
- You can call a method: `object.method()`
- One method can call another method: `this.otherMethod()`

---

## Additional Tasks (Optional)

1. Add a `divide(number)` method to the calculator
2. Add a `getAgeInMonths()` method to person
3. Create a `bankAccount` object with deposit and withdraw methods
