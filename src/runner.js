const {PerformanceObserver, performance} = require('perf_hooks');

const observer = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration + 'ms');
  performance.clearMarks();
});
observer.observe({entryTypes: ['measure']});

performance.mark('start');

let a;
for (let i = 0; i < 1000000; i++) {
  a = {};
}

console.log(a);

performance.mark('end');
performance.measure('total time', 'start', 'end');
