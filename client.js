$(document).ready(readyNow);

const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

function bonus(employees) {
  for (let people of employees) {
    console.log(employeeBonus(people));
  }
}

function employeeBonus(person) {
  let bonusPercentage = bonusCalculator(person);
  let name = person.name;
  let totalBonus = Math.round(person.annualSalary * bonusPercentage);
  let totalCompensation = Number(person.annualSalary) + totalBonus;
  let employeeReview = {
    name: name,
    bonusPercentage: bonusPercentage * 100 + "%",
    totalCompensation: totalCompensation.toLocaleString(),
    totalBonus: totalBonus.toLocaleString()
  };
  $("#bonus-list").append(
    `<li>Employee Name: ${name}, bonusPercentage: ${bonusPercentage * 100 +
      "%"}, totalCompensation: ${totalCompensation.toLocaleString()}, totalBonus: ${totalBonus.toLocaleString()}</li>`
  );
  return employeeReview;
}

function bonusCalculator(employee) {
  let bonusPercent = 0;
  if (employee.reviewRating == 3) {
    bonusPercent = 0.04;
  } else if (employee.reviewRating == 4) {
    bonusPercent = 0.06;
  } else if (employee.reviewRating == 5) {
    bonusPercent = 0.1;
  } else {
    bonusPercent = 0;
  }
  if (employee.employeeNumber.length == 4) {
    bonusPercent += 0.05;
  }
  if (employee.annualSalary > 65000 && bonusPercent > 0) {
    bonusPercent -= 0.01;
  }
  if (bonusPercent > 0.13) {
    bonusPercent = 0.13;
  }
  return bonusPercent;
}
function displayBonus() {}
function readyNow() {
  $("#bonus-button").on("click", buttonClick);
}

function buttonClick() {
  bonus(employees);
}
// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
