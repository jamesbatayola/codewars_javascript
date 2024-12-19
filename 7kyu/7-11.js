// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.
// Examples:

// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18

// At this level, you don't need validate months and days to calculate the difference.

function howManyYears(date1, date2) {
    const [f, s] = [Number(date1.split('/')[0]), Number(date2.split('/')[0])];
    return Math.max(f, s) - Math.min(f, s);
}

console.log(howManyYears('1997/10/10', '2015/10/10'));
console.log(howManyYears('2015/10/10', '1997/10/10'));