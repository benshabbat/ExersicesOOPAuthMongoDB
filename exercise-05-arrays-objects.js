/**
 * תרגיל 5: Array של אובייקטים ומתודות מורכבות
 * רמת קושי: בינונית
 * 
 * מטרה: לעבוד עם מערכים של אובייקטים ומתודות מורכבות יותר
 */

// חלק א': צור מחלקה Product למוצרים בחנות
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    
    // הוסף מתודה getTotalValue שמחזירה את הערך הכולל (מחיר * כמות)
    getTotalValue() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה sell שמקבלת כמות למכירה
    sell(amount) {
        if (amount <= this.quantity) {
            this.quantity -= amount;
            console.log(`נמכרו ${amount} יחידות של ${this.name}. נותרו: ${this.quantity}`);
            return true;
        } else {
            console.log(`שגיאה: אין מספיק ${this.name} במלאי (יש רק ${this.quantity})`);
            return false;
        }
    }
    
    // הוסף מתודה restock שמקבלת כמות להוספה למלאי
    restock(amount) {
        // כתוב את הקוד כאן
    }
    
    getInfo() {
        return `${this.name} - ₪${this.price} (${this.quantity} יחידות)`;
    }
}

// חלק ב': צור מחלקה Store שמנהלת חנות
class Store {
    constructor(storeName) {
        this.storeName = storeName;
        this.products = []; // מערך של מוצרים
    }
    
    // הוסף מתודה addProduct שמוסיפה מוצר לחנות
    addProduct(product) {
        // כתוב את הקוד כאן
        console.log(`${product.name} נוסף לחנות ${this.storeName}`);
    }
    
    // הוסף מתודה findProduct שמחפשת מוצר לפי שם
    findProduct(productName) {
        // רמז: השתמש ב-find או ב-for loop
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getTotalInventoryValue שמחזירה את הערך הכולל של כל המלאי
    getTotalInventoryValue() {
        let total = 0;
        // עבור על כל המוצרים וחשב את הסכום הכולל
        // רמז: השתמש ב-forEach או ב-for loop
        // כתוב את הקוד כאן
        return total;
    }
    
    // הוסף מתודה listProducts שמדפיסה את כל המוצרים
    listProducts() {
        console.log(`\nמוצרים בחנות ${this.storeName}:`);
        this.products.forEach((product, index) => {
            console.log(`${index + 1}. ${product.getInfo()}`);
        });
    }
    
    // הוסף מתודה getLowStockProducts שמחזירה מוצרים עם כמות נמוכה
    getLowStockProducts(threshold = 5) {
        // החזר מערך של מוצרים שהכמות שלהם קטנה או שווה ל-threshold
        // רמז: השתמש ב-filter
        // כתוב את הקוד כאן
    }
}

// בדיקות
console.log("=== בדיקת מערכת החנות ===");
const myStore = new Store("סופר סל");

// צור מוצרים והוסף אותם לחנות
const product1 = new Product("חלב", 5, 20);
const product2 = new Product("לחם", 7, 15);
const product3 = new Product("ביצים", 12, 3);
const product4 = new Product("גבינה", 25, 8);

myStore.addProduct(product1);
myStore.addProduct(product2);
myStore.addProduct(product3);
myStore.addProduct(product4);

// הצג את כל המוצרים
myStore.listProducts();

// מכור כמה מוצרים
console.log("\n--- מכירות ---");
product1.sell(5);
product2.sell(20); // יותר מדי!
product3.sell(2);

// בדוק ערך מלאי
console.log(`\nערך המלאי הכולל: ₪${myStore.getTotalInventoryValue()}`);

// בדוק מוצרים עם מלאי נמוך
console.log("\n--- מוצרים עם מלאי נמוך ---");
const lowStock = myStore.getLowStockProducts();
lowStock.forEach(product => {
    console.log(`⚠️ ${product.name} - רק ${product.quantity} יחידות!`);
});

// הוסף למלאי
console.log("\n--- הוספה למלאי ---");
product3.restock(10);

// חפש מוצר
console.log("\n--- חיפוש מוצר ---");
const foundProduct = myStore.findProduct("גבינה");
if (foundProduct) {
    console.log("נמצא:", foundProduct.getInfo());
}


// חלק ג': צור מחלקה StudentGrade למעקב אחר ציוני תלמידים
class StudentGrade {
    constructor(studentName) {
        this.studentName = studentName;
        this.grades = []; // מערך של ציונים
    }
    
    // הוסף מתודה addGrade שמוסיפה ציון
    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            // כתוב את הקוד כאן
            console.log(`ציון ${grade} נוסף ל-${this.studentName}`);
        } else {
            console.log("שגיאה: ציון חייב להיות בין 0 ל-100");
        }
    }
    
    // הוסף מתודה getAverage שמחזירה את ממוצע הציונים
    getAverage() {
        if (this.grades.length === 0) return 0;
        // חשב ממוצע
        // רמז: סכום כל הציונים חלקי מספר הציונים
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getHighestGrade שמחזירה את הציון הגבוה ביותר
    getHighestGrade() {
        // רמז: השתמש ב-Math.max(...this.grades)
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getLowestGrade שמחזירה את הציון הנמוך ביותר
    getLowestGrade() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה isPassing שמחזירה true אם הממוצע מעל 60
    isPassing() {
        // כתוב את הקוד כאן
    }
}

// בדיקות
console.log("\n\n=== בדיקת מערכת ציונים ===");
const student1 = new StudentGrade("רחל כהן");
student1.addGrade(85);
student1.addGrade(92);
student1.addGrade(78);
student1.addGrade(88);

console.log(`ממוצע של ${student1.studentName}: ${student1.getAverage()}`);
console.log(`ציון הגבוה ביותר: ${student1.getHighestGrade()}`);
console.log(`ציון הנמוך ביותר: ${student1.getLowestGrade()}`);
console.log(`עובר? ${student1.isPassing() ? "כן ✓" : "לא ✗"}`);

/**
 * פלט צפוי:
 * חלב נוסף לחנות סופר סל
 * לחם נוסף לחנות סופר סל
 * ביצים נוסף לחנות סופר סל
 * גבינה נוסף לחנות סופר סל
 * 
 * מוצרים בחנות סופר סל:
 * 1. חלב - ₪5 (20 יחידות)
 * 2. לחם - ₪7 (15 יחידות)
 * 3. ביצים - ₪12 (3 יחידות)
 * 4. גבינה - ₪25 (8 יחידות)
 * 
 * --- מכירות ---
 * נמכרו 5 יחידות של חלב. נותרו: 15
 * שגיאה: אין מספיק לחם במלאי (יש רק 15)
 * נמכרו 2 יחידות של ביצים. נותרו: 1
 * 
 * ערך המלאי הכולל: ₪392
 * 
 * --- מוצרים עם מלאי נמוך ---
 * ⚠️ ביצים - רק 1 יחידות!
 * 
 * --- הוספה למלאי ---
 * הוספו 10 יחידות של ביצים. כמות חדשה: 11
 * 
 * --- חיפוש מוצר ---
 * נמצא: גבינה - ₪25 (8 יחידות)
 * 
 * ממוצע של רחל כהן: 85.75
 * ציון הגבוה ביותר: 92
 * ציון הנמוך ביותר: 78
 * עובר? כן ✓
 */
