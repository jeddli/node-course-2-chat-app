// Jan 1st 1970 00:00:00 am
// from this time.. +, -
// 1000 means Jan 1st 1970 00:00:01 am

const moment = require('moment');

// var date = new Date();
// var months=['Jan','Feb']
// console.log( date.getMonth());

// var date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY hh:mm:ss'));

// 10:35 am
// var date = moment();
// console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

