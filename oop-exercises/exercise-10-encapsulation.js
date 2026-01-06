/**
 * תרגיל 10: Encapsulation - הסתרת מידע ו-Getters/Setters
 * רמת קושי: גבוהה
 * 
 * מטרה: להבין את עקרון ההסתרה (Encapsulation) ושימוש ב-private fields
 */

// חלק א': חשבון בנק עם private fields
class BankAccount {
    // Private fields - מתחילים ב-#
    #balance;
    #accountNumber;
    #pin;
    
    constructor(accountNumber, initialBalance, pin) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.#pin = pin;
        this.ownerName = "";
    }
    
    // Getter לקבלת יתרה (ללא אפשרות לשנות ישירות)
    get balance() {
        return this.#balance;
    }
    
    // אין setter ליתרה! רק דרך deposit ו-withdraw
    
    get accountNumber() {
        // מחזיר מספר חשבון מוסווה
        return `****${this.#accountNumber.slice(-4)}`;
    }
    
    // מתודה לאימות PIN
    #verifyPin(pin) {
        return pin === this.#pin;
    }
    
    deposit(amount) {
        if (amount <= 0) {
            console.log("❌ סכום ההפקדה חייב להיות חיובי");
            return false;
        }
        
        this.#balance += amount;
        console.log(`✅ הופקדו ₪${amount}. יתרה חדשה: ₪${this.#balance}`);
        return true;
    }
    
    withdraw(amount, pin) {
        // בדוק PIN
        if (!this.#verifyPin(pin)) {
            console.log("❌ PIN שגוי!");
            return false;
        }
        
        if (amount <= 0) {
            console.log("❌ סכום המשיכה חייב להיות חיובי");
            return false;
        }
        
        if (amount > this.#balance) {
            console.log("❌ אין מספיק כסף בחשבון");
            return false;
        }
        
        this.#balance -= amount;
        console.log(`✅ נמשכו ₪${amount}. יתרה חדשה: ₪${this.#balance}`);
        return true;
    }
    
    changePin(oldPin, newPin) {
        if (!this.#verifyPin(oldPin)) {
            console.log("❌ PIN ישן שגוי!");
            return false;
        }
        
        if (newPin.length !== 4) {
            console.log("❌ PIN חדש חייב להיות 4 ספרות");
            return false;
        }
        
        this.#pin = newPin;
        console.log("✅ PIN שונה בהצלחה");
        return true;
    }
}

// בדיקות
console.log("=== בדיקת Encapsulation - חשבון בנק ===");
const account = new BankAccount("1234567890", 1000, "1234");

console.log(`מספר חשבון: ${account.accountNumber}`);
console.log(`יתרה: ₪${account.balance}`);

// נסה לשנות את היתרה ישירות - לא יעבוד!
// account.#balance = 999999; // זה ייתן שגיאה!

account.deposit(500);
account.withdraw(200, "1234");
account.withdraw(200, "0000"); // PIN שגוי
account.changePin("1234", "5678");
account.withdraw(100, "5678"); // עכשיו יעבוד


// חלק ב': מערכת משתמשים עם ולידציה
class User {
    #password;
    #email;
    
    constructor(username, email, password) {
        this.username = username;
        this.#email = email;
        this.#password = this.#hashPassword(password);
        this.createdAt = new Date();
    }
    
