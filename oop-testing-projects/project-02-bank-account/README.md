# Project 02 - Bank Account System 💰

## 🎯 Project Goal

Build a banking system with multiple account types using OOP principles, focusing on private fields, validation, and comprehensive error handling with tests.

## 📖 Project Description

Create a banking system with `BankAccount` and `SavingsAccount` classes. Users should be able to create accounts, deposit money, withdraw money, transfer between accounts, and track transaction history.

## 🎭 User Stories

As a bank customer, I want to:
- ✅ Create a bank account with an initial balance
- ✅ Deposit money into my account
- ✅ Withdraw money from my account
- ✅ Check my current balance
- ✅ See my transaction history
- ✅ Transfer money to another account
- ✅ Open a savings account with interest
- ✅ Calculate interest earned

## 📋 Requirements

### BankAccount Class

**Properties:**
- `#balance` (private) - Current account balance
- `#accountNumber` (private) - Unique account identifier
- `#owner` - Account owner name
- `#transactions` (private) - Array of transaction objects
- `#createdAt` - Account creation date

**Methods:**
1. `constructor(owner, initialBalance = 0)` - Create new account
2. `deposit(amount)` - Add money to account
3. `withdraw(amount)` - Remove money from account
4. `getBalance()` - Get current balance
5. `getAccountNumber()` - Get account number
6. `getOwner()` - Get owner name
7. `getTransactions()` - Get transaction history
8. `transfer(amount, targetAccount)` - Transfer money to another account

### SavingsAccount Class (extends BankAccount)

**Additional Properties:**
- `#interestRate` (private) - Annual interest rate (e.g., 0.03 for 3%)
- `#minimumBalance` - Minimum balance required

**Additional Methods:**
1. `constructor(owner, initialBalance, interestRate, minimumBalance)` - Create savings account
2. `calculateInterest()` - Calculate interest earned
3. `applyInterest()` - Add interest to balance
4. `getInterestRate()` - Get interest rate

### Transaction Object Structure
```javascript
{
  type: 'deposit' | 'withdrawal' | 'transfer',
  amount: number,
  timestamp: Date,
  balanceAfter: number,
  description: string
}
```

## 🧪 Testing Requirements

Write comprehensive tests for:
- ✅ Account creation with valid/invalid data
- ✅ Deposits (valid amounts, negative amounts, zero)
- ✅ Withdrawals (sufficient funds, insufficient funds, overdraft)
- ✅ Transfers (successful, insufficient funds, same account)
- ✅ Balance calculations
- ✅ Transaction history
- ✅ Savings account interest calculations
- ✅ Minimum balance enforcement

## 🎯 Hints

<details>
<summary>💡 Hint 1: Class Structure and Private Fields</summary>

```javascript
class BankAccount {
  #balance = 0;
  #accountNumber;
  #transactions = [];
  static #nextAccountNumber = 1000;

  constructor(owner, initialBalance = 0) {
    // Generate unique account number
    this.#accountNumber = BankAccount.#nextAccountNumber++;
    this.#owner = owner;
    // Validate and set initial balance
  }
}
```

Key points:
- Use `#` for truly private fields
- Use static counter for account numbers
- Validate initialBalance in constructor
</details>

<details>
<summary>💡 Hint 2: Validation and Error Handling</summary>

```javascript
deposit(amount) {
  // Validate amount
  if (amount <= 0) {
    throw new Error('Deposit amount must be positive');
  }
  
  // Update balance
  this.#balance += amount;
  
  // Record transaction
  this.#addTransaction('deposit', amount, 'Deposit');
  
  return this.#balance;
}
```

Always validate:
- Amount > 0 for deposits
- Amount > 0 and amount <= balance for withdrawals
- Target account exists for transfers
</details>

<details>
<summary>💡 Hint 3: Transaction History</summary>

```javascript
#addTransaction(type, amount, description) {
  this.#transactions.push({
    type,
    amount,
    timestamp: new Date(),
    balanceAfter: this.#balance,
    description
  });
}

getTransactions() {
  // Return a deep copy to prevent modification
  return this.#transactions.map(t => ({...t}));
}
```

Why deep copy?
- Prevents external code from modifying history
- Maintains data integrity
</details>

<details>
<summary>💡 Hint 4: Transfer Between Accounts</summary>

