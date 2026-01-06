/**
 * תרגיל 7: הורשה (Inheritance) - יסודות
 * רמת קושי: בינונית-גבוהה
 * 
 * מטרה: להבין את מושג ההורשה ב-OOP
 */

// חלק א': מחלקת אב Animal ומחלקות ילדים
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    eat() {
        console.log(`${this.name} אוכל`);
    }
    
    sleep() {
        console.log(`${this.name} ישן`);
    }
    
    makeSound() {
        console.log(`${this.name} משמיע קול`);
    }
    
    getInfo() {
        return `${this.name}, גיל ${this.age}`;
    }
}

// צור מחלקה Dog שיורשת מ-Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        // קרא לקונסטרקטור של האב עם super
        super(name, age);
        this.breed = breed; // גזע הכלב
    }
    
    // דרוס את מתודת makeSound
    makeSound() {
        console.log(`${this.name} נובח: הב הב! 🐕`);
    }
    
    // הוסף מתודה ייחודית לכלב
    fetch() {
        console.log(`${this.name} הולך להביא את הכדור`);
    }
    
    // דרוס את getInfo כדי לכלול גם את הגזע
    getInfo() {
        return `${super.getInfo()}, גזע: ${this.breed}`;
    }
}

// צור מחלקה Cat שיורשת מ-Animal
class Cat extends Animal {
    constructor(name, age, color) {
        // כתוב את הקוד כאן
        // אתחל את name, age, color
    }
    
    // דרוס את makeSound
    makeSound() {
        // כתוב את הקוד כאן
        // הדפס מיאו 🐱
    }
    
    // הוסף מתודה ייחודית לחתול
    scratch() {
        console.log(`${this.name} מגרד`);
    }
    
    // דרוס את getInfo
    getInfo() {
        // כתוב את הקוד כאן
        // הוסף את הצבע למידע
    }
}

// צור מחלקה Bird שיורשת מ-Animal
class Bird extends Animal {
    constructor(name, age, canFly) {
        // כתוב את הקוד כאן
    }
    
    makeSound() {
        console.log(`${this.name} מצייץ: ציוץ ציוץ! 🐦`);
    }
    
    fly() {
        if (this.canFly) {
            console.log(`${this.name} עף`);
        } else {
            console.log(`${this.name} לא יכול לעוף`);
        }
    }
}

// בדיקות
console.log("=== בדיקת הורשת Animal ===");
const dog1 = new Dog("רקס", 5, "גולדן רטריבר");
console.log(dog1.getInfo());
dog1.makeSound();
dog1.eat(); // מתודה שעברה בירושה
dog1.fetch(); // מתודה ייחודית לכלב

console.log("\n");
const cat1 = new Cat("מיטל", 3, "שחור");
console.log(cat1.getInfo());
cat1.makeSound();
cat1.sleep(); // מתודה שעברה בירושה
cat1.scratch(); // מתודה ייחודית לחתול

console.log("\n");
const bird1 = new Bird("ציפי", 2, true);
console.log(bird1.getInfo());
bird1.makeSound();
bird1.fly();


// חלק ב': מחלקת Person ומחלקות ילדים
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    introduce() {
        console.log(`שלום, שמי ${this.getFullName()}`);
    }
}

// צור מחלקה Student שיורשת מ-Person
class Student extends Person {
    constructor(firstName, lastName, age, studentId, major) {
        // קרא לקונסטרקטור של האב
        super(firstName, lastName, age);
        this.studentId = studentId;
        this.major = major;
        this.grades = [];
    }
    
    // דרוס את introduce
    introduce() {
        console.log(`שלום, שמי ${this.getFullName()}, אני סטודנט למגמת ${this.major}`);
    }
    
    // הוסף מתודה addGrade
    addGrade(grade) {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getAverage
    getAverage() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }
}

