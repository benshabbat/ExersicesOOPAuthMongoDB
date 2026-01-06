/**
 * תרגיל 8: הורשה מתקדמת ורב-שכבתית
 * רמת קושי: גבוהה
 * 
 * מטרה: להבין הורשה מורכבת, רב-שכבתית, ושימוש מתקדם ב-super
 */

// חלק א': הורשה רב-שכבתית - מערכת עובדים
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
        return `עובד: ${this.getFullName()}, מזהה: ${this.employeeId}`;
    }
    
    work() {
        console.log(`${this.getFullName()} עובד`);
    }
}

// מחלקת FullTimeEmployee יורשת מ-Employee
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, employeeId, monthlySalary) {
        super(firstName, lastName, employeeId);
        this.monthlySalary = monthlySalary;
    }
    
    getAnnualSalary() {
        return this.monthlySalary * 12;
    }
    
    getInfo() {
        return `${super.getInfo()}, משרה מלאה, משכורת חודשית: ₪${this.monthlySalary}`;
    }
}

// מחלקת Manager יורשת מ-FullTimeEmployee
class Manager extends FullTimeEmployee {
    constructor(firstName, lastName, employeeId, monthlySalary, department) {
        super(firstName, lastName, employeeId, monthlySalary);
        this.department = department;
        this.teamMembers = [];
    }
    
    addTeamMember(employee) {
        this.teamMembers.push(employee);
        console.log(`${employee.getFullName()} נוסף לצוות של ${this.getFullName()}`);
    }
    
    removeTeamMember(employeeId) {
        const index = this.teamMembers.findIndex(emp => emp.employeeId === employeeId);
        if (index !== -1) {
            const removed = this.teamMembers.splice(index, 1)[0];
            console.log(`${removed.getFullName()} הוסר מהצוות`);
            return true;
        }
        return false;
    }
    
    getTeamSize() {
        return this.teamMembers.length;
    }
    
    work() {
        console.log(`${this.getFullName()} מנהל את מחלקת ${this.department} עם ${this.getTeamSize()} עובדים`);
    }
    
    getInfo() {
        return `מנהל: ${this.getFullName()}, מחלקה: ${this.department}, חברי צוות: ${this.getTeamSize()}`;
    }
}

// מחלקת PartTimeEmployee יורשת מ-Employee
class PartTimeEmployee extends Employee {
    constructor(firstName, lastName, employeeId, hourlyRate, hoursPerWeek) {
        // כתוב את הקוד כאן
    }
    
    getWeeklySalary() {
        // כתוב את הקוד כאן
    }
    
    getMonthlySalary() {
        // משכורת חודשית משוערת (4 שבועות)
        return this.getWeeklySalary() * 4;
    }
    
    getInfo() {
        return `${super.getInfo()}, משרה חלקית, ${this.hoursPerWeek} שעות/שבוע, ₪${this.hourlyRate}/שעה`;
    }
}

// בדיקות
console.log("=== בדיקת מערכת עובדים ===");
const emp1 = new FullTimeEmployee("יוסי", "כהן", "E001", 15000);
const emp2 = new FullTimeEmployee("דני", "לוי", "E002", 12000);
const emp3 = new PartTimeEmployee("מיכל", "אברהם", "E003", 60, 20);
const manager1 = new Manager("רחל", "ברק", "M001", 25000, "פיתוח");

console.log(emp1.getInfo());
console.log(emp2.getInfo());
console.log(emp3.getInfo());
console.log(manager1.getInfo());

console.log("\n--- הוספת עובדים לצוות ---");
manager1.addTeamMember(emp1);
manager1.addTeamMember(emp2);
manager1.addTeamMember(emp3);

console.log("\n");
manager1.work();
emp1.work();

console.log(`\nסה"כ עובדים במערכת: ${Employee.totalEmployees}`);


// חלק ב': הורשה מורכבת - מערכת דמויות במשחק
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
            console.log(`${this.name} כבר מת`);
            return;
        }
        
        this.health -= damage;
        console.log(`${this.name} קיבל ${damage} נזק. בריאות: ${this.health}/${this.maxHealth}`);
        
        if (this.health <= 0) {
            this.health = 0;
            this.isAlive = false;
            console.log(`💀 ${this.name} מת!`);
        }
    }
    
    heal(amount) {
        if (!this.isAlive) {
            console.log(`${this.name} מת, לא ניתן לרפא`);
            return;
        }
        
        this.health = Math.min(this.health + amount, this.maxHealth);
        console.log(`${this.name} רופא ב-${amount}. בריאות: ${this.health}/${this.maxHealth}`);
    }
    
    levelUp() {
        this.level++;
        this.maxHealth += 20;
        this.health = this.maxHealth;
        console.log(`🎉 ${this.name} עלה לרמה ${this.level}!`);
    }
}

// מחלקת Warrior יורשת מ-Character
class Warrior extends Character {
    constructor(name, level = 1) {
        super(name, level);
        this.strength = 10;
        this.armor = 5;
    }
    
    attack(target) {
        if (!this.isAlive) {
            console.log(`${this.name} מת ולא יכול לתקוף`);
            return;
        }
        
        const damage = this.strength * this.level;
        console.log(`⚔️ ${this.name} תוקף את ${target.name}!`);
        target.takeDamage(damage);
    }
    
    defend() {
        console.log(`🛡️ ${this.name} מתגונן עם שריון של ${this.armor}`);
    }
    
