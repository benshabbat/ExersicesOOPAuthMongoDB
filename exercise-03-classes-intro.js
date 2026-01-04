/**
 * תרגיל 3: מבוא ל-Classes
 * רמת קושי: בינונית
 * 
 * מטרה: להבין איך ליצור מחלקות ולהשתמש בקונסטרקטור
 */

// חלק א': צור מחלקה Book
class Book {
    // הוסף קונסטרקטור שמקבל: title, author, pages
    constructor(title, author, pages) {
        // אתחל את המאפיינים כאן
    }
    
    // הוסף מתודה getInfo שמחזירה מחרוזת עם פרטי הספר
    getInfo() {
        // כתוב את הקוד כאן
        // החזר מחרוזת בפורמט: "ספר: [כותרת], מאת: [מחבר], עמודים: [מספר עמודים]"
    }
    
    // הוסף מתודה isLongBook שמחזירה true אם יש יותר מ-300 עמודים
    isLongBook() {
        // כתוב את הקוד כאן
    }
}

// צור מספר מופעים של Book
const book1 = new Book("הארי פוטר", "ג'יי קיי רולינג", 450);
const book2 = new Book("הכימאי", "פאולו קואלו", 180);

console.log("=== בדיקת מחלקת Book ===");
console.log(book1.getInfo());
console.log("האם ספר ארוך?", book1.isLongBook());
console.log(book2.getInfo());
console.log("האם ספר ארוך?", book2.isLongBook());


// חלק ב': צור מחלקה BankAccount
class BankAccount {
    // הוסף קונסטרקטור שמקבל: ownerName, initialBalance
    constructor(ownerName, initialBalance) {
        // אתחל את המאפיינים כאן
        // initialBalance ברירת מחדל: 0
    }
    
    // הוסף מתודה deposit (הפקדה) שמקבלת סכום ומוסיפה אותו ליתרה
    deposit(amount) {
        // בדוק שהסכום חיובי
        if (amount > 0) {
            // הוסף את הסכום ליתרה
            console.log(`הופקדו ${amount} ש"ח. יתרה חדשה: ${this.balance} ש"ח`);
        } else {
            console.log("שגיאה: הסכום חייב להיות חיובי");
        }
    }
    
    // הוסף מתודה withdraw (משיכה) שמקבלת סכום ומחסירה אותו מהיתרה
    withdraw(amount) {
        // בדוק שהסכום חיובי ושיש מספיק כסף בחשבון
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getBalance שמחזירה את היתרה הנוכחית
    getBalance() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getAccountInfo שמדפיסה את פרטי החשבון
    getAccountInfo() {
        console.log(`חשבון של: ${this.ownerName}, יתרה: ${this.balance} ש"ח`);
    }
}

// בדוק את מחלקת BankAccount
console.log("\n=== בדיקת מחלקת BankAccount ===");
const account1 = new BankAccount("יוסי לוי", 1000);
account1.getAccountInfo();
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(2000); // צריך להדפיס שגיאה
account1.getAccountInfo();


// חלק ג': צור מחלקה Rectangle (מלבן)
class Rectangle {
    constructor(width, height) {
        // אתחל את המאפיינים כאן
    }
    
    // הוסף מתודה getArea שמחזירה את השטח (רוחב * גובה)
    getArea() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getPerimeter שמחזירה את ההיקף (2 * (רוחב + גובה))
    getPerimeter() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה isSquare שמחזירה true אם זה ריבוע (רוחב = גובה)
    isSquare() {
        // כתוב את הקוד כאן
    }
}

// בדוק את מחלקת Rectangle
console.log("\n=== בדיקת מחלקת Rectangle ===");
const rect1 = new Rectangle(5, 10);
console.log(`שטח: ${rect1.getArea()}`);
console.log(`היקף: ${rect1.getPerimeter()}`);
console.log(`האם ריבוע? ${rect1.isSquare()}`);

const rect2 = new Rectangle(7, 7);
console.log(`\nשטח: ${rect2.getArea()}`);
console.log(`היקף: ${rect2.getPerimeter()}`);
console.log(`האם ריבוע? ${rect2.isSquare()}`);

/**
 * פלט צפוי:
 * ספר: הארי פוטר, מאת: ג'יי קיי רולינג, עמודים: 450
 * האם ספר ארוך? true
 * ספר: הכימאי, מאת: פאולו קואלו, עמודים: 180
 * האם ספר ארוך? false
 * 
 * חשבון של: יוסי לוי, יתרה: 1000 ש"ח
 * הופקדו 500 ש"ח. יתרה חדשה: 1500 ש"ח
 * נמשכו 200 ש"ח. יתרה חדשה: 1300 ש"ח
 * שגיאה: אין מספיק כסף בחשבון
 * חשבון של: יוסי לוי, יתרה: 1300 ש"ח
 * 
 * שטח: 50
 * היקף: 30
 * האם ריבוע? false
 * שטח: 49
 * היקף: 28
 * האם ריבוע? true
 */
