let company1 = {
  development: {
    frontend: [
      { employeeName: "Vicky", salary: 1000 },
      { employeeName: "Nastia", salary: 1000 },
    ],
    fullstack: [{ employeeName: "Stas", salary: 5000 }],
  },
  sales: [
    { employeeName: "Asia", salary: 3500 },
    { employeeName: "Monia", salary: 3500 },
    { employeeName: "Pawel", salary: 5000 },
  ],
  hr: [
    { employeeName: "Dominika", salary: 4000 },
    { employeeName: "Claudia", salary: 3000 },
  ],
  finance: [{ employeeName: "Rafal", salary: 3000 }],
};

let company2 = [
  { employeeName: "Asia", salary: 3500 },
  { employeeName: "Monia", salary: 3500 },
  { employeeName: "Pawel", salary: 5000 },
];

const salary1 = totalSalary(company1);
console.log(salary1);

const salary2 = totalSalary(company2);
console.log(salary2);

function totalSalary(structure) {
  if (Array.isArray(structure)) {
    return structure.reduce((acc, curr) => curr.salary + acc, 0);
  }

  return Object.values(structure).reduce(
    (acc, curr) => acc + totalSalary(curr),
    0
  );
}
