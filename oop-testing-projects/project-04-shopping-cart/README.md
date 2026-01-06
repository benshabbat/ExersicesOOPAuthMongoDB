# Project 04 - E-commerce Shopping Cart 🛒

## 🎯 Project Goal

Build a complete e-commerce shopping cart system with products, discounts, shipping calculations, and inventory management. This intermediate project teaches complex calculations, state management, and business logic.

## 📖 Project Description

Create a shopping cart system that handles product catalogs, cart operations, discount codes, tax calculations, shipping fees, and order processing with comprehensive testing.

## 🎭 User Stories

As a customer, I want to:
- ✅ Browse products in a catalog
- ✅ Add products to my cart
- ✅ Update product quantities
- ✅ Remove products from cart
- ✅ Apply discount codes
- ✅ See cart subtotal, tax, shipping, and total
- ✅ Place an order
- ✅ View order history

## 📋 Requirements

### Product Class

**Properties:**
- `id` - Unique product identifier
- `name` - Product name
- `price` - Unit price
- `category` - Product category
- `stockQuantity` - Available inventory
- `weight` - Weight in kg (for shipping)
- `description` - Product description

**Methods:**
- `constructor(id, name, price, category, stockQuantity, weight, description)`
- `isInStock(quantity)` - Check if quantity is available
- `decreaseStock(quantity)` - Reduce inventory
- `increaseStock(quantity)` - Add inventory
- `getInfo()` - Get product details

### CartItem Class

**Properties:**
- `product` - Product object
- `quantity` - Quantity in cart

**Methods:**
- `constructor(product, quantity)`
- `getSubtotal()` - Calculate item subtotal (price × quantity)
- `increaseQuantity(amount)` - Add more of this item
- `decreaseQuantity(amount)` - Remove some of this item
- `getTotalWeight()` - Calculate total weight

### DiscountCode Class

**Properties:**
- `code` - Discount code string
- `type` - 'percentage' or 'fixed'
- `value` - Discount value (0-100 for %, amount for fixed)
- `minPurchase` - Minimum purchase amount required
- `maxDiscount` - Maximum discount amount (for percentage)
- `expiryDate` - Expiration date
- `isActive` - Whether code is active

**Methods:**
- `constructor(code, type, value, minPurchase, maxDiscount, expiryDate)`
- `isValid(cartTotal)` - Check if code can be applied
- `calculateDiscount(cartTotal)` - Calculate discount amount

### ShoppingCart Class

**Properties:**
- `#items` (private) - Array of CartItem objects
- `#discountCode` (private) - Applied discount code
- `#taxRate` - Tax rate (default: 0.17 = 17%)
- `#shippingRates` - Shipping calculation rules

**Methods:**
- `addItem(product, quantity)` - Add product to cart
- `removeItem(productId)` - Remove product from cart
- `updateQuantity(productId, quantity)` - Update item quantity
- `getItems()` - Get all cart items
- `applyDiscount(discountCode)` - Apply discount code
- `removeDiscount()` - Remove discount code
- `getSubtotal()` - Calculate items subtotal
- `getDiscount()` - Calculate discount amount
- `getTax()` - Calculate tax amount
- `getShipping()` - Calculate shipping cost
- `getTotal()` - Calculate final total
- `clear()` - Empty cart
- `checkout()` - Create order from cart

### Order Class

**Properties:**
- `orderId` - Unique order identifier
- `items` - Array of ordered items
- `subtotal` - Order subtotal
- `discount` - Discount applied
- `tax` - Tax amount
- `shipping` - Shipping cost
- `total` - Final total
- `status` - Order status
- `createdAt` - Order date

## 🧪 Testing Requirements

Write comprehensive tests for:
- ✅ Product inventory management
- ✅ Adding/removing/updating cart items
- ✅ Quantity validation
- ✅ Stock checking
- ✅ Discount code validation and calculation
- ✅ Tax calculation
- ✅ Shipping calculation
- ✅ Total calculation accuracy
- ✅ Order creation
- ✅ Edge cases (empty cart, invalid codes, out of stock)

## 🎯 Hints

<details>
<summary>💡 Hint 1: Product Stock Management</summary>

