import React from 'react'
import { connect } from 'react-redux'
import Employees from './Employees'
import Preloader from '../../common/Preloader/Preloader'
import { getEmployees, setPage, deleteEmployee, addEmployee } from '../../redux/employeesReducer'
import { getSortedEmployeesSelector } from '../../redux/employeesSelectors'

class EmployeesContainer extends React.Component {

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return (
            <>
                { this.props.isFetching
                    ? <Preloader />
                    : <Employees currentPage={this.props.currentPage}
                        pagesList={this.props.pagesList}
                        employeesParts={this.props.employeesParts}
                        setPage={this.props.setPage}
                        deleteEmployee={this.props.deleteEmployee}
                        addEmployee={this.props.addEmployee} />}
            </>
        )
    }
}

const mapStateToProps = state => (
    {
        isFetching: state.employeesData.isFetching,
        currentPage: state.employeesData.currentPage,
        employeesParts: getSortedEmployeesSelector(state)
    }
)


export default connect(mapStateToProps, { getEmployees, setPage, deleteEmployee, addEmployee })(EmployeesContainer);