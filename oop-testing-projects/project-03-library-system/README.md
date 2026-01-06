# Project 03 - Library Management System 📚

## 🎯 Project Goal

Build a comprehensive library management system with multiple interacting classes, demonstrating relationships between objects, inheritance, and complex business logic with extensive testing.

## 📖 Project Description

Create a library system that manages books, members, and borrowing operations. The system should handle book inventory, member registrations, lending books, returning books, calculating late fees, and generating reports.

## 🎭 User Stories

As a librarian, I want to:
- ✅ Add books to the library catalog
- ✅ Register new members
- ✅ Lend books to members
- ✅ Accept returned books
- ✅ Calculate late fees
- ✅ Search for books by title, author, or ISBN
- ✅ View borrowing history
- ✅ Generate overdue reports

## 📋 Requirements

### Book Class

**Properties:**
- `isbn` - Unique book identifier
- `title` - Book title
- `author` - Book author
- `publicationYear` - Year published
- `genre` - Book genre/category
- `copies` - Total number of copies
- `availableCopies` - Currently available copies

**Methods:**
- `constructor(isbn, title, author, publicationYear, genre, copies)`
- `isAvailable()` - Check if book can be borrowed
- `borrow()` - Decrease available copies
- `return()` - Increase available copies
- `getInfo()` - Get book details

### Member Class

**Properties:**
- `#memberId` (private) - Unique member ID
- `name` - Member name
- `email` - Member email
- `#borrowedBooks` (private) - Array of borrowed books
- `#borrowingHistory` (private) - All-time borrowing history
- `#memberSince` - Registration date
- `maxBooks` - Maximum books allowed (default: 3)

**Methods:**
- `constructor(name, email, maxBooks)`
- `canBorrow()` - Check if member can borrow more books
- `getBorrowedBooks()` - Get current borrowed books
- `getBorrowingHistory()` - Get all-time history
- `getMemberId()` - Get member ID

### Loan Class

**Properties:**
- `book` - Book object
- `member` - Member object
- `borrowDate` - When borrowed
- `dueDate` - When due (14 days default)
- `returnDate` - When returned (null if not yet)
- `lateFee` - Calculated late fee

**Methods:**
- `constructor(book, member, dueDays = 14)`
- `returnBook()` - Mark as returned
- `calculateLateFee(feePerDay = 1)` - Calculate late fee
- `isOverdue()` - Check if overdue
- `getDaysOverdue()` - Get number of days overdue

### Library Class

**Properties:**
- `#books` (private) - Map of ISBN to Book objects
- `#members` (private) - Map of memberIdto Member objects
- `#loans` (private) - Array of active loans
- `#loanHistory` (private) - All loans history

**Methods:**
- `addBook(book)` - Add book to catalog
- `addMember(member)` - Register member
- `lendBook(isbn, memberId)` - Create new loan
- `returnBook(isbn, memberId)` - Process return
- `searchBooks(query)` - Search by title/author/ISBN
- `getOverdueLoans()` - Get all overdue loans
- `getMemberLoans(memberId)` - Get member's active loans
- `generateReport()` - Generate library statistics

## 🧪 Testing Requirements

Write comprehensive tests for:
- ✅ Book creation and availability
- ✅ Member registration and validation
- ✅ Borrowing (valid, invalid, max limit)
- ✅ Returning books (on time, late)
- ✅ Late fee calculations
- ✅ Search functionality
- ✅ Overdue reports
- ✅ Edge cases (no copies, invalid IDs, etc.)

## 🎯 Hints

<details>
<summary>💡 Hint 1: Book Class Structure</summary>

```javascript
class Book {
  constructor(isbn, title, author, publicationYear, genre, copies = 1) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
    this.copies = copies;
    this.availableCopies = copies;
  }

  isAvailable() {
    return this.availableCopies > 0;
  }

  borrow() {
    if (!this.isAvailable()) {
      throw new Error('No copies available');
    }
    this.availableCopies--;
  }

  return() {
    if (this.availableCopies >= this.copies) {
      throw new Error('All copies already returned');
    }
    this.availableCopies++;
  }
}
```

</details>

<details>
<summary>💡 Hint 2: Member with Borrowing Limits</summary>

```javascript
class Member {
  #memberId;
  #borrowedBooks = [];
  static #nextId = 1;

  constructor(name, email, maxBooks = 3) {
    this.#memberId = Member.#nextId++;
    this.name = name;
    this.email = email;
    this.maxBooks = maxBooks;
    this.#memberSince = new Date();
  }

  canBorrow() {
    return this.#borrowedBooks.length < this.maxBooks;
  }

  addBorrowedBook(book) {
    if (!this.canBorrow()) {
      throw new Error(`Cannot borrow more than ${this.maxBooks} books`);
    }
    this.#borrowedBooks.push(book);
  }

  removeBorrowedBook(isbn) {
    const index = this.#borrowedBooks.findIndex(b => b.isbn === isbn);
    if (index !== -1) {
      this.#borrowedBooks.splice(index, 1);
    }
  }
}
```

</details>

