# תרגיל 1: יצירת אובייקטים בסיסיים

**רמת קושי:** קלה ⭐  
**זמן משוער:** 30-45 דקות

## מטרה
להבין את המושגים הבסיסיים של אובייקטים ב-JavaScript

---

## חלק א': צור אובייקט שמייצג סטודנט

צור אובייקט בשם `student` שמכיל את המאפיינים הבאים:
- `name` - שם הסטודנט (מחרוזת)
- `age` - גיל הסטודנט (מספר)
- `averageGrade` - ממוצע ציונים (מספר)

**כתוב את הקוד שלך כאן:**

```javascript
const student = {
    // Add properties here
};
```

---

## חלק ב': הדפס את המאפיינים

הדפס את כל המאפיינים של הסטודנט באמצעות `console.log`.

```javascript
console.log("Student name:", student.name);
// Add more console.log statements for other properties
```

---

## חלק ג': הוסף מאפיין חדש

הוסף מאפיין `major` (מגמה/תואר) לאובייקט `student`.

```javascript
// Add the 'major' property to the student object
```

---

## חלק ד': שנה ערך

עדכן את ערך `averageGrade` ל-95.

```javascript
// Update the averageGrade value
```

---

## בדיקה

הדפס את האובייקט המלא כדי לוודא שהכל עובד:

```javascript
console.log("\n=== Exercise 1 Test ===");
console.log("Complete object:", student);
```

---

## פלט צפוי

```
Student name: [השם שבחרת]
Age: [הגיל שבחרת]
Average grade: [הממוצע שבחרת]

=== Exercise 1 Test ===
Complete object: { name: '...', age: ..., averageGrade: 95, major: '...' }
```

---

## טיפים

- אובייקט ב-JavaScript נוצר עם סוגריים מסולסלים `{}`
- מאפיינים מופרדים בפסיק `,`
- ניתן לגשת למאפיין עם נקודה: `object.property`
- ניתן להוסיף מאפיין חדש: `object.newProperty = value`
- ניתן לשנות ערך: `object.property = newValue`

---

## משימות נוספות (אופציונלי)

1. הוסף מאפיין `courses` שהוא מערך של קורסים
2. הוסף מאפיין `isActive` (boolean) שמציין אם הסטודנט פעיל
3. צור עוד שני סטודנטים והדפס אותם
