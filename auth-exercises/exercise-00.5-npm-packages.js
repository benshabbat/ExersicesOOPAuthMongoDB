// Exercise 00.5 - npm Packages

// TODO: ודא שהתקנת את החבילות:
// npm install chalk@4.1.2 moment

// TODO: ייבא את חבילת chalk
// const chalk = require('chalk');

// TODO: ייבא את חבילת moment
// const moment = require('moment');

// TODO: הדפס הודעת ברכה צבעונית
// console.log(chalk.green.bold('🎉 ברוך הבא לתרגילי Node.js!'));

// TODO: הדפס את התאריך של היום בפורמט יפה
// const today = moment().format('DD/MM/YYYY');
// console.log(chalk.blue('📅 התאריך היום:'), today);

// TODO: הדפס את יום השבוע
// const dayOfWeek = moment().format('dddd');
// console.log(chalk.yellow('📆 יום:'), dayOfWeek);

// TODO: חשב כמה ימים עברו מראש השנה
// const startOfYear = moment('2026-01-01');
// const now = moment();
// const daysSinceNewYear = now.diff(startOfYear, 'days');
// console.log(chalk.magenta('⏰ ימים שעברו מראש השנה:'), daysSinceNewYear);

// בונוס: צור פונקציה שמקבלת תאריך לידה ומחזירה את הגיל
// function calculateAge(birthDate) {
//   const birth = moment(birthDate);
//   const age = moment().diff(birth, 'years');
//   return age;
// }
//
// const myAge = calculateAge('1995-05-15');
// console.log(chalk.cyan('🎂 הגיל שלי:'), myAge);
