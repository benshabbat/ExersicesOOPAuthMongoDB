// תרגיל 04 - בדיקות אובייקטים ומערכים
// =============================
// הוראות: צור פונקציות לעבודה עם מערכים ואובייקטים
// הרץ עם: node --test exercise-04-object-tests.test.js

import { test } from 'node:test';
import assert from 'node:assert';

// ===========================================
// תרגיל 4.1 - פעולות על מערכים
// ===========================================

function addItem(arr, item) {
  // כתוב כאן
}

function removeItem(arr, item) {
  // כתוב כאן
}

test('addItem מוסיף אלמנט', () => {
  // כתוב בדיקה
});

test('removeItem מסיר אלמנט', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 4.2 - סינון מערכים
// ===========================================

function filterEven(arr) {
  // כתוב כאן
}

function filterLongStrings(arr, minLength) {
  // כתוב כאן
}

test('filterEven מסנן מספרים זוגיים', () => {
  // כתוב בדיקה
});

test('filterLongStrings מסנן מחרוזות ארוכות', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 4.3 - יצירת אובייקטים
// ===========================================

function createUser(name, age, email) {
  // כתוב כאן
}

test('createUser יוצר משתמש נכון', () => {
  // כתוב בדיקה
});

test('createUser - כל ה-properties קיימים', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 4.4 - עדכון אובייקטים
// ===========================================

function updateUserAge(user, newAge) {
  // כתוב כאן
}

function addProperty(obj, key, value) {
  // כתוב כאן
}

test('updateUserAge מעדכן גיל', () => {
  // כתוב בדיקה
});

test('addProperty מוסיף property', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 4.5 - מיזוג מערכים
// ===========================================

function mergeArrays(arr1, arr2) {
  // כתוב כאן
}

function mergeUnique(arr1, arr2) {
  // כתוב כאן
}

test('mergeArrays ממזג מערכים', () => {
  // כתוב בדיקה
});

test('mergeUnique ממזג בלי כפילויות', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 4.6 - מיפוי מערכים
// ===========================================

function doubleNumbers(arr) {
  // כתוב כאן
}

function toUpperCaseAll(arr) {
  // כתוב כאן
}

function extractNames(users) {
  // כתוב כאן
}

test('doubleNumbers מכפיל מספרים', () => {
  // כתוב בדיקה
});

test('toUpperCaseAll ממיר לאותיות גדולות', () => {
  // כתוב בדיקה
});

test('extractNames מחלץ שמות', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 4.7 - חיפוש במערכים
// ===========================================

function findByName(users, name) {
  // כתוב כאן
}

function findMaxNumber(arr) {
  // כתוב כאן
}

function findFirstEven(arr) {
  // כתוב כאן
}

test('findByName מוצא משתמש', () => {
  // כתוב בדיקה
});

test('findMaxNumber מוצא מקסימום', () => {
  // כתוב בדיקה
});

test('findFirstEven מוצא זוגי ראשון', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 4.8 - מערכי אובייקטים
// ===========================================

function getAverageGrade(students) {
  // כתוב כאן
}

function getPassingStudents(students, passingGrade) {
  // כתוב כאן
}

function sortByGrade(students) {
  // כתוב כאן
}

test('getAverageGrade מחשב ממוצע', () => {
  const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 }
  ];
  // כתוב בדיקה
});

test('getPassingStudents מסנן תלמידים', () => {
  // כתוב בדיקה
});

test('sortByGrade ממיין לפי ציון', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 4.9 - אובייקטים מקוננים
// ===========================================

function getEmployeeCount(company) {
  // כתוב כאן
}

function getEmployeesByDepartment(company, dept) {
  // כתוב כאן
}

function updateLocation(company, city, country) {
  // כתוב כאן
}

test('getEmployeeCount סופר עובדים', () => {
  const company = {
    name: 'TechCorp',
    employees: [
      { name: 'Alice', department: 'Engineering' },
      { name: 'Bob', department: 'Sales' }
    ],
    location: { city: 'Tel Aviv', country: 'Israel' }
  };
  // כתוב בדיקה
});

test('getEmployeesByDepartment מחזיר עובדים', () => {
  // כתוב בדיקה
});

test('updateLocation מעדכן מיקום', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 4.10 - מערכת ניהול מוצרים
// ===========================================

let inventory = [];

function addProduct(name, price, quantity) {
  // כתוב כאן
}

function removeProduct(name) {
  // כתוב כאן
}

function updateQuantity(name, newQuantity) {
  // כתוב כאן
}

function getTotalValue() {
  // כתוב כאן
}

function findProductByName(name) {
  // כתוב כאן
}

test('addProduct מוסיף מוצר', () => {
  inventory = [];
  // כתוב בדיקה
});

test('removeProduct מסיר מוצר', () => {
  // כתוב בדיקה
});

test('updateQuantity מעדכן כמות', () => {
  // כתוב בדיקה
});

test('getTotalValue מחשב ערך כולל', () => {
  // כתוב בדיקה
});

test('findProductByName מוצא מוצר', () => {
  // כתוב בדיקה
});

console.log('\n✅ סיימת את תרגיל 04!');
console.log('💡 עכשיו את/ה יודע/ת לעבוד עם מערכים ואובייקטים!');