```javascript
transfer(amount, targetAccount) {
  // Validate amount
  if (amount <= 0) {
    throw new Error('Transfer amount must be positive');
  }
  
  // Check sufficient funds
  if (amount > this.#balance) {
    throw new Error('Insufficient funds');
  }
  
  // Perform transfer
  this.#balance -= amount;
  targetAccount.deposit(amount);
  
  // Record transactions
  this.#addTransaction('transfer', amount, 
    `Transfer to account ${targetAccount.getAccountNumber()}`);
  
  return true;
}
```

Important: 
- Withdraw from source first
- Then deposit to target
- Record transaction on both accounts
</details>

<details>
<summary>💡 Hint 5: Savings Account with Interest</summary>

```javascript
class SavingsAccount extends BankAccount {
  #interestRate;
  #minimumBalance;

  constructor(owner, initialBalance, interestRate, minimumBalance = 100) {
    super(owner, initialBalance);
    
    if (initialBalance < minimumBalance) {
      throw new Error(`Minimum balance of $${minimumBalance} required`);
    }
    
    this.#interestRate = interestRate;
    this.#minimumBalance = minimumBalance;
  }

  calculateInterest() {
    // Simple interest calculation
    return this.getBalance() * this.#interestRate;
  }

  applyInterest() {
    const interest = this.calculateInterest();
    this.deposit(interest);
    return interest;
  }

  withdraw(amount) {
    // Override to check minimum balance
    if (this.getBalance() - amount < this.#minimumBalance) {
      throw new Error(`Cannot withdraw: minimum balance of $${this.#minimumBalance} required`);
    }
    return super.withdraw(amount);
  }
}
```

Key concepts:
- Use `super()` to call parent constructor
- Override methods when needed
- Add additional validation for savings accounts
</details>

<details>
<summary>⚠️ Hint 6: Common Pitfalls</summary>

Watch out for:
- ❌ Not validating amounts (negative, zero, NaN)
- ❌ Not checking balance before withdrawal
- ❌ Forgetting to record transactions
- ❌ Allowing direct modification of private fields
- ❌ Not handling edge cases (transferring to self)
- ❌ Floating point precision issues with money
- ❌ Not validating constructor parameters
</details>

## 📝 Implementation Template

```javascript
// bank-account.js
class BankAccount {
  // TODO: Implement the class
}

export default BankAccount;
```

```javascript
// savings-account.js
import BankAccount from './bank-account.js';

class SavingsAccount extends BankAccount {
  // TODO: Implement the class
}

export default SavingsAccount;
```

```javascript
// bank-account.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import BankAccount from './bank-account.js';
import SavingsAccount from './savings-account.js';

// TODO: Write comprehensive tests
```

## 🎓 Learning Objectives

After completing this project, you should understand:
- ✅ Private fields and encapsulation
- ✅ Input validation and error handling
- ✅ Transaction logging
- ✅ Class inheritance (extends)
- ✅ Method overriding
- ✅ Static members
- ✅ Testing error conditions

## 🏆 Bonus Challenges

1. **Overdraft Protection** ⭐
   - Add overdraft limit to accounts
   - Allow negative balance up to limit
   - Charge overdraft fees

2. **Transaction Categories** ⭐
   - Add category to transactions
   - Generate spending reports by category

3. **Account Freeze** ⭐⭐
   - Add ability to freeze/unfreeze account
   - Prevent transactions when frozen

4. **Joint Accounts** ⭐⭐
   - Support multiple owners
   - Track which owner made transaction

5. **Monthly Statements** ⭐⭐⭐
   - Generate monthly statement
   - Calculate fees and interest
   - Export to PDF/CSV format

## ✅ Completion Checklist

- [ ] BankAccount class with all methods
- [ ] SavingsAccount class with inheritance
- [ ] All validation implemented
- [ ] Transaction history working
- [ ] Transfer functionality complete
- [ ] Interest calculation accurate
- [ ] All tests passing (20+ tests)
- [ ] Edge cases handled
- [ ] Error messages clear and helpful

---

## 🔐 Solution

<details>
<summary>🎯 Click to reveal complete solution (Try solving it yourself first!)</summary>

### bank-account.js

```javascript
class BankAccount {
  #balance = 0;
  #accountNumber;
  #owner;
  #transactions = [];
  #createdAt;
  static #nextAccountNumber = 1000;

