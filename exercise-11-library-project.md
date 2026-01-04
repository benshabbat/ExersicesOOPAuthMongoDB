# Exercise 11: Comprehensive Project - Library Management System 📚

## 🎯 Project Objectives

A comprehensive project that combines **everything** we've learned:
- ✅ **Classes & Inheritance** - Classes and inheritance
- ✅ **Encapsulation** - Information hiding with `#`
- ✅ **Polymorphism** - Different behaviors for different items
- ✅ **Static Properties** - Tracking unique identifiers
- ✅ **Complex Methods** - Search, filter, and statistics methods

### The library system will include:
- 📖 **Books**, 📰 **Magazines**, 📀 **DVDs**
- 👤 **Library members** - With borrowing limits
- 🔍 **Search** - By title, author, genre
- 📊 **Statistics** - Tracking borrows and availability

---

## 📦 System Structure

### Class Hierarchy

```
LibraryItem (base)
├── Book (book)
├── Magazine (magazine)
└── DVD

Member (library member)

Library (the library)
```

---

## 📖 Part A: Item Classes

### LibraryItem - Base Class

```javascript
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
```

### Book - Book

```javascript
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
```

### Magazine - Magazine

```javascript
class Magazine extends LibraryItem {
    constructor(title, year, issueNumber, month) {
        // Write your code here
        super(title, year);
        this.issueNumber = issueNumber;
        this.month = month;
        this.type = "כתב עת";
    }
    
    getInfo() {
        return `📰 ${super.getInfo()}\n   גיליון: ${this.issueNumber}, חודש: ${this.month}`;
    }
}
```

### DVD

```javascript
class DVD extends LibraryItem {
    constructor(title, director, year, duration, genre) {
        // Write your code here
        super(title, year);
        this.director = director;
        this.duration = duration; // in minutes
        this.genre = genre;
        this.type = "DVD";
    }
    
    getInfo() {
        return `📀 ${super.getInfo()}\n   במאי: ${this.director}, ז'אנר: ${this.genre}, משך: ${this.duration} דקות`;
    }
}
```

---

## 👤 Part B: Member Class

### Requirements
- **Private** member ID (#memberId)
- Limit of **3 items** maximum simultaneously
- Tracking borrowed items

```javascript
class Member {
    #memberId;
    static nextMemberId = 1000;
    
    constructor(name, email, phoneNumber) {
        this.#memberId = Member.nextMemberId++;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.borrowedItems = [];
        this.membershipDate = new Date();
    }
    
    get memberId() {
        return this.#memberId;
    }
    
