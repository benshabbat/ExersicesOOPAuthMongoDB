# Exercise 9: Polymorphism 🎭

## 🎯 Exercise Objectives

In this exercise we will learn:
- ✅ **Polymorphism** - Polymorphism - same method, different behaviors
- ✅ **Method Overriding** - Meaningful method overriding
- ✅ **Common Interface** - Common interface for different classes
- ✅ **Dynamic Behavior** - Dynamic behavior at runtime
- ✅ **Real-world Examples** - Real-world examples

---

## 💳 Part A: Payment System - Classic Example

### Goal
Create a payment system that supports multiple payment methods. Each method processes payments differently.

### Requirements
- **Payment**: Base class with `process()`
- **CreditCardPayment**: Credit card payment
- **PayPalPayment**: PayPal payment
- **CashPayment**: Cash payment
- **BitcoinPayment**: Bitcoin payment

### קוד להשלמה

```javascript
class Payment {
    constructor(amount, description) {
        this.amount = amount;
        this.description = description;
        this.date = new Date();
        this.status = "pending";
    }
    
    process() {
        console.log(`Processing payment of ₪${this.amount} for ${this.description}`);
        this.status = "completed";
    }
    
    getDetails() {
        return `Payment: ₪${this.amount}, Status: ${this.status}`;
    }
}

class CreditCardPayment extends Payment {
    constructor(amount, description, cardNumber, cvv) {
        super(amount, description);
        this.cardNumber = this.maskCardNumber(cardNumber);
        this.cvv = cvv;
        this.paymentMethod = "כרטיס אשראי";
    }
    
    maskCardNumber(cardNumber) {
        // Show only last 4 digits
        return `****-****-****-${cardNumber.slice(-4)}`;
    }
    
    // Override process - specific implementation for credit card
    process() {
        console.log(`💳 Processing credit card payment ${this.cardNumber}`);
        console.log(`   Amount: ₪${this.amount}`);
        console.log(`   Verifying CVV...`);
        console.log(`   ✅ Payment approved!`);
        this.status = "completed";
    }
    
    getDetails() {
        return `${super.getDetails()}, Payment method: ${this.paymentMethod}, Card: ${this.cardNumber}`;
    }
}

class PayPalPayment extends Payment {
    constructor(amount, description, email) {
        super(amount, description);
        this.email = email;
        this.paymentMethod = "PayPal";
    }
    
    // Override process
    process() {
        console.log(`🅿️ Processing payment through PayPal`);
        console.log(`   Account: ${this.email}`);
        console.log(`   Amount: ₪${this.amount}`);
        console.log(`   Connecting to PayPal...`);
        console.log(`   ✅ Payment completed!`);
        this.status = "completed";
    }
}

class CashPayment extends Payment {
    constructor(amount, description) {
        // Hint: Call super with amount and description
        // Set paymentMethod to "מזומן"
    }
    
    // Override process
    process() {
        // Hint: console.log cash payment messages 💵
        // Show amount
        // Set status to "completed"
    }
}

class BitcoinPayment extends Payment {
    constructor(amount, description, walletAddress) {
        // Hint: Call super with amount and description
        // Initialize walletAddress and paymentMethod
    }
    
    process() {
        // Hint: console.log Bitcoin payment messages ₿
        // Show wallet, amount, blockchain confirmation
        // Set status to "completed"
    }
}

// Function that processes any payment type - polymorphism in action!
function processPayment(payment) {
    console.log("\n--- Processing New Payment ---");
    payment.process(); // Each class responds differently!
    console.log(payment.getDetails());
}

// Tests - polymorphism in action
console.log("=== Payment System - Polymorphism ===");
const payments = [
    new CreditCardPayment(500, "Buy shoes", "1234567812345678", "123"),
    new PayPalPayment(250, "Netflix subscription", "user@example.com"),
    new CashPayment(100, "Coffee"),
    new BitcoinPayment(1000, "Laptop", "1A2B3C4D5E6F7G8H")
];

// Iterate over all payments and process them
// Each payment is processed differently despite calling the same method!
payments.forEach(payment => processPayment(payment));
```

