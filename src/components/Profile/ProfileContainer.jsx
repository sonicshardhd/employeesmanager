import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setEmployeeProfile } from '../../redux/profileReducer'
import { getEmployees } from '../../redux/employeesReducer'
import Profile from './Profile'
import classes from './Profile.module.css'


class ProfileContainer extends React.Component {

    undefinedProfile = {
        'employee_age': "",
        'employee_name': "Sorry, no such Employee found.",
        'employee_salary': "",
        'id': "",
        'profile_image': "",
    }

    componentDidMount() {
        this.props.getEmployees();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.employees != prevProps.employees) {
        let employeeProfileId = this.props.match.params.employeeId;
        let [employeeProfile] = [...this.props.employees.filter(employee => employee.id == employeeProfileId)]
        employeeProfile ? this.props.setEmployeeProfile(employeeProfile) : this.props.setEmployeeProfile(this.undefinedProfile)
    }}

    render() {
        return (
            <div className={classes.profileWrapper}>
                <div></div>
                    <Profile employeeProfile={this.props.employeeProfile} />
                <div></div>
            </div>
        )
    }
}

let mapStateToProps = state => (
    {
        employeeProfile: state.profileData.employeeProfile,
        employees: state.employeesData.employees
    }
)

export default compose(
    connect(mapStateToProps, { setEmployeeProfile, getEmployees }),
    withRouter
)(ProfileContainer);