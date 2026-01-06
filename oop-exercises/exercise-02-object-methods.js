/**
 * תרגיל 2: מתודות באובייקטים
 * רמת קושי: קלה-בינונית
 * 
 * מטרה: להבין איך להוסיף פונקציות (מתודות) לאובייקטים
 */

// חלק א': צור אובייקט calculator עם מתודות חשבון בסיסיות
const calculator = {
    // הוסף מאפיין currentValue שמחזיק את הערך הנוכחי (התחל מ-0)
    currentValue: 0,
    
    // הוסף מתודה add שמקבלת מספר ומוסיפה אותו ל-currentValue
    add: function(number) {
        // כתוב את הקוד כאן
        // רמז: השתמש ב-this.currentValue
    },
    
    // הוסף מתודה subtract שמקבלת מספר ומחסירה אותו מ-currentValue
    subtract: function(number) {
        // כתוב את הקוד כאן
    },
    
    // הוסף מתודה multiply שמקבלת מספר וכופלת את currentValue בו
    multiply: function(number) {
        // כתוב את הקוד כאן
    },
    
    // הוסף מתודה reset שמאפסת את currentValue
    reset: function() {
        // כתוב את הקוד כאן
    },
    
    // הוסף מתודה getValue שמחזירה את הערך הנוכחי
    getValue: function() {
        // כתוב את הקוד כאן
    }
};

// חלק ב': השתמש במחשבון
calculator.add(10);
console.log("אחרי הוספת 10:", calculator.getValue()); // צריך להדפיס 10

calculator.multiply(5);
console.log("אחרי כפל ב-5:", calculator.getValue()); // צריך להדפיס 50

calculator.subtract(20);
console.log("אחרי חיסור 20:", calculator.getValue()); // צריך להדפיס 30

calculator.reset();
console.log("אחרי איפוס:", calculator.getValue()); // צריך להדפיס 0


// חלק ג': צור אובייקט person עם מתודה מורכבת יותר
const person = {
    firstName: "דני",
    lastName: "כהן",
    age: 25,
    
    // הוסף מתודה getFullName שמחזירה את השם המלא
    getFullName: function() {
        // כתוב את הקוד כאן
    },
    
    // הוסף מתודה introduce שמדפיסה הצגה של האדם
    introduce: function() {
        console.log(`שלום, שמי ${this.getFullName()} ואני בן ${this.age}`);
    },
    
    // הוסף מתודה haveBirthday שמגדילה את הגיל ב-1
    haveBirthday: function() {
        // כתוב את הקוד כאן
    }
};

// בדוק את המתודות
console.log("\n=== בדיקת אובייקט person ===");
person.introduce();
person.haveBirthday();
person.introduce(); // צריך להדפיס גיל 26

/**
 * פלט צפוי:
 * אחרי הוספת 10: 10
 * אחרי כפל ב-5: 50
 * אחרי חיסור 20: 30
 * אחרי איפוס: 0
 * שלום, שמי דני כהן ואני בן 25
 * שלום, שמי דני כהן ואני בן 26
 */