```javascript
class Product {
  constructor(id, name, price, category, stockQuantity, weight, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.stockQuantity = stockQuantity;
    this.weight = weight;
    this.description = description;
  }

  isInStock(quantity = 1) {
    return this.stockQuantity >= quantity;
  }

  decreaseStock(quantity) {
    if (!this.isInStock(quantity)) {
      throw new Error('Insufficient stock');
    }
    this.stockQuantity -= quantity;
  }

  increaseStock(quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be positive');
    }
    this.stockQuantity += quantity;
  }
}
```

Key points:
- Always check stock before decreasing
- Validate positive quantities
- Track inventory accurately
</details>

<details>
<summary>💡 Hint 2: Cart Item with Quantity Management</summary>

```javascript
class CartItem {
  constructor(product, quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be positive');
    }
    if (!product.isInStock(quantity)) {
      throw new Error('Insufficient stock for this product');
    }
    
    this.product = product;
    this.quantity = quantity;
  }

  getSubtotal() {
    return this.product.price * this.quantity;
  }

  increaseQuantity(amount) {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }
    if (!this.product.isInStock(this.quantity + amount)) {
      throw new Error('Insufficient stock');
    }
    this.quantity += amount;
  }

  getTotalWeight() {
    return this.product.weight * this.quantity;
  }
}
```

Tips:
- Check stock when creating CartItem
- Validate all quantity changes
- Calculate subtotals accurately
</details>

<details>
<summary>💡 Hint 3: Discount Code Validation</summary>

```javascript
class DiscountCode {
  constructor(code, type, value, minPurchase = 0, maxDiscount = null, expiryDate = null) {
    this.code = code.toUpperCase();
    this.type = type; // 'percentage' or 'fixed'
    this.value = value;
    this.minPurchase = minPurchase;
    this.maxDiscount = maxDiscount;
    this.expiryDate = expiryDate;
    this.isActive = true;
  }

  isValid(cartTotal) {
    // Check if active
    if (!this.isActive) {
      return { valid: false, reason: 'Discount code is inactive' };
    }

    // Check expiry
    if (this.expiryDate && new Date() > this.expiryDate) {
      return { valid: false, reason: 'Discount code has expired' };
    }

    // Check minimum purchase
    if (cartTotal < this.minPurchase) {
      return { 
        valid: false, 
        reason: `Minimum purchase of $${this.minPurchase} required` 
      };
    }

    return { valid: true };
  }

  calculateDiscount(cartTotal) {
    const validation = this.isValid(cartTotal);
    if (!validation.valid) {
      throw new Error(validation.reason);
    }

    let discount = 0;
    if (this.type === 'percentage') {
      discount = cartTotal * (this.value / 100);
      if (this.maxDiscount && discount > this.maxDiscount) {
        discount = this.maxDiscount;
      }
    } else if (this.type === 'fixed') {
      discount = Math.min(this.value, cartTotal);
    }

    return Math.round(discount * 100) / 100;
  }
}
```

Important validations:
- Active status
- Expiry date
- Minimum purchase
- Maximum discount cap
</details>

<details>
<summary>💡 Hint 4: Shopping Cart Management</summary>

```javascript
class ShoppingCart {
  #items = [];
  #discountCode = null;
  #taxRate = 0.17;

  addItem(product, quantity) {
    // Check if product already in cart
    const existingItem = this.#items.find(item => 
      item.product.id === product.id
    );

    if (existingItem) {
      existingItem.increaseQuantity(quantity);
    } else {
      const cartItem = new CartItem(product, quantity);
      this.#items.push(cartItem);
    }
  }

  removeItem(productId) {
    const index = this.#items.findIndex(item => 
      item.product.id === productId
    );
    
    if (index === -1) {
      throw new Error('Product not in cart');
    }
    
    this.#items.splice(index, 1);
  }

  updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      return this.removeItem(productId);
    }

    const item = this.#items.find(i => i.product.id === productId);
    if (!item) {
      throw new Error('Product not in cart');
    }

    const diff = newQuantity - item.quantity;
    if (diff > 0) {
      item.increaseQuantity(diff);
    } else if (diff < 0) {
      item.decreaseQuantity(-diff);
    }
  }

  getSubtotal() {
    return this.#items.reduce((sum, item) => 
      sum + item.getSubtotal(), 0
    );
  }
}
```

Key patterns:
- Check for existing items before adding
- Handle quantity updates intelligently
- Use reduce for totals
</details>

<details>
<summary>💡 Hint 5: Price Calculations</summary>

