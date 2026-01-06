# Project 07 - Hotel Booking System 🏨

## 🎯 Project Goal

Build a comprehensive hotel booking management system with room types, reservations, guest management, pricing rules, availability checking, and billing. This advanced project teaches complex business logic, date handling, and state management.

## 📖 Project Description

Create a hotel booking system that manages rooms, reservations, guest check-in/check-out, seasonal pricing, amenities, special offers, and comprehensive billing with testing.

## 🎭 User Stories

As a hotel manager, I want to:
- ✅ Manage different room types and inventory
- ✅ Set seasonal pricing and special rates
- ✅ View room availability for date ranges
- ✅ Create and modify reservations
- ✅ Check guests in and out
- ✅ Generate invoices with itemized charges
- ✅ Track occupancy rates

As a guest, I want to:
- ✅ Search for available rooms
- ✅ Make reservations
- ✅ Modify or cancel bookings
- ✅ Add special requests
- ✅ View my booking history

## 📋 Requirements

### Room Class

**Properties:**
- `roomNumber` - Unique room identifier
- `type` - Room type (Single, Double, Suite, Deluxe)
- `basePrice` - Base nightly rate
- `capacity` - Maximum occupants
- `amenities` - Array of amenities
- `status` - 'available', 'occupied', 'maintenance', 'reserved'
- `floor` - Floor number
- `view` - 'city', 'ocean', 'garden', 'courtyard'

**Methods:**
- `constructor(roomNumber, type, basePrice, capacity, floor, view, amenities)`
- `setStatus(status)` - Update room status
- `hasAmenity(amenity)` - Check if room has specific amenity
- `getDescription()` - Get room description
- `isAvailable()` - Check if room is available

### Guest Class

**Properties:**
- `id` - Unique guest identifier
- `firstName` - First name
- `lastName` - Last name
- `email` - Email address
- `phone` - Phone number
- `#bookingHistory` (private) - Past bookings
- `loyaltyPoints` - Reward points
- `vipStatus` - VIP tier level

**Methods:**
- `constructor(id, firstName, lastName, email, phone)`
- `getFullName()` - Get full name
- `addBooking(reservation)` - Add to history
- `getBookingHistory()` - Get all bookings
- `addLoyaltyPoints(points)` - Add reward points
- `redeemPoints(points)` - Use reward points
- `upgradeVipStatus()` - Increase VIP tier

### Reservation Class

**Properties:**
- `id` - Unique reservation identifier
- `guest` - Guest object
- `room` - Room object
- `checkInDate` - Check-in date
- `checkOutDate` - Check-out date
- `numberOfGuests` - Guest count
- `status` - 'pending', 'confirmed', 'checked-in', 'checked-out', 'cancelled'
- `specialRequests` - Array of special requests
- `#charges` (private) - Additional charges
- `totalPrice` - Total booking price
- `createdAt` - Reservation creation date
- `discountCode` - Applied discount code

**Methods:**
- `constructor(id, guest, room, checkInDate, checkOutDate, numberOfGuests)`
- `calculateTotalPrice(pricingStrategy)` - Calculate total cost
- `addCharge(description, amount)` - Add extra charge
- `getCharges()` - Get all charges
- `confirm()` - Confirm reservation
- `checkIn()` - Mark guest as checked in
- `checkOut()` - Process check-out
- `cancel()` - Cancel reservation
- `modify(newCheckIn, newCheckOut)` - Modify dates
- `addSpecialRequest(request)` - Add request
- `getNights()` - Calculate number of nights
- `isActive()` - Check if reservation is active

### PricingStrategy Class

**Properties:**
- `#baseRates` (private) - Base room rates by type
- `#seasonalMultipliers` (private) - Price multipliers by season
- `#weekendMultiplier` - Weekend price multiplier
- `#discountCodes` (private) - Available discount codes

