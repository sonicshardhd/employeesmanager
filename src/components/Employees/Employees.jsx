import React from 'react'
import classes from './Employees.module.css'
import EmployeesRedirectContainer from './EmployeesRedirectContainer/EmployeesRedirectContainer'
import PagesSection from './PagesSection/PagesSection'
import EmployeeCard from './EmployeeCard/EmployeeCard'


const Employees = props => {

    return (
        <div className={ classes.contentContainer }>
            <PagesSection pagesList={ new Array(props.employeesParts.length) }
                          setPage={ props.setPage }
                          addEmployee={ props.addEmployee }/>
            <div className={ classes.employeesSection }>
                {   
                    props.employeesParts[props.currentPage - 1]
                    ? props.employeesParts[props.currentPage - 1].map(employee => (
                        <EmployeeCard name={ employee.employee_name }
                                      id={ employee.id }
                                      deleteEmployee={ props.deleteEmployee }/>
                    ))
                    : <EmployeesRedirectContainer currentPage={ props.currentPage } setPage={ props.setPage } />
                }
            </div>
        </div>
    )
}

export default Employees;
