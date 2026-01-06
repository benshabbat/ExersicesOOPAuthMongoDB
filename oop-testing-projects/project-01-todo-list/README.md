# Project 01 - Todo List App 📝

## 🎯 Project Goal

Build a simple Todo List application using OOP principles and test it thoroughly. This is a beginner-friendly project that introduces you to classes, methods, and basic testing.

## 📖 Project Description

Create a `TodoList` class that allows users to manage their daily tasks. Users should be able to add tasks, mark them as complete, remove tasks, and view all tasks.

## 🎭 User Stories

As a user, I want to:
- ✅ Add a new task with a description
- ✅ Mark a task as complete
- ✅ Remove a task from the list
- ✅ View all tasks
- ✅ View only incomplete tasks
- ✅ View only completed tasks
- ✅ Count total, complete, and incomplete tasks

## 📋 Requirements

### Task Properties
Each task should have:
- `id` - Unique identifier (number)
- `description` - Task description (string)
- `completed` - Completion status (boolean, default: false)
- `createdAt` - Creation timestamp (Date)

### TodoList Methods
Your `TodoList` class should have these methods:

1. `addTask(description)` - Add a new task, return the task object
2. `completeTask(id)` - Mark a task as complete, return true if successful
3. `removeTask(id)` - Remove a task, return true if successful
4. `getTask(id)` - Get a specific task by id
5. `getAllTasks()` - Return all tasks
6. `getCompletedTasks()` - Return only completed tasks
7. `getIncompleteTasks()` - Return only incomplete tasks
8. `getTotalCount()` - Return total number of tasks
9. `getCompletedCount()` - Return number of completed tasks
10. `getIncompleteCount()` - Return number of incomplete tasks

## 🧪 Testing Requirements

Write tests for:
- ✅ Adding tasks
- ✅ Completing tasks
- ✅ Removing tasks
- ✅ Getting specific tasks
- ✅ Filtering tasks
- ✅ Counting tasks
- ✅ Edge cases (invalid id, empty list, etc.)

## 🎯 Hints

<details>
<summary>💡 Hint 1: Class Structure (Click to expand)</summary>

```javascript
class TodoList {
  constructor() {
    // Initialize properties here
    // You'll need an array to store tasks
    // You'll need a counter for unique IDs
  }
}
```

Think about:
- What properties does the class need?
- How will you generate unique IDs?
- How will you store the tasks?
</details>

<details>
<summary>💡 Hint 2: Adding Tasks</summary>

```javascript
addTask(description) {
  // 1. Create a task object with all properties
  // 2. Use this.#nextId for unique ID
  // 3. Add task to your tasks array
  // 4. Increment the ID counter
  // 5. Return the created task
}
```

Consider:
- Validation: What if description is empty?
- ID generation: How to ensure uniqueness?
</details>

<details>
<summary>💡 Hint 3: Completing and Removing Tasks</summary>

```javascript
completeTask(id) {
  // 1. Find the task by ID
  // 2. If found, set completed to true
  // 3. Return true if successful, false if not found
}

removeTask(id) {
  // 1. Find the index of the task
  // 2. Use array.splice() to remove it
  // 3. Return true if successful, false if not found
}
```

Tip: Use `array.findIndex()` to find the task index.
</details>

<details>
<summary>💡 Hint 4: Filtering and Counting</summary>

```javascript
getCompletedTasks() {
  // Use array.filter() to get only completed tasks
  return this.#tasks.filter(task => task.completed);
}

getCompletedCount() {
  // Option 1: Get filtered array and check length
  // Option 2: Use reduce to count
}
```

Remember: You can reuse your filtering methods in counting methods!
</details>

<details>
<summary>💡 Hint 5: Writing Tests</summary>

```javascript
test('should add a new task', () => {
  const todoList = new TodoList();
  const task = todoList.addTask('Buy groceries');
  
  assert.strictEqual(task.description, 'Buy groceries');
  assert.strictEqual(task.completed, false);
  assert.strictEqual(typeof task.id, 'number');
});
```