**Methods:**
- `constructor()`
- `setBaseRate(roomType, rate)` - Set base rate for room type
- `setSeasonalMultiplier(season, multiplier)` - Set seasonal pricing
- `addDiscountCode(code, type, value)` - Add discount code
- `calculatePrice(room, checkIn, checkOut, discountCode)` - Calculate total price
- `getSeason(date)` - Determine season for date
- `isWeekend(date)` - Check if date is weekend
- `applyDiscount(price, discountCode)` - Apply discount to price

### Invoice Class

**Properties:**
- `invoiceNumber` - Unique invoice number
- `reservation` - Associated reservation
- `roomCharges` - Base room charges
- `additionalCharges` - Extra charges
- `subtotal` - Subtotal before tax
- `tax` - Tax amount
- `discount` - Discount amount
- `total` - Final total
- `isPaid` - Payment status
- `issuedAt` - Invoice date

**Methods:**
- `constructor(invoiceNumber, reservation, roomCharges, additionalCharges, tax, discount)`
- `calculateTotal()` - Calculate final total
- `markAsPaid()` - Mark invoice as paid
- `getLineItems()` - Get itemized charges
- `generateInvoiceText()` - Generate text invoice

### Hotel Class (Main System)

**Properties:**
- `name` - Hotel name
- `#rooms` (private) - All rooms
- `#reservations` (private) - All reservations
- `#guests` (private) - All guests
- `#pricingStrategy` (private) - Pricing calculator
- `#invoices` (private) - Generated invoices

**Methods:**
- `constructor(name, pricingStrategy)`
- `addRoom(room)` - Add room to hotel
- `addGuest(guest)` - Register new guest
- `searchAvailableRooms(checkIn, checkOut, roomType, capacity)` - Search rooms
- `createReservation(guest, room, checkIn, checkOut, numberOfGuests)` - Make booking
- `getReservation(id)` - Get reservation by ID
- `cancelReservation(id)` - Cancel booking
- `checkInGuest(reservationId)` - Check in guest
- `checkOutGuest(reservationId)` - Check out and generate invoice
- `getOccupancyRate(date)` - Calculate occupancy percentage
- `getRevenueForPeriod(startDate, endDate)` - Calculate revenue
- `getUpcomingCheckIns(date)` - Get check-ins for date
- `getUpcomingCheckOuts(date)` - Get check-outs for date
- `getRoomsByStatus(status)` - Filter rooms by status
- `findGuestByEmail(email)` - Search guest

## 🧪 Testing Requirements

Write comprehensive tests for:
- ✅ Room creation and status management
- ✅ Guest registration and loyalty system
- ✅ Reservation creation with validation
- ✅ Date range validation and overlap detection
- ✅ Room capacity validation
- ✅ Price calculation with seasonal rates
- ✅ Weekend pricing
- ✅ Discount code application
- ✅ Check-in/check-out process
- ✅ Invoice generation
- ✅ Additional charges
- ✅ Reservation modification
- ✅ Cancellation policy
- ✅ Availability search
- ✅ Occupancy calculations
- ✅ Revenue reporting
- ✅ Edge cases (overlapping bookings, past dates, invalid dates)

## 🎯 Hints

<details>
<summary>💡 Hint 1: Date Handling and Validation</summary>

```javascript
class Reservation {
  constructor(id, guest, room, checkInDate, checkOutDate, numberOfGuests) {
    // Validate dates
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      throw new Error('Check-in date cannot be in the past');
    }

    if (checkOut <= checkIn) {
      throw new Error('Check-out must be after check-in');
    }

    if (numberOfGuests > room.capacity) {
      throw new Error(`Room capacity is ${room.capacity}, but ${numberOfGuests} guests requested`);
    }

    this.id = id;
    this.guest = guest;
    this.room = room;
    this.checkInDate = checkIn;
    this.checkOutDate = checkOut;
    this.numberOfGuests = numberOfGuests;
    this.status = 'pending';
    this.specialRequests = [];
    this.#charges = [];
    this.createdAt = new Date();
  }

  getNights() {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((this.checkOutDate - this.checkInDate) / oneDay);
  }

  isActive() {
    return ['confirmed', 'checked-in'].includes(this.status);
  }
}
```

