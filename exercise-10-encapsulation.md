# Exercise 10: Encapsulation - Information Hiding

**Difficulty Level:** High ⭐⭐⭐⭐  
**Estimated Time:** 90-120 minutes

## Goal
Understand the principle of encapsulation, Private Fields, and Getters/Setters

---

## Part A: Bank Account with Private Fields

Create a `BankAccount` class with private properties.

```javascript
class BankAccount {
    // Private fields - start with #
    #balance;
    #accountNumber;
    #pin;
    
    constructor(accountNumber, initialBalance, pin) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
        this.#pin = pin;
        this.ownerName = "";
    }
    
    // Getter for balance (read-only, no direct modification)
    get balance() {
        return this.#balance;
    }
    
    // No setter for balance! Only through deposit and withdraw
    
    get accountNumber() {
        // Return masked account number
        return `****${this.#accountNumber.slice(-4)}`;
    }
    
    // Private method to verify PIN
    #verifyPin(pin) {
        return pin === this.#pin;
    }
    
    deposit(amount) {
        if (amount <= 0) {
            console.log("❌ Deposit amount must be positive");
            return false;
        }
        
        this.#balance += amount;
        console.log(`✅ Deposited ${amount}. New balance: ${this.#balance}`);
        return true;
    }
    
    withdraw(amount, pin) {
        // Check PIN
        if (!this.#verifyPin(pin)) {
            console.log("❌ Wrong PIN!");
            return false;
        }
        
        if (amount <= 0) {
            console.log("❌ Withdrawal amount must be positive");
            return false;
        }
        
        if (amount > this.#balance) {
            console.log("❌ Insufficient funds");
            return false;
        }
        
        this.#balance -= amount;
        console.log(`✅ Withdrew ${amount}. New balance: ${this.#balance}`);
        return true;
    }
    
    changePin(oldPin, newPin) {
        if (!this.#verifyPin(oldPin)) {
            console.log("❌ Wrong old PIN!");
            return false;
        }
        
        if (newPin.length !== 4) {
            console.log("❌ New PIN must be 4 digits");
            return false;
        }
        
        this.#pin = newPin;
        console.log("✅ PIN changed successfully");
        return true;
    }
}
```

### Testing:

```javascript
console.log("=== Encapsulation Test - Bank Account ===");
const account = new BankAccount("1234567890", 1000, "1234");

console.log(`Account number: ${account.accountNumber}`);
console.log(`Balance: ${account.balance}`);

// Try to change balance directly - won't work!
// account.#balance = 999999; // This will throw an error!

account.deposit(500);
account.withdraw(200, "1234");
account.withdraw(200, "0000"); // Wrong PIN
account.changePin("1234", "5678");
account.withdraw(100, "5678"); // Now it works
```

---

## Part B: User System with Validation

```javascript
class User {
    #password;
    #email;
    
    constructor(username, email, password) {
        this.username = username;
        this.#email = email;
        this.#password = this.#hashPassword(password);
        this.createdAt = new Date();
    }
    
    // Private method to hash password (simplified)
    #hashPassword(password) {
        // In real world, use proper encryption
        return `hashed_${password}_secure`;
    }
    
    // Getter for email
    get email() {
        // Return partially masked email
        const [name, domain] = this.#email.split("@");
        return `${name.slice(0, 2)}***@${domain}`;
    }
    
    // Setter for email with validation
    set email(newEmail) {
        if (!newEmail.includes("@") || !newEmail.includes(".")) {
            console.log("❌ Invalid email");
            return;
        }
        
        console.log(`📧 Email changed from ${this.#email} to ${newEmail}`);
        this.#email = newEmail;
    }
    
    // No getter for password!
    
    // Only option to check if password is correct
    verifyPassword(password) {
        return this.#hashPassword(password) === this.#password;
    }
    
    // Change password
    changePassword(oldPassword, newPassword) {
        if (!this.verifyPassword(oldPassword)) {
            console.log("❌ Wrong old password");
            return false;
        }
        
        if (newPassword.length < 6) {
            console.log("❌ New password must be at least 6 characters");
            return false;
        }
        
        this.#password = this.#hashPassword(newPassword);
        console.log("✅ Password changed successfully");
        return true;
    }
    
    login(password) {
        if (this.verifyPassword(password)) {
            console.log(`✅ Login successful, welcome ${this.username}!`);
            return true;
        } else {
            console.log("❌ Wrong password");
            return false;
        }
    }
}
```

### בדיקה:

```javascript
console.log("\n\n=== User System Test ===");
const user1 = new User("yossi123", "yossi@example.com", "mypassword");

console.log(`Username: ${user1.username}`);
console.log(`Email: ${user1.email}`); // Masked!

user1.login("wrongpassword"); // Will fail
user1.login("mypassword"); // Will work

user1.changePassword("mypassword", "newpassword123");
user1.login("newpassword123"); // Works now

user1.email = "newemail@example.com"; // Uses setter
```

---

## Part C: Product with Advanced Getters/Setters

```javascript
class Product {
    #price;
    #discount;
    
    constructor(name, price) {
        this.name = name;
        this.#price = price;
        this.#discount = 0;
    }
    
    // Getter for price
    get price() {
        return this.#price;
    }
    
    // Setter for price with validation
    set price(newPrice) {
        if (newPrice < 0) {
            console.log("❌ Price cannot be negative");
            return;
        }
        
        console.log(`💰 Price of ${this.name} changed from ${this.#price} to ${newPrice}`);
        this.#price = newPrice;
    }
    
