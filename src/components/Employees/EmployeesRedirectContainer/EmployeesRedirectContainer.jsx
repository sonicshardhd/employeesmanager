import React from 'react'
import { Redirect } from 'react-router-dom'


class EmployeesRedirectContainer extends React.Component {
    
    componentDidMount() {
        this.props.setPage(this.props.currentPage - 1)
    }

    render() {
        return <Redirect to={ `/employees/${this.props.currentPage - 1}` } />
    }
}

export default EmployeesRedirectContainer;