    borrowItem(item) {
        if (this.borrowedItems.length >= 3) {
            console.log(`❌ ${this.name} כבר שאל 3 פריטים (מקסימום)`);
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
```

---

## 🏛️ Part C: Library Class

### Requirements
- Managing items and members
- Search by title and author
- Statistics

```javascript
class Library {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.members = [];
    }
    
    // Add item to library
    addItem(item) {
        this.items.push(item);
        console.log(`➕ ${item.title} נוסף לספריה`);
    }
    
    // Remove item from library
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
    
    // Register new member
    registerMember(name, email, phoneNumber) {
        const member = new Member(name, email, phoneNumber);
        this.members.push(member);
        console.log(`✅ ${name} נרשם לספריה. מספר חבר: ${member.memberId}`);
        return member;
    }
    
    // Find member by ID
    findMember(memberId) {
        return this.members.find(member => member.memberId === memberId);
    }
    
    // Find item by ID
    findItem(itemId) {
        return this.items.find(item => item.id === itemId);
    }
    
    // Search items by title
    searchByTitle(searchTerm) {
        const results = this.items.filter(item => 
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return results;
    }
    
    // Search books by author
    searchByAuthor(authorName) {
        const results = this.items.filter(item => 
            item instanceof Book && 
            item.author.toLowerCase().includes(authorName.toLowerCase())
        );
        return results;
    }
    
    // Get all available items
    getAvailableItems() {
        return this.items.filter(item => item.isAvailable);
    }
    
    // Get all borrowed items
    getBorrowedItems() {
        return this.items.filter(item => !item.isAvailable);
    }
    
    // Get statistics
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
    
    // Print library info
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
    
    // List all items
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
    
    // List all members
    listAllMembers() {
        console.log(`\n--- כל חברי הספריה ---`);
        this.members.forEach((member, index) => {
            console.log(`\n${index + 1}. ${member.getMemberInfo()}`);
        });
    }
}
```

---

## 🎬 Part D: Demonstration Program

```javascript
console.log("🎓 Welcome to the Library Management System!\n");

// Create library
const library = new Library("הספריה העירונית");

// Add items
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

// Register members
console.log("\n--- רישום חברים ---");
const member1 = library.registerMember("יוסי כהן", "yossi@example.com", "050-1234567");
const member2 = library.registerMember("רחל לוי", "rachel@example.com", "052-9876543");
const member3 = library.registerMember("דני אברהם", "danny@example.com", "054-5555555");

// Display library info
library.printLibraryInfo();

// Borrow items
console.log("\n\n--- השאלת פריטים ---");
member1.borrowItem(book1);
member1.borrowItem(dvd1);
member2.borrowItem(book2);
member2.borrowItem(magazine1);

// Try to borrow already borrowed item
console.log("\n--- ניסיון לשאול פריט מושאל ---");
member3.borrowItem(book1);

// Search
console.log("\n\n--- חיפוש ספרים ---");
const harryPotterBooks = library.searchByTitle("הארי");
console.log(`נמצאו ${harryPotterBooks.length} תוצאות:`);
harryPotterBooks.forEach(item => console.log(item.getInfo()));

const orwellBooks = library.searchByAuthor("אורוול");
console.log(`\nספרים של אורוול (${orwellBooks.length}):`);
orwellBooks.forEach(item => console.log(item.getInfo()));

// Display borrowed items
console.log("\n\n--- פריטים מושאלים כרגע ---");
const borrowedItems = library.getBorrowedItems();
borrowedItems.forEach(item => {
    console.log(`\n${item.getInfo()}`);
    console.log(`מושאל על ידי: ${item.borrowedBy}`);
});

// Display what each member borrowed
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

// Return items
console.log("\n\n--- החזרת פריטים ---");
member1.returnItem(book1);
member2.returnItem(book2);

// Updated statistics
library.printLibraryInfo();

// Display all members
library.listAllMembers();

console.log("\n\n🎉 הדגמה הושלמה בהצלחה!");
```

---

## 🚀 Additional Challenges (Optional)

1. **AudioBook** - Add class for audiobooks
2. **Rating System** - Allow members to rate items
3. **Late Fees** - Penalties for late returns
4. **Reservation** - Option to reserve borrowed items
5. **Librarian** - Class for librarian with special permissions
6. **History** - Borrowing history for each member
7. **Export to JSON** - Export data
8. **Notifications** - Reminders to return books
9. **Sorting** - Sort items by criteria
10. **Interactive Dashboard** - Interactive menu

---

## 🎓 What We Learned in This Project

### Combining All OOP Principles:

**1. Encapsulation** 🔒
```javascript
#memberId  // Private field
get memberId() { return this.#memberId; }
```

**2. Inheritance** 🧬
```javascript
Book extends LibraryItem
Magazine extends LibraryItem
DVD extends LibraryItem
```

**3. Polymorphism** 🎭
```javascript
items.forEach(item => console.log(item.getInfo()))
// Each one prints differently!
```

**4. Static Properties** 📊
```javascript
static nextId = 1;
this.id = `ITEM-${LibraryItem.nextId++}`;
```

---

## 💡 Implementation Tips

1. **Plan first** - Draw class diagram
2. **Build step by step** - Start from basics
3. **Test each step** - Don't accumulate code without testing
4. **Use instanceof** - To check class type
5. **Leverage inheritance** - Don't duplicate code

---

## 📤 פלט צפוי (חלקי)

```
🎓 ברוכים הבאים למערכת ניהול הספריה!

--- הוספת פריטים לספריה ---
➕ הארי פוטר ואבן החכמים נוסף לספריה
➕ 1984 נוסף לספריה
...

--- רישום חברים ---
✅ יוסי כהן נרשם לספריה. מספר חבר: 1000
✅ רחל לוי נרשם לספריה. מספר חבר: 1001
...

==================================================
📚 ספריית הספריה העירונית
==================================================

סטטיסטיקות:
  • סה"כ פריטים: 7
  • זמינים: 7
  • מושאלים: 0
  • חברים: 3

לפי סוג:
  • ספרים: 3
  • כתבי עת: 2
  • DVDs: 2

--- השאלת פריטים ---
✅ יוסי כהן שאל את הארי פוטר ואבן החכמים
✅ יוסי כהן שאל את הסנדק
...

🎉 הדגמה הושלמה בהצלחה!
```

---

**זה הפרויקט הכי מקיף! בהצלחה! 🚀**
