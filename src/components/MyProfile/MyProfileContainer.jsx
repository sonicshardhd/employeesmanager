import React from 'react'
import { connect } from 'react-redux'
import MyProfile from './MyProfile'

class MyProfileContainer extends React.Component {
    render() {
        return (
            <MyProfile email={this.props.email}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.loginData.currentEmail || state.registerData.currentEmail,
    }
}

export default connect(mapStateToProps, {} )(MyProfileContainer);