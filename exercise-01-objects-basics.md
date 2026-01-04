# Exercise 1: Creating Basic Objects

**Difficulty Level:** Easy ⭐  
**Estimated Time:** 30-45 minutes

## Goal
Understand the basic concepts of objects in JavaScript

---

## Part A: Create an Object Representing a Student

Create an object named `student` that contains the following properties:
- `name` - student's name (string)
- `age` - student's age (number)
- `averageGrade` - grade average (number)

**Write your code here:**

```javascript
const student = {
    // Add properties here
};
```

---

## Part B: Print the Properties

Print all the student's properties using `console.log`.

```javascript
console.log("Student name:", student.name);
// Add more console.log statements for other properties
```

---

## Part C: Add a New Property

Add a `major` property (major/degree) to the `student` object.

```javascript
// Add the 'major' property to the student object
```

---

## Part D: Change a Value

Update the `averageGrade` value to 95.

```javascript
// Update the averageGrade value
```

---

## Testing

Print the complete object to verify everything works:

```javascript
console.log("\n=== Exercise 1 Test ===");
console.log("Complete object:", student);
```

---

## Expected Output

```
Student name: [the name you chose]
Age: [the age you chose]
Average grade: [the average you chose]

=== Exercise 1 Test ===
Complete object: { name: '...', age: ..., averageGrade: 95, major: '...' }
```

---

## Tips

- An object in JavaScript is created with curly braces `{}`
- Properties are separated by commas `,`
- You can access a property with a dot: `object.property`
- You can add a new property: `object.newProperty = value`
- You can change a value: `object.property = newValue`

---

## Additional Tasks (Optional)

1. Add a `courses` property that is an array of courses
2. Add an `isActive` property (boolean) that indicates if the student is active
3. Create two more students and print them
