/**
 * תרגיל 11: פרויקט מקיף - מערכת ניהול ספריה
 * רמת קושי: מאוד גבוהה
 * 
 * מטרה: לשלב את כל מה שלמדנו - Classes, Inheritance, Encapsulation, Polymorphism
 * 
 * הוראות:
 * 1. השלם את הקוד החסר
 * 2. בדוק שהתוכנית עובדת כמצופה
 * 3. נסה להוסיף פיצ'רים משלך!
 */

// ========== מחלקות בסיס ==========

class LibraryItem {
    static nextId = 1;
    
    constructor(title, year) {
        this.id = `ITEM-${LibraryItem.nextId++}`;
        this.title = title;
        this.year = year;
        this.isAvailable = true;
        this.borrowedBy = null;
        this.borrowDate = null;
    }
    
    getInfo() {
        return `[${this.id}] ${this.title} (${this.year})`;
    }
    
    borrow(memberName) {
        if (!this.isAvailable) {
            console.log(`❌ ${this.title} כבר מושאל`);
            return false;
        }
        
        this.isAvailable = false;
        this.borrowedBy = memberName;
        this.borrowDate = new Date();
        console.log(`✅ ${memberName} שאל את ${this.title}`);
        return true;
    }
    
    return() {
        if (this.isAvailable) {
            console.log(`❌ ${this.title} לא מושאל כרגע`);
            return false;
        }
        
        const borrower = this.borrowedBy;
        this.isAvailable = true;
        this.borrowedBy = null;
        this.borrowDate = null;
        console.log(`✅ ${borrower} החזיר את ${this.title}`);
        return true;
    }
}

// ספר יורש מ-LibraryItem
class Book extends LibraryItem {
    constructor(title, author, year, pages, genre) {
        super(title, year);
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.type = "ספר";
    }
    
    getInfo() {
        return `📖 ${super.getInfo()}\n   מחבר: ${this.author}, ז'אנר: ${this.genre}, עמודים: ${this.pages}`;
    }
}

// כתב עת יורש מ-LibraryItem
class Magazine extends LibraryItem {
    constructor(title, year, issueNumber, month) {
        // כתוב את הקוד כאן
        super(title, year);
        this.issueNumber = issueNumber;
        this.month = month;
        this.type = "כתב עת";
    }
    
    getInfo() {
        return `📰 ${super.getInfo()}\n   גיליון: ${this.issueNumber}, חודש: ${this.month}`;
    }
}

// DVD יורש מ-LibraryItem
class DVD extends LibraryItem {
    constructor(title, director, year, duration, genre) {
        // כתוב את הקוד כאן
        super(title, year);
        this.director = director;
        this.duration = duration; // בדקות
        this.genre = genre;
        this.type = "DVD";
    }
    
    getInfo() {
        return `📀 ${super.getInfo()}\n   במאי: ${this.director}, ז'אנר: ${this.genre}, משך: ${this.duration} דקות`;
    }
}

// ========== מחלקת Member (חבר ספריה) ==========

class Member {
    #memberId;
    static nextMemberId = 1000;
    
    constructor(name, email, phoneNumber) {
        this.#memberId = Member.nextMemberId++;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.borrowedItems = []; // רשימת פריטים מושאלים
        this.membershipDate = new Date();
    }
    
    get memberId() {
        return this.#memberId;
    }
    
    borrowItem(item) {
        if (this.borrowedItems.length >= 3) {
            console.log(`❌ ${this.name} כבר שאל 3 פריטים (מקסימום)`)  ;
            return false;
        }
        
        if (item.borrow(this.name)) {
            this.borrowedItems.push(item);
            return true;
        }
        return false;
    }
    
    returnItem(item) {
        const index = this.borrowedItems.findIndex(i => i.id === item.id);
        if (index === -1) {
            console.log(`❌ ${this.name} לא שאל את ${item.title}`);
            return false;
        }
        
        if (item.return()) {
            this.borrowedItems.splice(index, 1);
            return true;
        }
        return false;
    }
    
    getBorrowedItems() {
        return this.borrowedItems;
    }
    
    getMemberInfo() {
        return `👤 חבר מספר ${this.#memberId}: ${this.name}\n   אימייל: ${this.email}, טלפון: ${this.phoneNumber}\n   פריטים מושאלים: ${this.borrowedItems.length}/3`;
    }
}

