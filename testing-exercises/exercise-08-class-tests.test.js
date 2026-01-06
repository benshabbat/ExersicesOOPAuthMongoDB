// תרגיל 08 - בדיקות Classes (OOP)
// =============================
// הוראות: צור מחלקות וכתוב בדיקות עבורן
// הרץ עם: node --test exercise-08-class-tests.test.js

import { test } from 'node:test';
import assert from 'node:assert';

// ===========================================
// תרגיל 8.1 - Class פשוט
// ===========================================

class Counter {
  // כתוב את המחלקה כאן
}

test('Counter נוצר עם ערך התחלתי', () => {
  // כתוב בדיקה
});

test('increment מגדיל את הערך', () => {
  // כתוב בדיקה
});

test('decrement מקטין את הערך', () => {
  // כתוב בדיקה
});

test('reset מאפס את הערך', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 8.2 - Getters/Setters
// ===========================================

class Temperature {
  // כתוב את המחלקה כאן
}

test('Temperature ממיר צלזיוס לפרנהייט', () => {
  // כתוב בדיקה
});

test('Temperature מגדיר צלזיוס מפרנהייט', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 8.3 - Validation
// ===========================================

class Email {
  // כתוב את המחלקה כאן
}

test('Email תקין נוצר', () => {
  // כתוב בדיקה
});

test('Email לא תקין זורק שגיאה', () => {
  // כתוב בדיקה
});

test('getDomain מחזיר דומיין', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 8.4 - Inheritance
// ===========================================

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return 'Some sound';
  }
}

class Dog extends Animal {
  makeSound() {
    return 'Woof!';
  }

  fetch() {
    return `${this.name} is fetching`;
  }
}

class Cat extends Animal {
  makeSound() {
    return 'Meow!';
  }
}

test('Dog יורש מ-Animal', () => {
  // כתוב בדיקה
});

test('Dog עושה Woof', () => {
  // כתוב בדיקה
});

test('Cat עושה Meow', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 8.5 - Static Methods
// ===========================================

class MathUtils {
  // כתוב מתודות static כאן
}

test('MathUtils.add מחבר', () => {
  // כתוב בדיקה
});

test('MathUtils.factorial מחשב עצרת', () => {
  // כתוב בדיקה
});

test('MathUtils.isPrime מזהה ראשוני', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 8.6 - Private Fields
// ===========================================

class BankAccount {
  #balance = 0;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  getBalance() {
    return this.#balance;
  }
}

test('BankAccount נוצר עם יתרה התחלתית', () => {
  // כתוב בדיקה
});

test('deposit מוסיף כסף', () => {
  // כתוב בדיקה
});

test('withdraw מוציא כסף', () => {
  // כתוב בדיקה
});

test('לא ניתן למשוך יותר מהיתרה', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 8.7 - Event Emitter
// ===========================================

class EventEmitter {
  // כתוב את המחלקה כאן
}

test('EventEmitter רושם listener', () => {
  // כתוב בדיקה
});

test('EventEmitter משדר אירוע', () => {
  // כתוב בדיקה
});

test('EventEmitter מסיר listener', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 8.8 - Collection
// ===========================================

class Collection {
  // כתוב את המחלקה כאן
}

test('Collection מוסיף פריט', () => {
  // כתוב בדיקה
});

test('Collection מסיר פריט', () => {
  // כתוב בדיקה
});

test('Collection מוצא פריט', () => {
  // כתוב בדיקה
});

test('Collection מסנן פריטים', () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 8.9 - Async Class Methods
// ===========================================

class UserService {
  constructor() {
    this.users = [];
  }

  async fetchUser(id) {
    // כתוב כאן
  }

  async saveUser(user) {
    // כתוב כאן
  }

  async deleteUser(id) {
    // כתוב כאן
  }
}

test('UserService מביא משתמש', async () => {
  // כתוב בדיקה
});

test('UserService שומר משתמש', async () => {
  // כתוב בדיקה
});

// ===========================================
// תרגיל 8.10 - Shopping Cart (פרויקט מלא)
// ===========================================

class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  isAvailable() {
    return this.stock > 0;
  }
}

class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getSubtotal() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    // כתוב כאן
  }

  removeItem(productId) {
    // כתוב כאן
  }

  updateQuantity(productId, newQuantity) {
    // כתוב כאן
  }

  getTotal() {
    // כתוב כאן
  }

  clear() {
    // כתוב כאן
  }

  getItemCount() {
    // כתוב כאן
  }

  checkout() {
    // כתוב כאן
  }
}

// כתוב 15 בדיקות מקיפות:

test('Product נוצר נכון', () => {
  // כתוב בדיקה
});

test('Product.isAvailable בודק זמינות', () => {
  // כתוב בדיקה
});

test('CartItem מחשב סכום ביניים', () => {
  // כתוב בדיקה
});

test('ShoppingCart מוסיף פריט', () => {
  // כתוב בדיקה
});

test('ShoppingCart מסיר פריט', () => {
  // כתוב בדיקה
});

test('ShoppingCart מעדכן כמות', () => {
  // כתוב בדיקה
});

test('ShoppingCart מחשב סכום כולל', () => {
  // כתוב בדיקה
});

test('ShoppingCart מנקה עגלה', () => {
  // כתוב בדיקה
});

test('ShoppingCart סופר פריטים', () => {
  // כתוב בדיקה
});

test('checkout מוצלח', () => {
  // כתוב בדיקה
});

test('לא ניתן להוסיף מוצר לא זמין', () => {
  // כתוב בדיקה
});

test('לא ניתן לעדכן לכמות שלילית', () => {
  // כתוב בדיקה
});

test('עגלה ריקה מחזירה 0', () => {
  // כתוב בדיקה
});

test('הוספת מספר פריטים מאותו מוצר', () => {
  // כתוב בדיקה
});

test('checkout מעדכן מלאי', () => {
  // כתוב בדיקה
});

console.log('\n🎉 כל הכבוד! סיימת את כל התרגילים!');
console.log('✅ עכשיו את/ה מומחה/ית לבדיקות ב-Node.js!');
console.log('💡 המשך לתרגל בפרויקטים שלך!');
