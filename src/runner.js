const {PerformanceObserver, performance} = require('perf_hooks');
const Person = require('./entities/person');
const Solution = require('./solution');

const observer = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration + 'ms');
  performance.clearMarks();
});
observer.observe({entryTypes: ['measure']});

var persons = initialize();

performance.mark('start');

Solution.resolve(persons);

performance.mark('end');
performance.measure('total time', 'start', 'end');

function initialize() {
  const RaeSloane = new Person('Rae Sloane');
  const GalliusRax = new Person('Gallius Rax');
  const DarthVader = new Person('Darth Vader');
  const GrandMoffTarkin = new Person('Grand Moff Tarkin');
  const GrandVizierMasAmedda = new Person('Grand Vizier Mas Amedda');
  const GrandAdmiralThrawn = new Person('Grand Admiral Thrawn');

  RaeSloane.shift.setStart(new Date(0, 0, 0, 8, 0, 0));
  GalliusRax.shift.setStart(new Date(0, 0, 0, 9, 0, 0));
  DarthVader.shift.setStart(new Date(0, 0, 0, 11, 0, 0));
  GrandMoffTarkin.shift.setStart(new Date(0, 0, 0, 7, 0, 0));
  GrandVizierMasAmedda.shift.setStart(new Date(0, 0, 0, 8, 0, 0));
  GrandAdmiralThrawn.shift.setStart(new Date(0, 0, 0, 11, 0, 0));

  RaeSloane.shift.setEnd(new Date(0, 0, 0, 17, 0, 0));
  GalliusRax.shift.setEnd(new Date(0, 0, 0, 18, 0, 0));
  DarthVader.shift.setEnd(new Date(0, 0, 0, 21, 0, 0));
  GrandMoffTarkin.shift.setEnd(new Date(0, 0, 0, 16, 0, 0));
  GrandVizierMasAmedda.shift.setEnd(new Date(0, 0, 0, 17, 0, 0));
  GrandAdmiralThrawn.shift.setEnd(new Date(0, 0, 0, 21, 0, 0));

  RaeSloane.shift.addInterval(new Date(0, 0, 0, 12, 0, 0), new Date(0, 0, 0, 13, 0, 0));
  GalliusRax.shift.addInterval(new Date(0, 0, 0, 12, 30, 0), new Date(0, 0, 0, 13, 30, 0));
  DarthVader.shift.addInterval(new Date(0, 0, 0, 12, 0, 0), new Date(0, 0, 0, 13, 0, 0));
  GrandMoffTarkin.shift.addInterval(new Date(0, 0, 0, 12, 30, 0), new Date(0, 0, 0, 13, 30, 0));
  GrandVizierMasAmedda.shift.addInterval(new Date(0, 0, 0, 12, 0, 0), new Date(0, 0, 0, 13, 0, 0));
  GrandAdmiralThrawn.shift.addInterval(new Date(0, 0, 0, 12, 0, 0), new Date(0, 0, 0, 13, 0, 0));

  RaeSloane.daysOf.push(new Date(2018, 10, 7));
  RaeSloane.daysOf.push(new Date(2018, 10, 14));
  RaeSloane.daysOf.push(new Date(2018, 10, 21));
  RaeSloane.daysOf.push(new Date(2018, 10, 28));

  GalliusRax.daysOf.push(new Date(2018, 10, 6));
  GalliusRax.daysOf.push(new Date(2018, 10, 13));
  GalliusRax.daysOf.push(new Date(2018, 10, 20));
  GalliusRax.daysOf.push(new Date(2018, 10, 27));

  DarthVader.daysOf.push(new Date(2018, 10, 6));
  DarthVader.daysOf.push(new Date(2018, 10, 7));
  DarthVader.daysOf.push(new Date(2018, 10, 12));
  DarthVader.daysOf.push(new Date(2018, 10, 13));
  DarthVader.daysOf.push(new Date(2018, 10, 14));
  DarthVader.daysOf.push(new Date(2018, 10, 20));
  DarthVader.daysOf.push(new Date(2018, 10, 21));
  DarthVader.daysOf.push(new Date(2018, 10, 27));
  DarthVader.daysOf.push(new Date(2018, 10, 28));

  GrandMoffTarkin.daysOf.push(new Date(2018, 10, 6));
  GrandMoffTarkin.daysOf.push(new Date(2018, 10, 7));
  GrandMoffTarkin.daysOf.push(new Date(2018, 10, 12));
  GrandMoffTarkin.daysOf.push(new Date(2018, 10, 13));
  GrandMoffTarkin.daysOf.push(new Date(2018, 10, 14));
  GrandMoffTarkin.daysOf.push(new Date(2018, 10, 20));
  GrandMoffTarkin.daysOf.push(new Date(2018, 10, 21));
  GrandMoffTarkin.daysOf.push(new Date(2018, 10, 27));
  GrandMoffTarkin.daysOf.push(new Date(2018, 10, 28));

  GrandVizierMasAmedda.daysOf.push(new Date(2018, 10, 3));
  GrandVizierMasAmedda.daysOf.push(new Date(2018, 10, 6));
  GrandVizierMasAmedda.daysOf.push(new Date(2018, 10, 8));
  GrandVizierMasAmedda.daysOf.push(new Date(2018, 10, 12));
  GrandVizierMasAmedda.daysOf.push(new Date(2018, 10, 15));
  GrandVizierMasAmedda.daysOf.push(new Date(2018, 10, 17));
  GrandVizierMasAmedda.daysOf.push(new Date(2018, 10, 23));
  GrandVizierMasAmedda.daysOf.push(new Date(2018, 10, 28));
  GrandVizierMasAmedda.daysOf.push(new Date(2018, 10, 29));

  GrandAdmiralThrawn.daysOf.push(new Date(2018, 10, 3));
  GrandAdmiralThrawn.daysOf.push(new Date(2018, 10, 6));
  GrandAdmiralThrawn.daysOf.push(new Date(2018, 10, 8));
  GrandAdmiralThrawn.daysOf.push(new Date(2018, 10, 12));
  GrandAdmiralThrawn.daysOf.push(new Date(2018, 10, 15));
  GrandAdmiralThrawn.daysOf.push(new Date(2018, 10, 17));
  GrandAdmiralThrawn.daysOf.push(new Date(2018, 10, 23));
  GrandAdmiralThrawn.daysOf.push(new Date(2018, 10, 28));
  GrandAdmiralThrawn.daysOf.push(new Date(2018, 10, 29));

  return [RaeSloane, GalliusRax, DarthVader, GrandMoffTarkin, GrandVizierMasAmedda, GrandAdmiralThrawn];
}