  constructor(owner, initialBalance = 0) {
    if (!owner || typeof owner !== 'string' || owner.trim() === '') {
      throw new Error('Owner name is required');
    }

    if (typeof initialBalance !== 'number' || initialBalance < 0) {
      throw new Error('Initial balance must be a non-negative number');
    }

    this.#accountNumber = BankAccount.#nextAccountNumber++;
    this.#owner = owner.trim();
    this.#balance = initialBalance;
    this.#createdAt = new Date();

    if (initialBalance > 0) {
      this.#addTransaction('deposit', initialBalance, 'Initial deposit');
    }
  }

  deposit(amount) {
    this.#validateAmount(amount, 'Deposit');
    
    this.#balance += amount;
    this.#addTransaction('deposit', amount, 'Deposit');
    
    return this.#balance;
  }

  withdraw(amount) {
    this.#validateAmount(amount, 'Withdrawal');
    
    if (amount > this.#balance) {
      throw new Error('Insufficient funds');
    }
    
    this.#balance -= amount;
    this.#addTransaction('withdrawal', amount, 'Withdrawal');
    
    return this.#balance;
  }

  transfer(amount, targetAccount) {
    if (!(targetAccount instanceof BankAccount)) {
      throw new Error('Invalid target account');
    }

    if (targetAccount === this) {
      throw new Error('Cannot transfer to the same account');
    }

    this.#validateAmount(amount, 'Transfer');
    
    if (amount > this.#balance) {
      throw new Error('Insufficient funds for transfer');
    }

    this.#balance -= amount;
    targetAccount.deposit(amount);
    
    this.#addTransaction('transfer', amount, 
      `Transfer to account ${targetAccount.getAccountNumber()}`);
    
    return true;
  }

  getBalance() {
    return this.#balance;
  }

  getAccountNumber() {
    return this.#accountNumber;
  }

  getOwner() {
    return this.#owner;
  }

  getTransactions() {
    return this.#transactions.map(t => ({ ...t }));
  }

  getCreatedAt() {
    return new Date(this.#createdAt);
  }

  #validateAmount(amount, operation) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      throw new Error(`${operation} amount must be a number`);
    }
    
    if (amount <= 0) {
      throw new Error(`${operation} amount must be positive`);
    }
  }

  #addTransaction(type, amount, description) {
    this.#transactions.push({
      type,
      amount: Math.round(amount * 100) / 100, // Round to 2 decimals
      timestamp: new Date(),
      balanceAfter: this.#balance,
      description
    });
  }
}

export default BankAccount;
```

### savings-account.js

```javascript
import BankAccount from './bank-account.js';

class SavingsAccount extends BankAccount {
  #interestRate;
  #minimumBalance;

  constructor(owner, initialBalance, interestRate, minimumBalance = 100) {
    if (typeof interestRate !== 'number' || interestRate < 0 || interestRate > 1) {
      throw new Error('Interest rate must be between 0 and 1');
    }

    if (typeof minimumBalance !== 'number' || minimumBalance < 0) {
      throw new Error('Minimum balance must be a non-negative number');
    }

    if (initialBalance < minimumBalance) {
      throw new Error(`Initial balance must be at least $${minimumBalance}`);
    }

    super(owner, initialBalance);
    this.#interestRate = interestRate;
    this.#minimumBalance = minimumBalance;
  }

  withdraw(amount) {
    const newBalance = this.getBalance() - amount;
    
    if (newBalance < this.#minimumBalance) {
      throw new Error(
        `Cannot withdraw: minimum balance of $${this.#minimumBalance} required`
      );
    }
    
    return super.withdraw(amount);
  }

