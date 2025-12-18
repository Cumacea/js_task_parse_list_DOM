'use strict';

const list = [...document.querySelectorAll('li')];

function sortList() {
  const unorderedList = document.querySelector('ul');

  list.sort((a, b) => {
    const salaryA = +a.dataset.salary.replace(/\D/g, '');
    const salaryB = +b.dataset.salary.replace(/\D/g, '');

    return salaryB - salaryA;
  });

  list.forEach((el) => unorderedList.append(el));
}

function getEmployees() {
  return list.map((el) => {
    return {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });
}

sortList();
getEmployees();