    // Getter for discount
    get discount() {
        return this.#discount;
    }
    
    // Setter for discount with validation
    set discount(percent) {
        if (percent < 0 || percent > 100) {
            console.log("❌ Discount must be between 0 and 100");
            return;
        }
        
        console.log(`🎁 ${percent}% discount applied to ${this.name}`);
        this.#discount = percent;
    }
    
    // Calculated getter - final price after discount
    get finalPrice() {
        return this.#price * (1 - this.#discount / 100);
    }
    
    // No setter for finalPrice because it's calculated!
    
    getInfo() {
        if (this.#discount > 0) {
            return `${this.name}: $${this.#price} (${this.#discount}% off) = $${this.finalPrice.toFixed(2)}`;
        }
        return `${this.name}: $${this.#price}`;
    }
}
```

### בדיקה:

```javascript
console.log("\n\n=== Product with Getters/Setters Test ===");
const product1 = new Product("Laptop", 3000);
console.log(product1.getInfo());

product1.discount = 10; // Uses setter
console.log(product1.getInfo());
console.log(`Final price: $${product1.finalPrice}`);

product1.discount = 150; // Will fail - over 100%
product1.price = -500; // Will fail - negative price

product1.price = 2500; // Will work
console.log(product1.getInfo());
```

---

## Part D: Credit Card with Full Encapsulation

```javascript
class CreditCard {
    #cardNumber;
    #cvv;
    #expiryMonth;
    #expiryYear;
    #balance;
    
    constructor(cardNumber, cvv, expiryMonth, expiryYear, balance) {
        this.#cardNumber = cardNumber;
        this.#cvv = cvv;
        this.#expiryMonth = expiryMonth;
        this.#expiryYear = expiryYear;
        this.#balance = balance;
        this.holderName = "";
    }
    
    // Getter for card number (masked)
    get cardNumber() {
        // Show only last 4 digits
        return `****-****-****-${this.#cardNumber.slice(-4)}`;
    }
    
    // No getter for CVV! (very sensitive info)
    
    // Check if card is valid
    get isValid() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        
        if (this.#expiryYear < currentYear) return false;
        if (this.#expiryYear === currentYear && this.#expiryMonth < currentMonth) return false;
        
        return true;
    }
    
    get expiryDate() {
        return `${this.#expiryMonth.toString().padStart(2, "0")}/${this.#expiryYear}`;
    }
    
    // Private method to authenticate card
    #authenticate(cvv) {
        return cvv === this.#cvv && this.isValid;
    }
    
    // Method to charge payment
    charge(amount, cvv) {
        if (!this.#authenticate(cvv)) {
            console.log("❌ Authentication failed - wrong CVV or card expired");
            return false;
        }
        
        if (amount > this.#balance) {
            console.log("❌ Insufficient balance on card");
            return false;
        }
        
        this.#balance -= amount;
        console.log(`✅ Charged ${amount}. Remaining balance: ${this.#balance}`);
        return true;
    }
    
    getCardInfo() {
        return `Card: ${this.cardNumber}, Expiry: ${this.expiryDate}, Valid: ${this.isValid ? "Yes" : "No"}`;
    }
}
```

### בדיקה:

```javascript
console.log("\n\n=== Credit Card Test ===");
const card1 = new CreditCard("1234567812345678", "123", 12, 2027, 5000);
card1.holderName = "Yossi Cohen";

console.log(card1.getCardInfo());
console.log(`Card holder: ${card1.holderName}`);

// Cannot see CVV or full card number
// console.log(card1.#cvv); // Error!

card1.charge(1000, "123"); // Will work
card1.charge(1000, "999"); // Wrong CVV
card1.charge(6000, "123"); // Insufficient balance
```

---

## פלט צפוי

```
=== Encapsulation Test - Bank Account ===
Account number: ****7890
Balance: 1000
✅ Deposited 500. New balance: 1500
✅ Withdrew 200. New balance: 1300
❌ Wrong PIN!
✅ PIN changed successfully
✅ Withdrew 100. New balance: 1200

=== User System Test ===
Username: yossi123
Email: yo***@example.com
❌ Wrong password
✅ Login successful, welcome yossi123!
✅ Password changed successfully
✅ Login successful, welcome yossi123!
📧 Email changed from yossi@example.com to newemail@example.com

=== Product with Getters/Setters Test ===
Laptop: $3000
🎁 10% discount applied to Laptop
Laptop: $3000 (10% off) = $2700.00
Final price: $2700
❌ Discount must be between 0 and 100
❌ Price cannot be negative
💰 Price of Laptop changed from 3000 to 2500
Laptop: $2500 (10% off) = $2250.00

=== Credit Card Test ===
Card: ****-****-****-5678, Expiry: 12/2027, Valid: Yes
Card holder: Yossi Cohen
✅ Charged 1000. Remaining balance: 4000
❌ Authentication failed - wrong CVV or card expired
❌ Insufficient balance on card
```

---

## Tips

- **Private fields**: Start with `#`, accessible only within the class
- **Getter**: `get propertyName()` - allows read-only access
- **Setter**: `set propertyName(value)` - allows writing with validation
- **Calculated getter**: getter that computes a value dynamically
- **Private methods**: `#methodName()` - internal methods only

---

## Additional Tasks (Optional)

1. Create `SecurePassword` class with real encryption
2. Add `transactionHistory` property to BankAccount
3. Create `Wallet` class with multiple credit cards
