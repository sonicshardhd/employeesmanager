import { employeesAPI } from '../api/api'

const SET_EMPLOYEES = 'SET_EMPLOYEES';
const SET_EMPLOYEES_AMOUNT = 'SET_EMPLOYEES_AMOUNT';
const SET_PAGE = 'SET_PAGE';
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    employees: [],
    employeesAmount: 0,
    pageSize: 4,
    currentPage: 1,
    isFetching: true
}

const employeesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_EMPLOYEES:
            return {
                ...state,
                employees: action.employees,
            }
        case SET_EMPLOYEES_AMOUNT:
            return {
                ...state,
                employeesAmount: action.amount
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.pageNum
            }
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter( employee => employee.id != action.employeeId )
            }
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, {
                    'employee_name': action.employeeData.name,
                    'employee_age': action.employeeData.age,
                    'employee_salary': action.employeeData.salary,
                    'id': state.employees.length ? (+state.employees[state.employees.length - 1].id + 1).toString() : '1',
                    'profile_image': ''
                }]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
    }
    return state;
}

export const setEmployees = employees => ( { type: SET_EMPLOYEES, employees } );
export const setEmployeesAmount = amount => ( { type: SET_EMPLOYEES_AMOUNT, amount } );
export const setPage = pageNum => ( { type: SET_PAGE, pageNum } );
export const deleteEmployee = employeeId => ( { type: DELETE_EMPLOYEE, employeeId } );
export const addEmployee = employeeData => ( { type: ADD_EMPLOYEE , employeeData } );
export const toggleIsFetching = isFetching => ( {type: TOGGLE_IS_FETCHING, isFetching} );


export const getEmployees = () => {
    return dispatch => {
        dispatch(toggleIsFetching(true));
        employeesAPI.getEmployees().then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setEmployees(response.data));
            dispatch(setEmployeesAmount(response.data.length));
        })
    }
}

export default employeesReducer;