Key validations:
- Past date checking
- Date order validation
- Capacity checking
- Night calculation
</details>

<details>
<summary>💡 Hint 2: Availability Checking with Overlaps</summary>

```javascript
// In Hotel class
searchAvailableRooms(checkIn, checkOut, roomType = null, capacity = 1) {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  return this.#rooms.filter(room => {
    // Filter by type if specified
    if (roomType && room.type !== roomType) {
      return false;
    }

    // Filter by capacity
    if (room.capacity < capacity) {
      return false;
    }

    // Check if room is not in maintenance
    if (room.status === 'maintenance') {
      return false;
    }

    // Check for overlapping reservations
    return !this.#hasOverlappingReservation(room, checkInDate, checkOutDate);
  });
}

#hasOverlappingReservation(room, checkIn, checkOut) {
  return this.#reservations.some(reservation => {
    // Only check active reservations
    if (!reservation.isActive()) {
      return false;
    }

    // Only check same room
    if (reservation.room.roomNumber !== room.roomNumber) {
      return false;
    }

    // Check for overlap
    // Overlap if: new checkIn < existing checkOut AND new checkOut > existing checkIn
    return checkIn < reservation.checkOutDate && checkOut > reservation.checkInDate;
  });
}
```

Overlap logic:
- Two reservations overlap if one starts before the other ends
- Only check active reservations
- Room is available only if no overlaps
</details>

<details>
<summary>💡 Hint 3: Dynamic Pricing with Seasons and Weekends</summary>

```javascript
class PricingStrategy {
  #baseRates = new Map();
  #seasonalMultipliers = new Map([
    ['low', 1.0],
    ['mid', 1.3],
    ['high', 1.8],
    ['peak', 2.2]
  ]);
  #weekendMultiplier = 1.2;
  #discountCodes = new Map();

  constructor() {
    // Set default base rates
    this.#baseRates.set('Single', 100);
    this.#baseRates.set('Double', 150);
    this.#baseRates.set('Suite', 300);
    this.#baseRates.set('Deluxe', 500);
  }

  calculatePrice(room, checkIn, checkOut, discountCode = null) {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.round((checkOutDate - checkInDate) / (24 * 60 * 60 * 1000));

    let totalPrice = 0;
    const currentDate = new Date(checkInDate);

    // Calculate price for each night
    for (let i = 0; i < nights; i++) {
      let nightPrice = this.#baseRates.get(room.type) || room.basePrice;

      // Apply seasonal multiplier
      const season = this.getSeason(currentDate);
      const seasonMultiplier = this.#seasonalMultipliers.get(season) || 1.0;
      nightPrice *= seasonMultiplier;

      // Apply weekend multiplier
      if (this.isWeekend(currentDate)) {
        nightPrice *= this.#weekendMultiplier;
      }

      totalPrice += nightPrice;
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Apply discount if provided
    if (discountCode) {
      totalPrice = this.applyDiscount(totalPrice, discountCode);
    }

    return Math.round(totalPrice * 100) / 100;
  }

  getSeason(date) {
    const month = date.getMonth();
    
    // December, January, February - Peak (winter holidays)
    if (month === 11 || month === 0 || month === 1) return 'peak';
    
    // June, July, August - High (summer)
    if (month >= 5 && month <= 7) return 'high';
    
    // March, April, May, September, October - Mid (spring/fall)
    if (month >= 2 && month <= 4 || month >= 8 && month <= 9) return 'mid';
    
    // November - Low
    return 'low';
  }

  isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  }

  applyDiscount(price, code) {
    const discount = this.#discountCodes.get(code);
    if (!discount) {
      throw new Error('Invalid discount code');
    }

    if (discount.type === 'percentage') {
      return price * (1 - discount.value / 100);
    } else if (discount.type === 'fixed') {
      return Math.max(0, price - discount.value);
    }

    return price;
  }
}
```

Pricing features:
- Day-by-day calculation
- Seasonal rates
- Weekend premium
- Discount codes
</details>

<details>
<summary>💡 Hint 4: Check-In/Check-Out Process</summary>

