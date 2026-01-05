# תרגיל 8: הורשה מתקדמת ורב-שכבתית 🎯

## 🎯 מטרות התרגיל

בתרגיל זה נלמד:
- ✅ **Multi-level Inheritance** - הורשה רב-שכבתית (A → B → C)
- ✅ **Advanced super** - שימוש מתקדם ב-`super`
- ✅ **Method Overriding** - דריסת מתודות במספר רמות
- ✅ **Complex Hierarchies** - היררכיות מורכבות של מחלקות
- ✅ **Real-world Systems** - מערכות אמיתיות עם OOP

---

## 📚 חלק א': מערכת עובדים עם הורשה רב-שכבתית

### מטרה
צור מערכת ניהול עובדים עם שלוש רמות הורשה:
1. `Employee` (עובד בסיסי)
2. `FullTimeEmployee` (עובד במשרה מלאה) יורש מ-Employee
3. `Manager` (מנהל) יורש מ-FullTimeEmployee

### דרישות
- **Employee**: מידע בסיסי, מעקב אחרי וותק
- **FullTimeEmployee**: משכורת חודשית ושנתית
- **PartTimeEmployee**: שעתי עם חישוב שכר
- **Manager**: ניהול צוות, מחלקה

### קוד להשלמה

```javascript
class Employee {
    static totalEmployees = 0;
    
    constructor(firstName, lastName, employeeId) {
        // Initialize firstName, lastName, employeeId
        // Set hireDate to new Date()
        // Increment Employee.totalEmployees
    }
    
    getFullName() {
        // Hint: Return firstName + space + lastName
    }
    
    getYearsOfService() {
        // Hint: Calculate years between now and hireDate
        // Use: now.getFullYear() - this.hireDate.getFullYear()
    }
    
    getInfo() {
        // Hint: Return string with name and employee ID
    }
    
    work() {
        // Hint: console.log that employee is working
    }
}

class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, employeeId, monthlySalary) {
        // Call super with parent parameters
        // Initialize monthlySalary
    }
    
    getAnnualSalary() {
        // Hint: Multiply monthlySalary by 12
    }
    
    getInfo() {
        // Hint: Use super.getInfo() and add salary information
    }
}

class Manager extends FullTimeEmployee {
    constructor(firstName, lastName, employeeId, monthlySalary, department) {
        // Call super with FullTimeEmployee parameters
        // Initialize department and empty teamMembers array
    }
    
    addTeamMember(employee) {
        // Hint: Push employee to teamMembers array
        // console.log success message
    }
    
    removeTeamMember(employeeId) {
        // Hint: Use findIndex to find employee
        // Use splice to remove if found
        // Return true/false based on success
    }
    
    getTeamSize() {
        // Hint: Return length of teamMembers array
    }
    
    work() {
        // Hint: Override work method
        // Show manager managing department with team size
    }
    
    getInfo() {
        // Hint: Return manager info with department and team size
    }
}

class PartTimeEmployee extends Employee {
    constructor(firstName, lastName, employeeId, hourlyRate, hoursPerWeek) {
        // Hint: Call super with Employee parameters
        // Initialize hourlyRate and hoursPerWeek
    }
    
    getWeeklySalary() {
        // Hint: Multiply hourlyRate by hoursPerWeek
    }
    
    getMonthlySalary() {
        // Hint: Multiply weekly salary by 4
    }
    
    getInfo() {
        // Hint: Use super.getInfo() and add part-time info
    }
}

// Tests
console.log("=== Testing Employee System ===");
const emp1 = new FullTimeEmployee("Yossi", "Cohen", "E001", 15000);
const emp2 = new FullTimeEmployee("Danny", "Levi", "E002", 12000);
const emp3 = new PartTimeEmployee("Michal", "Abraham", "E003", 60, 20);
const manager1 = new Manager("Rachel", "Barak", "M001", 25000, "Development");

console.log(emp1.getInfo());
console.log(emp2.getInfo());
console.log(emp3.getInfo());
console.log(manager1.getInfo());

console.log("\n--- Adding Team Members ---");
manager1.addTeamMember(emp1);
manager1.addTeamMember(emp2);
manager1.addTeamMember(emp3);

console.log("\n");
manager1.work();
emp1.work();

console.log(`\nTotal employees in system: ${Employee.totalEmployees}`);
```

---

## 🎮 Part B: RPG Game Character System

### Goal
Create a character system for a role-playing game with complex inheritance.

### Hierarchy
```
Character (base)
├── Warrior (warrior)
├── Mage (mage)
│   └── Healer (healer - inherits from Mage)
```

### קוד להשלמה

