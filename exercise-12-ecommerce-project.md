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
        this.id = `PROD-${Product.nextId++}`;
        this.name = name;
        this.#price = price;
        this.#stock = stock;
        this.category = category;
        this.reviews = [];
    }
    
    get price() {
        return this.#price;
    }
    
    set price(newPrice) {
        if (newPrice < 0) {
            console.log("❌ מחיר לא יכול להיות שלילי");
            return;
        }
        this.#price = newPrice;
    }
    
    get stock() {
        return this.#stock;
    }
    
    addStock(quantity) {
        if (quantity <= 0) return false;
        this.#stock += quantity;
        console.log(`📦 נוספו ${quantity} יחידות של ${this.name}. מלאי: ${this.#stock}`);
        return true;
    }
    
    reduceStock(quantity) {
        if (quantity > this.#stock) {
            console.log(`❌ אין מספיק ${this.name} במלאי`);
            return false;
        }
        this.#stock -= quantity;
        return true;
    }
    
    addReview(rating, comment, userName) {
        this.reviews.push({ rating, comment, userName, date: new Date() });
        console.log(`⭐ ביקורת נוספה על ${this.name}`);
    }
    
    getAverageRating() {
        if (this.reviews.length === 0) return 0;
        const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
        return (sum / this.reviews.length).toFixed(1);
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
        // Check if product already in cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
            console.log(`✅ עודכן ${product.name} בעגלה (${existingItem.quantity})`);
        } else {
            this.items.push({ product, quantity });
            console.log(`✅ ${product.name} נוסף לעגלה`);
        }
    }
    
    removeItem(productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index !== -1) {
            const removed = this.items.splice(index, 1)[0];
            console.log(`🗑️ ${removed.product.name} הוסר מהעגלה`);
            return true;
        }
        return false;
    }
    
    updateQuantity(productId, newQuantity) {
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            item.quantity = newQuantity;
            console.log(`🔄 כמות ${item.product.name} עודכנה ל-${newQuantity}`);
            return true;
        }
        return false;
    }
    
    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    }
    
    clear() {
        this.items = [];
        console.log("🗑️ העגלה רוקנה");
    }
    
    displayCart() {
        if (this.items.length === 0) {
            console.log("🛒 העגלה ריקה");
            return;
        }
        
        console.log("\n🛒 העגלה שלי:");
        this.items.forEach((item, index) => {
            const subtotal = item.product.price * item.quantity;
            console.log(`${index + 1}. ${item.product.name} x${item.quantity} = ₪${subtotal}`);
        });
        console.log(`\nסה"כ: ₪${this.getTotal()}`);
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
        return this.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    }
    
    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(`📦 הזמנה #${this.orderNumber} עודכנה: ${this.getStatusText()}`);
    }
    
    getStatusText() {
        const statusMap = {
            pending: "ממתינה לאישור",
            processing: "בעיבוד",
            shipped: "נשלחה",
            delivered: "נמסרה",
            cancelled: "בוטלה"
        };
        return statusMap[this.status] || this.status;
    }
    
    getOrderInfo() {
        return `📋 הזמנה #${this.orderNumber}
   לקוח: ${this.customer.name}
   תאריך: ${this.orderDate.toLocaleDateString("he-IL")}
   סטטוס: ${this.getStatusText()}
   סה"כ: ₪${this.total}`;
    }
    
    displayOrder() {
        console.log(`\n${this.getOrderInfo()}`);
        console.log("פריטים:");
        this.items.forEach((item, index) => {
            console.log(`  ${index + 1}. ${item.product.name} x${item.quantity} - ₪${item.product.price * item.quantity}`);
        });
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
        this.addresses.push({ street, city, zipCode });
        console.log(`📍 כתובת חדשה נוספה`);
    }
    
    placeOrder(store) {
        if (this.cart.items.length === 0) {
            console.log("❌ העגלה ריקה");
            return null;
        }
        
        // Check stock availability
        for (const item of this.cart.items) {
            if (item.product.stock < item.quantity) {
                console.log(`❌ אין מספיק ${item.product.name} במלאי`);
                return null;
            }
        }
        
        // Create order
        const order = new Order(this, this.cart.items);
        this.orders.push(order);
        store.addOrder(order);
        
        // Reduce stock
        for (const item of this.cart.items) {
            item.product.reduceStock(item.quantity);
        }
        
        // Clear cart
        this.cart.clear();
        
        console.log(`✅ הזמנה #${order.orderNumber} בוצעה בהצלחה!`);
        return order;
    }
    
    getOrderHistory() {
        return this.orders;
    }
    
    getCustomerInfo() {
        return `👤 לקוח #${this.customerId}: ${this.name}
   אימייל: ${this.email}
   טלפון: ${this.phoneNumber}
   הזמנות: ${this.orders.length}
   תאריך הרשמה: ${this.registrationDate.toLocaleDateString("he-IL")}`;
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
        this.products.push(product);
        console.log(`➕ ${product.name} נוסף לחנות`);
    }
    
    removeProduct(productId) {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            const removed = this.products.splice(index, 1)[0];
            console.log(`➖ ${removed.name} הוסר מהחנות`);
            return true;
        }
        return false;
    }
    
    registerCustomer(name, email, password, phoneNumber) {
        const customer = new Customer(name, email, password, phoneNumber);
        this.customers.push(customer);
        console.log(`✅ ${name} נרשם לחנות. מזהה לקוח: ${customer.customerId}`);
        return customer;
    }
    
    findProduct(productId) {
        return this.products.find(p => p.id === productId);
    }
    
    findCustomer(customerId) {
        return this.customers.find(c => c.customerId === customerId);
    }
    
    searchProducts(searchTerm) {
        return this.products.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    getProductsByCategory(category) {
        return this.products.filter(p => p.category === category);
    }
    
    addOrder(order) {
        this.orders.push(order);
    }
    
    getStatistics() {
        const totalProducts = this.products.length;
        const totalCustomers = this.customers.length;
        const totalOrders = this.orders.length;
        const totalRevenue = this.orders.reduce((sum, order) => sum + order.total, 0);
        
        const pendingOrders = this.orders.filter(o => o.status === "pending").length;
        const shippedOrders = this.orders.filter(o => o.status === "shipped").length;
        const deliveredOrders = this.orders.filter(o => o.status === "delivered").length;
        
        return {
            totalProducts,
            totalCustomers,
            totalOrders,
            totalRevenue,
            pendingOrders,
            shippedOrders,
            deliveredOrders
        };
    }
    
    displayStatistics() {
        console.log(`\n${"=".repeat(50)}`);
        console.log(`🏪 ${this.name} - סטטיסטיקות`);
        console.log(`${"=".repeat(50)}`);
        
        const stats = this.getStatistics();
        console.log(`\nכללי:`);
        console.log(`  • מוצרים בחנות: ${stats.totalProducts}`);
        console.log(`  • לקוחות רשומים: ${stats.totalCustomers}`);
        console.log(`  • סה"כ הזמנות: ${stats.totalOrders}`);
        console.log(`  • סה"כ הכנסות: ₪${stats.totalRevenue}`);
        
        console.log(`\nהזמנות לפי סטטוס:`);
        console.log(`  • ממתינות: ${stats.pendingOrders}`);
        console.log(`  • נשלחו: ${stats.shippedOrders}`);
        console.log(`  • נמסרו: ${stats.deliveredOrders}`);
    }
    
    listProducts() {
        console.log(`\n--- מוצרים בחנות ---`);
        this.products.forEach((product, index) => {
            console.log(`${index + 1}. ${product.getInfo()}`);
        });
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
