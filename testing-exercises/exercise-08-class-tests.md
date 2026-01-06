# תרגיל 08 - בדיקות Classes (OOP) 🏛️

## מטרה
ללמוד לבדוק מחלקות, inheritance, ומתודות.

## רקע
בתכנות מונחה עצמים, אנחנו עובדים הרבה עם מחלקות. נלמד לבדוק אותן ביסודיות.

## תיאוריה

### בדיקת Class

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

test('Person נוצר נכון', () => {
  const person = new Person('Alice', 25);
  assert.strictEqual(person.name, 'Alice');
  assert.strictEqual(person.age, 25);
});

test('greet מחזיר הודעה נכונה', () => {
  const person = new Person('Bob', 30);
  assert.strictEqual(person.greet(), "Hello, I'm Bob");
});
```

## תרגילים

### תרגיל 8.1 - Class פשוט ✅
צור class ובדוק אותו.

```javascript
class Counter {
  constructor(initialValue = 0) {
    // כתוב כאן
  }

  increment() {
    // כתוב כאן
  }

  decrement() {
    // כתוב כאן
  }

  getValue() {
    // כתוב כאן
  }

  reset() {
    // כתוב כאן
  }
}

// כתוב בדיקות לכל המתודות
```

### תרגיל 8.2 - Class עם Getters/Setters 🔐
בדוק getters ו-setters.

```javascript
class Temperature {
  constructor(celsius) {
    // כתוב כאן
  }

  get fahrenheit() {
    // החזר celsius בפרנהייט
  }

  set fahrenheit(value) {
    // קבע celsius מפרנהייט
  }
}

// בדוק המרות
```

### תרגיל 8.3 - Class עם Validation ✔️
בדוק ולידציה.

```javascript
class Email {
  constructor(address) {
    // ולידציה שהאימייל תקין
  }

  getDomain() {
    // החזר את הדומיין
  }

  getLocalPart() {
    // החזר את החלק לפני @
  }
}

// בדוק אימיילים תקינים ולא תקינים
```

### תרגיל 8.4 - Inheritance (ירושה) 🧬
בדוק מחלקות עם ירושה.

```javascript
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

// בדוק שכל הכלבים והחתולים עובדים נכון
```

### תרגיל 8.5 - Static Methods 📊
בדוק מתודות static.

```javascript
class MathUtils {
  static add(a, b) {
    // כתוב כאן
  }

  static multiply(a, b) {
    // כתוב כאן
  }

  static factorial(n) {
    // כתוב כאן
  }

  static isPrime(n) {
    // כתוב כאן
  }
}

// בדוק את כל המתודות
```

### תרגיל 8.6 - Private Fields 🔒
בדוק private fields (#).

```javascript
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

// בדוק שלא ניתן לגשת ישירות ל-#balance
// בדוק את כל המתודות
```

### תרגיל 8.7 - Class עם Events 📡
צור class שמשדר אירועים.

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    // כתוב כאן
  }

  emit(event, data) {
    // כתוב כאן
  }

  off(event, listener) {
    // כתוב כאן
  }
}

// בדוק רישום, שידור, והסרה של אירועים
```

### תרגיל 8.8 - Collection Class 📚
צור class לניהול אוסף.

```javascript
class Collection {
  constructor() {
    this.items = [];
  }

  add(item) {
    // כתוב כאן
  }

  remove(item) {
    // כתוב כאן
  }

  find(predicate) {
    // כתוב כאן
  }

  filter(predicate) {
    // כתוב כאן
  }

  map(fn) {
    // כתוב כאן
  }

  get length() {
    // כתוב כאן
  }
}

// כתוב בדיקות מקיפות
```

### תרגיל 8.9 - Async Class Methods ⚡
בדוק מתודות אסינכרוניות במחלקה.

```javascript
class UserService {
  constructor() {
    this.users = [];
  }

  async fetchUser(id) {
    // סימולציה של קריאה לשרת
  }

  async saveUser(user) {
    // סימולציה של שמירה
  }

  async deleteUser(id) {
    // סימולציה של מחיקה
  }
}

// בדוק את כל המתודות האסינכרוניות
```

### תרגיל 8.10 - פרויקט מלא: Shopping Cart 🛒
צור מערכת עגלת קניות מלאה.

```javascript
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
    // בדוק זמינות
    // הוסף או עדכן כמות
  }

  removeItem(productId) {
    // הסר מוצר
  }

  updateQuantity(productId, newQuantity) {
    // עדכן כמות
  }

  getTotal() {
    // חשב סכום כולל
  }

  clear() {
    // נקה עגלה
  }

  getItemCount() {
    // החזר מספר פריטים
  }

  checkout() {
    // בצע הזמנה
    // עדכן מלאי
  }
}

// כתוב לפחות 15 בדיקות:
// 1. יצירת מוצר
// 2. בדיקת זמינות
// 3. הוספת פריט לעגלה
// 4. הסרת פריט
// 5. עדכון כמות
// 6. חישוב סכום ביניים
// 7. חישוב סכום כולל
// 8. ניקוי עגלה
// 9. ספירת פריטים
// 10. checkout מוצלח
// 11. checkout עם מוצר לא זמין
// 12. הוספת מוצר כשהמלאי אפס
// 13. עדכון לכמות שלילית
// 14. עגלה ריקה
// 15. מספר פריטים מאותו מוצר
```

## הרצת הבדיקות

```bash
node --test exercise-08-class-tests.test.js
```

## טיפים 💡
1. בדוק את ה-constructor
2. בדוק כל מתודה בנפרד
3. בדוק getters ו-setters
4. בדוק inheritance ו-polymorphism
5. בדוק מקרי קצה
6. בדוק private fields באופן עקיף

## מה הלאה? ⏭️
כל הכבוד! 🎉 סיימת את כל התרגילים הבסיסיים והמתקדמים!

עכשיו את/ה יכול/ה:
- לכתוב בדיקות מקצועיות
- לבדוק קוד מורכב
- להשתמש ב-mocks ו-hooks
- לבדוק קוד אסינכרוני
- לבדוק מחלקות ו-OOP

המשך לתרגל ולכתוב בדיקות בפרויקטים שלך! 🚀