// ========== מחלקת Library (הספריה עצמה) ==========

class Library {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.members = [];
    }
    
    // הוסף פריט לספריה
    addItem(item) {
        this.items.push(item);
        console.log(`➕ ${item.title} נוסף לספריה`);
    }
    
    // הסר פריט מהספריה
    removeItem(itemId) {
        const index = this.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            const removed = this.items.splice(index, 1)[0];
            console.log(`➖ ${removed.title} הוסר מהספריה`);
            return true;
        }
        console.log(`❌ פריט לא נמצא`);
        return false;
    }
    
    // רשום חבר חדש
    registerMember(name, email, phoneNumber) {
        const member = new Member(name, email, phoneNumber);
        this.members.push(member);
        console.log(`✅ ${name} נרשם לספריה. מספר חבר: ${member.memberId}`);
        return member;
    }
    
    // מצא חבר לפי מספר חבר
    findMember(memberId) {
        return this.members.find(member => member.memberId === memberId);
    }
    
    // מצא פריט לפי ID
    findItem(itemId) {
        return this.items.find(item => item.id === itemId);
    }
    
    // חפש פריטים לפי כותרת
    searchByTitle(searchTerm) {
        const results = this.items.filter(item => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return results;
    }
    
    // חפש ספרים לפי מחבר
    searchByAuthor(authorName) {
        const results = this.items.filter(item => 
            item instanceof Book && 
            item.author.toLowerCase().includes(authorName.toLowerCase())
        );
        return results;
    }
    
    // קבל כל הפריטים הזמינים
    getAvailableItems() {
        return this.items.filter(item => item.isAvailable);
    }
    
    // קבל כל הפריטים המושאלים
    getBorrowedItems() {
        return this.items.filter(item => !item.isAvailable);
    }
    
    // הצג סטטיסטיקות
    getStatistics() {
        const totalItems = this.items.length;
        const availableItems = this.getAvailableItems().length;
        const borrowedItems = this.getBorrowedItems().length;
        const totalMembers = this.members.length;
        
        const books = this.items.filter(item => item instanceof Book).length;
        const magazines = this.items.filter(item => item instanceof Magazine).length;
        const dvds = this.items.filter(item => item instanceof DVD).length;
        
        return {
            totalItems,
            availableItems,
            borrowedItems,
            totalMembers,
            books,
            magazines,
            dvds
        };
    }
    
    // הצג מידע על הספריה
    printLibraryInfo() {
        console.log(`\n${"=".repeat(50)}`);
        console.log(`📚 ספריית ${this.name}`);
        console.log(`${"=".repeat(50)}`);
        
        const stats = this.getStatistics();
        console.log(`\nסטטיסטיקות:`);
        console.log(`  • סה"כ פריטים: ${stats.totalItems}`);
        console.log(`  • זמינים: ${stats.availableItems}`);
        console.log(`  • מושאלים: ${stats.borrowedItems}`);
        console.log(`  • חברים: ${stats.totalMembers}`);
        console.log(`\nלפי סוג:`);
        console.log(`  • ספרים: ${stats.books}`);
        console.log(`  • כתבי עת: ${stats.magazines}`);
        console.log(`  • DVDs: ${stats.dvds}`);
    }
    
    // הצג את כל הפריטים
    listAllItems() {
        console.log(`\n--- כל הפריטים בספריה ---`);
        this.items.forEach((item, index) => {
            console.log(`\n${index + 1}. ${item.getInfo()}`);
            console.log(`   סטטוס: ${item.isAvailable ? "✅ זמין" : "❌ מושאל"}`);
            if (!item.isAvailable) {
                console.log(`   מושאל על ידי: ${item.borrowedBy}`);
            }
        });
    }
    
    // הצג את כל החברים
    listAllMembers() {
        console.log(`\n--- כל חברי הספריה ---`);
        this.members.forEach((member, index) => {
            console.log(`\n${index + 1}. ${member.getMemberInfo()}`);
        });
    }
}

// ========== תוכנית הדגמה ==========

console.log("🎓 ברוכים הבאים למערכת ניהול הספריה!\n");

// צור ספריה
const library = new Library("הספריה העירונית");

