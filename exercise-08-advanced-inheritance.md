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
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.hireDate = new Date();
        Employee.totalEmployees++;
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    getYearsOfService() {
        const now = new Date();
        const years = now.getFullYear() - this.hireDate.getFullYear();
        return years;
    }
    
    getInfo() {
        return `Employee: ${this.getFullName()}, ID: ${this.employeeId}`;
    }
    
    work() {
        console.log(`${this.getFullName()} is working`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, employeeId, monthlySalary) {
        super(firstName, lastName, employeeId);
        this.monthlySalary = monthlySalary;
    }
    
    getAnnualSalary() {
        return this.monthlySalary * 12;
    }
    
    getInfo() {
        return `${super.getInfo()}, Full-time, Monthly salary: ₪${this.monthlySalary}`;
    }
}

class Manager extends FullTimeEmployee {
    constructor(firstName, lastName, employeeId, monthlySalary, department) {
        super(firstName, lastName, employeeId, monthlySalary);
        this.department = department;
        this.teamMembers = [];
    }
    
    addTeamMember(employee) {
        this.teamMembers.push(employee);
        console.log(`${employee.getFullName()} added to ${this.getFullName()}'s team`);
    }
    
    removeTeamMember(employeeId) {
        const index = this.teamMembers.findIndex(emp => emp.employeeId === employeeId);
        if (index !== -1) {
            const removed = this.teamMembers.splice(index, 1)[0];
            console.log(`${removed.getFullName()} removed from team`);
            return true;
        }
        return false;
    }
    
    getTeamSize() {
        return this.teamMembers.length;
    }
    
    work() {
        console.log(`${this.getFullName()} manages the ${this.department} department with ${this.getTeamSize()} employees`);
    }
    
    getInfo() {
        return `Manager: ${this.getFullName()}, Department: ${this.department}, Team members: ${this.getTeamSize()}`;
    }
}

class PartTimeEmployee extends Employee {
    constructor(firstName, lastName, employeeId, hourlyRate, hoursPerWeek) {
        // Write your code here
        super(firstName, lastName, employeeId);
        this.hourlyRate = hourlyRate;
        this.hoursPerWeek = hoursPerWeek;
    }
    
    getWeeklySalary() {
        // Write your code here
        return this.hourlyRate * this.hoursPerWeek;
    }
    
    getMonthlySalary() {
        // Approximate monthly salary (4 weeks)
        return this.getWeeklySalary() * 4;
    }
    
    getInfo() {
        return `${super.getInfo()}, Part-time, ${this.hoursPerWeek} hours/week, ₪${this.hourlyRate}/hour`;
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
        this.name = name;
        this.level = level;
        this.health = 100;
        this.maxHealth = 100;
        this.isAlive = true;
    }
    
    takeDamage(damage) {
        if (!this.isAlive) {
            console.log(`${this.name} is already dead`);
            return;
        }
        
        this.health -= damage;
        console.log(`${this.name} took ${damage} damage. Health: ${this.health}/${this.maxHealth}`);
        
        if (this.health <= 0) {
            this.health = 0;
            this.isAlive = false;
            console.log(`💀 ${this.name} died!`);
        }
    }
    
    heal(amount) {
        if (!this.isAlive) {
            console.log(`${this.name} is dead, cannot heal`);
            return;
        }
        
        this.health = Math.min(this.health + amount, this.maxHealth);
        console.log(`${this.name} healed by ${amount}. Health: ${this.health}/${this.maxHealth}`);
    }
    
    levelUp() {
        this.level++;
        this.maxHealth += 20;
        this.health = this.maxHealth;
        console.log(`🎉 ${this.name} leveled up to ${this.level}!`);
    }
}

class Warrior extends Character {
    constructor(name, level = 1) {
        super(name, level);
        this.strength = 10;
        this.armor = 5;
    }
    
    attack(target) {
        if (!this.isAlive) {
            console.log(`${this.name} is dead and cannot attack`);
            return;
        }
        
        const damage = this.strength * this.level;
        console.log(`⚔️ ${this.name} attacks ${target.name}!`);
        target.takeDamage(damage);
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
        super(name, level);
        this.mana = 50;
        this.maxMana = 50;
        this.spellPower = 15;
    }
    
    castSpell(target, manaCost = 10) {
        if (!this.isAlive) {
            console.log(`${this.name} is dead and cannot cast spells`);
            return;
        }
        
        if (this.mana < manaCost) {
            console.log(`❌ ${this.name} not enough mana (${this.mana}/${manaCost})`);
            return;
        }
        
        this.mana -= manaCost;
        const damage = this.spellPower * this.level;
        console.log(`✨ ${this.name} casts a spell on ${target.name}! (Mana: ${this.mana}/${this.maxMana})`);
        target.takeDamage(damage);
    }
    
    meditate() {
        this.mana = Math.min(this.mana + 20, this.maxMana);
        console.log(`🧘 ${this.name} meditates. Mana: ${this.mana}/${this.maxMana}`);
    }
    
    levelUp() {
        super.levelUp();
        this.maxMana += 10;
        this.mana = this.maxMana;
        this.spellPower += 5;
        console.log(`Spell power: ${this.spellPower}, Max mana: ${this.maxMana}`);
    }
}

class Healer extends Mage {
    constructor(name, level = 1) {
        super(name, level);
        this.healingPower = 20;
    }
    
    healAlly(target) {
        if (!this.isAlive) {
            console.log(`${this.name} is dead and cannot heal`);
            return;
        }
        
        if (this.mana < 15) {
            console.log(`❌ ${this.name} not enough mana for healing`);
            return;
        }
        
        this.mana -= 15;
        const healAmount = this.healingPower * this.level;
        console.log(`💚 ${this.name} heals ${target.name}`);
        target.heal(healAmount);
    }
    
    levelUp() {
        super.levelUp();
        this.healingPower += 5;
        console.log(`Healing power: ${this.healingPower}`);
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
