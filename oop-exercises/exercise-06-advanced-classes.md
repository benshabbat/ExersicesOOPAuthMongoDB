# Exercise 6: Advanced Work with Classes and Constructors 🎯

## 🎯 Exercise Objectives

In this exercise we will learn:
- ✅ **Validation** - Data validation in constructor
- ✅ **Error Handling** - Error handling with `throw` and `try-catch`
- ✅ **Default Parameters** - Default parameter values
- ✅ **Static Properties** - Static properties for tracking instances
- ✅ **Complex Methods** - More complex methods

---

## 📚 Part A: User Class with Validation

### Goal
Create a `User` class that ensures data is valid before creating the user.

### Requirements
1. Username must be at least 3 characters
2. Email must contain `@`
3. Age must be between 13 and 120
4. If data is invalid, throw an error with a clear message

### Code to Complete

```javascript
class User {
    constructor(username, email, age) {
        // Validation for username (must be at least 3 characters)
        // Hint: Check username.length < 3, throw Error if invalid
        
        // Validation for email (must contain @)
        // Hint: Check email.includes("@"), throw Error if invalid
        
        // Validation for age (must be between 13 and 120)
        // Hint: Check age < 13 || age > 120, throw Error if invalid
        
        // Initialize all properties: username, email, age
        // Also set: createdAt = new Date(), isActive = true
    }
    
    deactivate() {
        // Hint: Set this.isActive to false
    }
    
    activate() {
        // Hint: Set this.isActive to true
    }
    
    getAccountAge() {
        // Hint: Get current date with new Date()
        // Calculate difference: now - this.createdAt
        // Convert milliseconds to days: Math.floor(diff / (1000 * 60 * 60 * 24))
    }
    
    getUserInfo() {
        return `${this.username} (${this.email}) - ${this.isActive ? "Active" : "Inactive"}`;
    }
}

// Tests
console.log("=== Testing User Class ===");
try {
    const user1 = new User("John", "john@example.com", 25);
    console.log(user1.getUserInfo());
    console.log(`Account exists for ${user1.getAccountAge()} days`);
    
    // Try creating user with short name
    const user2 = new User("ab", "test@example.com", 20);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    // Try creating user with invalid email
    const user3 = new User("Danny", "invalidemail", 30);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    // Try creating user with invalid age
    const user4 = new User("Mike", "mike@example.com", 10);
} catch (error) {
    console.log("Error:", error.message);
}
```

---

## 📝 Part B: Complete Todo System

### Goal
Create an advanced task management system with two classes: `TodoItem` and `TodoList`.

### Requirements

**TodoItem:**
- Automatic unique identifier
- Title, description (optional), priority (default: "medium")
- Status: completed/pending
- Creation and completion dates

**TodoList:**
- List name
- Add/remove/complete tasks
- Filter by status and priority
- Statistics

### Code to Complete

