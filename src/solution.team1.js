// solution by teamA in 2018-10-15

module.exports = {resolve: function(persons = []) {
// code here
  start = undefined;
  end = undefined;
  local = undefined;

  dateIntersection(persons);

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

function filterBlockedDays(persons) {
    const daysBlocked = [];

    const result = persons.forEach((person) => {
      person.daysOf.forEach((date) => {
        daysBlocked[date.getDate()] = -1;
      });

      person.calendar.events.forEach((event) => {
        daysBlocked[event.start.getDate()] = -1;
      });
    });
    return daysBlocked;
}


function filterBlockedHours(persons) {
  let lastDate = new Date(0);
  persons.forEach((person) => {
    if (person.shift.start >= lastDate ) {
      lastDate = person.shift.start;
    }
  });
  return lastDate;
}

function dateIntersection(persons) {
  let freeDays = filterBlockedDays(persons);
  let commonHours = filterBlockedHours(persons);
  let freeDay = 0;

  for (let day of freeDays) {
    if (!freeDays[day]) {
      freeDay = day;
      break;
    }
  };
  console.log(`LLLLL ${commonHours} ${freeDay}`);
}
