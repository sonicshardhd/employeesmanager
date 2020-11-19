import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setEmployeeProfile } from '../../redux/profileReducer'
import Profile from './Profile'


class ProfileContainer extends React.Component {

        undefinedProfile = {
        'employee_age': "",
        'employee_name': "Sorry, no such Employee found.",
        'employee_salary': "",
        'id': "",
        'profile_image': "",
    }
    
    componentDidMount() {
        let employeeProfileId = this.props.match.params.employeeId;
        let [employeeProfile] = [...this.props.employees.filter( employee => employee.id == employeeProfileId)]
        employeeProfile ? this.props.setEmployeeProfile(employeeProfile) : this.props.setEmployeeProfile(this.undefinedProfile)
    }

    render() {
        return (
            <Profile employeeProfile={this.props.employeeProfile}/>
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
    connect(mapStateToProps, { setEmployeeProfile }),
    withRouter
)(ProfileContainer);