```javascript
getDiscount() {
  if (!this.#discountCode) return 0;
  const subtotal = this.getSubtotal();
  return this.#discountCode.calculateDiscount(subtotal);
}

getTax() {
  const subtotal = this.getSubtotal();
  const discount = this.getDiscount();
  const taxableAmount = subtotal - discount;
  return Math.round(taxableAmount * this.#taxRate * 100) / 100;
}

getShipping() {
  if (this.#items.length === 0) return 0;
  
  const totalWeight = this.#items.reduce((sum, item) => 
    sum + item.getTotalWeight(), 0
  );

  // Example shipping calculation
  if (totalWeight <= 1) return 5;
  if (totalWeight <= 5) return 10;
  if (totalWeight <= 10) return 15;
  return 15 + Math.ceil((totalWeight - 10) / 5) * 5;
}

getTotal() {
  const subtotal = this.getSubtotal();
  const discount = this.getDiscount();
  const tax = this.getTax();
  const shipping = this.getShipping();
  
  return Math.round((subtotal - discount + tax + shipping) * 100) / 100;
}
```

Formula: `Total = Subtotal - Discount + Tax + Shipping`

Note: Tax is calculated on discounted amount
</details>

<details>
<summary>💡 Hint 6: Checkout Process</summary>

```javascript
checkout() {
  if (this.#items.length === 0) {
    throw new Error('Cannot checkout empty cart');
  }

  // Create order
  const order = new Order(
    this.getItems(),
    this.getSubtotal(),
    this.getDiscount(),
    this.getTax(),
    this.getShipping(),
    this.getTotal()
  );

  // Update inventory
  for (const item of this.#items) {
    item.product.decreaseStock(item.quantity);
  }

  // Clear cart
  this.clear();

  return order;
}
```

Checkout steps:
1. Validate cart not empty
2. Create order snapshot
3. Update inventory
4. Clear cart
5. Return order
</details>

<details>
<summary>⚠️ Hint 7: Common Pitfalls</summary>

Watch out for:
- ❌ Not checking stock availability
- ❌ Floating point precision in money calculations
- ❌ Not validating discount codes properly
- ❌ Wrong order of operations (discount before or after tax?)
- ❌ Not updating inventory on checkout
- ❌ Allowing negative quantities
- ❌ Not handling empty cart edge cases
- ❌ Memory leaks (holding cart items after checkout)
</details>

## 📝 Implementation Templates

```javascript
// product.js
class Product {
  // TODO: Implement
}

export default Product;
```

```javascript
// cart-item.js
import Product from './product.js';

class CartItem {
  // TODO: Implement
}

export default CartItem;
```

```javascript
// discount-code.js
class DiscountCode {
  // TODO: Implement
}

export default DiscountCode;
```

```javascript
// shopping-cart.js
class ShoppingCart {
  // TODO: Implement
}

export default ShoppingCart;
```

```javascript
// order.js
class Order {
  // TODO: Implement
}

export default Order;
```

## 🎓 Learning Objectives

After completing this project, you should understand:
- ✅ Managing complex state in applications
- ✅ Business logic implementation
- ✅ Price calculations and rounding
- ✅ Validation strategies
- ✅ Inventory management
- ✅ Discount systems
- ✅ Integration testing multiple classes
- ✅ Edge case handling

## 🏆 Bonus Challenges

1. **Wishlist Feature** ⭐
   - Save items for later
   - Move between cart and wishlist

2. **Product Bundles** ⭐⭐
   - Buy X get Y free
   - Bundle discounts

3. **Multiple Currencies** ⭐⭐
   - Support different currencies
   - Real-time conversion

4. **Guest vs Registered Checkout** ⭐⭐
   - Different checkout flows
   - Save cart for registered users

5. **Advanced Shipping** ⭐⭐⭐
   - Multiple shipping methods
   - Address-based shipping costs
   - Free shipping thresholds

## ✅ Completion Checklist

- [ ] All 5 classes implemented
- [ ] Stock management working
- [ ] Cart operations correct
- [ ] Discount codes working
- [ ] Tax calculation accurate
- [ ] Shipping calculation correct
- [ ] Checkout process complete
- [ ] 30+ comprehensive tests
- [ ] All edge cases handled
- [ ] Money calculations precise

---

## 🔐 Complete Solution

<details>
<summary>🎯 Click to reveal complete solution (Try solving it yourself first!)</summary>

### product.js

