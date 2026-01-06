# תרגיל 03 - Assertions מתקדמים 🎯

## מטרה
להכיר את כל סוגי ה-assertions השונים ולהשתמש בהם נכון.

## רקע
Node.js מספק מגוון assertions לבדיקות שונות. נלמד מתי להשתמש בכל אחד.

## תיאוריה

### סוגי Assertions עיקריים

```javascript
// שוויון מדויק
assert.strictEqual(actual, expected);

// אי-שוויון
assert.notStrictEqual(actual, expected);

// שוויון עמוק (למערכים ואובייקטים)
assert.deepStrictEqual(actual, expected);

// בדיקת ערך truthy
assert.ok(value);

// בדיקת חריגה (exception)
assert.throws(() => { throw new Error('oops'); });

// בדיקת rejection ב-promises
await assert.rejects(async () => { throw new Error('fail'); });
```

## תרגילים

### תרגיל 3.1 - strictEqual vs deepStrictEqual 🔍
הבן את ההבדל בין שני ה-assertions האלה.

```javascript
// בדוק מספרים פרימיטיביים
test('strictEqual למספרים', () => {
  assert.strictEqual(5, 5);
});

// בדוק מערכים (זה ייכשל!)
test('strictEqual למערכים - ייכשל', () => {
  // נסה: assert.strictEqual([1, 2], [1, 2]);
});

// בדוק מערכים בצורה נכונה
test('deepStrictEqual למערכים', () => {
  // השתמש ב-deepStrictEqual
});
```

### תרגיל 3.2 - בדיקת אובייקטים 📦
כתוב בדיקות לאובייקטים.

```javascript
const user1 = { name: 'Alice', age: 25 };
const user2 = { name: 'Alice', age: 25 };

// בדוק שהאובייקטים זהים בתוכן
// בדוק שאובייקטים עם ערכים שונים אינם זהים
```

### תרגיל 3.3 - בדיקת מערכים מקוננים 🎁
בדוק מערכים בתוך מערכים.

```javascript
const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[1, 2], [3, 4]];

// כתוב בדיקה שבודקת שהמטריצות זהות
```

### תרגיל 3.4 - assert.ok 👍
השתמש ב-assert.ok לבדיקות שונות.

```javascript
// בדוק ערכים truthy:
// - מספר חיובי
// - מחרוזת לא ריקה
// - מערך לא ריק
// - אובייקט

// בדוק שערכים falsy נכשלים (ציין בהערה שזה צפוי)
```

### תרגיל 3.5 - notStrictEqual ❌
בדוק שערכים שונים.

```javascript
// בדוק ש-5 לא שווה ל-10
// בדוק ש-"hello" לא שווה ל-"world"
// בדוק שמספר לא שווה למחרוזת
```

### תרגיל 3.6 - בדיקת חריגות (Exceptions) 💥
בדוק פונקציות שזורקות שגיאות.

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// בדוק שהפונקציה זורקת שגיאה כשמחלקים ב-0
test('divide זורק שגיאה בחלוקה ב-0', () => {
  assert.throws(
    () => divide(10, 0),
    Error
  );
});

// בדוק שהפונקציה עובדת כרגיל במקרים תקינים
test('divide עובד במקרים תקינים', () => {
  // כתוב בדיקה
});
```

### תרגיל 3.7 - בדיקת הודעות שגיאה 📝
בדוק את הודעת השגיאה המדויקת.

```javascript
function validateAge(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  if (age > 120) {
    throw new Error('Age is too high');
  }
  return true;
}

// בדוק שגיאה עם גיל שלילי
// בדוק שגיאה עם גיל גבוה מדי
// בדוק שפונקציה מצליחה עם גיל תקין
```

### תרגיל 3.8 - בדיקות מורכבות 🧩
בדוק אובייקט מורכב.

```javascript
const product = {
  id: 1,
  name: 'Laptop',
  price: 999.99,
  specs: {
    cpu: 'Intel i7',
    ram: 16
  },
  tags: ['electronics', 'computers']
};

// צור אובייקט זהה ובדוק אותו
// שנה ערך אחד ובדוק שהם שונים
```

### תרגיל 3.9 - בדיקות שליליות 🚫
כתוב בדיקות שבודקות מה שלא אמור לקרות.

```javascript
function getPositiveNumbers(arr) {
  return arr.filter(n => n > 0);
}

// בדוק שמספרים שליליים לא נכללים
// בדוק ש-0 לא נכלל
// בדוק שמספרים חיוביים כן נכללים
```

### תרגיל 3.10 - תרגיל סיכום 🎓
צור פונקציה שמאמתת אובייקט משתמש:

```javascript
function validateUser(user) {
  if (!user.name || user.name.length < 2) {
    throw new Error('Invalid name');
  }
  if (!user.email || !user.email.includes('@')) {
    throw new Error('Invalid email');
  }
  if (user.age < 18) {
    throw new Error('Must be 18 or older');
  }
  return true;
}

// כתוב בדיקות עבור:
// 1. משתמש תקין
// 2. שם לא תקין
// 3. אימייל לא תקין
// 4. גיל צעיר מדי
```

## טבלת Assertions

| Assertion | שימוש | דוגמה |
|-----------|-------|-------|
| `strictEqual` | ערכים פרימיטיביים | `assert.strictEqual(5, 5)` |
| `deepStrictEqual` | מערכים/אובייקטים | `assert.deepStrictEqual([1,2], [1,2])` |
| `notStrictEqual` | ערכים שונים | `assert.notStrictEqual(5, 10)` |
| `ok` | ערך truthy | `assert.ok(true)` |
| `throws` | זריקת שגיאה | `assert.throws(() => ...)` |

## הרצת הבדיקות

```bash
node --test exercise-03-assertions.test.js
```

## טיפים 💡
1. השתמש ב-deepStrictEqual למערכים ואובייקטים
2. השתמש ב-strictEqual לערכים פרימיטיביים
3. תמיד בדוק גם מקרי קצה
4. בדוק גם שגיאות צפויות

## מה הלאה? ⏭️
עבור ל[תרגיל 04 - בדיקות אובייקטים](./exercise-04-object-tests.md)