---

## 📐 Part B: Geometric Shapes System

### Goal
Create a shapes system where each shape calculates area and perimeter differently.

### Code to Complete

```javascript
class Shape {
    constructor(color) {
        this.color = color;
    }
    
    // Basic method that child classes should override
    getArea() {
        return 0;
    }
    
    getPerimeter() {
        return 0;
    }
    
    describe() {
        console.log(`Shape in ${this.color} color`);
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    
    describe() {
        console.log(`⭕ ${this.color} circle, Radius: ${this.radius}`);
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        // Hint: Call super with color
        // Initialize width and height
    }
    
    getArea() {
        // Hint: Return width * height
    }
    
    getPerimeter() {
        // Hint: Return 2 * (width + height)
    }
    
    describe() {
        // Hint: console.log rectangle info with color and dimensions
    }
}

class Triangle extends Shape {
    constructor(color, base, height, side1, side2, side3) {
        // Hint: Call super with color
        // Initialize base, height, and all three sides
    }
    
    getArea() {
        // Hint: Triangle area formula: (base * height) / 2
    }
    
    getPerimeter() {
        // Hint: Sum all three sides
    }
    
    describe() {
        // Hint: console.log triangle info
    }
}

// Function that prints info about any shape - polymorphism!
function printShapeInfo(shape) {
    shape.describe();
    console.log(`  Area: ${shape.getArea().toFixed(2)}`);
    console.log(`  Perimeter: ${shape.getPerimeter().toFixed(2)}`);
    console.log();
}

// Tests
console.log("\n\n=== Geometric Shapes - Polymorphism ===");
const shapes = [
    new Circle("red", 5),
    new Rectangle("blue", 10, 6),
    new Triangle("green", 8, 6, 6, 7, 9)
];

shapes.forEach(shape => printShapeInfo(shape));

// Calculate total area of all shapes
const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
console.log(`Total area of all shapes: ${totalArea.toFixed(2)}`);
```

---

## 📢 Part C: Notification System

### Goal
Create a notification system that can send messages in different ways.

### Code to Complete

```javascript
class Notification {
    constructor(message, recipient) {
        this.message = message;
        this.recipient = recipient;
        this.timestamp = new Date();
        this.sent = false;
    }
    
    send() {
        console.log(`Sending notification to ${this.recipient}: ${this.message}`);
        this.sent = true;
    }
}

class EmailNotification extends Notification {
    constructor(message, recipient, subject) {
        super(message, recipient);
        this.subject = subject;
    }
    
    send() {
        console.log(`📧 Sending email`);
        console.log(`   To: ${this.recipient}`);
        console.log(`   Subject: ${this.subject}`);
        console.log(`   Message: ${this.message}`);
        console.log(`   ✅ Email sent!`);
        this.sent = true;
    }
}

class SMSNotification extends Notification {
    constructor(message, recipient, phoneNumber) {
        // Hint: Call super with message and recipient
        // Initialize phoneNumber
    }
    
    send() {
        // Hint: console.log SMS sending messages 📱
        // Show phone number and message
        // Set sent to true
    }
}

class PushNotification extends Notification {
    constructor(message, recipient, deviceId) {
        // Hint: Call super with message and recipient
        // Initialize deviceId
    }
    
    send() {
        // Hint: console.log push notification messages 📲
        // Show device and message
        // Set sent to true
    }
}

// Function that sends any notification type
function sendNotification(notification) {
    notification.send(); // Each class sends differently!
    console.log();
}

// Tests
console.log("\n\n=== Notification System - Polymorphism ===");
const notifications = [
    new EmailNotification(
        "New project created",
        "user@example.com",
        "Important update"
    ),
    new SMSNotification(
        "Your verification code: 123456",
        "Yossi",
        "050-1234567"
    ),
    new PushNotification(
        "You have a new message",
        "user123",
        "device-abc-123"
    )
];

notifications.forEach(notification => sendNotification(notification));
```