```javascript
class Product {
  constructor(id, name, price, category, stockQuantity, weight = 0.5, description = '') {
    if (!id || !name) {
      throw new Error('Product ID and name are required');
    }
    if (price <= 0) {
      throw new Error('Price must be positive');
    }
    if (stockQuantity < 0) {
      throw new Error('Stock quantity cannot be negative');
    }
    if (weight <= 0) {
      throw new Error('Weight must be positive');
    }

    this.id = id;
    this.name = name;
    this.price = Math.round(price * 100) / 100;
    this.category = category;
    this.stockQuantity = stockQuantity;
    this.weight = weight;
    this.description = description;
  }

  isInStock(quantity = 1) {
    return this.stockQuantity >= quantity;
  }

  decreaseStock(quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be positive');
    }
    if (!this.isInStock(quantity)) {
      throw new Error(`Insufficient stock. Available: ${this.stockQuantity}`);
    }
    this.stockQuantity -= quantity;
  }

  increaseStock(quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be positive');
    }
    this.stockQuantity += quantity;
  }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      category: this.category,
      stockQuantity: this.stockQuantity,
      weight: this.weight,
      description: this.description
    };
  }
}

export default Product;
```

### cart-item.js

```javascript
class CartItem {
  constructor(product, quantity) {
    if (!product) {
      throw new Error('Product is required');
    }
    if (typeof quantity !== 'number' || quantity <= 0) {
      throw new Error('Quantity must be a positive number');
    }
    if (!product.isInStock(quantity)) {
      throw new Error(`Only ${product.stockQuantity} units available`);
    }

    this.product = product;
    this.quantity = quantity;
  }

  getSubtotal() {
    return Math.round(this.product.price * this.quantity * 100) / 100;
  }

  increaseQuantity(amount) {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }
    
    const newQuantity = this.quantity + amount;
    if (!this.product.isInStock(newQuantity)) {
      throw new Error('Insufficient stock');
    }
    
    this.quantity = newQuantity;
  }

  decreaseQuantity(amount) {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }
    if (amount > this.quantity) {
      throw new Error('Cannot decrease by more than current quantity');
    }
    
    this.quantity -= amount;
  }

  getTotalWeight() {
    return this.product.weight * this.quantity;
  }
}

export default CartItem;
```

### discount-code.js

```javascript
class DiscountCode {
  constructor(code, type, value, minPurchase = 0, maxDiscount = null, expiryDate = null) {
    if (!code || typeof code !== 'string') {
      throw new Error('Invalid discount code');
    }
    if (!['percentage', 'fixed'].includes(type)) {
      throw new Error('Type must be "percentage" or "fixed"');
    }
    if (value <= 0) {
      throw new Error('Value must be positive');
    }
    if (type === 'percentage' && value > 100) {
      throw new Error('Percentage cannot exceed 100');
    }

    this.code = code.toUpperCase().trim();
    this.type = type;
    this.value = value;
    this.minPurchase = minPurchase;
    this.maxDiscount = maxDiscount;
    this.expiryDate = expiryDate;
    this.isActive = true;
  }

  isValid(cartTotal) {
    if (!this.isActive) {
      return { valid: false, reason: 'Discount code is inactive' };
    }

    if (this.expiryDate && new Date() > this.expiryDate) {
      return { valid: false, reason: 'Discount code has expired' };
    }

    if (cartTotal < this.minPurchase) {
      return { 
        valid: false, 
        reason: `Minimum purchase of $${this.minPurchase} required` 
      };
    }

    return { valid: true };
  }

  calculateDiscount(cartTotal) {
    const validation = this.isValid(cartTotal);
    if (!validation.valid) {
      throw new Error(validation.reason);
    }

    let discount = 0;

    if (this.type === 'percentage') {
      discount = cartTotal * (this.value / 100);
      if (this.maxDiscount && discount > this.maxDiscount) {
        discount = this.maxDiscount;
      }
    } else if (this.type === 'fixed') {
      discount = Math.min(this.value, cartTotal);
    }

    return Math.round(discount * 100) / 100;
  }

  deactivate() {
    this.isActive = false;
  }

  activate() {
    this.isActive = true;
  }
}

export default DiscountCode;
```

### shopping-cart.js