Test structure:
1. **Arrange**: Create instance and setup
2. **Act**: Call the method
3. **Assert**: Check the results
</details>

<details>
<summary>⚠️ Hint 6: Common Pitfalls</summary>

Watch out for:
- ❌ Not validating input (empty descriptions)
- ❌ Not checking if task exists before operating on it
- ❌ Not returning proper values (true/false for success/failure)
- ❌ Mutating original array when filtering
- ❌ Not testing edge cases (empty list, invalid IDs)
</details>

## 📝 Implementation Template

```javascript
// todo.js
class TodoList {
  // TODO: Implement the class
}

export default TodoList;
```

```javascript
// todo.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import TodoList from './todo.js';

test('TodoList - Add Task', () => {
  // TODO: Write your tests
});

// Add more tests...
```

## 🎓 Learning Objectives

After completing this project, you should understand:
- ✅ How to create and use classes
- ✅ How to implement methods
- ✅ How to work with arrays
- ✅ How to write unit tests
- ✅ How to test different scenarios
- ✅ Basic TDD workflow

## 🏆 Bonus Challenges

Once you complete the basic requirements, try these:

1. **Priority System** ⭐
   - Add a `priority` property (low, medium, high)
   - Add methods to get tasks by priority

2. **Due Dates** ⭐
   - Add a `dueDate` property
   - Add a method to get overdue tasks

3. **Tags** ⭐⭐
   - Add a `tags` array to each task
   - Add methods to filter by tag

4. **Edit Task** ⭐
   - Add a method to edit task description
   - Write tests for editing

5. **Clear Completed** ⭐⭐
   - Add a method to remove all completed tasks
   - Return the number of tasks removed

## ✅ Completion Checklist

- [ ] TodoList class created
- [ ] All 10 methods implemented
- [ ] All tests written and passing
- [ ] Edge cases handled
- [ ] Code is clean and readable
- [ ] Tried at least one bonus challenge

---

## 🔐 Solution

<details>
<summary>🎯 Click to reveal complete solution (Try solving it yourself first!)</summary>

### todo.js

```javascript
class TodoList {
  #tasks = [];
  #nextId = 1;

  addTask(description) {
    if (!description || description.trim() === '') {
      throw new Error('Description cannot be empty');
    }

    const task = {
      id: this.#nextId++,
      description: description.trim(),
      completed: false,
      createdAt: new Date()
    };

    this.#tasks.push(task);
    return task;
  }

  completeTask(id) {
    const task = this.#tasks.find(t => t.id === id);
    if (!task) return false;
    
    task.completed = true;
    return true;
  }

  removeTask(id) {
    const index = this.#tasks.findIndex(t => t.id === id);
    if (index === -1) return false;
    
    this.#tasks.splice(index, 1);
    return true;
  }

  getTask(id) {
    return this.#tasks.find(t => t.id === id) || null;
  }

  getAllTasks() {
    return [...this.#tasks];
  }

  getCompletedTasks() {
    return this.#tasks.filter(t => t.completed);
  }

  getIncompleteTasks() {
    return this.#tasks.filter(t => !t.completed);
  }

  getTotalCount() {
    return this.#tasks.length;
  }

  getCompletedCount() {
    return this.getCompletedTasks().length;
  }

  getIncompleteCount() {
    return this.getIncompleteTasks().length;
  }
}

export default TodoList;
```

### todo.test.js

