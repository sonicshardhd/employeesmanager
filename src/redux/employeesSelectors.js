import { createSelector } from 'reselect'

const getEmployees = (state) => {
    return state.employeesData.employees;
}

export const getSortedEmployeesSelector = createSelector(getEmployees, employees => {

    let joinedArray = [], partArray = [];

    for (let i = 0, j = 4; i <= employees.length; i++, j--) {
        if (j == 0 || i == employees.length) {
            joinedArray.push(partArray);
            partArray = [];
            j = 4;
        }
        partArray.push(employees[i])
    }
    
    return joinedArray;
});
