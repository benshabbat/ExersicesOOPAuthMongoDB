// תרגיל 07 - Mocking וסימולציות
// =============================
// הוראות: צור mocks וספאים לבדיקת קוד
// הרץ עם: node --test exercise-07-mocking.test.js

import { test, mock } from 'node:test';
import assert from 'node:assert';

// ===========================================
// תרגיל 7.1 - Mock Function בסיסי
// ===========================================

test('mock function נקרא', () => {
  // צור mock
  // קרא לו
  // בדוק שהוא נקרא
});

// ===========================================
// תרגיל 7.2 - Mock עם Return Value
// ===========================================

function getUserName(getUserFn, userId) {
  const user = getUserFn(userId);
  return user.name;
}

test('getUserName משתמש ב-getUserFn', () => {
  // צור mock
  // בדוק
});

// ===========================================
// תרגיל 7.3 - ספירת קריאות
// ===========================================

function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn(i);
  }
}

test('repeat קורא לפונקציה מספר פעמים', () => {
  // צור mock
  // השתמש ב-repeat
  // בדוק מספר קריאות
});

// ===========================================
// תרגיל 7.4 - Spy על פונקציה קיימת
// ===========================================

const calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

test('spy על calculator.add', () => {
  // צור spy
  // קרא לפונקציה
  // בדוק
});

// ===========================================
// תרגיל 7.5 - Mock של API Call
// ===========================================

async function fetchUserData(fetchFn, userId) {
  const response = await fetchFn(`/api/users/${userId}`);
  return response;
}

test('fetchUserData משתמש ב-fetchFn', async () => {
  // צור mock async
  // בדוק
});

// ===========================================
// תרגיל 7.6 - Mock עם שגיאות
// ===========================================

async function handleApiCall(apiFn) {
  try {
    return await apiFn();
  } catch (error) {
    return { error: error.message };
  }
}

test('handleApiCall מטפל בשגיאות', async () => {
  // צור mock שזורק שגיאה
  // בדוק
});

// ===========================================
// תרגיל 7.7 - Mock של כמה Calls
// ===========================================

function processItems(getItemFn, count) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(getItemFn(i));
  }
  return items;
}

test('processItems קורא לgetItemFn מספר פעמים', () => {
  // צור mock
  // בדוק
});

// ===========================================
// תרגיל 7.8 - Mock של Module
// ===========================================

function processData(data, logger) {
  logger.log('Processing started');
  // עיבוד...
  logger.log('Processing completed');
  return data;
}

test('processData משתמש ב-logger', () => {
  // צור mock logger
  // בדוק שlog נקרא פעמיים
});

// ===========================================
// תרגיל 7.9 - Timer Mocking
// ===========================================

function delayedGreet(name, callback) {
  setTimeout(() => {
    callback(`Hello, ${name}!`);
  }, 1000);
}

test('delayedGreet קורא ל-callback', (t, done) => {
  // צור mock callback
  // בדוק
});

// ===========================================
// תרגיל 7.10 - מערכת הזמנות מלאה
// ===========================================

class OrderService {
  constructor(database, emailService, paymentService) {
    this.database = database;
    this.emailService = emailService;
    this.paymentService = paymentService;
  }

  async createOrder(userId, items, amount) {
    const order = await this.database.save({
      userId,
      items,
      amount,
      status: 'pending'
    });

    const payment = await this.paymentService.charge(amount);

    if (payment.success) {
      await this.database.update(order.id, { status: 'paid' });
      await this.emailService.send(userId, 'Order confirmed');
      return { success: true, orderId: order.id };
    } else {
      return { success: false, error: 'Payment failed' };
    }
  }
}

test('createOrder - הזמנה מוצלחת', async () => {
  // צור mocks
  const mockDatabase = {
    save: mock.fn(async (order) => ({ ...order, id: 123 })),
    update: mock.fn(async () => {})
  };
  
  // השלם את הבדיקה
});

test('createOrder - תשלום נכשל', async () => {
  // צור mocks
  // בדוק מקרה של כשלון
});

test('createOrder - סדר קריאות נכון', async () => {
  // בדוק שהפונקציות נקראו בסדר הנכון
});

console.log('\n✅ סיימת את תרגיל 07!');
console.log('💡 עכשיו את/ה יודע/ת ליצור mocks ו-spies!');
