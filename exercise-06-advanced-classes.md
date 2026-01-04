# תרגיל 6: עבודה מתקדמת עם Classes וקונסטרקטורים 🎯

## 🎯 מטרות התרגיל

בתרגיל זה נלמד:
- ✅ **Validation** - בדיקת תקינות נתונים בקונסטרקטור
- ✅ **Error Handling** - טיפול בשגיאות עם `throw` ו-`try-catch`
- ✅ **Default Parameters** - פרמטרים ברירת מחדל
- ✅ **Static Properties** - מאפיינים סטטיים למעקב אחר מופעים
- ✅ **Complex Methods** - מתודות מורכבות יותר

---

## 📚 חלק א': מחלקת User עם Validation

### מטרה
צור מחלקה `User` שמוודאת שהנתונים תקינים לפני יצירת המשתמש.

### דרישות
1. שם משתמש חייב להיות לפחות 3 תווים
2. אימייל חייב להכיל `@`
3. גיל חייב להיות בין 13 ל-120
4. אם הנתונים לא תקינים, זרוק שגיאה עם הודעה ברורה

### קוד להשלמה

```javascript
class User {
    constructor(username, email, age) {
        // Validation for username (must be at least 3 characters)
        if (username.length < 3) {
            throw new Error("שם משתמש חייב להכיל לפחות 3 תווים");
        }
        
        // Validation for email (must contain @)
        if (!email.includes("@")) {
            throw new Error("אימייל לא תקין");
        }
        
        // Validation for age (must be between 13 and 120)
        // Write your code here
        if (age < 13 || age > 120) {
            throw new Error("גיל חייב להיות בין 13 ל-120");
        }
        
        this.username = username;
        this.email = email;
        this.age = age;
        this.createdAt = new Date();
        this.isActive = true;
    }
    
    deactivate() {
        // Write your code here
        this.isActive = false;
    }
    
    activate() {
        // Write your code here
        this.isActive = true;
    }
    
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

// Tests
console.log("=== Testing User Class ===");
try {
    const user1 = new User("יוסי", "yossi@example.com", 25);
    console.log(user1.getUserInfo());
    console.log(`החשבון קיים ${user1.getAccountAge()} ימים`);
    
    // Try creating user with short name
    const user2 = new User("ab", "test@example.com", 20);
} catch (error) {
    console.log("שגיאה:", error.message);
}

try {
    // Try creating user with invalid email
    const user3 = new User("דני", "invalidemail", 30);
} catch (error) {
    console.log("שגיאה:", error.message);
}

try {
    // Try creating user with invalid age
    const user4 = new User("משה", "moshe@example.com", 10);
} catch (error) {
    console.log("שגיאה:", error.message);
}
```

---

## 📝 חלק ב': מערכת Todo מלאה

### מטרה
צור מערכת ניהול משימות מתקדמת עם שתי מחלקות: `TodoItem` ו-`TodoList`.

### דרישות

**TodoItem:**
- מזהה ייחודי אוטומטי
- כותרת, תיאור (אופציונלי), עדיפות (ברירת מחדל: "medium")
- סטטוס: completed/pending
- תאריך יצירה והשלמה

**TodoList:**
- שם הרשימה
- הוספה/הסרה/השלמת משימות
- סינון לפי סטטוס ועדיפות
- סטטיסטיקות

### קוד להשלמה

