# תרגיל 06 - Hooks (before/after) 🪝

## מטרה
ללמוד להשתמש ב-hooks להכנה וניקוי לפני ואחרי בדיקות.

## רקע
לעיתים צריך להכין דברים לפני בדיקות (setup) ולנקות אחריהן (cleanup).
Hooks עוזרים לנו לעשות זאת בצורה מסודרת.

## תיאוריה

### סוגי Hooks

```javascript
import { test, before, after, beforeEach, afterEach } from 'node:test';

// רץ פעם אחת לפני כל הבדיקות
before(() => {
  console.log('Setup once');
});

// רץ לפני כל בדיקה
beforeEach(() => {
  console.log('Setup before each test');
});

// רץ אחרי כל בדיקה
afterEach(() => {
  console.log('Cleanup after each test');
});

// רץ פעם אחת אחרי כל הבדיקות
after(() => {
  console.log('Cleanup once');
});
```

## תרגילים

### תרגיל 6.1 - before ו-after בסיסי 🎯
השתמש ב-hooks פשוטים.

```javascript
// כתוב before שמדפיס "Starting tests"
// כתוב after שמדפיס "Finished tests"
// כתוב כמה בדיקות ביניהם
```

### תרגיל 6.2 - beforeEach ו-afterEach 🔄
נקה state בין בדיקות.

```javascript
let counter = 0;

// כתוב beforeEach שמאפס את counter
// כתוב כמה בדיקות שמשתמשות ב-counter
// ודא שכל בדיקה מתחילה עם 0
```

### תרגיל 6.3 - הכנת מערך 📦
הכן מערך לפני כל בדיקה.

```javascript
let testArray;

// beforeEach: testArray = [1, 2, 3, 4, 5]
// afterEach: testArray = null

// כתוב בדיקות שמשתמשות ב-testArray
```

### תרגיל 6.4 - הכנת אובייקט 🏗️
הכן אובייקט מורכב.

```javascript
let testUser;

// beforeEach: צור אובייקט משתמש חדש
// afterEach: אפס את testUser

// כתוב בדיקות שמשנות את המשתמש
```

### תרגיל 6.5 - סימולציית Database 💾
צור "מסד נתונים" זמני.

```javascript
let database;

// before: צור מסד נתונים ריק
// beforeEach: הוסף נתונים דמה
// afterEach: נקה את הנתונים
// after: סגור את מסד הנתונים

// כתוב בדיקות שמשתמשות במסד הנתונים
```

### תרגיל 6.6 - Async Hooks ⚡
השתמש ב-hooks אסינכרוניים.

```javascript
let connection;

// before: התחבר (async) לשרת דמה
async function connectToServer() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ connected: true });
    }, 100);
  });
}

// after: התנתק (async) מהשרת
async function disconnectFromServer() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ connected: false });
    }, 100);
  });
}

// כתוב בדיקות שמשתמשות ב-connection
```

### תרגיל 6.7 - מערכת ניקוד 🎮
צור מערכת ניקוד לבדיקות.

```javascript
let score;
let highScore = 0;

// beforeEach: אפס score
// afterEach: עדכן highScore אם צריך
// after: הדפס highScore סופי

// כתוב בדיקות שמשנות את score
```

### תרגיל 6.8 - Mocking Time ⏰
צור mock לזמן.

```javascript
let originalDate;
let mockDate;

// beforeEach: שמור את Date המקורי וצור mock
// afterEach: החזר את Date המקורי

// כתוב בדיקות שתלויות בזמן
```

### תרגיל 6.9 - ניהול קבצים זמניים 📁
סימולציה של עבודה עם קבצים.

```javascript
let tempFiles = [];

function createTempFile(name, content) {
  const file = { name, content, created: new Date() };
  tempFiles.push(file);
  return file;
}

// beforeEach: אפס tempFiles
// after: ודא שכל הקבצים נוקו

// כתוב בדיקות שיוצרות קבצים זמניים
```

### תרגיל 6.10 - תרגיל סיכום מלא 🎓
צור suite מלא עם כל סוגי ה-hooks.

```javascript
// מערכת ניהול משתמשים עם hooks

let users = [];
let currentUser = null;
let sessionCount = 0;

// before: הדפס "Starting user management tests"
// beforeEach: צור משתמש זמני, הגדל sessionCount
// afterEach: נקה currentUser
// after: הדפס סטטיסטיקות (מספר sessions)

// כתוב לפחות 5 בדיקות:
// 1. יצירת משתמש
// 2. עדכון משתמש
// 3. מחיקת משתמש
// 4. חיפוש משתמש
// 5. ספירת משתמשים
```

## דוגמאות

### דוגמה מלאה

```javascript
import { test, before, after, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';

let testData;

before(() => {
  console.log('Preparing test suite');
});

beforeEach(() => {
  testData = { value: 0 };
});

test('test 1', () => {
  testData.value = 10;
  assert.strictEqual(testData.value, 10);
});

test('test 2', () => {
  // testData נוקה והוחזר ל-{ value: 0 }
  assert.strictEqual(testData.value, 0);
});

afterEach(() => {
  testData = null;
});

after(() => {
  console.log('All tests completed');
});
```

## הרצת הבדיקות

```bash
node --test exercise-06-hooks.test.js
```

## טיפים 💡
1. `before/after` - לפעולות יקרות שרצים פעם אחת
2. `beforeEach/afterEach` - לניקוי state בין בדיקות
3. תמיד נקה אחרי עצמך ב-afterEach/after
4. Hooks יכולים להיות async
5. Hooks רצים בסדר: before → beforeEach → test → afterEach → after

## מה הלאה? ⏭️
עבור ל[תרגיל 07 - Mocking](./exercise-07-mocking.md)
