/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekend{
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const day = {
day:Weekend.Friday
}
function isWeekend(day:Weekend): boolean { 
  if (day === Weekend.Sunday || day === Weekend.Saturday) {
    return true;
   }
  return false;
}