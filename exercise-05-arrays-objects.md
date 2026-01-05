# Exercise 5: Arrays of Objects and Complex Methods

**Difficulty Level:** Medium-High ⭐⭐⭐  
**Estimated Time:** 60-90 minutes

## Goal
Work with arrays of objects and more complex methods

---

## Part A: Product Class

Create a `Product` class for store products.

```javascript
class Product {
    constructor(name, price, quantity) {
        // Initialize the three properties
        // Hint: this.propertyName = parameterName
    }
    
    // Add method getTotalValue that returns total value (price * quantity)
    getTotalValue() {
        // Hint: multiply price by quantity
    }
    
    // Add method sell that receives amount to sell
    sell(amount) {
        // Hint: Check if amount <= quantity
        // If yes: subtract amount from quantity and return true
        // If no: show error message and return false
    }
    
    // Add method restock that receives amount to add to inventory
    restock(amount) {
        // Hint: add amount to current quantity
    }
    
    getInfo() {
        // Hint: return a string with name, price, and quantity
        // Format: "ProductName - $price (quantity units)"
    }
}
```

---

## Part B: Store Class

Create a `Store` class that manages a store.

```javascript
class Store {
    constructor(storeName) {
        // Initialize storeName and create empty products array
        // Hint: this.products = [];
    }
    
    // Add method addProduct that adds product to store
    addProduct(product) {
        // Hint: push the product into this.products array
        // Then console.log a message
    }
    
    // Add method findProduct that searches product by name
    findProduct(productName) {
        // Hint: use this.products.find() with product.name === productName
    }
    
    // Add method getTotalInventoryValue that returns total value of all inventory
    getTotalInventoryValue() {
        // Hint: Loop through this.products
        // For each product, add product.getTotalValue() to total
        // Return the total
    }
    
    // Add method listProducts that prints all products
    listProducts() {
        // Hint: console.log header with store name
        // Use forEach to print each product with index
        // Call product.getInfo() for each product
    }
    
    // Add method getLowStockProducts that returns products with low quantity
    getLowStockProducts(threshold = 5) {
        // Hint: use this.products.filter()
        // Return products where product.quantity <= threshold
    }
}
```

### Testing:

```javascript
console.log("=== Store System Test ===");
const myStore = new Store("Super Market");

// Create products and add them to store
const product1 = new Product("Milk", 5, 20);
const product2 = new Product("Bread", 7, 15);
const product3 = new Product("Eggs", 12, 3);
const product4 = new Product("Cheese", 25, 8);

myStore.addProduct(product1);
myStore.addProduct(product2);
myStore.addProduct(product3);
myStore.addProduct(product4);

// Display all products
myStore.listProducts();

// Sell some products
console.log("\n--- Sales ---");
product1.sell(5);
product2.sell(20); // Too many!
product3.sell(2);

// Check inventory value
console.log(`\nTotal inventory value: $${myStore.getTotalInventoryValue()}`);

// Check low stock products
console.log("\n--- Low Stock Products ---");
const lowStock = myStore.getLowStockProducts();
lowStock.forEach(product => {
    console.log(`⚠️ ${product.name} - only ${product.quantity} units!`);
});

// Restock
console.log("\n--- Restocking ---");
product3.restock(10);

// Search product
console.log("\n--- Product Search ---");
const foundProduct = myStore.findProduct("Cheese");
if (foundProduct) {
    console.log("Found:", foundProduct.getInfo());
}
```

---

## Part C: StudentGrade Class

Create a `StudentGrade` class for tracking student grades.

```javascript
class StudentGrade {
    constructor(studentName) {
        this.studentName = studentName;
        this.grades = []; // Array of grades
    }
    
    // Add method addGrade that adds grade
    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            // Write your code here
            console.log(`Grade ${grade} added for ${this.studentName}`);
        } else {
            console.log("Error: Grade must be between 0 and 100");
        }
    }
    
    // Add method getAverage that returns average of grades
    getAverage() {
        // Hint: Check if grades array is empty, return 0
        // Calculate sum of all grades (use reduce or loop)
        // Divide by number of grades
    }
    
    // Add method getHighestGrade that returns highest grade
    getHighestGrade() {
        // Hint: use Math.max(...this.grades)
        // Write your code here
    }
    
    // Add method getLowestGrade that returns lowest grade
    getLowestGrade() {
        // Write your code here
    }
    
    // Add method isPassing that returns true if average is above 60
    isPassing() {
        // Write your code here
    }
}
```

### Testing:

```javascript
console.log("\n\n=== Grade System Test ===");
const student1 = new StudentGrade("Rachel Cohen");
student1.addGrade(85);
student1.addGrade(92);
student1.addGrade(78);
student1.addGrade(88);

console.log(`${student1.studentName}'s average: ${student1.getAverage()}`);
console.log(`Highest grade: ${student1.getHighestGrade()}`);
console.log(`Lowest grade: ${student1.getLowestGrade()}`);
console.log(`Passing? ${student1.isPassing() ? "Yes ✓" : "No ✗"}`);
```

---

## Expected Output

```
=== Store System Test ===
Milk added to Super Market
Bread added to Super Market
Eggs added to Super Market
Cheese added to Super Market

Products in Super Market:
1. Milk - $5 (20 units)
2. Bread - $7 (15 units)
3. Eggs - $12 (3 units)
4. Cheese - $25 (8 units)

--- Sales ---
Sold 5 units of Milk. Remaining: 15
Error: Not enough Bread in stock (only 15)
Sold 2 units of Eggs. Remaining: 1

Total inventory value: $392

--- Low Stock Products ---
⚠️ Eggs - only 1 units!

--- Restocking ---
Added 10 units of Eggs. New quantity: 11

--- Product Search ---
Found: Cheese - $25 (8 units)

=== Grade System Test ===
Grade 85 added for Rachel Cohen
Grade 92 added for Rachel Cohen
Grade 78 added for Rachel Cohen
Grade 88 added for Rachel Cohen
Rachel Cohen's average: 85.75
Highest grade: 92
Lowest grade: 78
Passing? Yes ✓
```

---

## Tips

- **forEach**: iterate over all elements in array
- **find**: find an element that matches a condition
- **filter**: filter elements by condition
- **reduce**: calculate sum/cumulative value
- **Math.max/min**: find maximum/minimum value

---

## Additional Tasks (Optional)

1. Add a `getMostExpensiveProduct()` method to Store
2. Add a `removeLowestGrade()` method to StudentGrade
3. Create a `ShoppingCart` class with add, remove, getTotal methods
