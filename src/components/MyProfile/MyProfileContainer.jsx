import React from 'react'
import { connect } from 'react-redux'
import MyProfile from './MyProfile'

class MyProfileContainer extends React.Component {
    
    render() {
        return (
            <MyProfile currentUser={this.props.currentUser} 
                       isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = state =>({
        currentUser: state.loginData.currentUser,
        isAuth: state.loginData.isAuth
    }
)

export default connect(mapStateToProps, {} )(MyProfileContainer);
