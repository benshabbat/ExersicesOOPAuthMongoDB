# תרגיל 12: פרויקט מתקדם - מערכת חנות אונליין 🛍️

## 🎯 מטרות הפרויקט

פרויקט מתקדם שמדמה **חנות אונליין אמיתית** עם כל עקרונות ה-OOP:
- ✅ **Private Fields** - #price, #stock, #password
- ✅ **Getters & Setters** - שליטה על גישה לנתונים
- ✅ **Validation** - בדיקות תקינות מתקדמות
- ✅ **Complex Relationships** - קשרים בין מחלקות
- ✅ **Real-world Scenarios** - תרחישים אמיתיים

### המערכת תכלול:
- 🛒 **עגלת קניות** - הוספה, הסרה, עדכון כמות
- 📦 **ניהול מלאי** - מעקב אוטומטי אחרי מלאי
- 👤 **לקוחות רשומים** - עם סיסמה מוצפנת
- 📋 **הזמנות** - עם מעקב סטטוס
- ⭐ **ביקורות** - דירוגים והערות למוצרים
- 📊 **סטטיסטיקות** - דוחות והכנסות

---

## 📦 מבנה המערכת

### מחלקות עיקריות
```
Product (מוצר)
ShoppingCart (עגלת קניות)
Order (הזמנה)
Customer (לקוח)
Store (חנות)
```

---

## 🏷️ Part A: Product Class

### Requirements
- Price and stock **private** (private)
- Getters/Setters with validation
- Reviews and ratings system

```javascript
class Product {
    static nextId = 1;
    #price;
    #stock;
    
    constructor(name, price, stock, category) {
        // Create unique ID: `PROD-${Product.nextId++}`
        // Initialize name, category
        // Set #price and #stock (private fields)
        // Initialize reviews = []
    }
    
    get price() {
        // Hint: Return this.#price
    }
    
    set price(newPrice) {
        // Hint: Validate newPrice >= 0
        // If invalid, show error and return
        // Set this.#price = newPrice
    }
    
    get stock() {
        // Hint: Return this.#stock
    }
    
    addStock(quantity) {
        // Hint: Check quantity > 0
        // Add to #stock
        // console.log message
        // Return true/false
    }
    
    reduceStock(quantity) {
        // Hint: Check if quantity <= #stock
        // If not enough, show error and return false
        // Subtract from #stock
        // Return true
    }
    
    addReview(rating, comment, userName) {
        // Hint: Push object to reviews array
        // Object: { rating, comment, userName, date: new Date() }
        // console.log success message
    }
    
    getAverageRating() {
        // Hint: If no reviews, return 0
        // Use reduce to sum all ratings
        // Divide by reviews.length
        // Return with .toFixed(1)
    }
    
    getInfo() {
        return `[${this.id}] ${this.name} - ₪${this.#price} (מלאי: ${this.#stock}) ⭐${this.getAverageRating()}`;
    }
}
```

---

## 🛒 Part B: ShoppingCart Class

### Requirements
- Add products (with quantity)
- Remove and update quantity
- Calculate total
- Clear cart

```javascript
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(product, quantity = 1) {
        // Hint: Check if product already exists in cart using find
        // If exists, update quantity
        // If not, push new object { product, quantity } to items
        // console.log success message
    }
    
    removeItem(productId) {
        // Hint: Use findIndex to locate item
        // If found, use splice to remove
        // console.log success message and return true
    }
    
    updateQuantity(productId, newQuantity) {
        // Hint: Use find to locate item
        // Update item.quantity to newQuantity
        // console.log message and return true/false
    }
    
    getTotal() {
        // Hint: Use reduce to sum (product.price * quantity) for all items
    }
    
    clear() {
        // Hint: Set this.items to empty array
        // console.log message
    }
    
    displayCart() {
        // Hint: Check if items.length === 0, print empty cart message
        // Use forEach to iterate and print each item with subtotal
        // Print total at the end using getTotal()
    }
}
```

---

## 📋 Part C: Order Class

### Requirements
- Automatic order number
- Status tracking (pending, processing, shipped, delivered, cancelled)
- Calculate total amount
- Order date

```javascript
class Order {
    static nextOrderNumber = 1000;
    
    constructor(customer, cartItems) {
        this.orderNumber = Order.nextOrderNumber++;
        this.customer = customer;
        this.items = [...cartItems]; // Copy items
        this.orderDate = new Date();
        this.status = "pending";
        this.total = this.calculateTotal();
    }
    
    calculateTotal() {
        // Hint: Use reduce to sum (product.price * quantity) for all items
    }
    
    updateStatus(newStatus) {
        // Hint: Set this.status to newStatus
        // console.log message with order number and status
    }
    
