/**
 * תרגיל 6: עבודה מתקדמת עם Classes וקונסטרקטורים
 * רמת קושי: בינונית-גבוהה
 * 
 * מטרה: לתרגל עבודה מורכבת עם קונסטרקטורים, ולידציה, ופרמטרים ברירת מחדל
 */

// חלק א': צור מחלקה User עם ולידציה
class User {
    constructor(username, email, age) {
        // ולידציה לשם משתמש (חייב להיות לפחות 3 תווים)
        if (username.length < 3) {
            throw new Error("שם משתמש חייב להכיל לפחות 3 תווים");
        }
        
        // ולידציה לאימייל (חייב להכיל @)
        if (!email.includes("@")) {
            throw new Error("אימייל לא תקין");
        }
        
        // ולידציה לגיל (חייב להיות בין 13 ל-120)
        // כתוב את הולידציה כאן
        
        this.username = username;
        this.email = email;
        this.age = age;
        this.createdAt = new Date();
        this.isActive = true;
    }
    
    // הוסף מתודה deactivate שמשנה את isActive ל-false
    deactivate() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה activate שמשנה את isActive ל-true
    activate() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getAccountAge שמחזירה כמה ימים עברו מאז יצירת החשבון
    getAccountAge() {
        const now = new Date();
        const diff = now - this.createdAt;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return days;
    }
    
    getUserInfo() {
        return `${this.username} (${this.email}) - ${this.isActive ? "פעיל" : "לא פעיל"}`;
    }
}

// בדיקות
console.log("=== בדיקת מחלקת User ===");
try {
    const user1 = new User("יוסי", "yossi@example.com", 25);
    console.log(user1.getUserInfo());
    console.log(`החשבון קיים ${user1.getAccountAge()} ימים`);
    
    // נסה ליצור משתמש עם שם קצר מדי
    const user2 = new User("ab", "test@example.com", 20);
} catch (error) {
    console.log("שגיאה:", error.message);
}

try {
    // נסה ליצור משתמש עם אימייל לא תקין
    const user3 = new User("דני", "invalidemail", 30);
} catch (error) {
    console.log("שגיאה:", error.message);
}


// חלק ב': צור מחלקה TodoItem ו-TodoList
class TodoItem {
    static nextId = 1; // מונה למזהה ייחודי
    
    constructor(title, description = "", priority = "medium") {
        this.id = TodoItem.nextId++;
        this.title = title;
        this.description = description;
        this.priority = priority; // "low", "medium", "high"
        this.completed = false;
        this.createdAt = new Date();
    }
    
    // הוסף מתודה complete שמסמנת את המשימה כהושלמה
    complete() {
        // כתוב את הקוד כאן
        this.completedAt = new Date();
    }
    
    // הוסף מתודה uncomplete שמבטלת השלמה
    uncomplete() {
        // כתוב את הקוד כאן
        this.completedAt = null;
    }
    
    getInfo() {
        const status = this.completed ? "✓" : "○";
        const priorityIcon = {
            low: "🟢",
            medium: "🟡",
            high: "🔴"
        }[this.priority];
        
        return `${status} ${priorityIcon} [${this.id}] ${this.title}`;
    }
}

class TodoList {
    constructor(listName) {
        this.listName = listName;
        this.items = [];
    }
    
    // הוסף מתודה addItem שמוסיפה משימה חדשה
    addItem(title, description = "", priority = "medium") {
        const item = new TodoItem(title, description, priority);
        // כתוב את הקוד כאן
        console.log(`משימה חדשה נוספה: ${item.title}`);
        return item;
    }
    
