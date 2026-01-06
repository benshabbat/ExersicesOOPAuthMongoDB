# Exercise 4: Static Methods and this

**Difficulty Level:** Medium ⭐⭐⭐  
**Estimated Time:** 60-90 minutes

## Goal
Understand the use of `this` and static methods

---

## Part A: Car Class

Create a `Car` class with regular methods and static methods.

```javascript
class Car {
    // Add constructor that receives: brand, model, year
    constructor(brand, model, year) {
        // Initialize brand, model, year properties
        // Set mileage to 0
        // Hint: this.propertyName = parameterValue
    }
    
    // Add method drive that receives kilometers and adds them to mileage
    drive(kilometers) {
        // Hint: Add kilometers to this.mileage
        // Then console.log with template string
    }
    
    // Add method getAge that returns car age (2026 - year)
    getAge() {
        // Write your code here
    }
    
    // Add method getCarInfo that returns string with all car details
    getCarInfo() {
        // Hint: Return template string with brand, model, year, mileage
        // Format: "Brand Model (Year) - Mileage km"
    }
    
    // Static method - compare two cars by mileage
    static compare(car1, car2) {
        // Hint: Compare car1.mileage with car2.mileage
        // Return appropriate message based on comparison
        // Use if-else if-else structure
    }
}
```

### Testing:

```javascript
console.log("=== Car Class Test ===");
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2018);

car1.drive(5000);
car2.drive(8000);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(`First car age: ${car1.getAge()} years`);
console.log(Car.compare(car1, car2));
```

---

## Part B: Temperature Class

Create a `Temperature` class for temperature conversions.

```javascript
class Temperature {
    // Add constructor that receives temperature in Celsius
    constructor(celsius) {
        // Write your code here
    }
    
    // Add method toFahrenheit that returns temperature in Fahrenheit
    toFahrenheit() {
        // Formula: (celsius * 9/5) + 32
        // Write your code here
    }
    
    // Add method toKelvin that returns temperature in Kelvin
    toKelvin() {
        // Formula: celsius + 273.15
        // Write your code here
    }
    
    // Static method - fromFahrenheit creates Temperature object from Fahrenheit
    static fromFahrenheit(fahrenheit) {
        const celsius = (fahrenheit - 32) * 5/9;
        return new Temperature(celsius);
    }
    
    // Static method - fromKelvin creates Temperature object from Kelvin
    static fromKelvin(kelvin) {
        // Hint: Calculate celsius from kelvin (kelvin - 273.15)
        // Then return new Temperature(celsius)
    }
}
```

### Testing:

```javascript
console.log("\n=== Temperature Class Test ===");
const temp1 = new Temperature(25);
console.log(`${temp1.celsius}°C = ${temp1.toFahrenheit()}°F`);
console.log(`${temp1.celsius}°C = ${temp1.toKelvin()}K`);

const temp2 = Temperature.fromFahrenheit(68);
console.log(`68°F = ${temp2.celsius}°C`);
```

---

## Part C: Counter Class

Create a `Counter` class with static properties.

```javascript
class Counter {
    // Static property that counts how many Counter objects were created
    static totalCounters = 0;
    
    constructor(initialValue = 0) {
        this.value = initialValue;
        Counter.totalCounters++; // Increase global counter
        this.id = Counter.totalCounters; // Give each counter unique ID
    }
    
    // Add method increment that increases value by 1
    increment() {
        // Write your code here
    }
    
    // Add method decrement that decreases value by 1
    decrement() {
        // Write your code here
    }
    
    // Add method reset that sets value to 0
    reset() {
        // Write your code here
    }
    
    // Static method that returns how many counters were created
    static getTotalCounters() {
        return Counter.totalCounters;
    }
}
```

### Testing:

```javascript
console.log("\n=== Counter Class Test ===");
const counter1 = new Counter();
const counter2 = new Counter(10);
const counter3 = new Counter(5);

console.log(`Created ${Counter.getTotalCounters()} counters`);

counter1.increment();
counter1.increment();
console.log(`Counter ${counter1.id}: ${counter1.value}`);

counter2.decrement();
console.log(`Counter ${counter2.id}: ${counter2.value}`);

counter3.reset();
console.log(`Counter ${counter3.id}: ${counter3.value}`);
```

---

## Expected Output

```
=== Car Class Test ===
Car drove 5000 km. Total mileage: 5000 km
Car drove 8000 km. Total mileage: 8000 km
Toyota Corolla (2020) - 5000 km
Honda Civic (2018) - 8000 km
First car age: 6 years
Honda Civic has driven more

=== Temperature Class Test ===
25°C = 77°F
25°C = 298.15K
68°F = 20°C

=== Counter Class Test ===
Created 3 counters
Counter 1: 2
Counter 2: 9
Counter 3: 0
```

---

## Tips

- **Regular method**: Called on an instance - `object.method()`
- **Static method**: Called on the class - `Class.method()`
- **Static property**: Belongs to the class, not to the instance
- `this` inside a regular method refers to the instance
- There is no `this` in a static method

---

## Additional Tasks (Optional)

1. Add a static method `getOldestCar()` to Car
2. Create an `IDGenerator` class with a static method `generateID()`
3. Add conversion to Rankine to Temperature