```javascript
import CartItem from './cart-item.js';

class ShoppingCart {
  #items = [];
  #discountCode = null;
  #taxRate = 0.17;

  constructor(taxRate = 0.17) {
    if (taxRate < 0 || taxRate > 1) {
      throw new Error('Tax rate must be between 0 and 1');
    }
    this.#taxRate = taxRate;
  }

  addItem(product, quantity = 1) {
    const existingItem = this.#items.find(item => 
      item.product.id === product.id
    );

    if (existingItem) {
      existingItem.increaseQuantity(quantity);
    } else {
      const cartItem = new CartItem(product, quantity);
      this.#items.push(cartItem);
    }
  }

  removeItem(productId) {
    const index = this.#items.findIndex(item => 
      item.product.id === productId
    );
    
    if (index === -1) {
      throw new Error('Product not in cart');
    }
    
    this.#items.splice(index, 1);
  }

  updateQuantity(productId, newQuantity) {
    if (newQuantity < 0) {
      throw new Error('Quantity cannot be negative');
    }

    if (newQuantity === 0) {
      return this.removeItem(productId);
    }

    const item = this.#items.find(i => i.product.id === productId);
    if (!item) {
      throw new Error('Product not in cart');
    }

    const diff = newQuantity - item.quantity;
    if (diff > 0) {
      item.increaseQuantity(diff);
    } else if (diff < 0) {
      item.decreaseQuantity(-diff);
    }
  }

  getItems() {
    return [...this.#items];
  }

  getItemCount() {
    return this.#items.reduce((sum, item) => sum + item.quantity, 0);
  }

  applyDiscount(discountCode) {
    const subtotal = this.getSubtotal();
    const validation = discountCode.isValid(subtotal);
    
    if (!validation.valid) {
      throw new Error(validation.reason);
    }

    this.#discountCode = discountCode;
  }

  removeDiscount() {
    this.#discountCode = null;
  }

  getSubtotal() {
    return this.#items.reduce((sum, item) => 
      sum + item.getSubtotal(), 0
    );
  }

  getDiscount() {
    if (!this.#discountCode) return 0;
    const subtotal = this.getSubtotal();
    return this.#discountCode.calculateDiscount(subtotal);
  }

  getTax() {
    const subtotal = this.getSubtotal();
    const discount = this.getDiscount();
    const taxableAmount = subtotal - discount;
    return Math.round(taxableAmount * this.#taxRate * 100) / 100;
  }

  getShipping() {
    if (this.#items.length === 0) return 0;
    
    const totalWeight = this.#items.reduce((sum, item) => 
      sum + item.getTotalWeight(), 0
    );

    // Shipping rates based on weight
    if (totalWeight <= 1) return 5;
    if (totalWeight <= 5) return 10;
    if (totalWeight <= 10) return 15;
    return 15 + Math.ceil((totalWeight - 10) / 5) * 5;
  }

  getTotal() {
    const subtotal = this.getSubtotal();
    const discount = this.getDiscount();
    const tax = this.getTax();
    const shipping = this.getShipping();
    
    return Math.round((subtotal - discount + tax + shipping) * 100) / 100;
  }

  clear() {
    this.#items = [];
    this.#discountCode = null;
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  checkout() {
    if (this.isEmpty()) {
      throw new Error('Cannot checkout empty cart');
    }

    // Create order snapshot
    const orderData = {
      items: this.getItems().map(item => ({
        product: item.product.getInfo(),
        quantity: item.quantity,
        subtotal: item.getSubtotal()
      })),
      subtotal: this.getSubtotal(),
      discount: this.getDiscount(),
      tax: this.getTax(),
      shipping: this.getShipping(),
      total: this.getTotal(),
      discountCode: this.#discountCode?.code || null
    };

    // Update inventory
    for (const item of this.#items) {
      item.product.decreaseStock(item.quantity);
    }

    // Clear cart
    this.clear();

    // Create and return order
    return new Order(orderData);
  }
}

class Order {
  static #nextId = 1;

  constructor(orderData) {
    this.orderId = Order.#nextId++;
    this.items = orderData.items;
    this.subtotal = orderData.subtotal;
    this.discount = orderData.discount;
    this.tax = orderData.tax;
    this.shipping = orderData.shipping;
    this.total = orderData.total;
    this.discountCode = orderData.discountCode;
    this.status = 'pending';
    this.createdAt = new Date();
  }

  getOrderSummary() {
    return {
      orderId: this.orderId,
      itemCount: this.items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: this.subtotal,
      discount: this.discount,
      tax: this.tax,
      shipping: this.shipping,
      total: this.total,
      status: this.status,
      createdAt: this.createdAt
    };
  }
}

export { ShoppingCart, Order };
export default ShoppingCart;
```