---

## 🎓 מה למדנו?

### מהו פולימורפיזם?

```
פולימורפיזם = "צורות רבות"
אותה מתודה → התנהגויות שונות
```

### דוגמה מהחיים
```
כולם יכולים "לתקשר":
- כלב: נובח 🐕
- חתול: מיילל 🐱
- ציפור: מצייצת 🐦

אותה פעולה (תקשורת), ביצוע שונה!
```

### בקוד
```javascript
// כולם יורשים מ-Payment
// כולם מממשים את process()
// אבל כל אחד עושה זאת אחרת!

creditCard.process(); // 💳 עיבוד כרטיס
paypal.process();     // 🅿️ חיבור ל-PayPal
cash.process();       // 💵 קבלת מזומן
```

---

## 💡 טיפים

1. **ממשק משותף** - כל המחלקות צריכות אותן מתודות בסיסיות
2. **התנהגות ייחודית** - כל מחלקה מממשת בדרך שלה
3. **קוד גנרי** - פונקציה אחת עובדת עם כל הסוגים
4. **הרחבה קלה** - קל להוסיף סוגים חדשים

---

## 🚀 אתגרים נוספים

1. **הוסף BankTransferPayment** - העברה בנקאית
2. **צור Square** - ריבוע (מקרה מיוחד של מלבן)
3. **הוסף WhatsAppNotification** - התראת WhatsApp
4. **צור SlackNotification** - הודעת Slack
5. **הוסף Hexagon** - משושה עם 6 צלעות

---

## 📤 פלט צפוי

```
=== Payment System - Polymorphism ===

--- Processing New Payment ---
💳 מעבד תשלום בכרטיס אשראי ****-****-****-5678
   סכום: ₪500
   אימות CVV...
   ✅ התשלום אושר!
תשלום: ₪500, סטטוס: completed, אמצעי תשלום: כרטיס אשראי

--- Processing New Payment ---
🅿️ מעבד תשלום דרך PayPal
   חשבון: user@example.com
   סכום: ₪250
   מתחבר ל-PayPal...
   ✅ התשלום הושלם!
תשלום: ₪250, סטטוס: completed

=== Geometric Shapes - Polymorphism ===
⭕ עיגול אדום, רדיוס: 5
  שטח: 78.54
  היקף: 31.42

▭ מלבן כחול, 10x6
  שטח: 60.00
  היקף: 32.00

△ משולש ירוק, בסיס: 8
  שטח: 24.00
  היקף: 22.00

סה"כ שטח של כל הצורות: 162.54

=== Notification System - Polymorphism ===
📧 שולח אימייל
   אל: user@example.com
   נושא: עדכון חשוב
   הודעה: פרויקט חדש נוצר
   ✅ האימייל נשלח!

📱 שולח SMS
   אל: 050-1234567
   הודעה: קוד האימות שלך: 123456
   ✅ ה-SMS נשלח!

📲 שולח push notification
   מכשיר: device-abc-123
   הודעה: יש לך הודעה חדשה
   ✅ ההתראה נשלחה!
```

---

## 🎯 סיכום

**פולימורפיזם הוא אחד מעקרונות היסוד של OOP!**

- 🔹 מאפשר לנו לכתוב קוד גנרי
- 🔹 קל להרחיב ולתחזק
- 🔹 נותן גמישות רבה
- 🔹 משתמשים בו כל הזמן בעולם האמיתי

כל פעם שאתם רואים:
```javascript
array.forEach(item => item.process())
```

זה פולימורפיזם! כל `item` יכול להיות מסוג שונה, אבל כולם מממשים `process()`.
