# תרגיל 04 - בדיקות אובייקטים ומערכים 📦

## מטרה
ללמוד לבדוק מבני נתונים מורכבים - אובייקטים, מערכים, ופעולות עליהם.

## רקע
ברוב הפרויקטים אנחנו עובדים עם אובייקטים ומערכים. נלמד לבדוק אותם ביעילות.

## תיאוריה

### בדיקת מערכים

```javascript
// בדיקת תוכן מערך
assert.deepStrictEqual([1, 2, 3], [1, 2, 3]);

// בדיקת אורך מערך
assert.strictEqual(arr.length, 3);

// בדיקה שמערך כולל ערך
assert.ok(arr.includes(2));
```

### בדיקת אובייקטים

```javascript
// בדיקת אובייקט שלם
assert.deepStrictEqual(obj, { name: 'Alice', age: 25 });

// בדיקת property ספציפי
assert.strictEqual(obj.name, 'Alice');

// בדיקת קיום property
assert.ok('name' in obj);
```

## תרגילים

### תרגיל 4.1 - פעולות על מערכים 📋
צור פונקציות לפעולות על מערכים וכתוב בדיקות.

```javascript
// פונקציה שמוסיפה אלמנט למערך
function addItem(arr, item) {
  // כתוב כאן
}

// פונקציה שמסירה אלמנט ממערך
function removeItem(arr, item) {
  // כתוב כאן
}

// כתוב בדיקות לשתי הפונקציות
```

### תרגיל 4.2 - סינון מערכים 🔍
צור פונקציות סינון וכתוב בדיקות.

```javascript
// סנן מספרים זוגיים
function filterEven(arr) {
  // כתוב כאן
}

// סנן מחרוזות ארוכות מ-X תווים
function filterLongStrings(arr, minLength) {
  // כתוב כאן
}
```

### תרגיל 4.3 - יצירת אובייקטים 🏗️
צור פונקציה שיוצרת אובייקט משתמש.

```javascript
function createUser(name, age, email) {
  // החזר אובייקט עם name, age, email
}

// בדוק שהאובייקט נוצר נכון
// בדוק שכל ה-properties קיימים
```

### תרגיל 4.4 - עדכון אובייקטים ✏️
צור פונקציות לעדכון אובייקטים.

```javascript
function updateUserAge(user, newAge) {
  // עדכן את הגיל
  // החזר את האובייקט המעודכן
}

function addProperty(obj, key, value) {
  // הוסף property חדש לאובייקט
  // החזר את האובייקט
}
```

### תרגיל 4.5 - מיזוג מערכים 🔗
צור פונקציות למיזוג מערכים.

```javascript
function mergeArrays(arr1, arr2) {
  // מזג שני מערכים
}

function mergeUnique(arr1, arr2) {
  // מזג ללא כפילויות
}
```

### תרגיל 4.6 - מיפוי מערכים 🗺️
צור פונקציות map מותאמות אישית.

```javascript
function doubleNumbers(arr) {
  // הכפל כל מספר במערך
}

function toUpperCaseAll(arr) {
  // המר כל המחרוזות לאותיות גדולות
}

function extractNames(users) {
  // קבל מערך של אובייקטי משתמש
  // החזר מערך של שמות בלבד
}
```

### תרגיל 4.7 - חיפוש במערכים 🔎
צור פונקציות חיפוש.

```javascript
function findByName(users, name) {
  // מצא משתמש לפי שם
}

function findMaxNumber(arr) {
  // מצא את המספר הגדול ביותר
}

function findFirstEven(arr) {
  // מצא את המספר הזוגי הראשון
}
```

### תרגיל 4.8 - מערכי אובייקטים 📚
עבוד עם מערך של אובייקטים.

```javascript
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 }
];

function getAverageGrade(students) {
  // חשב ממוצע ציונים
}

function getPassingStudents(students, passingGrade) {
  // החזר רק תלמידים שעברו
}

function sortByGrade(students) {
  // מיין לפי ציון
}
```

### תרגיל 4.9 - אובייקטים מקוננים 🎁
עבוד עם אובייקטים מורכבים.

```javascript
const company = {
  name: 'TechCorp',
  employees: [
    { name: 'Alice', department: 'Engineering' },
    { name: 'Bob', department: 'Sales' }
  ],
  location: {
    city: 'Tel Aviv',
    country: 'Israel'
  }
};

function getEmployeeCount(company) {
  // החזר מספר עובדים
}

function getEmployeesByDepartment(company, dept) {
  // החזר עובדים ממחלקה מסוימת
}

function updateLocation(company, city, country) {
  // עדכן מיקום
}
```

### תרגיל 4.10 - תרגיל סיכום 🎯
צור מערכת ניהול מוצרים פשוטה.

```javascript
const inventory = [];

function addProduct(name, price, quantity) {
  // הוסף מוצר למלאי
}

function removeProduct(name) {
  // הסר מוצר מהמלאי
}

function updateQuantity(name, newQuantity) {
  // עדכן כמות
}

function getTotalValue() {
  // חשב ערך כולל של המלאי
}

function findProductByName(name) {
  // מצא מוצר
}

// כתוב בדיקות מקיפות לכל הפונקציות
```

## דוגמאות לבדיקות

```javascript
// בדיקת מערך
test('מערך מכיל אלמנטים נכונים', () => {
  const arr = [1, 2, 3];
  assert.deepStrictEqual(arr, [1, 2, 3]);
  assert.strictEqual(arr.length, 3);
  assert.ok(arr.includes(2));
});

// בדיקת אובייקט
test('אובייקט נוצר נכון', () => {
  const user = { name: 'Alice', age: 25 };
  assert.strictEqual(user.name, 'Alice');
  assert.strictEqual(user.age, 25);
  assert.ok('name' in user);
});
```

## הרצת הבדיקות

```bash
node --test exercise-04-object-tests.test.js
```

## טיפים 💡
1. השתמש ב-deepStrictEqual למערכים ואובייקטים
2. בדוק גם את האורך/מספר האלמנטים
3. בדוק מקרי קצה (מערך ריק, null, וכו')
4. בדוק שהפונקציה לא משנה את הקלט המקורי

## מה הלאה? ⏭️
עבור ל[תרגיל 05 - בדיקות async](./exercise-05-async-tests.md)