    getStatusText() {
        // Hint: Create statusMap object with Hebrew translations
        // Return statusMap[this.status] or this.status as fallback
    }
    
    getOrderInfo() {
        // Hint: Return template string with order number, customer name, date, status, total
    }
    
    displayOrder() {
        // Hint: console.log getOrderInfo()
        // Use forEach to print all items with quantity and subtotal
    }
}
```

---

## 👤 Part D: Customer Class

### Requirements
- **Private** password (#password) with hashing
- Personal shopping cart
- Order history
- Shipping addresses

```javascript
class Customer {
    #password;
    static nextCustomerId = 1;
    
    constructor(name, email, password, phoneNumber) {
        this.customerId = Customer.nextCustomerId++;
        this.name = name;
        this.email = email;
        this.#password = this.#hashPassword(password);
        this.phoneNumber = phoneNumber;
        this.cart = new ShoppingCart();
        this.orders = [];
        this.addresses = [];
        this.registrationDate = new Date();
    }
    
    #hashPassword(password) {
        // Simple hashing simulation
        return `hashed_${password}`;
    }
    
    verifyPassword(password) {
        return this.#hashPassword(password) === this.#password;
    }
    
    addAddress(street, city, zipCode) {
        // Hint: Push object with street, city, zipCode to this.addresses
        // console.log success message
    }
    
    placeOrder(store) {
        // Hint: Check if cart is empty, return null if so
        // Loop through cart items to check stock availability
        // Create new Order with this and cart.items
        // Add order to this.orders and store.addOrder()
        // Reduce stock for each product (use reduceStock)
        // Clear cart
        // console.log success message and return order
    }
    
    getOrderHistory() {
        // Hint: Return this.orders
    }
    
    getCustomerInfo() {
        // Hint: Return template string with customer ID, name, email, phone, orders count, registration date
    }
}
```

---

## 🏪 Part E: Store Class

### Requirements
- Managing products and customers
- Search and filtering
- Business statistics

```javascript
class Store {
    constructor(name) {
        this.name = name;
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    
    addProduct(product) {
        // Hint: Push product to this.products
        // console.log success message
    }
    
    removeProduct(productId) {
        // Hint: Use findIndex and splice
        // Return true/false
    }
    
    registerCustomer(name, email, password, phoneNumber) {
        // Hint: Create new Customer
        // Push to this.customers
        // console.log success message with customer ID
        // Return customer
    }
    
    findProduct(productId) {
        // Hint: Use this.products.find()
    }
    
    findCustomer(customerId) {
        // Hint: Use this.customers.find()
    }
    
    searchProducts(searchTerm) {
        // Hint: Use filter with name or category includes searchTerm
    }
    
    getProductsByCategory(category) {
        // Hint: Use filter where product.category === category
    }
    
    addOrder(order) {
        // Hint: Push order to this.orders
    }
    
    getStatistics() {
        // Hint: Count products, customers, orders
        // Calculate total revenue using reduce on orders
        // Count orders by status using filter
        // Return object with all statistics
    }
    
    displayStatistics() {
        // Hint: console.log header with store name
        // Get statistics using getStatistics()
        // Print all stats in formatted way
    }
    
    listProducts() {
        // Hint: console.log header
        // Use forEach to print each product with index
    }
}
```

---

## 🎬 Part F: Demonstration Program

```javascript
console.log("🛒 Welcome to the Online Store!\n");

// Create store
const store = new Store("טכנו-שופ");

// Add products
console.log("\n--- הוספת מוצרים ---");
const laptop = new Product("מחשב נייד Dell", 3500, 10, "מחשבים");
const phone = new Product("iPhone 15", 4500, 15, "סמארטפונים");
const headphones = new Product("אוזניות Sony", 350, 25, "אביזרים");
const mouse = new Product("עכבר אלחוטי", 120, 50, "אביזרים");
const keyboard = new Product("מקלדת מכנית", 450, 20, "אביזרים");

store.addProduct(laptop);
store.addProduct(phone);
store.addProduct(headphones);
store.addProduct(mouse);
store.addProduct(keyboard);

// Register customers
console.log("\n--- רישום לקוחות ---");
const customer1 = store.registerCustomer("יוסי כהן", "yossi@example.com", "password123", "050-1234567");
const customer2 = store.registerCustomer("רחל לוי", "rachel@example.com", "password456", "052-9876543");

// Add reviews
console.log("\n--- הוספת ביקורות ---");
laptop.addReview(5, "מחשב מעולה!", "יוסי");
laptop.addReview(4, "טוב מאוד אבל יקר קצת", "רחל");
phone.addReview(5, "הטלפון הכי טוב!", "דני");

// Customer 1 adds items to cart
console.log("\n--- לקוח 1 - הוספה לעגלה ---");
customer1.cart.addItem(laptop, 1);
customer1.cart.addItem(mouse, 2);
customer1.cart.addItem(headphones, 1);
customer1.cart.displayCart();

// Customer 2 adds items to cart
console.log("\n--- לקוח 2 - הוספה לעגלה ---");
customer2.cart.addItem(phone, 1);
customer2.cart.addItem(keyboard, 1);
customer2.cart.displayCart();

// Place orders
console.log("\n--- ביצוע הזמנות ---");
const order1 = customer1.placeOrder(store);
const order2 = customer2.placeOrder(store);

// Display orders
console.log("\n--- פרטי הזמנות ---");
if (order1) order1.displayOrder();
if (order2) order2.displayOrder();

// Update order status
console.log("\n--- עדכון סטטוס ---");
order1.updateStatus("processing");
order1.updateStatus("shipped");
order2.updateStatus("processing");

// Search products
console.log("\n--- חיפוש מוצרים ---");
const searchResults = store.searchProducts("אוזניות");
console.log(`נמצאו ${searchResults.length} תוצאות:`);
searchResults.forEach(p => console.log(`  • ${p.getInfo()}`));

// Products by category
console.log("\n--- אביזרים ---");
const accessories = store.getProductsByCategory("אביזרים");
accessories.forEach(p => console.log(`  • ${p.getInfo()}`));

// Customer order history
console.log("\n--- הסטוריית הזמנות של יוסי ---");
const customerOrders = customer1.getOrderHistory();
customerOrders.forEach(order => {
    console.log(`  • הזמנה #${order.orderNumber} - ₪${order.total} - ${order.getStatusText()}`);
});

// Store statistics
store.displayStatistics();

// Display updated product list (after stock reduction)
store.listProducts();

console.log("\n\n🎉 הדגמה הושלמה בהצלחה!");
console.log("💡 נסה להוסיף פיצ'רים נוספים כמו:");
console.log("   • מערכת קופונים והנחות");
console.log("   • מעקב משלוחים");
console.log("   • רשימת משאלות");
console.log("   • השוואת מוצרים");
console.log("   • היסטוריית צפיות");
console.log("   • המלצות מוצרים\n");
```

---

## 🚀 Additional Challenges (Optional)

1. **Coupon System** - Coupons and discounts
2. **Shipping Tracking** - Shipment tracking
3. **Wishlist** - Wishlist
4. **Product Comparison** - Product comparison
5. **View History** - Viewing history
6. **Recommendations** - Product recommendations
7. **Payment Methods** - Different payment methods
8. **Gift Cards** - Gift cards
9. **Inventory Alerts** - Low stock alerts
10. **Analytics Dashboard** - Analytics dashboard

---

## 🎓 What We Learned in This Project

### Private Fields
```javascript
#price;
#stock;
#password;
```

### Getters & Setters with Validation
```javascript
set price(newPrice) {
    if (newPrice < 0) {
        console.log("❌ Price cannot be negative");
        return;
    }
    this.#price = newPrice;
}
```

### Complex Relationships
```
Customer ──> ShoppingCart ──> Products
    │
    └──> Orders ──> Products
         │
         └──> Store
```

### Real-world Logic
- בדיקת מלאי לפני הזמנה
- הפחתה אוטומטית של מלאי
- ניקוי עגלה אחרי הזמנה
- מעקב סטטוס הזמנה

---

## 📤 פלט צפוי (חלקי)

```
🛍️ ברוכים הבאים לחנות האונליין!

--- הוספת מוצרים ---
➕ מחשב נייד Dell נוסף לחנות
➕ iPhone 15 נוסף לחנות
...

--- רישום לקוחות ---
✅ יוסי כהן נרשם לחנות. מזהה לקוח: 1
✅ רחל לוי נרשם לחנות. מזהה לקוח: 2

--- לקוח 1 - הוספה לעגלה ---
✅ מחשב נייד Dell נוסף לעגלה
✅ עכבר אלחוטי נוסף לעגלה
✅ אוזניות Sony נוסף לעגלה

🛒 העגלה שלי:
1. מחשב נייד Dell x1 = ₪3500
2. עכבר אלחוטי x2 = ₪240
3. אוזניות Sony x1 = ₪350

סה"כ: ₪4090

--- ביצוע הזמנות ---
✅ הזמנה #1000 בוצעה בהצלחה!
🗑️ העגלה רוקנה
...

==================================================
🏪 טכנו-שופ - סטטיסטיקות
==================================================

כללי:
  • מוצרים בחנות: 5
  • לקוחות רשומים: 2
  • סה"כ הזמנות: 2
  • סה"כ הכנסות: ₪9040

🎉 הדגמה הושלמה בהצלחה!
```

---

**זה הפרויקט האחרון והמתקדם ביותר! בהצלחה! 🎉**