```javascript
// In Hotel class
checkInGuest(reservationId) {
  const reservation = this.getReservation(reservationId);

  if (reservation.status !== 'confirmed') {
    throw new Error('Reservation must be confirmed before check-in');
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const checkInDate = new Date(reservation.checkInDate);
  checkInDate.setHours(0, 0, 0, 0);

  // Allow check-in on the check-in date
  if (checkInDate > today) {
    throw new Error('Cannot check in before check-in date');
  }

  // Check in
  reservation.checkIn();
  reservation.room.setStatus('occupied');

  return reservation;
}

checkOutGuest(reservationId) {
  const reservation = this.getReservation(reservationId);

  if (reservation.status !== 'checked-in') {
    throw new Error('Guest must be checked in before check-out');
  }

  // Calculate final charges
  const roomCharges = reservation.totalPrice;
  const additionalCharges = reservation.getCharges();
  const totalAdditional = additionalCharges.reduce((sum, charge) => sum + charge.amount, 0);

  // Generate invoice
  const invoice = new Invoice(
    `INV-${Date.now()}`,
    reservation,
    roomCharges,
    additionalCharges,
    (roomCharges + totalAdditional) * 0.1, // 10% tax
    0
  );

  this.#invoices.push(invoice);

  // Check out
  reservation.checkOut();
  reservation.room.setStatus('available');

  // Award loyalty points (1 point per $10 spent)
  const points = Math.floor(invoice.total / 10);
  reservation.guest.addLoyaltyPoints(points);

  return invoice;
}

// In Reservation class
checkIn() {
  if (this.status !== 'confirmed') {
    throw new Error('Reservation must be confirmed');
  }
  this.status = 'checked-in';
}

checkOut() {
  if (this.status !== 'checked-in') {
    throw new Error('Guest must be checked in');
  }
  this.status = 'checked-out';
}
```

Process flow:
1. Validate reservation status
2. Check dates
3. Update statuses
4. Generate invoice
5. Award loyalty points
</details>

<details>
<summary>💡 Hint 5: Invoice Generation</summary>

```javascript
class Invoice {
  constructor(invoiceNumber, reservation, roomCharges, additionalCharges, tax, discount = 0) {
    this.invoiceNumber = invoiceNumber;
    this.reservation = reservation;
    this.roomCharges = roomCharges;
    this.additionalCharges = additionalCharges;
    this.tax = tax;
    this.discount = discount;
    this.isPaid = false;
    this.issuedAt = new Date();
    
    this.subtotal = this.calculateSubtotal();
    this.total = this.calculateTotal();
  }

  calculateSubtotal() {
    const additionalTotal = this.additionalCharges.reduce(
      (sum, charge) => sum + charge.amount, 
      0
    );
    return this.roomCharges + additionalTotal;
  }

  calculateTotal() {
    return Math.round((this.subtotal + this.tax - this.discount) * 100) / 100;
  }

  getLineItems() {
    const items = [
      {
        description: `Room ${this.reservation.room.roomNumber} (${this.reservation.getNights()} nights)`,
        amount: this.roomCharges
      }
    ];

    // Add additional charges
    for (const charge of this.additionalCharges) {
      items.push({
        description: charge.description,
        amount: charge.amount
      });
    }

    return items;
  }

  generateInvoiceText() {
    let text = `\n${'='.repeat(50)}\n`;
    text += `INVOICE #${this.invoiceNumber}\n`;
    text += `Date: ${this.issuedAt.toLocaleDateString()}\n`;
    text += `${'='.repeat(50)}\n\n`;

    text += `Guest: ${this.reservation.guest.getFullName()}\n`;
    text += `Room: ${this.reservation.room.roomNumber} (${this.reservation.room.type})\n`;
    text += `Check-in: ${this.reservation.checkInDate.toLocaleDateString()}\n`;
    text += `Check-out: ${this.reservation.checkOutDate.toLocaleDateString()}\n\n`;

    text += `${'='.repeat(50)}\n`;
    text += `LINE ITEMS:\n`;
    text += `${'-'.repeat(50)}\n`;

    for (const item of this.getLineItems()) {
      text += `${item.description.padEnd(35)} $${item.amount.toFixed(2)}\n`;
    }

    text += `${'-'.repeat(50)}\n`;
    text += `${'Subtotal:'.padEnd(35)} $${this.subtotal.toFixed(2)}\n`;
    text += `${'Tax:'.padEnd(35)} $${this.tax.toFixed(2)}\n`;
    
    if (this.discount > 0) {
      text += `${'Discount:'.padEnd(35)} -$${this.discount.toFixed(2)}\n`;
    }

    text += `${'='.repeat(50)}\n`;
    text += `${'TOTAL:'.padEnd(35)} $${this.total.toFixed(2)}\n`;
    text += `${'='.repeat(50)}\n`;

    return text;
  }

  markAsPaid() {
    this.isPaid = true;
  }
}
```

Invoice includes:
- Room charges (nightly rate × nights)
- Additional charges
- Tax calculation
- Discounts
- Formatted text output
</details>

<details>
<summary>💡 Hint 6: Occupancy and Revenue Analytics</summary>

```javascript
// In Hotel class
getOccupancyRate(date) {
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  let occupiedRooms = 0;
  const totalRooms = this.#rooms.filter(r => r.status !== 'maintenance').length;

  for (const reservation of this.#reservations) {
    if (!reservation.isActive()) continue;

    // Check if date falls within reservation
    if (targetDate >= reservation.checkInDate && targetDate < reservation.checkOutDate) {
      occupiedRooms++;
    }
  }

  return totalRooms > 0 ? Math.round((occupiedRooms / totalRooms) * 100) : 0;
}