```javascript
class TodoItem {
    static nextId = 1;
    
    constructor(title, description = "", priority = "medium") {
        this.id = TodoItem.nextId++;
        this.title = title;
        this.description = description;
        this.priority = priority; // "low", "medium", "high"
        this.completed = false;
        this.createdAt = new Date();
    }
    
    complete() {
        // Hint: Set completed to true
        // Set completedAt to new Date()
    }
    
    uncomplete() {
        // Hint: Set completed to false
        // Set completedAt to null
    }
    
    getInfo() {
        const status = this.completed ? "✓" : "○";
        const priorityIcon = {
            low: "🟢",
            medium: "🟡",
            high: "🔴"
        }[this.priority];
        
        return `${status} ${priorityIcon} [${this.id}] ${this.title}`;
    }
}

class TodoList {
    constructor(listName) {
        this.listName = listName;
        this.items = [];
    }
    
    addItem(title, description = "", priority = "medium") {
        // Hint: Create new TodoItem
        // Push to this.items array
        // console.log success message
        // Return the item
    }
    
    removeItem(id) {
        // Hint: Use findIndex to find item by id
        // If found (index !== -1), use splice to remove
        // console.log success message and return true
        // Otherwise return false
    }
    
    completeItem(id) {
        // Hint: Use find to locate item by id
        // If found, call item.complete()
        // console.log success message and return true
        // Otherwise return false
    }
    
    getCompletedItems() {
        // Hint: Use this.items.filter() to return items where completed === true
    }
    
    getPendingItems() {
        // Hint: Use this.items.filter() to return items where completed === false
    }
    
    getItemsByPriority(priority) {
        // Hint: Use filter to return items where item.priority equals the priority parameter
    }
    
    listItems() {
        console.log(`\n=== ${this.listName} ===`);
        if (this.items.length === 0) {
            console.log("No tasks");
            return;
        }
        this.items.forEach(item => {
            console.log(item.getInfo());
            if (item.description) {
                console.log(`   ${item.description}`);
            }
        });
    }
    
    getStats() {
        const total = this.items.length;
        const completed = this.getCompletedItems().length;
        const pending = this.getPendingItems().length;
        const high = this.getItemsByPriority("high").length;
        
        return {
            total,
            completed,
            pending,
            high,
            completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    }
}

// Comprehensive Tests
console.log("\n\n=== Testing Todo System ===");
const myTodoList = new TodoList("My Tasks");

// Add tasks
myTodoList.addItem("Buy milk", "On the way home", "high");
myTodoList.addItem("Finish project", "By Thursday", "high");
myTodoList.addItem("Call mom", "", "medium");
myTodoList.addItem("Read book", "30 pages per day", "low");

// Display all tasks
myTodoList.listItems();

// Mark tasks as completed
console.log("\n--- Completing Tasks ---");
myTodoList.completeItem(1);
myTodoList.completeItem(3);

// Display again
myTodoList.listItems();

// Show pending tasks
console.log("\n--- Pending Tasks ---");
const pending = myTodoList.getPendingItems();
pending.forEach(item => console.log(item.getInfo()));

// Show high priority tasks
console.log("\n--- High Priority Tasks ---");
const highPriority = myTodoList.getItemsByPriority("high");
highPriority.forEach(item => console.log(item.getInfo()));

// Show statistics
console.log("\n--- Statistics ---");
const stats = myTodoList.getStats();
console.log(`Total tasks: ${stats.total}`);
console.log(`Completed: ${stats.completed}`);
console.log(`Pending: ${stats.pending}`);
console.log(`High priority: ${stats.high}`);
console.log(`Completion rate: ${stats.completionRate}%`);

// Delete a task
console.log("\n--- Deleting Task ---");
myTodoList.removeItem(2);
myTodoList.listItems();
```

---

## 🎓 What We Learned

### Validation in Constructor
```javascript
if (condition) {
    throw new Error("Error message");
}
```

### Try-Catch
```javascript
try {
    // Code that may throw an error
} catch (error) {
    // Handle error
    console.log(error.message);
}
```

### Default Parameters
```javascript
constructor(name, description = "No description", priority = "medium") {
    // If no value is passed, we use the default value
}
```

### Static Counter
```javascript
static nextId = 1;
constructor() {
    this.id = TodoItem.nextId++;
}
```

---

## 💡 Tips

1. **Validation** - Always check data before using it
2. **Error Messages** - Write clear error messages
3. **Default Values** - Use default parameters for flexibility
4. **Static Properties** - Useful for tracking all instances

---

## 🚀 Additional Challenges

1. **Add due date** to tasks
2. **Create alerts** for tasks past their due date
3. **Add categories** to tasks
4. **Create search method** that searches tasks by text
5. **Add sorting method** for tasks by date/priority

---

## 📤 Expected Output

```
=== Testing User Class ===
John (john@example.com) - Active
Account exists for 0 days
Error: Username must contain at least 3 characters
Error: Invalid email
Error: Age must be between 13 and 120

=== Testing Todo System ===
New task added: Buy milk
New task added: Finish project
New task added: Call mom
New task added: Read book

=== My Tasks ===
○ 🔴 [1] Buy milk
   On the way home
○ 🔴 [2] Finish project
   By Thursday
○ 🟡 [3] Call mom
○ 🟢 [4] Read book
   30 pages per day

--- Completing Tasks ---
Task completed: Buy milk
Task completed: Call mom

=== My Tasks ===
✓ 🔴 [1] Buy milk
   On the way home
○ 🔴 [2] Finish project
   By Thursday
✓ 🟡 [3] Call mom
○ 🟢 [4] Read book
   30 pages per day

--- Statistics ---
Total tasks: 4
Completed: 2
Pending: 2
High priority: 2
Completion rate: 50%
```