    // Private method להצפנת סיסמה (פשוטה)
    #hashPassword(password) {
        // בעולם האמיתי נשתמש בהצפנה אמיתית
        return `hashed_${password}_secure`;
    }
    
    // Getter לאימייל
    get email() {
        // מחזיר אימייל מוסווה חלקית
        const [name, domain] = this.#email.split("@");
        return `${name.slice(0, 2)}***@${domain}`;
    }
    
    // Setter לאימייל עם ולידציה
    set email(newEmail) {
        if (!newEmail.includes("@") || !newEmail.includes(".")) {
            console.log("❌ אימייל לא תקין");
            return;
        }
        
        console.log(`📧 אימייל שונה מ-${this.#email} ל-${newEmail}`);
        this.#email = newEmail;
    }
    
    // אין getter לסיסמה!
    
    // רק אפשרות לבדוק אם סיסמה נכונה
    verifyPassword(password) {
        return this.#hashPassword(password) === this.#password;
    }
    
    // שינוי סיסמה
    changePassword(oldPassword, newPassword) {
        if (!this.verifyPassword(oldPassword)) {
            console.log("❌ סיסמה ישנה שגויה");
            return false;
        }
        
        if (newPassword.length < 6) {
            console.log("❌ סיסמה חדשה חייבת להיות לפחות 6 תווים");
            return false;
        }
        
        this.#password = this.#hashPassword(newPassword);
        console.log("✅ סיסמה שונתה בהצלחה");
        return true;
    }
    
    login(password) {
        if (this.verifyPassword(password)) {
            console.log(`✅ התחברת בהצלחה, שלום ${this.username}!`);
            return true;
        } else {
            console.log("❌ סיסמה שגויה");
            return false;
        }
    }
}

// בדיקות
console.log("\n\n=== בדיקת מערכת משתמשים ===");
const user1 = new User("yossi123", "yossi@example.com", "mypassword");

console.log(`שם משתמש: ${user1.username}`);
console.log(`אימייל: ${user1.email}`); // מוסווה!

user1.login("wrongpassword"); // יכשל
user1.login("mypassword"); // יעבוד

user1.changePassword("mypassword", "newpassword123");
user1.login("newpassword123"); // יעבוד עכשיו

user1.email = "newemail@example.com"; // ישתמש ב-setter


// חלק ג': מוצר עם Getters/Setters מתקדמים
class Product {
    #price;
    #discount;
    
    constructor(name, price) {
        this.name = name;
        this.#price = price;
        this.#discount = 0;
    }
    
    // Getter למחיר
    get price() {
        return this.#price;
    }
    
    // Setter למחיר עם ולידציה
    set price(newPrice) {
        if (newPrice < 0) {
            console.log("❌ מחיר לא יכול להיות שלילי");
            return;
        }
        
        console.log(`💰 מחיר של ${this.name} שונה מ-₪${this.#price} ל-₪${newPrice}`);
        this.#price = newPrice;
    }
    
    // Getter להנחה
    get discount() {
        return this.#discount;
    }
    
    // Setter להנחה עם ולידציה
    set discount(percent) {
        if (percent < 0 || percent > 100) {
            console.log("❌ הנחה חייבת להיות בין 0 ל-100");
            return;
        }
        
        console.log(`🎁 הנחה של ${percent}% הוחלה על ${this.name}`);
        this.#discount = percent;
    }
    
    // Getter מחושב - מחיר סופי אחרי הנחה
    get finalPrice() {
        return this.#price * (1 - this.#discount / 100);
    }
    
    // אין setter ל-finalPrice כי הוא מחושב!
    
    getInfo() {
        if (this.#discount > 0) {
            return `${this.name}: ₪${this.#price} (הנחה: ${this.#discount}%) = ₪${this.finalPrice.toFixed(2)}`;
        }
        return `${this.name}: ₪${this.#price}`;
    }
}

// בדיקות
console.log("\n\n=== בדיקת מוצר עם Getters/Setters ===");
const product1 = new Product("מחשב נייד", 3000);
console.log(product1.getInfo());

product1.discount = 10; // השתמש ב-setter
console.log(product1.getInfo());
console.log(`מחיר סופי: ₪${product1.finalPrice}`);

product1.discount = 150; // יכשל - מעל 100%
product1.price = -500; // יכשל - מחיר שלילי

product1.price = 2500; // יעבוד
console.log(product1.getInfo());


// חלק ד': כרטיס אשראי עם encapsulation מלא
class CreditCard {
    #cardNumber;
    #cvv;
    #expiryMonth;
    #expiryYear;
    #balance;
    
    constructor(cardNumber, cvv, expiryMonth, expiryYear, balance) {
        this.#cardNumber = cardNumber;
        this.#cvv = cvv;
        this.#expiryMonth = expiryMonth;
        this.#expiryYear = expiryYear;
        this.#balance = balance;
        this.holderName = "";
    }
    