getRevenueForPeriod(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  let totalRevenue = 0;

  for (const invoice of this.#invoices) {
    const invoiceDate = invoice.issuedAt;
    
    if (invoiceDate >= start && invoiceDate <= end && invoice.isPaid) {
      totalRevenue += invoice.total;
    }
  }

  return Math.round(totalRevenue * 100) / 100;
}

getUpcomingCheckIns(date) {
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  return this.#reservations.filter(reservation => {
    const checkIn = new Date(reservation.checkInDate);
    checkIn.setHours(0, 0, 0, 0);
    
    return checkIn.getTime() === targetDate.getTime() && 
           reservation.status === 'confirmed';
  });
}

getUpcomingCheckOuts(date) {
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  return this.#reservations.filter(reservation => {
    const checkOut = new Date(reservation.checkOutDate);
    checkOut.setHours(0, 0, 0, 0);
    
    return checkOut.getTime() === targetDate.getTime() && 
           reservation.status === 'checked-in';
  });
}
```

Analytics features:
- Occupancy percentage
- Revenue tracking
- Check-in/check-out lists
- Date-specific queries
</details>

<details>
<summary>⚠️ Hint 7: Common Pitfalls</summary>

Watch out for:
- ❌ Not handling timezone differences in dates
- ❌ Off-by-one errors in night calculations
- ❌ Not validating date order (check-in before check-out)
- ❌ Allowing overlapping bookings for same room
- ❌ Not checking room capacity
- ❌ Forgetting to update room status on check-in/out
- ❌ Not handling cancellations properly
- ❌ Incorrect weekend detection (timezone issues)
- ❌ Not validating past dates
- ❌ Memory leaks from not cleaning old reservations
- ❌ Race conditions in concurrent bookings
- ❌ Not handling edge cases (same-day booking, multi-year stays)
</details>

## 🏆 Bonus Challenges

1. **Room Service Orders** ⭐⭐
   - Food/drink menu
   - Order tracking
   - Delivery times

2. **Housekeeping Schedule** ⭐⭐
   - Room cleaning status
   - Staff assignment
   - Priority system

3. **Group Bookings** ⭐⭐
   - Multiple rooms
   - Group discounts
   - Block reservations

4. **Cancellation Policies** ⭐⭐
   - Time-based refunds
   - No-show penalties
   - Flexible rates

5. **Loyalty Program Tiers** ⭐⭐⭐
   - Bronze/Silver/Gold/Platinum
   - Tier benefits
   - Point redemption

6. **Dynamic Pricing** ⭐⭐⭐
   - Demand-based pricing
   - Last-minute deals
   - Early bird discounts

7. **Multi-Property System** ⭐⭐⭐⭐
   - Hotel chain management
   - Cross-property bookings
   - Centralized analytics

## ✅ Completion Checklist

- [ ] All 6 classes implemented
- [ ] Room management working
- [ ] Guest registration complete
- [ ] Reservation system functional
- [ ] Date validation working
- [ ] Availability checking accurate
- [ ] Pricing with seasons/weekends
- [ ] Check-in/check-out process
- [ ] Invoice generation working
- [ ] Additional charges system
- [ ] Occupancy calculations
- [ ] Revenue reporting
- [ ] 50+ comprehensive tests
- [ ] Edge cases handled
- [ ] No overlapping bookings

---

## 🔐 Complete Solution

<details>
<summary>🎯 Click to reveal complete solution (Try solving it yourself first!)</summary>

### room.js

```javascript
class Room {
  constructor(roomNumber, type, basePrice, capacity, floor, view, amenities = []) {
    if (!roomNumber) throw new Error('Room number is required');
    if (!['Single', 'Double', 'Suite', 'Deluxe'].includes(type)) {
      throw new Error('Invalid room type');
    }
    if (basePrice <= 0) throw new Error('Base price must be positive');
    if (capacity <= 0) throw new Error('Capacity must be positive');

    this.roomNumber = roomNumber;
    this.type = type;
    this.basePrice = basePrice;
    this.capacity = capacity;
    this.floor = floor;
    this.view = view;
    this.amenities = amenities;
    this.status = 'available';
  }

