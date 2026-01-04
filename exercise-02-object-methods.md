# תרגיל 2: מתודות באובייקטים

**רמת קושי:** קלה-בינונית ⭐⭐  
**זמן משוער:** 45-60 דקות

## מטרה
להבין איך להוסיף פונקציות (מתודות) לאובייקטים ולהשתמש ב-`this`

---

## חלק א': מחשבון בסיסי

צור אובייקט `calculator` עם המאפיינים והמתודות הבאים:

### מאפיינים:
- `currentValue` - הערך הנוכחי (התחל מ-0)

### מתודות:
- `add(number)` - מוסיף מספר ל-currentValue
- `subtract(number)` - מחסיר מספר מ-currentValue
- `multiply(number)` - כופל את currentValue במספר
- `reset()` - מאפס את currentValue
- `getValue()` - מחזיר את הערך הנוכחי

**כתוב את הקוד שלך כאן:**

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

### בדיקה:

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

## חלק ב': אובייקט Person

צור אובייקט `person` עם המתודות הבאות:

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

### בדיקה:

```javascript
console.log("\n=== Person Object Test ===");
person.introduce();
person.haveBirthday();
person.introduce(); // Should print age 26
```

---

## פלט צפוי

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

## טיפים

- `this` מתייחס לאובייקט הנוכחי
- מתודה היא פונקציה בתוך אובייקט
- ניתן לקרוא למתודה: `object.method()`
- מתודה אחת יכולה לקרוא למתודה אחרת: `this.otherMethod()`

---

## משימות נוספות (אופציונלי)

1. הוסף למחשבון מתודה `divide(number)`
2. הוסף ל-person מתודה `getAgeInMonths()`
3. צור אובייקט `bankAccount` עם מתודות deposit ו-withdraw
