// תרגיל 05 - בדיקות Async
// =============================
// הוראות: צור פונקציות async וכתוב בדיקות עבורן
// הרץ עם: node --test exercise-05-async-tests.test.js

import { test } from 'node:test';
import assert from 'node:assert';

// ===========================================
// תרגיל 5.1 - Promise בסיסי
// ===========================================

function asyncAdd(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 100);
  });
}

test('asyncAdd מחבר מספרים', async () => {
  // כתוב בדיקה async
});

// ===========================================
// תרגיל 5.2 - async/await
// ===========================================

async function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 50);
  });
}

test('fetchUser מחזיר משתמש', async () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 5.3 - Promise.all
// ===========================================

async function fetchMultipleUsers(ids) {
  // כתוב כאן
}

test('fetchMultipleUsers מחזיר מספר משתמשים', async () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 5.4 - טיפול בשגיאות
// ===========================================

async function divideAsync(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject(new Error('Division by zero'));
      } else {
        resolve(a / b);
      }
    }, 50);
  });
}

test('divideAsync מחלק נכון', async () => {
  // כתוב בדיקה למקרה מוצלח
});

test('divideAsync נכשל בחלוקה ב-0', async () => {
  // כתוב בדיקה עם assert.rejects
});

// ===========================================
// תרגיל 5.5 - retry logic
// ===========================================

let attempts = 0;

async function unreliableFunction() {
  attempts++;
  if (attempts < 3) {
    throw new Error('Failed');
  }
  return 'Success';
}

async function retry(fn, maxAttempts) {
  // כתוב כאן
}

test('retry מנסה שוב עד להצלחה', async () => {
  attempts = 0;
  // כתוב בדיקה
});

// ===========================================
// תרגיל 5.6 - timeout
// ===========================================

async function withTimeout(promise, ms) {
  // כתוב כאן
}

test('withTimeout מצליח בזמן', async () => {
  // כתוב בדיקה
});

test('withTimeout נכשל אם לוקח יותר מדי זמן', async () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 5.7 - שרשור Promises
// ===========================================

async function step1(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve(data + 1), 50);
  });
}

async function step2(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve(data * 2), 50);
  });
}

async function step3(data) {
  return new Promise(resolve => {
    setTimeout(() => resolve(data - 3), 50);
  });
}

async function pipeline(initialValue) {
  // כתוב כאן
}

test('pipeline מריץ את כל ה-steps', async () => {
  // כתוב בדיקה
  // initialValue = 5
  // אחרי step1: 6
  // אחרי step2: 12
  // אחרי step3: 9
});

// ===========================================
// תרגיל 5.8 - סימולציית API
// ===========================================

const database = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

async function getUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = database.find(u => u.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    }, 100);
  });
}

async function createUser(name, email) {
  // כתוב כאן
}

async function updateUser(id, updates) {
  // כתוב כאן
}

test('getUserById מחזיר משתמש קיים', async () => {
  // כתוב בדיקה
});

test('getUserById נכשל למשתמש לא קיים', async () => {
  // כתוב בדיקה
});

test('createUser יוצר משתמש חדש', async () => {
  // כתוב בדיקה
});

test('updateUser מעדכן משתמש', async () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 5.9 - Promise.race
// ===========================================

async function fastest(promises) {
  // כתוב כאן
}

test('fastest מחזיר את ה-promise המהיר ביותר', async () => {
  const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 200));
  const fast = new Promise(resolve => setTimeout(() => resolve('fast'), 50));
  // כתוב בדיקה
});

// ===========================================
// תרגיל 5.10 - מערכת ניהול משימות
// ===========================================

let tasks = [];

async function addTask(title, description) {
  // כתוב כאן
}

async function completeTask(id) {
  // כתוב כאן
}

async function getTasks(filter) {
  // כתוב כאן
}

async function deleteTask(id) {
  // כתוב כאן
}

test('addTask מוסיף משימה', async () => {
  tasks = [];
  // כתוב בדיקה
});

test('completeTask מסמן משימה כהושלמה', async () => {
  // כתוב בדיקה
});

test('getTasks מחזיר משימות מסוננות', async () => {
  // כתוב בדיקה
});

test('deleteTask מוחק משימה', async () => {
  // כתוב בדיקה
});

console.log('\n✅ סיימת את תרגיל 05!');
console.log('💡 עכשיו את/ה יודע/ת לבדוק קוד אסינכרוני!');
