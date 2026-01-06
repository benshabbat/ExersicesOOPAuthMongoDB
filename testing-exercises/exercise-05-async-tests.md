# תרגיל 05 - בדיקות Async (אסינכרוני) ⚡

## מטרה
ללמוד לבדוק קוד אסינכרוני - Promises, async/await, ו-callbacks.

## רקע
הרבה קוד ב-JavaScript הוא אסינכרוני - קריאות API, קריאה מקבצים, טיימרים.
נלמד לבדוק קוד כזה נכון.

## תיאוריה

### בדיקת Promise

```javascript
test('promise מחזיר ערך נכון', async () => {
  const result = await fetchData();
  assert.strictEqual(result, 'data');
});
```

### בדיקת שגיאה אסינכרונית

```javascript
test('promise נכשל', async () => {
  await assert.rejects(
    async () => await failingFunction(),
    Error
  );
});
```

### בדיקת setTimeout

```javascript
test('טיימר עובד', async () => {
  const result = await new Promise(resolve => {
    setTimeout(() => resolve('done'), 100);
  });
  assert.strictEqual(result, 'done');
});
```

## תרגילים

### תרגיל 5.1 - Promise בסיסי 🎯
צור פונקציה שמחזירה Promise ובדוק אותה.

```javascript
function asyncAdd(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 100);
  });
}

// כתוב בדיקה async שבודקת את התוצאה
```

### תרגיל 5.2 - async/await 🔄
צור פונקציות async ובדוק אותן.

```javascript
async function fetchUser(id) {
  // סימולציה של קריאה לשרת
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 50);
  });
}

// בדוק שהפונקציה מחזירה משתמש נכון
```

### תרגיל 5.3 - Promise.all 📦
בדוק פעולות מקבילות.

```javascript
async function fetchMultipleUsers(ids) {
  const promises = ids.map(id => fetchUser(id));
  return Promise.all(promises);
}

// בדוק שהפונקציה מחזירה את כל המשתמשים
```

### תרגיל 5.4 - טיפול בשגיאות ❌
צור פונקציה שעלולה להיכשל ובדוק אותה.

```javascript
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

// בדוק מקרה מוצלח
// בדוק מקרה שנכשל
```

### תרגיל 5.5 - retry logic 🔁
צור פונקציה שמנסה שוב במקרה של כשלון.

```javascript
let attempts = 0;

async function unreliableFunction() {
  attempts++;
  if (attempts < 3) {
    throw new Error('Failed');
  }
  return 'Success';
}

async function retry(fn, maxAttempts) {
  // כתוב לוגיקה שמנסה שוב עד maxAttempts פעמים
}

// בדוק שהפונקציה מצליחה אחרי מספר ניסיונות
```

### תרגיל 5.6 - timeout ⏱️
צור פונקציה עם timeout.

```javascript
async function withTimeout(promise, ms) {
  // החזר את ה-promise או timeout error
}

// בדוק שהפונקציה עובדת בזמן
// בדוק שהיא נכשלת אם לוקח יותר מדי זמן
```

### תרגיל 5.7 - שרשור Promises 🔗
צור שרשרת של פעולות async.

```javascript
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
  // הרץ את כל ה-steps ברצף
}

// בדוק את התוצאה הסופית
```

### תרגיל 5.8 - סימולציית API 🌐
צור פונקציות שמדמות קריאות API.

```javascript
const database = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

async function getUserById(id) {
  // סימולציה של קריאה ל-API
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

// כתוב בדיקות לכל הפונקציות
```

### תרגיל 5.9 - Promise.race 🏁
השתמש ב-Promise.race.

```javascript
async function fastest(promises) {
  return Promise.race(promises);
}

// בדוק שהפונקציה מחזירה את ה-promise המהיר ביותר
```

### תרגיל 5.10 - תרגיל סיכום 🎓
צור מערכת async מלאה לניהול משימות.

```javascript
const tasks = [];

async function addTask(title, description) {
  // הוסף משימה (async)
}

async function completeTask(id) {
  // סמן משימה כהושלמה (async)
}

async function getTasks(filter) {
  // החזר משימות לפי פילטר
  // filter: 'all', 'completed', 'pending'
}

async function deleteTask(id) {
  // מחק משימה (async)
}

// כתוב בדיקות מקיפות
// בדוק מקרים מוצלחים ושגיאות
```

## דוגמאות קוד

### בדיקת async function

```javascript
test('פונקציה async מחזירה ערך', async () => {
  const result = await asyncFunction();
  assert.strictEqual(result, 'expected');
});
```

### בדיקת rejection

```javascript
test('פונקציה async נכשלת', async () => {
  await assert.rejects(
    async () => await failingFunction(),
    { message: 'Expected error message' }
  );
});
```

## הרצת הבדיקות

```bash
node --test exercise-05-async-tests.test.js
```

## טיפים 💡
1. **תמיד** השתמש ב-async/await בבדיקות אסינכרוניות
2. אל תשכח `await` - אחרת הבדיקה תעבור גם אם היא צריכה להיכשל
3. השתמש ב-`assert.rejects` לבדיקת שגיאות
4. שים לב לזמן ההרצה - אל תעשה בדיקות ארוכות מדי
5. נקה state בין בדיקות

## מה הלאה? ⏭️
עבור ל[תרגיל 06 - Hooks](./exercise-06-hooks.md)
