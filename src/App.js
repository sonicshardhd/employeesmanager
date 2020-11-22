import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ProfileContainer from './components/Profile/ProfileContainer'
import MyProfileContainer from './components/MyProfile/MyProfileContainer'
import withReactSuspense from './hoc/withReactSuspense/withReactSuspense'
import { Login } from './components/Login';
import Register from './components/Register/Register'
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"


const EmployeesContainer = React.lazy( () => import('./components/Employees/EmployeesContainer') )

const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      {/* <Navigation/> */}
      <div className='content'>
        <Route path='/employees/:currentPage?' render={ withReactSuspense(EmployeesContainer) } />
        <Route path='/profile/:employeeId?' render={ () => <ProfileContainer /> } />
        <Route path='/login' render={ () => <Login /> } />
        <Route path='/register' render={ () => <Register /> } />
        <Route path='/myprofile' render={ () => <MyProfileContainer /> } />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
