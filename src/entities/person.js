const Calendar = require('./calendar');
const Shift = require('./shift');

class Person {
  constructor(name = '') {
    this.name = name;
    this.calendar = new Calendar();
    this.daysOf = [];
    this.shift = new Shift();
  }
}

module.exports = Person;