// צור מחלקה Teacher שיורשת מ-Person
class Teacher extends Person {
    constructor(firstName, lastName, age, subject, yearsOfExperience) {
        // כתוב את הקוד כאן
    }
    
    // דרוס את introduce
    introduce() {
        console.log(`שלום, שמי ${this.getFullName()}, אני מורה ל${this.subject} עם ${this.yearsOfExperience} שנות ניסיון`);
    }
    
    // הוסף מתודה teach
    teach() {
        console.log(`${this.getFullName()} מלמד ${this.subject}`);
    }
}

// בדיקות
console.log("\n\n=== בדיקת הורשת Person ===");
const student1 = new Student("דני", "כהן", 20, "12345", "מדעי המחשב");
student1.introduce();
student1.addGrade(85);
student1.addGrade(92);
student1.addGrade(78);
console.log(`ממוצע: ${student1.getAverage()}`);

console.log("\n");
const teacher1 = new Teacher("רחל", "לוי", 35, "מתמטיקה", 10);
teacher1.introduce();
teacher1.teach();


// חלק ג': מחלקת Vehicle ומחלקות ילדים
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }
    
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log(`${this.brand} ${this.model} התניע`);
        } else {
            console.log("הרכב כבר דולק");
        }
    }
    
    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            console.log(`${this.brand} ${this.model} כבה`);
        } else {
            console.log("הרכב כבר כבוי");
        }
    }
    
    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

// צור מחלקה Car שיורשת מ-Vehicle
class Car extends Vehicle {
    constructor(brand, model, year, numDoors) {
        super(brand, model, year);
        this.numDoors = numDoors;
    }
    
    honk() {
        console.log(`${this.brand} ${this.model} צופר: ביב ביב! 🚗`);
    }
}

// צור מחלקה Motorcycle שיורשת מ-Vehicle
class Motorcycle extends Vehicle {
    constructor(brand, model, year, engineSize) {
        // כתוב את הקוד כאן
    }
    
    wheelie() {
        if (this.isRunning) {
            console.log(`${this.brand} ${this.model} עושה wheelie! 🏍️`);
        } else {
            console.log("צריך להתניע את האופנוע קודם");
        }
    }
}

// בדיקות
console.log("\n\n=== בדיקת הורשת Vehicle ===");
const car1 = new Car("טויוטה", "קורולה", 2020, 4);
console.log(car1.getInfo());
car1.start();
car1.honk();
car1.stop();

console.log("\n");
const motorcycle1 = new Motorcycle("הונדה", "CBR", 2022, 600);
console.log(motorcycle1.getInfo());
motorcycle1.wheelie(); // צריך להדפיס שגיאה
motorcycle1.start();
motorcycle1.wheelie(); // עכשיו זה צריך לעבוד

/**
 * פלט צפוי:
 * רקס, גיל 5, גזע: גולדן רטריבר
 * רקס נובח: הב הב! 🐕
 * רקס אוכל
 * רקס הולך להביא את הכדור
 * 
 * מיטל, גיל 3, צבע: שחור
 * מיטל מיילל: מיאו! 🐱
 * מיטל ישן
 * מיטל מגרד
 * 
 * ציפי, גיל 2
 * ציפי מצייץ: ציוץ ציוץ! 🐦
 * ציפי עף
 * 
 * שלום, שמי דני כהן, אני סטודנט למגמת מדעי המחשב
 * ממוצע: 85
 * 
 * שלום, שמי רחל לוי, אני מורה למתמטיקה עם 10 שנות ניסיון
 * רחל לוי מלמד מתמטיקה
 * 
 * טויוטה קורולה (2020)
 * טויוטה קורולה התניע
 * טויוטה קורולה צופר: ביב ביב! 🚗
 * טויוטה קורולה כבה
 * 
 * הונדה CBR (2022)
 * צריך להתניע את האופנוע קודם
 * הונדה CBR התניע
 * הונדה CBR עושה wheelie! 🏍️
 */
