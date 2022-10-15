const employees = [
  {
    employee_id: "1",
    employee_name: "neno",
  },
  {
    employee_id: "2",
    employee_name: "kit",
  },
];

const result = employees.map((employee) => {
  console.log(employee);
  return {
    id_employee: employee.employee_id,
    name_employee: employee.employee_name,
  };
});
console.log(result);
/* {
  id_employee: '1',
  name_employee: 'neno'
} */

const result2 = employees.map((employee) => {
  console.log(employee);
  return employee.employee_id;
});
console.log(result2);

const projects = [
  {
    project_id: "A01",
    project_name: "project1",
    employeeList: [
      {
        employee_id: "1",
        employee_name: "neno",
      },
      {
        employee_id: "2",
        employee_name: "kit",
      },
    ],
  },
  {
    project_id: "A02",
    project_name: "project2",
    employeeList: [
      {
        employee_id: "1",
        employee_name: "neno",
      },
    ],
  },
];

const result3 = projects.filter((project) => {
  return (
    project.employeeList.filter((employee) => {
      return employee.employee_name === "kit";
    }).length > 0
  );
});
console.log("result3", result3);

const result4 = projects.filter((project) => {
  return project.employeeList.some((employee) => {
    return employee.employee_name === "kit";
  });
});
console.log("result4", result4);

/* console.log(projects[0].employeeList.filter((employee) => {
  return employee.employee_name === 'neno'
}).length > 0) */
/* let filteredProject = projects.filter((project) => {
  return project.employeeList.filter((employee) => employee.employee_name === 'kit').length > 0
})
console.log(filteredProject) */

// filter project only employee neno

// project1 & project2

/* const result5 = projects.reduce((sum ,project) => {
  return  sum + project.project_name
})
console.log('result5', result5) */
