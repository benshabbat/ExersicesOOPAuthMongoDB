# תרגיל 07 - Mocking וסימולציות 🎭

## מטרה
ללמוד ליצור mocks, stubs, ו-spies לבדיקת קוד מבלי להסתמך על תלויות חיצוניות.

## רקע
לעיתים אנחנו רוצים לבדוק קוד בלי להתחבר לשרת אמיתי, DB, או קובץ.
Mocking עוזר לנו לסמלץ התנהגות ולבדוק את הקוד שלנו בבידוד.

## תיאוריה

### Mock Function

```javascript
import { mock } from 'node:test';

// יצירת mock function
const mockFn = mock.fn();

// קריאה ל-mock
mockFn('arg1', 'arg2');

// בדיקה שה-mock נקרא
assert.strictEqual(mockFn.mock.calls.length, 1);
assert.deepStrictEqual(mockFn.mock.calls[0].arguments, ['arg1', 'arg2']);
```

### Mock עם Return Value

```javascript
const mockFn = mock.fn(() => 'mocked result');
const result = mockFn();
assert.strictEqual(result, 'mocked result');
```

## תרגילים

### תרגיל 7.1 - Mock Function בסיסי 🎯
צור mock function ובדוק אותו.

```javascript
// צור mock function
// קרא לו עם ארגומנטים
// בדוק שהוא נקרא
// בדוק את הארגומנטים
```

### תרגיל 7.2 - Mock עם Return Value 🔄
צור mock שמחזיר ערך ספציפי.

```javascript
function getUserName(getUserFn, userId) {
  const user = getUserFn(userId);
  return user.name;
}

// צור mock של getUserFn
// בדוק שgetUserName משתמש בו נכון
```

### תרגיל 7.3 - ספירת קריאות 📊
בדוק כמה פעמים פונקציה נקראה.

```javascript
function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn(i);
  }
}

// צור mock
// השתמש ב-repeat
// בדוק שה-mock נקרא את מספר הפעמים הנכון
```

### תרגיל 7.4 - Spy על פונקציה קיימת 🔍
צור spy לפונקציה קיימת.

```javascript
const calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

// צור spy על calculator.add
// קרא לפונקציה
// בדוק שהיא נקראה עם הארגומנטים הנכונים
```

### תרגיל 7.5 - Mock של API Call 🌐
סמלץ קריאת API.

```javascript
async function fetchUserData(fetchFn, userId) {
  const response = await fetchFn(`/api/users/${userId}`);
  return response;
}

// צור mock async function
// בדוק שfetchUserData עובד נכון
```

### תרגיל 7.6 - Mock עם שגיאות ❌
בדוק טיפול בשגיאות עם mock.

```javascript
async function handleApiCall(apiFn) {
  try {
    return await apiFn();
  } catch (error) {
    return { error: error.message };
  }
}

// צור mock שזורק שגיאה
// בדוק שhandleApiCall מטפל בה נכון
```

### תרגיל 7.7 - Mock של כמה Calls 🔢
צור mock שמחזיר ערכים שונים בכל קריאה.

```javascript
function processItems(getItemFn, count) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(getItemFn(i));
  }
  return items;
}

// צור mock שמחזיר ערכים שונים
// בדוק את processItems
```

### תרגיל 7.8 - Mock של Module 📦
סמלץ module שלם.

```javascript
// נניח שיש לנו logger module
const realLogger = {
  log: (msg) => console.log(msg),
  error: (msg) => console.error(msg)
};

function processData(data, logger) {
  logger.log('Processing started');
  // עיבוד...
  logger.log('Processing completed');
  return data;
}

// צור mock logger
// בדוק שprocessData קורא ל-log בצורה נכונה
```

### תרגיל 7.9 - Timer Mocking ⏱️
בדוק קוד שמשתמש ב-setTimeout.

```javascript
function delayedGreet(name, callback) {
  setTimeout(() => {
    callback(`Hello, ${name}!`);
  }, 1000);
}

// בדוק את delayedGreet בלי לחכות שנייה
// רמז: צור mock של callback
```

### תרגיל 7.10 - תרגיל סיכום מלא 🎓
צור מערכת מלאה עם mocks.

```javascript
// מערכת הזמנות עם dependencies

class OrderService {
  constructor(database, emailService, paymentService) {
    this.database = database;
    this.emailService = emailService;
    this.paymentService = paymentService;
  }

  async createOrder(userId, items, amount) {
    // שמור במסד נתונים
    const order = await this.database.save({
      userId,
      items,
      amount,
      status: 'pending'
    });

    // בצע תשלום
    const payment = await this.paymentService.charge(amount);

    if (payment.success) {
      // עדכן סטטוס
      await this.database.update(order.id, { status: 'paid' });
      
      // שלח אימייל
      await this.emailService.send(userId, 'Order confirmed');
      
      return { success: true, orderId: order.id };
    } else {
      return { success: false, error: 'Payment failed' };
    }
  }
}

// צור mocks עבור:
// - database (save, update)
// - emailService (send)
// - paymentService (charge)

// כתוב בדיקות:
// 1. הזמנה מוצלחת
// 2. תשלום נכשל
// 3. בדוק שכל ה-services נקראו בסדר הנכון
```

## דוגמאות

### דוגמה מלאה

```javascript
import { test, mock } from 'node:test';
import assert from 'node:assert';

test('mock function example', () => {
  // יצירת mock
  const mockFn = mock.fn((x) => x * 2);
  
  // שימוש
  const result = mockFn(5);
  
  // בדיקות
  assert.strictEqual(result, 10);
  assert.strictEqual(mockFn.mock.calls.length, 1);
  assert.deepStrictEqual(mockFn.mock.calls[0].arguments, [5]);
});
```

## הרצת הבדיקות

```bash
node --test exercise-07-mocking.test.js
```

## טיפים 💡
1. Mock רק מה שצריך - אל תעשה over-mocking
2. בדוק שה-mock נקרא עם הפרמטרים הנכונים
3. בדוק את מספר הקריאות
4. השתמש ב-mocks כדי לבודד את הקוד שלך
5. נקה mocks אחרי כל בדיקה

## מה הלאה? ⏭️
עבור ל[תרגיל 08 - בדיקות Classes](./exercise-08-class-tests.md)