<details>
<summary>💡 Hint 3: Loan with Late Fee Calculation</summary>

```javascript
class Loan {
  constructor(book, member, dueDays = 14) {
    this.book = book;
    this.member = member;
    this.borrowDate = new Date();
    this.dueDate = new Date(Date.now() + dueDays * 24 * 60 * 60 * 1000);
    this.returnDate = null;
    this.lateFee = 0;
  }

  returnBook(feePerDay = 1) {
    this.returnDate = new Date();
    this.lateFee = this.calculateLateFee(feePerDay);
    return this.lateFee;
  }

  calculateLateFee(feePerDay = 1) {
    if (!this.isOverdue()) return 0;
    const daysOverdue = this.getDaysOverdue();
    return daysOverdue * feePerDay;
  }

  isOverdue() {
    const checkDate = this.returnDate || new Date();
    return checkDate > this.dueDate;
  }

  getDaysOverdue() {
    if (!this.isOverdue()) return 0;
    const checkDate = this.returnDate || new Date();
    const diffTime = checkDate - this.dueDate;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
```

</details>

<details>
<summary>💡 Hint 4: Library Management</summary>

```javascript
class Library {
  #books = new Map();
  #members = new Map();
  #loans = [];
  #loanHistory = [];

  addBook(book) {
    if (this.#books.has(book.isbn)) {
      // Update existing book's copy count
      const existing = this.#books.get(book.isbn);
      existing.copies += book.copies;
      existing.availableCopies += book.copies;
    } else {
      this.#books.set(book.isbn, book);
    }
  }

  lendBook(isbn, memberId) {
    const book = this.#books.get(isbn);
    const member = this.#members.get(memberId);

    if (!book) throw new Error('Book not found');
    if (!member) throw new Error('Member not found');
    if (!book.isAvailable()) throw new Error('Book not available');
    if (!member.canBorrow()) throw new Error('Member cannot borrow more books');

    book.borrow();
    const loan = new Loan(book, member);
    this.#loans.push(loan);
    member.addBorrowedBook(book);

    return loan;
  }
}
```

</details>

<details>
<summary>💡 Hint 5: Search and Filter</summary>

```javascript
searchBooks(query) {
  const lowerQuery = query.toLowerCase();
  return Array.from(this.#books.values()).filter(book =>
    book.title.toLowerCase().includes(lowerQuery) ||
    book.author.toLowerCase().includes(lowerQuery) ||
    book.isbn.includes(query) ||
    book.genre.toLowerCase().includes(lowerQuery)
  );
}

getOverdueLoans() {
  return this.#loans.filter(loan => 
    !loan.returnDate && loan.isOverdue()
  );
}
```

</details>

<details>
<summary>⚠️ Hint 6: Common Pitfalls</summary>

Watch out for:
- ❌ Not checking book availability before lending
- ❌ Not checking member's borrowing limit
- ❌ Not updating book's available copies
- ❌ Incorrect date calculations for late fees
- ❌ Not validating ISBN/member IDs
- ❌ Allowing return of books not borrowed
- ❌ Memory leaks (keeping all loans forever)
</details>

## 🏆 Bonus Challenges

1. **Book Reservations** ⭐⭐
   - Allow members to reserve books
   - Notify when book becomes available

2. **Different Member Types** ⭐⭐
   - Student (max 5 books, 21 days)
   - Faculty (max 10 books, 60 days)
   - Guest (max 2 books, 7 days)

3. **Book Ratings & Reviews** ⭐⭐
   - Members can rate and review books
   - Calculate average ratings

4. **Fine Payment System** ⭐⭐⭐
   - Track unpaid fines
   - Prevent borrowing with outstanding fines

5. **Export Reports** ⭐⭐⭐
   - Most borrowed books
   - Most active members
   - Revenue from late fees

## ✅ Completion Checklist

- [ ] All four classes implemented
- [ ] Proper encapsulation with private fields
- [ ] Validation on all inputs
- [ ] Borrowing and returning working
- [ ] Late fee calculations accurate
- [ ] Search functionality working
- [ ] 25+ comprehensive tests
- [ ] Edge cases handled
- [ ] Code is clean and documented

---

## 🔐 Solution

<details>
<summary>🎯 Click to reveal complete solution (Try solving it yourself first!)</summary>

The solution file is extensive. Key implementation points:

1. **Use Maps** for efficient lookups (books by ISBN, members by ID)
2. **Validate everything** - IDs, availability, limits
3. **Proper date handling** - Use Date objects, handle timezones
4. **Separate concerns** - Each class has clear responsibility
5. **Test thoroughly** - Unit tests for each class, integration tests for system

See `library-system-solution.js` for full implementation.

</details>

## 🎓 Review Questions

1. Why use Map instead of Array for books and members?
2. How does composition (Library has Books and Members) differ from inheritance?
3. What are the benefits of the Loan class vs. storing loan data directly in Member?
4. How would you handle concurrent borrowing of the last copy?
5. What database design would you use for production?

---

**Next Project**: [Project 04 - E-commerce Shopping Cart](../project-04-shopping-cart/) 🛒
