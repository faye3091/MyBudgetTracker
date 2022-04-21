let weeklyExpenses = 0;
let monthlyExpenses = 0;
let annualExpenses = 0;

// Your Code Here

//weekly expenses questions
//using the while loop
var w = 0;
while (w < weeklyExpenseQuestions.length) {
  let answer = parseFloat(window.prompt(weeklyExpenseQuestions[w]));
  weeklyExpenses = weeklyExpenses + answer;
  w++;
}
/* 
for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
  let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
  weeklyExpenses = weeklyExpenses + answer;
}
*/
//monthly expenses questions
for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
  let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]));
  monthlyExpenses = monthlyExpenses + answer;
}

//yearly expenses questions
for (let i = 0; i < annualExpenseQuestions.length; i++) {
  let answer = parseFloat(window.prompt(annualExpenseQuestions[i]));
  annualExpenses = annualExpenses + answer;
}