    takeDamage(damage) {
        // הפחת נזק בגלל שריון
        const reducedDamage = Math.max(damage - this.armor, 0);
        super.takeDamage(reducedDamage);
    }
    
    levelUp() {
        super.levelUp();
        this.strength += 3;
        this.armor += 2;
        console.log(`כוח: ${this.strength}, שריון: ${this.armor}`);
    }
}

// מחלקת Mage יורשת מ-Character
class Mage extends Character {
    constructor(name, level = 1) {
        super(name, level);
        this.mana = 50;
        this.maxMana = 50;
        this.spellPower = 15;
    }
    
    castSpell(target, manaCost = 10) {
        if (!this.isAlive) {
            console.log(`${this.name} מת ולא יכול להטיל כישופים`);
            return;
        }
        
        if (this.mana < manaCost) {
            console.log(`❌ ${this.name} אין מספיק מנה (${this.mana}/${manaCost})`);
            return;
        }
        
        this.mana -= manaCost;
        const damage = this.spellPower * this.level;
        console.log(`✨ ${this.name} מטיל כישוף על ${target.name}! (מנה: ${this.mana}/${this.maxMana})`);
        target.takeDamage(damage);
    }
    
    meditate() {
        this.mana = Math.min(this.mana + 20, this.maxMana);
        console.log(`🧘 ${this.name} מתרכז. מנה: ${this.mana}/${this.maxMana}`);
    }
    
    levelUp() {
        super.levelUp();
        this.maxMana += 10;
        this.mana = this.maxMana;
        this.spellPower += 5;
        console.log(`כוח כישוף: ${this.spellPower}, מנה מקסימלית: ${this.maxMana}`);
    }
}

// מחלקת Healer יורשת מ-Mage
class Healer extends Mage {
    constructor(name, level = 1) {
        super(name, level);
        this.healingPower = 20;
    }
    
    healAlly(target) {
        if (!this.isAlive) {
            console.log(`${this.name} מת ולא יכול לרפא`);
            return;
        }
        
        if (this.mana < 15) {
            console.log(`❌ ${this.name} אין מספיק מנה לריפוי`);
            return;
        }
        
        this.mana -= 15;
        const healAmount = this.healingPower * this.level;
        console.log(`💚 ${this.name} מרפא את ${target.name}`);
        target.heal(healAmount);
    }
    
    levelUp() {
        super.levelUp();
        this.healingPower += 5;
        console.log(`כוח ריפוי: ${this.healingPower}`);
    }
}

// בדיקות מקיפות
console.log("\n\n=== בדיקת מערכת דמויות ===");
const warrior1 = new Warrior("ארתור", 2);
const mage1 = new Mage("מרלין", 2);
const healer1 = new Healer("אלינה", 2);

console.log("\n--- קרב ---");
warrior1.attack(mage1);
mage1.castSpell(warrior1);
warrior1.defend();

console.log("\n--- ריפוי ---");
healer1.healAlly(warrior1);
healer1.healAlly(mage1);

console.log("\n--- התקדמות ---");
warrior1.levelUp();
mage1.levelUp();
healer1.levelUp();

console.log("\n--- קרב נוסף ---");
mage1.castSpell(warrior1);
mage1.castSpell(warrior1);
mage1.castSpell(warrior1); // אמור להיות חסר מנה
mage1.meditate();
mage1.castSpell(warrior1);

/**
 * פלט צפוי:
 * עובד: יוסי כהן, מזהה: E001, משרה מלאה, משכורת חודשית: ₪15000
 * עובד: דני לוי, מזהה: E002, משרה מלאה, משכורת חודשית: ₪12000
 * עובד: מיכל אברהם, מזהה: E003, משרה חלקית, 20 שעות/שבוע, ₪60/שעה
 * מנהל: רחל ברק, מחלקה: פיתוח, חברי צוות: 0
 * 
 * --- הוספת עובדים לצוות ---
 * יוסי כהן נוסף לצוות של רחל ברק
 * דני לוי נוסף לצוות של רחל ברק
 * מיכל אברהם נוסף לצוות של רחל ברק
 * 
 * רחל ברק מנהל את מחלקת פיתוח עם 3 עובדים
 * יוסי כהן עובד
 * 
 * סה"כ עובדים במערכת: 4
 * 
 * --- קרב ---
 * ⚔️ ארתור תוקף את מרלין!
 * מרלין קיבל 20 נזק. בריאות: 100/120
 * ✨ מרלין מטיל כישוף על ארתור! (מנה: 40/50)
 * ארתור קיבל 25 נזק. בריאות: 95/120
 * 🛡️ ארתור מתגונן עם שריון של 7
 * 
 * --- ריפוי ---
 * 💚 אלינה מרפא את ארתור
 * ארתור רופא ב-40. בריאות: 120/120
 * 💚 אלינה מרפא את מרלין
 * מרלין רופא ב-40. בריאות: 120/120
 * 
 * --- התקדמות ---
 * 🎉 ארתור עלה לרמה 3!
 * כוח: 19, שריון: 9
 * 🎉 מרלין עלה לרמה 3!
 * כוח כישוף: 25, מנה מקסימלית: 60
 * 🎉 אלינה עלה לרמה 3!
 * כוח כישוף: 25, מנה מקסימלית: 60
 * כוח ריפוי: 30
 */
