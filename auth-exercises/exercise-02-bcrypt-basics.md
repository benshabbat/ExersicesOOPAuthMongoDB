# Exercise 02 - Password Hashing with bcrypt (הצפנת סיסמאות)

## Objective
ללמוד איך להצפין סיסמאות בצורה מאובטחת באמצעות bcrypt.

## למה צריך להצפין סיסמאות? 🔐

דמיין שיש לך אתר עם משתמשים, ומישהו פורץ למסד הנתונים שלך...

### ❌ רע - שמירת סיסמאות כמו שהן:
```javascript
users = [
  { email: "yosi@example.com", password: "123456" },
  { email: "dana@example.com", password: "password123" }
]
```
**הבעיה:** הפורץ רואה את כל הסיסמאות! 😱

### ✅ טוב - שמירת סיסמאות מוצפנות:
```javascript
users = [
  { email: "yosi@example.com", password: "$2b$10$XYZ..." },
  { email: "dana@example.com", password: "$2b$10$ABC..." }
]
```
**טוב כי:** הפורץ רואה רק ערבוביה של תווים שאי אפשר לפענח! 🛡️

## מה זה Hashing (גיבוב)?

**Hashing** זו פעולה חד-כיוונית:
- `"123456"` → Hashing → `"$2b$10$XYZ..."`
- אבל **לא ניתן** לעשות: `"$2b$10$XYZ..."` → `"123456"`

זה כמו להפוך ביצה לחביתה - אי אפשר להחזיר את הביצה! 🍳

## מה זה bcrypt?

bcrypt זו ספרייה פופולרית להצפנת סיסמאות. היא:
- מוסיפה "מלח" (salt) - משהו רנדומלי לכל סיסמה
- איטית במתכוון (קשה לפרוץ)
- בטוחה ומוכחת

## שלב 1: התקנת bcrypt

ראשית, התקן את חבילת bcrypt:

```bash
npm install bcrypt
```

## שלב 2: הבנת הפונקציות הבסיסיות

### פונקציה 1: הצפנת סיסמה
```javascript
const bcrypt = require('bcrypt');
const saltRounds = 10; // רמת האבטחה

async function hashPassword(password) {
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
}
```

### פונקציה 2: בדיקת סיסמה
```javascript
async function verifyPassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch; // true או false
}
```

## שלב 3: נסה בעצמך!

עכשיו תיצור שרת Express עם שני endpoints:

### Endpoint 1: `/api/hash-password` (POST)
**מטרה:** להצפין סיסמה

**מקבל:**
```json
{
  "password": "123456"
}
```

**מחזיר:**
```json
{
  "original": "123456",
  "hashed": "$2b$10$XYZ..."
}
```

### Endpoint 2: `/api/verify-password` (POST)
**מטרה:** לבדוק אם סיסמה תואמת להצפנה

**מקבל:**
```json
{
  "password": "123456",
  "hashedPassword": "$2b$10$XYZ..."
}
```

**מחזיר:**
```json
{
  "match": true,
  "message": "הסיסמה נכונה!"
}
```

## Expected Output

**POST /api/test-hash** with body `{ "password": "mySecret123" }`:
```json
{
  "original": "mySecret123",
  "hashed": "$2b$10$XYZ...",
  "timeTaken": "150ms"
}
```

**POST /api/test-verify** with body:
```json
{
  "password": "mySecret123",
  "hashedPassword": "$2b$10$XYZ..."
}
```

Response:
```json
{
  "match": true,
  "message": "Password verification successful"
}
```

## טיפים חשובים 💡

### איך להשתמש ב-async/await?

```javascript
// דרך נכונה ✅
app.post('/api/hash-password', async function(req, res) {
  const password = req.body.password;
  const hashed = await hashPassword(password); // ממתין לתוצאה
  res.json({ original: password, hashed: hashed });
});
```

### למה צריך express.json()?

כדי לקבל נתונים מ-POST request, חייבים להוסיף:

```javascript
app.use(express.json()); // לפני כל ה-routes!
```

### איך לבדוק POST request?

**ב-Thunder Client:**
1. לחץ על "New Request"
2. בחר "POST"
3. כתובת: `http://localhost:3000/api/hash-password`
4. לחץ על "Body" → "JSON"
5. כתוב: `{ "password": "123456" }`
6. לחץ "Send"

### מה זה saltRounds?

- **saltRounds = 10** - מאובטח ומהיר (מומלץ)
- **saltRounds = 12** - יותר מאובטח, אבל יותר איטי
- **saltRounds = 8** - פחות מאובטח, אבל מהיר

10 זה האיזון הטוב ביותר!

## Bonus Challenges

1. Add input validation (password length, complexity requirements)
2. Test the same password multiple times - notice different hashes
3. Add timing comparison for different salt round values (8, 10, 12)
4. Create a route that demonstrates why plain text comparison is insecure