### shopping-cart.test.js

```javascript
import { test } from 'node:test';
import assert from 'node:assert';
import Product from './product.js';
import CartItem from './cart-item.js';
import DiscountCode from './discount-code.js';
import { ShoppingCart, Order } from './shopping-cart.js';

// Product Tests
test('should create product with valid data', () => {
  const product = new Product('P1', 'Laptop', 999.99, 'Electronics', 10, 2.5, 'Gaming laptop');
  assert.strictEqual(product.id, 'P1');
  assert.strictEqual(product.name, 'Laptop');
  assert.strictEqual(product.price, 999.99);
  assert.strictEqual(product.stockQuantity, 10);
});

test('should throw error for invalid product data', () => {
  assert.throws(() => new Product('', 'Test', 100, 'Cat', 5), Error);
  assert.throws(() => new Product('P1', 'Test', -100, 'Cat', 5), Error);
  assert.throws(() => new Product('P1', 'Test', 100, 'Cat', -5), Error);
});

test('should check stock availability', () => {
  const product = new Product('P1', 'Mouse', 29.99, 'Electronics', 5);
  assert.strictEqual(product.isInStock(3), true);
  assert.strictEqual(product.isInStock(5), true);
  assert.strictEqual(product.isInStock(6), false);
});

test('should decrease and increase stock', () => {
  const product = new Product('P1', 'Keyboard', 79.99, 'Electronics', 10);
  product.decreaseStock(3);
  assert.strictEqual(product.stockQuantity, 7);
  
  product.increaseStock(5);
  assert.strictEqual(product.stockQuantity, 12);
});

// CartItem Tests
test('should create cart item', () => {
  const product = new Product('P1', 'Mouse', 29.99, 'Electronics', 10);
  const cartItem = new CartItem(product, 2);
  assert.strictEqual(cartItem.quantity, 2);
  assert.strictEqual(cartItem.getSubtotal(), 59.98);
});

test('should calculate total weight', () => {
  const product = new Product('P1', 'Book', 19.99, 'Books', 50, 0.5);
  const cartItem = new CartItem(product, 3);
  assert.strictEqual(cartItem.getTotalWeight(), 1.5);
});

test('should increase and decrease quantity', () => {
  const product = new Product('P1', 'Pen', 2.99, 'Stationery', 100);
  const cartItem = new CartItem(product, 5);
  
  cartItem.increaseQuantity(3);
  assert.strictEqual(cartItem.quantity, 8);
  
  cartItem.decreaseQuantity(2);
  assert.strictEqual(cartItem.quantity, 6);
});

// DiscountCode Tests
test('should create percentage discount code', () => {
  const discount = new DiscountCode('SAVE20', 'percentage', 20, 100);
  assert.strictEqual(discount.code, 'SAVE20');
  assert.strictEqual(discount.type, 'percentage');
  assert.strictEqual(discount.value, 20);
});

test('should create fixed discount code', () => {
  const discount = new DiscountCode('FIXED10', 'fixed', 10);
  assert.strictEqual(discount.type, 'fixed');
  assert.strictEqual(discount.value, 10);
});

test('should validate discount code', () => {
  const discount = new DiscountCode('MIN50', 'percentage', 10, 50);
  
  let result = discount.isValid(30);
  assert.strictEqual(result.valid, false);
  
  result = discount.isValid(60);
  assert.strictEqual(result.valid, true);
});

test('should calculate percentage discount', () => {
  const discount = new DiscountCode('SAVE20', 'percentage', 20);
  const amount = discount.calculateDiscount(100);
  assert.strictEqual(amount, 20);
});

test('should calculate fixed discount', () => {
  const discount = new DiscountCode('FIXED15', 'fixed', 15);
  const amount = discount.calculateDiscount(100);
  assert.strictEqual(amount, 15);
});

test('should respect max discount cap', () => {
  const discount = new DiscountCode('SAVE20', 'percentage', 20, 0, 50);
  const amount = discount.calculateDiscount(500);
  assert.strictEqual(amount, 50);
});

// ShoppingCart Tests
test('should create empty cart', () => {
  const cart = new ShoppingCart();
  assert.strictEqual(cart.isEmpty(), true);
  assert.strictEqual(cart.getSubtotal(), 0);
});

test('should add item to cart', () => {
  const cart = new ShoppingCart();
  const product = new Product('P1', 'Mouse', 29.99, 'Electronics', 10);
  
  cart.addItem(product, 2);
  assert.strictEqual(cart.getItemCount(), 2);
  assert.strictEqual(cart.getSubtotal(), 59.98);
});

test('should add same product multiple times', () => {
  const cart = new ShoppingCart();
  const product = new Product('P1', 'Mouse', 29.99, 'Electronics', 10);
  
  cart.addItem(product, 2);
  cart.addItem(product, 3);
  
  assert.strictEqual(cart.getItemCount(), 5);
  assert.strictEqual(cart.getItems().length, 1);
});

test('should remove item from cart', () => {
  const cart = new ShoppingCart();
  const product = new Product('P1', 'Mouse', 29.99, 'Electronics', 10);
  
  cart.addItem(product, 2);
  cart.removeItem('P1');
  
  assert.strictEqual(cart.isEmpty(), true);
});

test('should update item quantity', () => {
  const cart = new ShoppingCart();
  const product = new Product('P1', 'Mouse', 29.99, 'Electronics', 10);
  
  cart.addItem(product, 2);
  cart.updateQuantity('P1', 5);
  
  assert.strictEqual(cart.getItemCount(), 5);
});

test('should calculate tax', () => {
  const cart = new ShoppingCart(0.1); // 10% tax
  const product = new Product('P1', 'Mouse', 100, 'Electronics', 10);
  
  cart.addItem(product, 1);
  assert.strictEqual(cart.getTax(), 10);
});

test('should calculate shipping', () => {
  const cart = new ShoppingCart();
  const product = new Product('P1', 'Book', 20, 'Books', 10, 0.5);
  
  cart.addItem(product, 1);
  assert.strictEqual(cart.getShipping(), 5);
});

test('should apply discount code', () => {
  const cart = new ShoppingCart();
  const product = new Product('P1', 'Laptop', 1000, 'Electronics', 10);
  const discount = new DiscountCode('SAVE10', 'percentage', 10);
  
  cart.addItem(product, 1);
  cart.applyDiscount(discount);
  
  assert.strictEqual(cart.getDiscount(), 100);
});

test('should calculate total correctly', () => {
  const cart = new ShoppingCart(0.1); // 10% tax
  const product = new Product('P1', 'Item', 100, 'Test', 10, 1);
  
  cart.addItem(product, 1);
  
  // Subtotal: 100
  // Tax: 10
  // Shipping: 5
  // Total: 115
  assert.strictEqual(cart.getTotal(), 115);
});

test('should calculate total with discount', () => {
  const cart = new ShoppingCart(0.1); // 10% tax
  const product = new Product('P1', 'Item', 100, 'Test', 10, 1);
  const discount = new DiscountCode('SAVE20', 'percentage', 20);
  
  cart.addItem(product, 1);
  cart.applyDiscount(discount);
  
  // Subtotal: 100
  // Discount: 20
  // Tax on 80: 8
  // Shipping: 5
  // Total: 93
  assert.strictEqual(cart.getTotal(), 93);
});

test('should checkout and create order', () => {
  const cart = new ShoppingCart();
  const product = new Product('P1', 'Item', 50, 'Test', 10);
  
  cart.addItem(product, 2);
  const order = cart.checkout();
  
  assert.ok(order instanceof Order);
  assert.strictEqual(order.status, 'pending');
  assert.strictEqual(cart.isEmpty(), true);
  assert.strictEqual(product.stockQuantity, 8);
});

test('should not checkout empty cart', () => {
  const cart = new ShoppingCart();
  assert.throws(() => cart.checkout(), Error);
});

test('should clear cart', () => {
  const cart = new ShoppingCart();
  const product = new Product('P1', 'Item', 50, 'Test', 10);
  
  cart.addItem(product, 2);
  cart.clear();
  
  assert.strictEqual(cart.isEmpty(), true);
});

console.log('\n✅ All shopping cart tests passed!');
```

</details>

## 🎓 Review Questions

1. Why round money calculations to 2 decimal places?
2. How do you prevent race conditions with inventory?
3. Why apply tax after discount, not before?
4. What's the difference between cart total and order total?
5. How would you implement "Buy 2 Get 1 Free"?
6. Why validate stock at multiple points (CartItem, ShoppingCart)?

---

**Next Project**: [Project 05 - Blog System](../project-05-blog-system/) 📰
