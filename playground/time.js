// Jan 1st 1970 00:00:00 am
const moment = require('moment')

// var date = new Date()

// console.log(date.getMonth())

var date = moment()
// date.add(1, 'years').subtract(2, 'months')
console.log(date.format('MMM Do, YYYY'))
console.log(date.format('h:mm a'))