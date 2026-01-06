/**
 * תרגיל 9: פולימורפיזם (Polymorphism)
 * רמת קושי: גבוהה
 * 
 * מטרה: להבין את מושג הפולימורפיזם - יכולת של אובייקטים שונים להגיב אחרת לאותה מתודה
 */

// חלק א': מערכת תשלומים - דוגמה קלאסית לפולימורפיזם
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

// מחלקת CreditCardPayment יורשת מ-Payment
class CreditCardPayment extends Payment {
    constructor(amount, description, cardNumber, cvv) {
        super(amount, description);
        this.cardNumber = this.maskCardNumber(cardNumber);
        this.cvv = cvv;
        this.paymentMethod = "כרטיס אשראי";
    }
    
    maskCardNumber(cardNumber) {
        // הצג רק 4 ספרות אחרונות
        return `****-****-****-${cardNumber.slice(-4)}`;
    }
    
    // דריסה של process - הטמעה ספציפית לכרטיס אשראי
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

// מחלקת PayPalPayment יורשת מ-Payment
class PayPalPayment extends Payment {
    constructor(amount, description, email) {
        super(amount, description);
        this.email = email;
        this.paymentMethod = "PayPal";
    }
    
    // דריסה של process
    process() {
        console.log(`🅿️ מעבד תשלום דרך PayPal`);
        console.log(`   חשבון: ${this.email}`);
        console.log(`   סכום: ₪${this.amount}`);
        console.log(`   מתחבר ל-PayPal...`);
        console.log(`   ✅ התשלום הושלם!`);
        this.status = "completed";
    }
}

// מחלקת CashPayment יורשת מ-Payment
class CashPayment extends Payment {
    constructor(amount, description) {
        super(amount, description);
        this.paymentMethod = "מזומן";
    }
    
    // דריסה של process
    process() {
        // כתוב את הקוד כאן
        // הדפס הודעה מתאימה לתשלום במזומן 💵
    }
}

// מחלקת BitcoinPayment יורשת מ-Payment
class BitcoinPayment extends Payment {
    constructor(amount, description, walletAddress) {
        // כתוב את הקוד כאן
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

// פונקציה שמעבדת כל סוג תשלום - דוגמה לפולימורפיזם!
function processPayment(payment) {
    console.log("\n--- מעבד תשלום חדש ---");
    payment.process(); // כל מחלקה תגיב אחרת!
    console.log(payment.getDetails());
}

// בדיקות - פולימורפיזם בפעולה
console.log("=== מערכת תשלומים - פולימורפיזם ===");
const payments = [
    new CreditCardPayment(500, "קניית נעליים", "1234567812345678", "123"),
    new PayPalPayment(250, "מנוי Netflix", "user@example.com"),
    new CashPayment(100, "קפה"),
    new BitcoinPayment(1000, "מחשב נייד", "1A2B3C4D5E6F7G8H")
];

// עבור על כל התשלומים ועבד אותם
// כל תשלום יעובד אחרת למרות שקוראים לאותה מתודה!
payments.forEach(payment => processPayment(payment));


// חלק ב': מערכת צורות גיאומטריות
class Shape {
    constructor(color) {
        this.color = color;
    }
    
    // מתודה בסיסית שמחלקות ילדים צריכות לדרוס
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
        // כתוב את הקוד כאן
    }
    
    getPerimeter() {
        // כתוב את הקוד כאן
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
        // שטח משולש = (בסיס * גובה) / 2
        return (this.base * this.height) / 2;
    }
    
    getPerimeter() {
        // היקף משולש = סכום כל הצלעות
        return this.side1 + this.side2 + this.side3;
    }
    
    describe() {
        console.log(`△ משולש ${this.color}, בסיס: ${this.base}`);
    }
}

// פונקציה שמדפיסה מידע על כל צורה - פולימורפיזם!
function printShapeInfo(shape) {
    shape.describe();
    console.log(`  שטח: ${shape.getArea().toFixed(2)}`);
    console.log(`  היקף: ${shape.getPerimeter().toFixed(2)}`);
    console.log();
}

// בדיקות
console.log("\n\n=== צורות גיאומטריות - פולימורפיזם ===");
const shapes = [
    new Circle("אדום", 5),
    new Rectangle("כחול", 10, 6),
    new Triangle("ירוק", 8, 6, 6, 7, 9)
];

shapes.forEach(shape => printShapeInfo(shape));

// חישוב סה"כ שטח של כל הצורות
const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
console.log(`סה"כ שטח של כל הצורות: ${totalArea.toFixed(2)}`);


// חלק ג': מערכת התראות (Notifications)
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
        // כתוב את הקוד כאן
        // שלח SMS 📱
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

// פונקציה שמשגרת כל סוג התראה
function sendNotification(notification) {
    notification.send(); // כל מחלקה תשלח אחרת!
    console.log();
}

// בדיקות
console.log("\n\n=== מערכת התראות - פולימורפיזם ===");
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

/**
 * פלט צפוי:
 * --- מעבד תשלום חדש ---
 * 💳 מעבד תשלום בכרטיס אשראי ****-****-****-5678
 *    סכום: ₪500
 *    אימות CVV...
 *    ✅ התשלום אושר!
 * תשלום: ₪500, סטטוס: completed, אמצעי תשלום: כרטיס אשראי, כרטיס: ****-****-****-5678
 * 
 * --- מעבד תשלום חדש ---
 * 🅿️ מעבד תשלום דרך PayPal
 *    חשבון: user@example.com
 *    סכום: ₪250
 *    מתחבר ל-PayPal...
 *    ✅ התשלום הושלם!
 * תשלום: ₪250, סטטוס: completed
 * 
 * --- מעבד תשלום חדש ---
 * 💵 מקבל תשלום במזומן
 *    סכום: ₪100
 *    ✅ התשלום בוצע!
 * תשלום: ₪100, סטטוס: completed
 * 
 * ⭕ עיגול אדום, רדיוס: 5
 *   שטח: 78.54
 *   היקף: 31.42
 * 
 * ▭ מלבן כחול, 10x6
 *   שטח: 60.00
 *   היקף: 32.00
 * 
 * △ משולש ירוק, בסיס: 8
 *   שטח: 24.00
 *   היקף: 22.00
 * 
 * סה"כ שטח של כל הצורות: 162.54
 * 
 * 📧 שולח אימייל
 *    אל: user@example.com
 *    נושא: עדכון חשוב
 *    הודעה: פרויקט חדש נוצר
 *    ✅ האימייל נשלח!
 * 
 * 📱 שולח SMS
 *    אל: 050-1234567
 *    הודעה: קוד האימות שלך: 123456
 *    ✅ ה-SMS נשלח!
 * 
 * 📲 שולח push notification
 *    מכשיר: device-abc-123
 *    הודעה: יש לך הודעה חדשה
 *    ✅ ההתראה נשלחה!
 */
