function Shift(start = '', end = '') {
  this.start = start;
  this.end = end;
}

/**
 * @param {Date} start
 */
Shift.prototype.setStart = function(start) {
  this.start = start;
};

/**
 * @param {Date} end
 */
Shift.prototype.setEnd = function(end) {
  this.end = end;
};

Shift.prototype.addInterval = function(start, end) {
  if (!this.interval) this.interval = [];
  this.interval.push({start: start, end: end});
};

module.exports = Shift;
