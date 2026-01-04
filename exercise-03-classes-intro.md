# Exercise 3: Introduction to Classes

**Difficulty Level:** Medium ⭐⭐  
**Estimated Time:** 60 minutes

## Goal
Understand how to create classes, constructors, and work with instances

---

## Part A: Book Class

Create a `Book` class that represents a book.

```javascript
class Book {
    // Add constructor that receives: title, author, pages
    constructor(title, author, pages) {
        // Initialize properties here
    }
    
    // Add method getInfo that returns book details
    getInfo() {
        // Write your code here
        // Return string in format: "Book: [title], Author: [author], Pages: [pages]"
    }
    
    // Add method isLongBook that returns true if more than 300 pages
    isLongBook() {
        // Write your code here
    }
}
```

### Testing:

```javascript
const book1 = new Book("Harry Potter", "J.K. Rowling", 450);
const book2 = new Book("The Alchemist", "Paulo Coelho", 180);

console.log("=== Book Class Test ===");
console.log(book1.getInfo());
console.log("Is long book?", book1.isLongBook());
console.log(book2.getInfo());
console.log("Is long book?", book2.isLongBook());
```

---

## Part B: BankAccount Class

Create a `BankAccount` class for managing a bank account.

```javascript
class BankAccount {
    // Add constructor that receives: ownerName, initialBalance
    constructor(ownerName, initialBalance = 0) {
        // Initialize properties here
    }
    
    // Add method deposit that adds amount to balance
    deposit(amount) {
        if (amount > 0) {
            // Add amount to balance
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Error: Amount must be positive");
        }
    }
    
    // Add method withdraw that subtracts amount from balance
    withdraw(amount) {
        // Check that amount is positive and there's enough money
        // Write your code here
    }
    
    // Add method getBalance that returns current balance
    getBalance() {
        // Write your code here
    }
    
    // Add method getAccountInfo that prints account details
    getAccountInfo() {
        console.log(`Account owner: ${this.ownerName}, Balance: ${this.balance}`);
    }
}
```

### Testing:

```javascript
console.log("\n=== BankAccount Class Test ===");
const account1 = new BankAccount("John Smith", 1000);
account1.getAccountInfo();
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(2000); // Should print error
account1.getAccountInfo();
```

---

## Part C: Rectangle Class

Create a `Rectangle` class for a rectangle.

```javascript
class Rectangle {
    constructor(width, height) {
        // Initialize properties here
    }
    
    // Add method getArea that returns area (width * height)
    getArea() {
        // Write your code here
    }
    
    // Add method getPerimeter that returns perimeter (2 * (width + height))
    getPerimeter() {
        // Write your code here
    }
    
    // Add method isSquare that returns true if it's a square (width === height)
    isSquare() {
        // Write your code here
    }
}
```

### Testing:

```javascript
console.log("\n=== Rectangle Class Test ===");
const rect1 = new Rectangle(5, 10);
console.log(`Area: ${rect1.getArea()}`);
console.log(`Perimeter: ${rect1.getPerimeter()}`);
console.log(`Is square? ${rect1.isSquare()}`);

const rect2 = new Rectangle(7, 7);
console.log(`\nArea: ${rect2.getArea()}`);
console.log(`Perimeter: ${rect2.getPerimeter()}`);
console.log(`Is square? ${rect2.isSquare()}`);
```

---

## Expected Output

```
=== Book Class Test ===
Book: Harry Potter, Author: J.K. Rowling, Pages: 450
Is long book? true
Book: The Alchemist, Author: Paulo Coelho, Pages: 180
Is long book? false

=== BankAccount Class Test ===
Account owner: John Smith, Balance: 1000
Deposited 500. New balance: 1500
Withdrew 200. New balance: 1300
Error: Not enough money in account
Account owner: John Smith, Balance: 1300

=== Rectangle Class Test ===
Area: 50
Perimeter: 30
Is square? false

Area: 49
Perimeter: 28
Is square? true
```

---

## Tips

- Class is defined with the keyword `class`
- Constructor runs when a new instance is created
- `new ClassName()` creates a new instance
- `this` inside the class refers to the current instance
- Default parameter: `parameter = defaultValue`

---

## Additional Tasks (Optional)

1. Add a `year` property (publication year) to the Book class
2. Create a `Circle` class with methods to calculate area and perimeter
3. Add a `transfer()` method to BankAccount for transferring money between accounts
