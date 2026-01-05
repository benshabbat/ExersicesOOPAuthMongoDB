# Exercise 00.5 - Installing Packages with npm

## Objective
Learn how to install and use external packages with npm.

## מה זה חבילה (Package)?

חבילה זו קוד שמישהו אחר כתב ושיתף, כדי שנוכל להשתמש בו במקום לכתוב הכל מאפס.

דוגמאות לחבילות פופולריות:
- `express` - לבניית שרתים
- `bcrypt` - להצפנת סיסמאות
- `jsonwebtoken` - לעבודה עם JWT

## שלב 1: התקנת חבילה פשוטה

נתקין חבילה פשוטה בשם `chalk` שמאפשרת להוסיף צבעים לטקסט בקונסול:

```bash
npm install chalk@4.1.2
```

> שימו לב: משתמשים בגרסה 4.1.2 כי היא תומכת בתחביר שנלמד

## שלב 2: שימוש בחבילה

צור קובץ `colors.js`:

```javascript
// ייבוא החבילה שהתקנו
const chalk = require('chalk');

// שימוש בחבילה
console.log(chalk.blue('טקסט כחול!'));
console.log(chalk.red('טקסט אדום!'));
console.log(chalk.green.bold('טקסט ירוק ומודגש!'));
console.log(chalk.yellow.bgBlack('טקסט צהוב על רקע שחור!'));
```

הרץ:
```bash
node colors.js
```

## שלב 3: הבנת package.json

פתח את `package.json`. אתה אמור לראות:

```json
{
  "dependencies": {
    "chalk": "^4.1.2"
  }
}
```

זה אומר שהפרויקט שלך תלוי בחבילה `chalk`.

## שלב 4: node_modules

שים לב שנוצרה תיקייה בשם `node_modules` - שם נמצא הקוד של החבילה.

> **חשוב:** אף פעם לא מעלים את `node_modules` ל-Git! 

צור קובץ `.gitignore` עם התוכן:
```
node_modules/
.env
```

## תרגיל: התקנת והשימוש בחבילת moment

1. התקן את החבילה `moment` (לעבודה עם תאריכים):

```bash
npm install moment
```

2. צור קובץ `dates.js` שמשתמש בחבילה:

```javascript
const moment = require('moment');

// הדפס את התאריך של היום בפורמט יפה
console.log('היום:', moment().format('DD/MM/YYYY'));

// הדפס איזה יום בשבוע זה
console.log('יום:', moment().format('dddd'));

// הדפס כמה ימים עברו מראש השנה
const startOfYear = moment('2026-01-01');
const today = moment();
const daysPassed = today.diff(startOfYear, 'days');
console.log('ימים שעברו מראש השנה:', daysPassed);
```

## סוגי התקנות

### Dependencies (תלויות רגילות)
חבילות שהקוד שלך צריך כדי לרוץ:
```bash
npm install express
```

### DevDependencies (תלויות פיתוח)
חבילות שאתה צריך רק בזמן פיתוח (לא בייצור):
```bash
npm install --save-dev nodemon
```

## פקודות npm שימושיות

```bash
npm install               # התקן את כל החבילות מ-package.json
npm install [package]     # התקן חבילה חדשה
npm uninstall [package]   # הסר חבילה
npm list                  # הצג את כל החבילות המותקנות
npm outdated              # בדוק אילו חבילות לא מעודכנות
```

## מושגים שלמדנו:
- ✅ npm install - התקנת חבילות
- ✅ require() - ייבוא חבילות
- ✅ dependencies - תלויות הפרויקט
- ✅ node_modules - תיקיית החבילות
- ✅ .gitignore - קבצים שלא עולים ל-Git

## למה זה חשוב?
כמעט כל פרויקט Node.js משתמש בחבילות חיצוניות. זה חוסך המון זמן ומאפשר להתמקד בקוד העסקי.

## המשך ל-Exercise 01 ←
