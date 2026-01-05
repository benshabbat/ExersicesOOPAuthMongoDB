/**
 * תרגיל 5: Array של אובייקטים ומתודות מורכבות
 * רמת קושי: בינונית
 * 
 * מטרה: לעבוד עם מערכים של אובייקטים ומתודות מורכבות יותר
 */

// חלק א': צור מחלקה Product למוצרים בחנות
class Product {
    constructor(name, price, quantity) {
        // Hint: Initialize name, price, and quantity properties
        // Hint: this.name = name; etc.
    }
    
    // הוסף מתודה getTotalValue שמחזירה את הערך הכולל (מחיר * כמות)
    getTotalValue() {
        // Hint: multiply this.price by this.quantity and return
    }
    
    // הוסף מתודה sell שמקבלת כמות למכירה
    sell(amount) {
        // Hint: check if amount <= this.quantity
        // Hint: if yes, subtract amount from quantity and return true
        // Hint: if no, log error and return false
    }
    
    // הוסף מתודה restock שמקבלת כמות להוספה למלאי
    restock(amount) {
        // Hint: add amount to this.quantity
        // Hint: log message with new quantity
    }
    
    getInfo() {
        // Hint: return template string with name, price, quantity
    }
}

// חלק ב': צור מחלקה Store שמנהלת חנות
class Store {
    constructor(storeName) {
        // Hint: Initialize storeName and products array
        // Hint: this.storeName = storeName; this.products = [];
    }
    
    // הוסף מתודה addProduct שמוסיפה מוצר לחנות
    addProduct(product) {
        // Hint: use this.products.push(product)
        // Hint: log success message
    }
    
    // הוסף מתודה findProduct שמחפשת מוצר לפי שם
    findProduct(productName) {
        // Hint: use .find() method on this.products
        // Hint: compare product.name with productName
    }
    
    // הוסף מתודה getTotalInventoryValue שמחזירה את הערך הכולל של כל המלאי
    getTotalInventoryValue() {
        // Hint: start with total = 0
        // Hint: use forEach or for loop to sum product.getTotalValue()
        // Hint: return total
    }
    
    // הוסף מתודה listProducts שמדפיסה את כל המוצרים
    listProducts() {
        // Hint: log header with storeName
        // Hint: use forEach to print each product's info
    }
    
    // הוסף מתודה getLowStockProducts שמחזירה מוצרים עם כמות נמוכה
    getLowStockProducts(threshold = 5) {
        // Hint: use .filter() on this.products
        // Hint: filter where product.quantity <= threshold
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
            // Hint: push grade to this.grades array
            // Hint: log success message
        } else {
            console.log("שגיאה: ציון חייב להיות בין 0 ל-100");
        }
    }
    
    // הוסף מתודה getAverage שמחזירה את ממוצע הציונים
    getAverage() {
        if (this.grades.length === 0) return 0;
        // Hint: sum all grades and divide by grades.length
        // Hint: use reduce() or loop to sum
    }
    
    // הוסף מתודה getHighestGrade שמחזירה את הציון הגבוה ביותר
    getHighestGrade() {
        // Hint: use Math.max(...this.grades)
    }
    
    // הוסף מתודה getLowestGrade שמחזירה את הציון הנמוך ביותר
    getLowestGrade() {
        // Hint: use Math.min(...this.grades)
    }
    
    // הוסף מתודה isPassing שמחזירה true אם הממוצע מעל 60
    isPassing() {
        // Hint: return this.getAverage() > 60
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