```javascript
class Character {
    constructor(name, level = 1) {
        // Initialize name, level
        // Set health = 100, maxHealth = 100
        // Set isAlive = true
    }
    
    takeDamage(damage) {
        // Hint: Check if character is alive
        // Subtract damage from health
        // console.log damage taken
        // If health <= 0, set isAlive to false
    }
    
    heal(amount) {
        // Hint: Check if character is alive
        // Add amount to health (don't exceed maxHealth)
        // Use Math.min(this.health + amount, this.maxHealth)
    }
    
    levelUp() {
        // Hint: Increment level
        // Increase maxHealth by 20
        // Set health to maxHealth
        // console.log level up message
    }
}

class Warrior extends Character {
    constructor(name, level = 1) {
        // Call super with name and level
        // Initialize strength = 10
        // Initialize armor = 5
    }
    
    attack(target) {
        // Hint: Check if this character is alive
        // Calculate damage = strength * level
        // console.log attack message
        // Call target.takeDamage(damage)
    }
    
    defend() {
        console.log(`🛡️ ${this.name} defends with ${this.armor} armor`);
    }
    
    takeDamage(damage) {
        // Reduce damage due to armor
        const reducedDamage = Math.max(damage - this.armor, 0);
        super.takeDamage(reducedDamage);
    }
    
    levelUp() {
        super.levelUp();
        this.strength += 3;
        this.armor += 2;
        console.log(`Strength: ${this.strength}, Armor: ${this.armor}`);
    }
}

class Mage extends Character {
    constructor(name, level = 1) {
        // Hint: Call super, then initialize mana, maxMana, spellPower
    }
    
    castSpell(target, manaCost = 10) {
        // Hint: Check if character is alive
        // Check if mana >= manaCost
        // Subtract mana, calculate damage (spellPower * level)
        // console.log spell cast message
        // Call target.takeDamage(damage)
    }
    
    meditate() {
        // Hint: Increase mana by 20, but don't exceed maxMana
        // Use Math.min(this.mana + 20, this.maxMana)
        // console.log meditation message
    }
    
    levelUp() {
        // Hint: Call super.levelUp()
        // Increase maxMana, restore mana, increase spellPower
        // console.log stats
    }
}

class Healer extends Mage {
    constructor(name, level = 1) {
        // Hint: Call super, then initialize healingPower
    }
    
    healAlly(target) {
        // Hint: Check if alive and has enough mana (15)
        // Subtract mana, calculate healAmount (healingPower * level)
        // console.log healing message
        // Call target.heal(healAmount)
    }
    
    levelUp() {
        // Hint: Call super.levelUp()
        // Increase healingPower
        // console.log stats
    }
}

// Comprehensive Tests
console.log("\n\n=== Testing Game Character System ===");
const warrior1 = new Warrior("Arthur", 2);
const mage1 = new Mage("Merlin", 2);
const healer1 = new Healer("Elena", 2);

console.log("\n--- Battle ---");
warrior1.attack(mage1);
mage1.castSpell(warrior1);
warrior1.defend();

console.log("\n--- Healing ---");
healer1.healAlly(warrior1);
healer1.healAlly(mage1);

console.log("\n--- Level Up ---");
warrior1.levelUp();
mage1.levelUp();
healer1.levelUp();

console.log("\n--- Another Battle ---");
mage1.castSpell(warrior1);
mage1.castSpell(warrior1);
mage1.castSpell(warrior1); // Should be out of mana
mage1.meditate();
mage1.castSpell(warrior1);
```

---

## 🎓 What We Learned

### Multi-level Inheritance
```
Manager extends FullTimeEmployee extends Employee
    ↓           ↓                    ↓
 Manager    Full-time employee       Employee
```

### Super Chain
```javascript
class Manager extends FullTimeEmployee {
    getInfo() {
        // Calls FullTimeEmployee.getInfo()
        // which calls Employee.getInfo()
        return `Manager: ${super.getInfo()}`;
    }
}
```

### Override in Multiple Levels
```javascript
// Employee
work() { console.log("Working"); }

// FullTimeEmployee - doesn't override

// Manager - overrides
work() { console.log("Managing"); }
```

---

## 💡 Tips

1. **Plan hierarchy** - Think ahead about class structure
2. **super.method()** - Always call parent class when needed
3. **DRY** - Don't duplicate code, use inheritance
4. **Business logic** - Put code in the right class

---

## 🚀 Additional Challenges

1. **Create Director** - Who inherits from Manager and manages multiple managers
2. **Add Intern** - Temporary employee with internship period
3. **Create Assassin** - New character with special abilities
4. **Add Equipment** - Equipment that affects stats
5. **Create Party System** - Group of characters acting together

---

## 📤 Expected Output

```
=== Testing Employee System ===
Employee: Yossi Cohen, ID: E001, Full-time, Monthly salary: ₪15000
Employee: Danny Levi, ID: E002, Full-time, Monthly salary: ₪12000
Employee: Michal Abraham, ID: E003, Part-time, 20 hours/week, ₪60/hour
Manager: Rachel Barak, Department: Development, Team members: 0

--- Adding Team Members ---
Yossi Cohen added to Rachel Barak's team
Danny Levi added to Rachel Barak's team
Michal Abraham added to Rachel Barak's team

Rachel Barak manages the Development department with 3 employees
Yossi Cohen is working

Total employees in system: 4
```