// הוסף פריטים
console.log("\n--- הוספת פריטים לספריה ---");
const book1 = new Book("הארי פוטר ואבן החכמים", "ג'יי קיי רולינג", 1997, 320, "פנטזיה");
const book2 = new Book("1984", "ג'ורג' אורוול", 1949, 328, "מדע בדיוני");
const book3 = new Book("הכימאי", "פאולו קואלו", 1988, 197, "הרפתקאות");

const magazine1 = new Magazine("נשיונל ג'יאוגרפיק", 2024, 245, "ינואר");
const magazine2 = new Magazine("טיים", 2024, 12, "פברואר");

const dvd1 = new DVD("הסנדק", "פרנסיס פורד קופולה", 1972, 175, "פשע");
const dvd2 = new DVD("פורסט גאמפ", "רוברט זמקיס", 1994, 142, "דרמה");

library.addItem(book1);
library.addItem(book2);
library.addItem(book3);
library.addItem(magazine1);
library.addItem(magazine2);
library.addItem(dvd1);
library.addItem(dvd2);

// רשום חברים
console.log("\n--- רישום חברים ---");
const member1 = library.registerMember("יוסי כהן", "yossi@example.com", "050-1234567");
const member2 = library.registerMember("רחל לוי", "rachel@example.com", "052-9876543");
const member3 = library.registerMember("דני אברהם", "danny@example.com", "054-5555555");

// הצג מידע על הספריה
library.printLibraryInfo();

// השאלת פריטים
console.log("\n\n--- השאלת פריטים ---");
member1.borrowItem(book1);
member1.borrowItem(dvd1);
member2.borrowItem(book2);
member2.borrowItem(magazine1);

// נסה לשאול פריט שכבר מושאל
console.log("\n--- ניסיון לשאול פריט מושאל ---");
member3.borrowItem(book1);

// חיפוש
console.log("\n\n--- חיפוש ספרים ---");
const harryPotterBooks = library.searchByTitle("הארי");
console.log(`נמצאו ${harryPotterBooks.length} תוצאות:`);
harryPotterBooks.forEach(item => console.log(item.getInfo()));

const orwellBooks = library.searchByAuthor("אורוול");
console.log(`\nספרים של אורוול (${orwellBooks.length}):`);
orwellBooks.forEach(item => console.log(item.getInfo()));

// הצג פריטים מושאלים
console.log("\n\n--- פריטים מושאלים כרגע ---");
const borrowedItems = library.getBorrowedItems();
borrowedItems.forEach(item => {
    console.log(`\n${item.getInfo()}`);
    console.log(`מושאל על ידי: ${item.borrowedBy}`);
});

// הצג מה כל חבר שאל
console.log("\n\n--- פריטים לפי חבר ---");
library.members.forEach(member => {
    console.log(`\n${member.name}:`);
    const items = member.getBorrowedItems();
    if (items.length === 0) {
        console.log("  לא שאל פריטים");
    } else {
        items.forEach(item => console.log(`  • ${item.title}`));
    }
});

// החזרת פריטים
console.log("\n\n--- החזרת פריטים ---");
member1.returnItem(book1);
member2.returnItem(book2);

// סטטיסטיקות מעודכנות
library.printLibraryInfo();

// הצג את כל החברים
library.listAllMembers();

/**
 * משימות נוספות לתרגול (אופציונלי):
 * 
 * 1. הוסף מחלקה AudioBook שיורשת מ-LibraryItem
 * 2. הוסף אפשרות לדרג פריטים (rating)
 * 3. הוסף מערכת קנסות על החזרה מאוחרת
 * 4. הוסף אפשרות לשריין פריט שמושאל
 * 5. הוסף מחלקה Librarian (ספרן) עם הרשאות מיוחדות
 * 6. הוסף היסטוריה של השאלות לכל חבר
 * 7. הוסף אפשרות ליצוא נתונים ל-JSON
 * 8. הוסף מערכת התראות (למשל, תזכורת להחזיר ספר)
 * 9. הוסף אפשרות למיין פריטים לפי קריטריונים שונים
 * 10. הוסף dashboard אינטראקטיבי עם תפריט
 */

console.log("\n\n🎉 הדגמה הושלמה בהצלחה!");
console.log("💡 טיפ: נסה להוסיף פיצ'רים משלך למערכת!\n");
