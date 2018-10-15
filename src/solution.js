module.exports = {resolve: function(persons = []) {
// code here
  start = undefined;
  end = undefined;
  local = undefined;

 for (let i = 0; i< persons.length; i++) {
  person = persons[i];
 }

 console.log(`Meeting: Local ${local} - Start ${start} - End ${end}`);
}};

function hoursDiffAbs(dateA, dateB) {
  return Math.abs(dateA - dateB) / 36e5;
}

function minutesDiffAbs(dateA, dateB) {
  return Math.abs(dateA - dateB) / 6e4;
}

function getRandomDouble(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function intervalColision(start1 = new Date(), end1 = new Date(), start2 = new Date(), end2 = new Date()) {
  return (start1 < start2 && start2 < end1)
    || (start1 < end2 && end2 < end1)
    || (start1 < start2 && end2 < end1)
    || (start1 > start2 && end2 > end1)
    ;
}

function inInterval(start1 = new Date(), end1 = new Date(), date = new Date()) {
  return (start1 < date && date < end1);
}