```javascript
import { test } from 'node:test';
import assert from 'node:assert';
import TodoList from './todo.js';

test('should create an empty todo list', () => {
  const todoList = new TodoList();
  assert.strictEqual(todoList.getTotalCount(), 0);
});

test('should add a new task', () => {
  const todoList = new TodoList();
  const task = todoList.addTask('Buy groceries');
  
  assert.strictEqual(task.description, 'Buy groceries');
  assert.strictEqual(task.completed, false);
  assert.strictEqual(typeof task.id, 'number');
  assert.ok(task.createdAt instanceof Date);
});

test('should add multiple tasks with unique IDs', () => {
  const todoList = new TodoList();
  const task1 = todoList.addTask('Task 1');
  const task2 = todoList.addTask('Task 2');
  
  assert.notStrictEqual(task1.id, task2.id);
  assert.strictEqual(todoList.getTotalCount(), 2);
});

test('should throw error for empty description', () => {
  const todoList = new TodoList();
  assert.throws(() => todoList.addTask(''), Error);
  assert.throws(() => todoList.addTask('   '), Error);
});

test('should complete a task', () => {
  const todoList = new TodoList();
  const task = todoList.addTask('Test task');
  
  const result = todoList.completeTask(task.id);
  assert.strictEqual(result, true);
  
  const updatedTask = todoList.getTask(task.id);
  assert.strictEqual(updatedTask.completed, true);
});

test('should return false when completing non-existent task', () => {
  const todoList = new TodoList();
  const result = todoList.completeTask(999);
  assert.strictEqual(result, false);
});

test('should remove a task', () => {
  const todoList = new TodoList();
  const task = todoList.addTask('Remove me');
  
  const result = todoList.removeTask(task.id);
  assert.strictEqual(result, true);
  assert.strictEqual(todoList.getTotalCount(), 0);
});

test('should return false when removing non-existent task', () => {
  const todoList = new TodoList();
  const result = todoList.removeTask(999);
  assert.strictEqual(result, false);
});

test('should get a specific task by id', () => {
  const todoList = new TodoList();
  const task = todoList.addTask('Find me');
  
  const found = todoList.getTask(task.id);
  assert.deepStrictEqual(found, task);
});

test('should return null for non-existent task', () => {
  const todoList = new TodoList();
  const found = todoList.getTask(999);
  assert.strictEqual(found, null);
});

test('should get all tasks', () => {
  const todoList = new TodoList();
  todoList.addTask('Task 1');
  todoList.addTask('Task 2');
  todoList.addTask('Task 3');
  
  const allTasks = todoList.getAllTasks();
  assert.strictEqual(allTasks.length, 3);
});

test('should get only completed tasks', () => {
  const todoList = new TodoList();
  const task1 = todoList.addTask('Task 1');
  todoList.addTask('Task 2');
  const task3 = todoList.addTask('Task 3');
  
  todoList.completeTask(task1.id);
  todoList.completeTask(task3.id);
  
  const completed = todoList.getCompletedTasks();
  assert.strictEqual(completed.length, 2);
  assert.ok(completed.every(t => t.completed));
});

test('should get only incomplete tasks', () => {
  const todoList = new TodoList();
  const task1 = todoList.addTask('Task 1');
  todoList.addTask('Task 2');
  const task3 = todoList.addTask('Task 3');
  
  todoList.completeTask(task1.id);
  
  const incomplete = todoList.getIncompleteTasks();
  assert.strictEqual(incomplete.length, 2);
  assert.ok(incomplete.every(t => !t.completed));
});

test('should count tasks correctly', () => {
  const todoList = new TodoList();
  const task1 = todoList.addTask('Task 1');
  todoList.addTask('Task 2');
  todoList.addTask('Task 3');
  
  todoList.completeTask(task1.id);
  
  assert.strictEqual(todoList.getTotalCount(), 3);
  assert.strictEqual(todoList.getCompletedCount(), 1);
  assert.strictEqual(todoList.getIncompleteCount(), 2);
});

test('should not mutate original array when filtering', () => {
  const todoList = new TodoList();
  todoList.addTask('Task 1');
  
  const tasks1 = todoList.getAllTasks();
  const tasks2 = todoList.getAllTasks();
  
  assert.notStrictEqual(tasks1, tasks2);
});

console.log('\n✅ All TodoList tests passed!');
```

</details>

## 🎓 Review Questions

After completing the project, answer these:

1. Why do we use private fields (#) for tasks and nextId?
2. Why do we return a copy of the array in getAllTasks()?
3. What's the difference between `find()` and `filter()`?
4. Why validate input in addTask()?
5. What happens if we don't check if a task exists before completing it?

---

**Next Project**: [Project 02 - Bank Account System](../project-02-bank-account/) 💰