    // Getter למספר כרטיס (מוסווה)
    get cardNumber() {
        // הצג רק 4 ספרות אחרונות
        return `****-****-****-${this.#cardNumber.slice(-4)}`;
    }
    
    // אין getter ל-CVV! (מידע רגיש מאוד)
    
    // בדיקה אם כרטיס בתוקף
    get isValid() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        if (this.#expiryYear < currentYear) return false;
        if (this.#expiryYear === currentYear && this.#expiryMonth < currentMonth) return false;
        
        return true;
    }
    
    get expiryDate() {
        return `${this.#expiryMonth.toString().padStart(2, "0")}/${this.#expiryYear}`;
    }
    
    // מתודה לאימות כרטיס
    #authenticate(cvv) {
        return cvv === this.#cvv && this.isValid;
    }
    
    // מתודה לתשלום
    charge(amount, cvv) {
        if (!this.#authenticate(cvv)) {
            console.log("❌ אימות נכשל - CVV שגוי או כרטיס לא בתוקף");
            return false;
        }
        
        if (amount > this.#balance) {
            console.log("❌ אין מספיק יתרה בכרטיס");
            return false;
        }
        
        this.#balance -= amount;
        console.log(`✅ חויב סכום של ₪${amount}. יתרה נותרת: ₪${this.#balance}`);
        return true;
    }
    
    getCardInfo() {
        return `כרטיס: ${this.cardNumber}, תוקף: ${this.expiryDate}, תקף: ${this.isValid ? "כן" : "לא"}`;
    }
}

// בדיקות
console.log("\n\n=== בדיקת כרטיס אשראי ===");
const card1 = new CreditCard("1234567812345678", "123", 12, 2027, 5000);
card1.holderName = "יוסי כהן";

console.log(card1.getCardInfo());
console.log(`בעל הכרטיס: ${card1.holderName}`);

// לא נוכל לראות את ה-CVV או מספר הכרטיס המלא
// console.log(card1.#cvv); // שגיאה!

card1.charge(1000, "123"); // יעבוד
card1.charge(1000, "999"); // CVV שגוי
card1.charge(6000, "123"); // אין מספיק יתרה

/**
 * פלט צפוי:
 * מספר חשבון: ****7890
 * יתרה: ₪1000
 * ✅ הופקדו ₪500. יתרה חדשה: ₪1500
 * ✅ נמשכו ₪200. יתרה חדשה: ₪1300
 * ❌ PIN שגוי!
 * ✅ PIN שונה בהצלחה
 * ✅ נמשכו ₪100. יתרה חדשה: ₪1200
 * 
 * שם משתמש: yossi123
 * אימייל: yo***@example.com
 * ❌ סיסמה שגויה
 * ✅ התחברת בהצלחה, שלום yossi123!
 * ✅ סיסמה שונתה בהצלחה
 * ✅ התחברת בהצלחה, שלום yossi123!
 * 📧 אימייל שונה מ-yossi@example.com ל-newemail@example.com
 * 
 * מחשב נייד: ₪3000
 * 🎁 הנחה של 10% הוחלה על מחשב נייד
 * מחשב נייד: ₪3000 (הנחה: 10%) = ₪2700.00
 * מחיר סופי: ₪2700
 * ❌ הנחה חייבת להיות בין 0 ל-100
 * ❌ מחיר לא יכול להיות שלילי
 * 💰 מחיר של מחשב נייד שונה מ-₪3000 ל-₪2500
 * מחשב נייד: ₪2500 (הנחה: 10%) = ₪2250.00
 * 
 * כרטיס: ****-****-****-5678, תוקף: 12/2027, תקף: כן
 * בעל הכרטיס: יוסי כהן
 * ✅ חויב סכום של ₪1000. יתרה נותרת: ₪4000
 * ❌ אימות נכשל - CVV שגוי או כרטיס לא בתוקף
 * ❌ אין מספיק יתרה בכרטיס
 */
