const response = [
  ['John', 'q1', 7, 'john@mail.com'],
  ['Mary', 'q1', 10, 'Mary@mail.com'],
  ['Betty', 'q1', 8, 'Betty@mail.com'],
  ['John', 'q2', 7, 'john@mail.com'],
  ['Mary', 'q2', 8, 'Mary@mail.com'],
  ['Charlie', 'q2', 7, 'Charlie@mail.com'],
];

employees = response.map((tuple) => {
  return {name: tuple[0], dept: tuple[1], sales: tuple[2], mail: tuple[3]};
});
console.log(JSON.stringify(employees));

const mailList = employees.map((e) => e.mail)
  .reduce((cur, next) => cur.indexOf(next) === -1 ? [...cur, next] : cur, []);

console.log(JSON.stringify(mailList));