```javascript
class TodoItem {
    static nextId = 1;
    
    constructor(title, description = "", priority = "medium") {
        this.id = TodoItem.nextId++;
        this.title = title;
        this.description = description;
        this.priority = priority; // "low", "medium", "high"
        this.completed = false;
        this.createdAt = new Date();
    }
    
    complete() {
        // Write your code here
        this.completed = true;
        this.completedAt = new Date();
    }
    
    uncomplete() {
        // Write your code here
        this.completed = false;
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
    
    addItem(title, description = "", priority = "medium") {
        const item = new TodoItem(title, description, priority);
        // Write your code here
        this.items.push(item);
        console.log(`משימה חדשה נוספה: ${item.title}`);
        return item;
    }
    
    removeItem(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            const removed = this.items.splice(index, 1)[0];
            console.log(`משימה נמחקה: ${removed.title}`);
            return true;
        }
        return false;
    }
    
    completeItem(id) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            // Write your code here
            item.complete();
            console.log(`משימה הושלמה: ${item.title}`);
            return true;
        }
        return false;
    }
    
    getCompletedItems() {
        // Hint: use filter
        // Write your code here
        return this.items.filter(item => item.completed);
    }
    
    getPendingItems() {
        // Write your code here
        return this.items.filter(item => !item.completed);
    }
    
    getItemsByPriority(priority) {
        // Write your code here
        return this.items.filter(item => item.priority === priority);
    }
    
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

// Comprehensive Tests
console.log("\n\n=== Testing Todo System ===");
const myTodoList = new TodoList("המשימות שלי");

// Add tasks
myTodoList.addItem("לקנות חלב", "בדרך הביתה", "high");
myTodoList.addItem("לסיים פרויקט", "עד יום חמישי", "high");
myTodoList.addItem("להתקשר לאמא", "", "medium");
myTodoList.addItem("לקרוא ספר", "30 עמודים ביום", "low");

// Display all tasks
myTodoList.listItems();

// Mark tasks as completed
console.log("\n--- Completing Tasks ---");
myTodoList.completeItem(1);
myTodoList.completeItem(3);

// Display again
myTodoList.listItems();

// Show pending tasks
console.log("\n--- Pending Tasks ---");
const pending = myTodoList.getPendingItems();
pending.forEach(item => console.log(item.getInfo()));

// Show high priority tasks
console.log("\n--- High Priority Tasks ---");
const highPriority = myTodoList.getItemsByPriority("high");
highPriority.forEach(item => console.log(item.getInfo()));

// Show statistics
console.log("\n--- Statistics ---");
const stats = myTodoList.getStats();
console.log(`סה"כ משימות: ${stats.total}`);
console.log(`הושלמו: ${stats.completed}`);
console.log(`ממתינות: ${stats.pending}`);
console.log(`עדיפות גבוהה: ${stats.high}`);
console.log(`אחוז השלמה: ${stats.completionRate}%`);

// Delete a task
console.log("\n--- Deleting Task ---");
myTodoList.removeItem(2);
myTodoList.listItems();
```

---

## 🎓 מה למדנו?

### Validation בקונסטרקטור
```javascript
if (condition) {
    throw new Error("הודעת שגיאה");
}
```

### Try-Catch
```javascript
try {
    // קוד שעלול לזרוק שגיאה
} catch (error) {
    // טיפול בשגיאה
    console.log(error.message);
}
```

### Default Parameters
```javascript
constructor(name, description = "ללא תיאור", priority = "medium") {
    // אם לא מעבירים ערך, נשתמש בערך ברירת המחדל
}
```

### Static Counter
```javascript
static nextId = 1;
constructor() {
    this.id = TodoItem.nextId++;
}
```

---

## 💡 טיפים

1. **Validation** - תמיד בדוק נתונים לפני שמשתמשים בהם
2. **Error Messages** - כתוב הודעות שגיאה ברורות
3. **Default Values** - השתמש בפרמטרים ברירת מחדל לגמישות
4. **Static Properties** - שימושיים למעקב אחר כל המופעים

---

## 🚀 אתגרים נוספים

1. **הוסף תאריך יעד** למשימות
2. **צור התראות** למשימות שחלף תאריך היעד שלהן
3. **הוסף קטגוריות** למשימות
4. **צור מתודת search** שמחפשת משימות לפי טקסט
5. **הוסף מתודה לסידור** המשימות לפי תאריך/עדיפות

---

## 📤 פלט צפוי

```
=== Testing User Class ===
יוסי (yossi@example.com) - פעיל
החשבון קיים 0 ימים
שגיאה: שם משתמש חייב להכיל לפחות 3 תווים
שגיאה: אימייל לא תקין
שגיאה: גיל חייב להיות בין 13 ל-120

=== Testing Todo System ===
משימה חדשה נוספה: לקנות חלב
משימה חדשה נוספה: לסיים פרויקט
משימה חדשה נוספה: להתקשר לאמא
משימה חדשה נוספה: לקרוא ספר

=== המשימות שלי ===
○ 🔴 [1] לקנות חלב
   בדרך הביתה
○ 🔴 [2] לסיים פרויקט
   עד יום חמישי
○ 🟡 [3] להתקשר לאמא
○ 🟢 [4] לקרוא ספר
   30 עמודים ביום

--- Completing Tasks ---
משימה הושלמה: לקנות חלב
משימה הושלמה: להתקשר לאמא

=== המשימות שלי ===
✓ 🔴 [1] לקנות חלב
   בדרך הביתה
○ 🔴 [2] לסיים פרויקט
   עד יום חמישי
✓ 🟡 [3] להתקשר לאמא
○ 🟢 [4] לקרוא ספר
   30 עמודים ביום

--- Statistics ---
סה"כ משימות: 4
הושלמו: 2
ממתינות: 2
עדיפות גבוהה: 2
אחוז השלמה: 50%
```
