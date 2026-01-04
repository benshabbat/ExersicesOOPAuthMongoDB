/**
 * תרגיל 4: מתודות סטטיות ו-this
 * רמת קושי: בינונית
 * 
 * מטרה: להבין את השימוש ב-this ובמתודות סטטיות
 */

// חלק א': צור מחלקה Car עם מתודות רגילות
class Car {
    // הוסף קונסטרקטור שמקבל: brand, model, year
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = 0; // קילומטראז' מתחיל מ-0
    }
    
    // הוסף מתודה drive שמקבלת מספר קילומטרים ומוסיפה אותם למספר הק"מ
    drive(kilometers) {
        // כתוב את הקוד כאן
        console.log(`הרכב נסע ${kilometers} ק"מ. קילומטראז' כולל: ${this.mileage} ק"מ`);
    }
    
    // הוסף מתודה getAge שמחזירה את גיל הרכב (2026 - שנת ייצור)
    getAge() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getCarInfo שמחזירה מחרוזת עם כל פרטי הרכב
    getCarInfo() {
        return `${this.brand} ${this.model} (${this.year}) - ${this.mileage} ק"מ`;
    }
    
    // מתודה סטטית - compare שמשווה בין שני רכבים לפי קילומטראז'
    static compare(car1, car2) {
        if (car1.mileage > car2.mileage) {
            return `${car1.brand} ${car1.model} נסע יותר`;
        } else if (car2.mileage > car1.mileage) {
            return `${car2.brand} ${car2.model} נסע יותר`;
        } else {
            return "שני הרכבים נסעו אותו מרחק";
        }
    }
}

// בדיקות
console.log("=== בדיקת מחלקת Car ===");
const car1 = new Car("טויוטה", "קורולה", 2020);
const car2 = new Car("הונדה", "סיוויק", 2018);

car1.drive(5000);
car2.drive(8000);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(`גיל הרכב הראשון: ${car1.getAge()} שנים`);
console.log(Car.compare(car1, car2));


// חלק ב': צור מחלקה Temperature למרות טמפרטורה
class Temperature {
    // הוסף קונסטרקטור שמקבל טמפרטורה בצלזיוס
    constructor(celsius) {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה toFahrenheit שמחזירה את הטמפרטורה בפרנהייט
    toFahrenheit() {
        // נוסחה: (celsius * 9/5) + 32
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה toKelvin שמחזירה את הטמפרטורה בקלווין
    toKelvin() {
        // נוסחה: celsius + 273.15
        // כתוב את הקוד כאן
    }
    
    // מתודה סטטית - fromFahrenheit שיוצרת אובייקט Temperature מפרנהייט
    static fromFahrenheit(fahrenheit) {
        const celsius = (fahrenheit - 32) * 5/9;
        return new Temperature(celsius);
    }
    
    // מתודה סטטית - fromKelvin שיוצרת אובייקט Temperature מקלווין
    static fromKelvin(kelvin) {
        // כתוב את הקוד כאן
        // צור והחזר אובייקט Temperature חדש
    }
}

// בדיקות
console.log("\n=== בדיקת מחלקת Temperature ===");
const temp1 = new Temperature(25);
console.log(`${temp1.celsius}°C = ${temp1.toFahrenheit()}°F`);
console.log(`${temp1.celsius}°C = ${temp1.toKelvin()}K`);

const temp2 = Temperature.fromFahrenheit(68);
console.log(`68°F = ${temp2.celsius}°C`);


// חלק ג': צור מחלקה Counter עם מתודות ומאפיינים סטטיים
class Counter {
    // מאפיין סטטי שסופר כמה אובייקטי Counter נוצרו
    static totalCounters = 0;
    
    constructor(initialValue = 0) {
        this.value = initialValue;
        Counter.totalCounters++; // הגדל את המונה הכללי
        this.id = Counter.totalCounters; // תן לכל מונה מזהה ייחודי
    }
    
    // הוסף מתודה increment שמגדילה את הערך ב-1
    increment() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה decrement שמקטינה את הערך ב-1
    decrement() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה reset שמאפסת את הערך
    reset() {
        // כתוב את הקוד כאן
    }
    
    // מתודה סטטית שמחזירה כמה מונים נוצרו
    static getTotalCounters() {
        return Counter.totalCounters;
    }
}

// בדיקות
console.log("\n=== בדיקת מחלקת Counter ===");
const counter1 = new Counter();
const counter2 = new Counter(10);
const counter3 = new Counter(5);

console.log(`נוצרו ${Counter.getTotalCounters()} מונים`);

counter1.increment();
counter1.increment();
console.log(`מונה ${counter1.id}: ${counter1.value}`);

counter2.decrement();
console.log(`מונה ${counter2.id}: ${counter2.value}`);

counter3.reset();
console.log(`מונה ${counter3.id}: ${counter3.value}`);

/**
 * פלט צפוי:
 * הרכב נסע 5000 ק"מ. קילומטראז' כולל: 5000 ק"מ
 * הרכב נסע 8000 ק"מ. קילומטראז' כולל: 8000 ק"מ
 * טויוטה קורולה (2020) - 5000 ק"מ
 * הונדה סיוויק (2018) - 8000 ק"מ
 * גיל הרכב הראשון: 6 שנים
 * הונדה סיוויק נסע יותר
 * 
 * 25°C = 77°F
 * 25°C = 298.15K
 * 68°F = 20°C
 * 
 * נוצרו 3 מונים
 * מונה 1: 2
 * מונה 2: 9
 * מונה 3: 0
 */
