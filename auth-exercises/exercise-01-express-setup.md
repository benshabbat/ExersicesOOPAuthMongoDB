# Exercise 01 - Express Server Setup (הקמת שרת ראשון!)

## Objective
ליצור שרת Express פשוט שעונה לבקשות HTTP.

## מה זה Express?
Express זה ספרייה (framework) שעוזרת לנו לבנות שרתי API בקלות. במקום לכתוב הרבה קוד מסובך, Express עושה את העבודה הקשה בשבילנו.

## מה זה שרת?
שרת זה תוכנה שמקשיבה לבקשות (requests) ומחזירה תשובות (responses). כמו מלצר במסעדה שמקבל הזמנות ומביא אוכל!

## שלב 1: הכנה

ודא שאתה בתיקיית `auth-exercises` והתקן את Express:

```bash
npm install express
```

## שלב 2: יצירת שרת בסיסי ביותר

צור קובץ `server-basic.js`:

```javascript
// ייבוא Express
const express = require('express');

// יצירת אפליקציית Express
const app = express();

// יצירת נתיב (route) - כמו כתובת בשרת
app.get('/', function(req, res) {
  res.send('שלום עולם! השרת עובד!');
});

// הפעלת השרת על פורט 3000
app.listen(3000, function() {
  console.log('השרת רץ על http://localhost:3000');
});
```

הרץ את השרת:
```bash
node server-basic.js
```

פתח דפדפן וגש ל: `http://localhost:3000`

אמור לראות: "שלום עולם! השרת עובד!"

> 💡 כדי לעצור את השרת, לחץ Ctrl+C בטרמינל

## שלב 3: תרגיל - הוסף עוד נתיבים

עכשיו תכתוב קובץ `exercise-01-express-setup.js` שמכיל:

### דרישות:

1. **שרת Express בסיסי** שרץ על פורט 3000

2. **נתיב ראשי** - `GET /`
   - מחזיר: `{ "message": "ברוכים הבאים ל-API של אימות משתמשים" }`

3. **נתיב בריאות** - `GET /health`
   - מחזיר: `{ "status": "OK", "timestamp": "2026-01-05T10:30:00.000Z" }`

4. **נתיב מידע** - `GET /api/info`
   - מחזיר: `{ "name": "Auth API", "version": "1.0.0", "author": "השם שלך" }`

## פלט צפוי

כשמריצים את השרת:
```
השרת רץ על http://localhost:3000
```

כשניגשים ל-`http://localhost:3000/`:
```json
{
  "message": "ברוכים הבאים ל-API של אימות משתמשים"
}
```

כשניגשים ל-`http://localhost:3000/health`:
```json
{
  "status": "OK",
  "timestamp": "2026-01-05T10:30:00.000Z"
}
```

כשניגשים ל-`http://localhost:3000/api/info`:
```json
{
  "name": "Auth API",
  "version": "1.0.0",
  "author": "השם שלך"
}
```

## טיפים 💡

### איך להחזיר JSON?
```javascript
res.json({ message: "זה אובייקט JSON" });
```

### איך לקבל תאריך נוכחי?
```javascript
const now = new Date().toISOString();
```

### מבנה נתיב בסיסי:
```javascript
app.get('/הנתיב', function(req, res) {
  res.json({ מה שרוצים להחזיר });
});
```

## מילון מושגים:

- **Express** - ספרייה לבניית שרתים
- **Route (נתיב)** - כתובת בשרת (כמו `/about`, `/users`)
- **GET** - סוג בקשה לקבלת מידע
- **req** - Request (הבקשה שהגיעה)
- **res** - Response (התשובה שנחזיר)
- **Port** - "שער" בשרת (3000, 8080, וכו')
- **localhost** - המחשב שלך (127.0.0.1)

## איך לבדוק את השרת?

### דרך 1: דפדפן
פשוט פתח `http://localhost:3000` בדפדפן

### דרך 2: Postman
הורד Postman (תוכנה לבדיקת API) ושלח בקשות GET

### דרך 3: VSCode Extension
התקן את התוסף "Thunder Client" ב-VSCode

## אתגרי בונוס 🌟

1. הוסף נתיב `GET /time` שמחזיר את השעה הנוכחית
2. הוסף נתיב `GET /about` עם מידע אישי עליך
3. הוסף הודעת לוג לכל בקשה שמגיעה לשרת
4. נסה לשנות את הפורט ל-8080

## המשך ל-Exercise 02 ←
