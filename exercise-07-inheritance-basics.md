# תרגיל 7: הורשה (Inheritance) - יסודות

**רמת קושי:** גבוהה ⭐⭐⭐⭐  
**זמן משוער:** 90-120 דקות

## מטרה
להבין את מושג ההורשה ב-OOP ושימוש ב-`extends` ו-`super`

---

## חלק א': מחלקת Animal ומחלקות ילדים

צור מחלקת אב `Animal` ומחלקות ילדים שיורשות ממנה.

```javascript
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    eat() {
        console.log(`${this.name} is eating`);
    }
    
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
    
    getInfo() {
        return `${this.name}, age ${this.age}`;
    }
}

// Create Dog class that inherits from Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        // Call parent constructor with super
        super(name, age);
        this.breed = breed; // Dog's breed
    }
    
    // Override makeSound method
    makeSound() {
        console.log(`${this.name} barks: Woof woof! 🐕`);
    }
    
    // Add unique method for Dog
    fetch() {
        console.log(`${this.name} is fetching the ball`);
    }
    
    // Override getInfo to include breed
    getInfo() {
        return `${super.getInfo()}, breed: ${this.breed}`;
    }
}

// Create Cat class that inherits from Animal
class Cat extends Animal {
    constructor(name, age, color) {
        // Write your code here
        // Initialize name, age, color
    }
    
    // Override makeSound
    makeSound() {
        // Write your code here
        // Print meow 🐱
    }
    
    // Add unique method for Cat
    scratch() {
        console.log(`${this.name} is scratching`);
    }
    
    // Override getInfo
    getInfo() {
        // Write your code here
        // Add color to info
    }
}

// Create Bird class that inherits from Animal
class Bird extends Animal {
    constructor(name, age, canFly) {
        // Write your code here
    }
    
    makeSound() {
        console.log(`${this.name} chirps: Tweet tweet! 🐦`);
    }
    
    fly() {
        if (this.canFly) {
            console.log(`${this.name} is flying`);
        } else {
            console.log(`${this.name} cannot fly`);
        }
    }
}
```

### בדיקה:

```javascript
console.log("=== Animal Inheritance Test ===");
const dog1 = new Dog("Rex", 5, "Golden Retriever");
console.log(dog1.getInfo());
dog1.makeSound();
dog1.eat(); // Inherited method
dog1.fetch(); // Unique to Dog

console.log("\n");
const cat1 = new Cat("Whiskers", 3, "Black");
console.log(cat1.getInfo());
cat1.makeSound();
cat1.sleep(); // Inherited method
cat1.scratch(); // Unique to Cat

console.log("\n");
const bird1 = new Bird("Tweety", 2, true);
console.log(bird1.getInfo());
bird1.makeSound();
bird1.fly();
```

---

## חלק ב': מחלקת Person ומחלקות ילדים

```javascript
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
        console.log(`Hello, my name is ${this.getFullName()}`);
    }
}

// Create Student class that inherits from Person
class Student extends Person {
    constructor(firstName, lastName, age, studentId, major) {
        // Call parent constructor
        super(firstName, lastName, age);
        this.studentId = studentId;
        this.major = major;
        this.grades = [];
    }
    
    // Override introduce
    introduce() {
        console.log(`Hello, my name is ${this.getFullName()}, I'm a ${this.major} student`);
    }
    
    // Add method addGrade
    addGrade(grade) {
        // Write your code here
    }
    
    // Add method getAverage
    getAverage() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }
}

// Create Teacher class that inherits from Person
class Teacher extends Person {
    constructor(firstName, lastName, age, subject, yearsOfExperience) {
        // Write your code here
    }
    
    // Override introduce
    introduce() {
        console.log(`Hello, my name is ${this.getFullName()}, I teach ${this.subject} with ${this.yearsOfExperience} years of experience`);
    }
    
    // Add method teach
    teach() {
        console.log(`${this.getFullName()} is teaching ${this.subject}`);
    }
}
```

### בדיקה:

```javascript
console.log("\n\n=== Person Inheritance Test ===");
const student1 = new Student("Danny", "Cohen", 20, "12345", "Computer Science");
student1.introduce();
student1.addGrade(85);
student1.addGrade(92);
student1.addGrade(78);
console.log(`Average: ${student1.getAverage()}`);

console.log("\n");
const teacher1 = new Teacher("Rachel", "Levi", 35, "Mathematics", 10);
teacher1.introduce();
teacher1.teach();
```

---

## חלק ג': מחלקת Vehicle ומחלקות ילדים

```javascript
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
            console.log(`${this.brand} ${this.model} started`);
        } else {
            console.log("Vehicle is already running");
        }
    }
    
    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            console.log(`${this.brand} ${this.model} stopped`);
        } else {
            console.log("Vehicle is already off");
        }
    }
    
    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

// Create Car class that inherits from Vehicle
class Car extends Vehicle {
    constructor(brand, model, year, numDoors) {
        super(brand, model, year);
        this.numDoors = numDoors;
    }
    
    honk() {
        console.log(`${this.brand} ${this.model} honks: Beep beep! 🚗`);
    }
}

// Create Motorcycle class that inherits from Vehicle
class Motorcycle extends Vehicle {
    constructor(brand, model, year, engineSize) {
        // Write your code here
    }
    
    wheelie() {
        if (this.isRunning) {
            console.log(`${this.brand} ${this.model} does a wheelie! 🏍️`);
        } else {
            console.log("Need to start the motorcycle first");
        }
    }
}
```

### בדיקה:

```javascript
console.log("\n\n=== Vehicle Inheritance Test ===");
const car1 = new Car("Toyota", "Corolla", 2020, 4);
console.log(car1.getInfo());
car1.start();
car1.honk();
car1.stop();

console.log("\n");
const motorcycle1 = new Motorcycle("Honda", "CBR", 2022, 600);
console.log(motorcycle1.getInfo());
motorcycle1.wheelie(); // Should print error
motorcycle1.start();
motorcycle1.wheelie(); // Now it should work
```

---

## פלט צפוי

```
=== Animal Inheritance Test ===
Rex, age 5, breed: Golden Retriever
Rex barks: Woof woof! 🐕
Rex is eating
Rex is fetching the ball

Whiskers, age 3, color: Black
Whiskers meows: Meow! 🐱
Whiskers is sleeping
Whiskers is scratching

Tweety, age 2
Tweety chirps: Tweet tweet! 🐦
Tweety is flying

=== Person Inheritance Test ===
Hello, my name is Danny Cohen, I'm a Computer Science student
Average: 85

Hello, my name is Rachel Levi, I teach Mathematics with 10 years of experience
Rachel Levi is teaching Mathematics

=== Vehicle Inheritance Test ===
Toyota Corolla (2020)
Toyota Corolla started
Toyota Corolla honks: Beep beep! 🚗
Toyota Corolla stopped

Honda CBR (2022)
Need to start the motorcycle first
Honda CBR started
Honda CBR does a wheelie! 🏍️
```

---

## טיפים

- **extends**: יוצר הורשה ממחלקת אב
- **super()**: קורא לקונסטרקטור של מחלקת האב
- **super.method()**: קורא למתודה של מחלקת האב
- **Override**: דריסת מתודה מהאב במחלקת הבן
- מחלקת בן יורשת את כל המתודות והמאפיינים מהאב

---

## משימות נוספות (אופציונלי)

1. צור מחלקת `Fish` שיורשת מ-`Animal`
2. הוסף מחלקת `Principal` שיורשת מ-`Teacher`
3. צור מחלקת `Truck` שיורשת מ-`Vehicle`