  setStatus(status) {
    const validStatuses = ['available', 'occupied', 'maintenance', 'reserved'];
    if (!validStatuses.includes(status)) {
      throw new Error('Invalid status');
    }
    this.status = status;
  }

  hasAmenity(amenity) {
    return this.amenities.includes(amenity);
  }

  isAvailable() {
    return this.status === 'available';
  }

  getDescription() {
    return `${this.type} room #${this.roomNumber} on floor ${this.floor} with ${this.view} view. Capacity: ${this.capacity}. Amenities: ${this.amenities.join(', ') || 'None'}`;
  }
}

export default Room;
```

### guest.js

```javascript
class Guest {
  #bookingHistory = [];

  constructor(id, firstName, lastName, email, phone) {
    if (!id || !firstName || !lastName || !email) {
      throw new Error('All guest information required');
    }
    if (!this.#isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.loyaltyPoints = 0;
    this.vipStatus = 'Standard';
  }

  #isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  addBooking(reservation) {
    this.#bookingHistory.push(reservation);
  }

  getBookingHistory() {
    return [...this.#bookingHistory];
  }

  addLoyaltyPoints(points) {
    if (points < 0) throw new Error('Points must be positive');
    this.loyaltyPoints += points;
    this.#checkVipUpgrade();
  }

  redeemPoints(points) {
    if (points < 0) throw new Error('Points must be positive');
    if (points > this.loyaltyPoints) {
      throw new Error('Insufficient loyalty points');
    }
    this.loyaltyPoints -= points;
  }

  #checkVipUpgrade() {
    if (this.loyaltyPoints >= 10000) {
      this.vipStatus = 'Platinum';
    } else if (this.loyaltyPoints >= 5000) {
      this.vipStatus = 'Gold';
    } else if (this.loyaltyPoints >= 2000) {
      this.vipStatus = 'Silver';
    } else if (this.loyaltyPoints >= 500) {
      this.vipStatus = 'Bronze';
    }
  }

  upgradeVipStatus() {
    this.#checkVipUpgrade();
  }
}

export default Guest;
```

### Complete implementations of Reservation, PricingStrategy, Invoice, and Hotel classes with 60+ tests available in the solution files.

</details>

---

**Next Project**: [Project 08 - Final Capstone](../project-08-capstone/) 🚀