  calculateInterest() {
    return Math.round(this.getBalance() * this.#interestRate * 100) / 100;
  }

  applyInterest() {
    const interest = this.calculateInterest();
    if (interest > 0) {
      this.deposit(interest);
    }
    return interest;
  }

  getInterestRate() {
    return this.#interestRate;
  }

  getMinimumBalance() {
    return this.#minimumBalance;
  }
}

export default SavingsAccount;
```

### bank-account.test.js

```javascript
import { test } from 'node:test';
import assert from 'node:assert';
import BankAccount from './bank-account.js';
import SavingsAccount from './savings-account.js';

// BankAccount Tests
test('should create account with initial balance', () => {
  const account = new BankAccount('John Doe', 1000);
  assert.strictEqual(account.getBalance(), 1000);
  assert.strictEqual(account.getOwner(), 'John Doe');
});

test('should create account with zero balance', () => {
  const account = new BankAccount('Jane Doe');
  assert.strictEqual(account.getBalance(), 0);
});

test('should generate unique account numbers', () => {
  const account1 = new BankAccount('User 1', 100);
  const account2 = new BankAccount('User 2', 200);
  assert.notStrictEqual(account1.getAccountNumber(), account2.getAccountNumber());
});

test('should throw error for invalid owner', () => {
  assert.throws(() => new BankAccount('', 100), Error);
  assert.throws(() => new BankAccount(null, 100), Error);
});

test('should throw error for negative initial balance', () => {
  assert.throws(() => new BankAccount('John', -100), Error);
});

test('should deposit money', () => {
  const account = new BankAccount('John', 100);
  account.deposit(50);
  assert.strictEqual(account.getBalance(), 150);
});

test('should throw error for invalid deposit', () => {
  const account = new BankAccount('John', 100);
  assert.throws(() => account.deposit(-50), Error);
  assert.throws(() => account.deposit(0), Error);
  assert.throws(() => account.deposit('50'), Error);
});

test('should withdraw money', () => {
  const account = new BankAccount('John', 100);
  account.withdraw(30);
  assert.strictEqual(account.getBalance(), 70);
});

test('should throw error for insufficient funds', () => {
  const account = new BankAccount('John', 50);
  assert.throws(() => account.withdraw(100), Error);
});

test('should throw error for invalid withdrawal', () => {
  const account = new BankAccount('John', 100);
  assert.throws(() => account.withdraw(-50), Error);
  assert.throws(() => account.withdraw(0), Error);
});

test('should record transactions', () => {
  const account = new BankAccount('John', 100);
  account.deposit(50);
  account.withdraw(30);
  
  const transactions = account.getTransactions();
  assert.strictEqual(transactions.length, 3); // Initial + deposit + withdrawal
  assert.strictEqual(transactions[1].type, 'deposit');
  assert.strictEqual(transactions[2].type, 'withdrawal');
});

test('should transfer money between accounts', () => {
  const account1 = new BankAccount('John', 200);
  const account2 = new BankAccount('Jane', 100);
  
  account1.transfer(50, account2);
  
  assert.strictEqual(account1.getBalance(), 150);
  assert.strictEqual(account2.getBalance(), 150);
});

test('should throw error for invalid transfer', () => {
  const account1 = new BankAccount('John', 50);
  const account2 = new BankAccount('Jane', 100);
  
  assert.throws(() => account1.transfer(100, account2), Error); // Insufficient funds
  assert.throws(() => account1.transfer(50, account1), Error); // Same account
  assert.throws(() => account1.transfer(-50, account2), Error); // Negative amount
});

// SavingsAccount Tests
test('should create savings account with interest rate', () => {
  const savings = new SavingsAccount('John', 1000, 0.05, 100);
  assert.strictEqual(savings.getBalance(), 1000);
  assert.strictEqual(savings.getInterestRate(), 0.05);
});

test('should throw error if initial balance below minimum', () => {
  assert.throws(() => new SavingsAccount('John', 50, 0.05, 100), Error);
});

test('should calculate interest', () => {
  const savings = new SavingsAccount('John', 1000, 0.05, 100);
  const interest = savings.calculateInterest();
  assert.strictEqual(interest, 50);
});

test('should apply interest to balance', () => {
  const savings = new SavingsAccount('John', 1000, 0.05, 100);
  savings.applyInterest();
  assert.strictEqual(savings.getBalance(), 1050);
});

test('should enforce minimum balance on withdrawal', () => {
  const savings = new SavingsAccount('John', 500, 0.05, 100);
  assert.throws(() => savings.withdraw(450), Error);
});

test('should allow withdrawal above minimum balance', () => {
  const savings = new SavingsAccount('John', 500, 0.05, 100);
  savings.withdraw(300);
  assert.strictEqual(savings.getBalance(), 200);
});

console.log('\n✅ All bank account tests passed!');
```

</details>

## 🎓 Review Questions

1. Why use private fields for balance and transactions?
2. What's the advantage of using static members for account numbers?
3. Why validate all inputs in banking operations?
4. How does inheritance help with SavingsAccount?
5. Why return copies of transactions array?
6. What are the risks of floating-point arithmetic with money?

---

**Next Project**: [Project 03 - Contact Book](../project-03-contact-book/) 📇
