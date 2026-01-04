# תרגיל 9: פולימורפיזם (Polymorphism) 🎭

## 🎯 מטרות התרגיל

בתרגיל זה נלמד:
- ✅ **Polymorphism** - פולימורפיזם - אותה מתודה, התנהגויות שונות
- ✅ **Method Overriding** - דריסת מתודות בצורה משמעותית
- ✅ **Common Interface** - ממשק משותף למחלקות שונות
- ✅ **Dynamic Behavior** - התנהגות דינמית בזמן ריצה
- ✅ **Real-world Examples** - דוגמאות מעולם האמיתי

---

## 💳 חלק א': מערכת תשלומים - דוגמה קלאסית

### מטרה
צור מערכת תשלומים שתומכת במספר אמצעי תשלום שונים. כל אמצעי מעבד תשלומים אחרת.

### דרישות
- **Payment**: מחלקת בסיס עם `process()`
- **CreditCardPayment**: תשלום בכרטיס אשראי
- **PayPalPayment**: תשלום דרך PayPal
- **CashPayment**: תשלום במזומן
- **BitcoinPayment**: תשלום ב-Bitcoin

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
        console.log(`מעבד תשלום של ₪${this.amount} עבור ${this.description}`);
        this.status = "completed";
    }
    
    getDetails() {
        return `תשלום: ₪${this.amount}, סטטוס: ${this.status}`;
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
        console.log(`💳 מעבד תשלום בכרטיס אשראי ${this.cardNumber}`);
        console.log(`   סכום: ₪${this.amount}`);
        console.log(`   אימות CVV...`);
        console.log(`   ✅ התשלום אושר!`);
        this.status = "completed";
    }
    
    getDetails() {
        return `${super.getDetails()}, אמצעי תשלום: ${this.paymentMethod}, כרטיס: ${this.cardNumber}`;
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
        console.log(`🅿️ מעבד תשלום דרך PayPal`);
        console.log(`   חשבון: ${this.email}`);
        console.log(`   סכום: ₪${this.amount}`);
        console.log(`   מתחבר ל-PayPal...`);
        console.log(`   ✅ התשלום הושלם!`);
        this.status = "completed";
    }
}

class CashPayment extends Payment {
    constructor(amount, description) {
        super(amount, description);
        this.paymentMethod = "מזומן";
    }
    
    // Override process
    process() {
        // Write your code here
        // Print appropriate message for cash payment 💵
        console.log(`💵 מקבל תשלום במזומן`);
        console.log(`   סכום: ₪${this.amount}`);
        console.log(`   ✅ התשלום בוצע!`);
        this.status = "completed";
    }
}

class BitcoinPayment extends Payment {
    constructor(amount, description, walletAddress) {
        // Write your code here
        super(amount, description);
        this.walletAddress = walletAddress;
        this.paymentMethod = "Bitcoin";
    }
    
    process() {
        console.log(`₿ מעבד תשלום ב-Bitcoin`);
        console.log(`   ארנק: ${this.walletAddress}`);
        console.log(`   סכום: ₪${this.amount}`);
        console.log(`   ממתין לאישור blockchain...`);
        console.log(`   ✅ התשלום אומת!`);
        this.status = "completed";
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
    new CreditCardPayment(500, "קניית נעליים", "1234567812345678", "123"),
    new PayPalPayment(250, "מנוי Netflix", "user@example.com"),
    new CashPayment(100, "קפה"),
    new BitcoinPayment(1000, "מחשב נייד", "1A2B3C4D5E6F7G8H")
];

// Iterate over all payments and process them
// Each payment is processed differently despite calling the same method!
payments.forEach(payment => processPayment(payment));
```

---

## 📐 חלק ב': מערכת צורות גיאומטריות

### מטרה
צור מערכת צורות שבה כל צורה מחשבת שטח והיקף אחרת.

### קוד להשלמה

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
        console.log(`צורה בצבע ${this.color}`);
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
        console.log(`⭕ עיגול ${this.color}, רדיוס: ${this.radius}`);
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        // Write your code here
        return this.width * this.height;
    }
    
    getPerimeter() {
        // Write your code here
        return 2 * (this.width + this.height);
    }
    
    describe() {
        console.log(`▭ מלבן ${this.color}, ${this.width}x${this.height}`);
    }
}

class Triangle extends Shape {
    constructor(color, base, height, side1, side2, side3) {
        super(color);
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    getArea() {
        // Triangle area = (base * height) / 2
        return (this.base * this.height) / 2;
    }
    
    getPerimeter() {
        // Triangle perimeter = sum of all sides
        return this.side1 + this.side2 + this.side3;
    }
    
    describe() {
        console.log(`△ משולש ${this.color}, בסיס: ${this.base}`);
    }
}

// Function that prints info about any shape - polymorphism!
function printShapeInfo(shape) {
    shape.describe();
    console.log(`  שטח: ${shape.getArea().toFixed(2)}`);
    console.log(`  היקף: ${shape.getPerimeter().toFixed(2)}`);
    console.log();
}

// Tests
console.log("\n\n=== Geometric Shapes - Polymorphism ===");
const shapes = [
    new Circle("אדום", 5),
    new Rectangle("כחול", 10, 6),
    new Triangle("ירוק", 8, 6, 6, 7, 9)
];

shapes.forEach(shape => printShapeInfo(shape));

// Calculate total area of all shapes
const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
console.log(`סה"כ שטח של כל הצורות: ${totalArea.toFixed(2)}`);
```

---

## 📢 חלק ג': מערכת התראות

### מטרה
צור מערכת התראות שיכולה לשלוח הודעות בדרכים שונות.

### קוד להשלמה

```javascript
class Notification {
    constructor(message, recipient) {
        this.message = message;
        this.recipient = recipient;
        this.timestamp = new Date();
        this.sent = false;
    }
    
    send() {
        console.log(`שולח התראה ל-${this.recipient}: ${this.message}`);
        this.sent = true;
    }
}

class EmailNotification extends Notification {
    constructor(message, recipient, subject) {
        super(message, recipient);
        this.subject = subject;
    }
    
    send() {
        console.log(`📧 שולח אימייל`);
        console.log(`   אל: ${this.recipient}`);
        console.log(`   נושא: ${this.subject}`);
        console.log(`   הודעה: ${this.message}`);
        console.log(`   ✅ האימייל נשלח!`);
        this.sent = true;
    }
}

class SMSNotification extends Notification {
    constructor(message, recipient, phoneNumber) {
        super(message, recipient);
        this.phoneNumber = phoneNumber;
    }
    
    send() {
        // Write your code here
        // Send SMS 📱
        console.log(`📱 שולח SMS`);
        console.log(`   אל: ${this.phoneNumber}`);
        console.log(`   הודעה: ${this.message}`);
        console.log(`   ✅ ה-SMS נשלח!`);
        this.sent = true;
    }
}

class PushNotification extends Notification {
    constructor(message, recipient, deviceId) {
        super(message, recipient);
        this.deviceId = deviceId;
    }
    
    send() {
        console.log(`📲 שולח push notification`);
        console.log(`   מכשיר: ${this.deviceId}`);
        console.log(`   הודעה: ${this.message}`);
        console.log(`   ✅ ההתראה נשלחה!`);
        this.sent = true;
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
        "פרויקט חדש נוצר",
        "user@example.com",
        "עדכון חשוב"
    ),
    new SMSNotification(
        "קוד האימות שלך: 123456",
        "יוסי",
        "050-1234567"
    ),
    new PushNotification(
        "יש לך הודעה חדשה",
        "משתמש123",
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