    // הוסף מתודה removeItem שמוחקת משימה לפי ID
    removeItem(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            const removed = this.items.splice(index, 1)[0];
            console.log(`משימה נמחקה: ${removed.title}`);
            return true;
        }
        return false;
    }
    
    // הוסף מתודה completeItem שמסמנת משימה כהושלמה
    completeItem(id) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            // כתוב את הקוד כאן
            console.log(`משימה הושלמה: ${item.title}`);
            return true;
        }
        return false;
    }
    
    // הוסף מתודה getCompletedItems שמחזירה רק משימות שהושלמו
    getCompletedItems() {
        // רמז: השתמש ב-filter
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getPendingItems שמחזירה רק משימות שטרם הושלמו
    getPendingItems() {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה getItemsByPriority שמחזירה משימות לפי עדיפות
    getItemsByPriority(priority) {
        // כתוב את הקוד כאן
    }
    
    // הוסף מתודה listItems שמדפיסה את כל המשימות
    listItems() {
        console.log(`\n=== ${this.listName} ===`);
        if (this.items.length === 0) {
            console.log("אין משימות");
            return;
        }
        this.items.forEach(item => {
            console.log(item.getInfo());
            if (item.description) {
                console.log(`   ${item.description}`);
            }
        });
    }
    
    // הוסף מתודה getStats שמחזירה סטטיסטיקות
    getStats() {
        const total = this.items.length;
        const completed = this.getCompletedItems().length;
        const pending = this.getPendingItems().length;
        const high = this.getItemsByPriority("high").length;
        
        return {
            total,
            completed,
            pending,
            high,
            completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    }
}

// בדיקות מקיפות
console.log("\n\n=== בדיקת מערכת Todo ===");
const myTodoList = new TodoList("המשימות שלי");

// הוסף משימות
myTodoList.addItem("לקנות חלב", "בדרך הביתה", "high");
myTodoList.addItem("לסיים פרויקט", "עד יום חמישי", "high");
myTodoList.addItem("להתקשר לאמא", "", "medium");
myTodoList.addItem("לקרוא ספר", "30 עמודים ביום", "low");

// הצג את כל המשימות
myTodoList.listItems();

// סמן משימות כהושלמו
console.log("\n--- השלמת משימות ---");
myTodoList.completeItem(1);
myTodoList.completeItem(3);

// הצג שוב
myTodoList.listItems();

// הצג משימות ממתינות
console.log("\n--- משימות ממתינות ---");
const pending = myTodoList.getPendingItems();
pending.forEach(item => console.log(item.getInfo()));

// הצג משימות בעדיפות גבוהה
console.log("\n--- משימות בעדיפות גבוהה ---");
const highPriority = myTodoList.getItemsByPriority("high");
highPriority.forEach(item => console.log(item.getInfo()));

// הצג סטטיסטיקות
console.log("\n--- סטטיסטיקות ---");
const stats = myTodoList.getStats();
console.log(`סה"כ משימות: ${stats.total}`);
console.log(`הושלמו: ${stats.completed}`);
console.log(`ממתינות: ${stats.pending}`);
console.log(`עדיפות גבוהה: ${stats.high}`);
console.log(`אחוז השלמה: ${stats.completionRate}%`);

// מחק משימה
console.log("\n--- מחיקת משימה ---");
myTodoList.removeItem(2);
myTodoList.listItems();

/**
 * פלט צפוי:
 * יוסי (yossi@example.com) - פעיל
 * החשבון קיים 0 ימים
 * שגיאה: שם משתמש חייב להכיל לפחות 3 תווים
 * שגיאה: אימייל לא תקין
 * 
 * משימה חדשה נוספה: לקנות חלב
 * משימה חדשה נוספה: לסיים פרויקט
 * משימה חדשה נוספה: להתקשר לאמא
 * משימה חדשה נוספה: לקרוא ספר
 * 
 * === המשימות שלי ===
 * ○ 🔴 [1] לקנות חלב
 *    בדרך הביתה
 * ○ 🔴 [2] לסיים פרויקט
 *    עד יום חמישי
 * ○ 🟡 [3] להתקשר לאמא
 * ○ 🟢 [4] לקרוא ספר
 *    30 עמודים ביום
 * 
 * --- השלמת משימות ---
 * משימה הושלמה: לקנות חלב
 * משימה הושלמה: להתקשר לאמא
 * 
 * === המשימות שלי ===
 * ✓ 🔴 [1] לקנות חלב
 *    בדרך הביתה
 * ○ 🔴 [2] לסיים פרויקט
 *    עד יום חמישי
 * ✓ 🟡 [3] להתקשר לאמא
 * ○ 🟢 [4] לקרוא ספר
 *    30 עמודים ביום
 * 
 * --- משימות ממתינות ---
 * ○ 🔴 [2] לסיים פרויקט
 * ○ 🟢 [4] לקרוא ספר
 * 
 * --- משימות בעדיפות גבוהה ---
 * ✓ 🔴 [1] לקנות חלב
 * ○ 🔴 [2] לסיים פרויקט
 * 
 * --- סטטיסטיקות ---
 * סה"כ משימות: 4
 * הושלמו: 2
 * ממתינות: 2
 * עדיפות גבוהה: 2
 * אחוז השלמה: 50%
 */
