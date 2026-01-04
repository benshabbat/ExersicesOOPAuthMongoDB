/**
 * פתרון תרגיל 1: יצירת אובייקטים בסיסיים
 * קובץ זה מכיל את הפתרון המלא לתרגיל
 */

// חלק א': צור אובייקט שמייצג סטודנט
const student = {
    name: "דני כהן",
    age: 20,
    averageGrade: 85
};

// חלק ב': הדפס את כל המאפיינים
console.log("שם הסטודנט:", student.name);
console.log("גיל:", student.age);
console.log("ממוצע:", student.averageGrade);

// חלק ג': הוסף מאפיין חדש
student.major = "מדעי המחשב";

// חלק ד': שנה את ערך הממוצע
student.averageGrade = 95;

// ============ בדיקות ============
console.log("\n=== בדיקת תרגיל 1 ===");
console.log("האובייקט המלא:", student);
