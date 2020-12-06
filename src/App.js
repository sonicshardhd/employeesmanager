import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import withReactSuspense from './hoc/withReactSuspense/withReactSuspense'
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"


const EmployeesContainer = React.lazy(() => import('./components/Employees/EmployeesContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const MyProfileContainer = React.lazy(() => import('./components/MyProfile/MyProfileContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))
const Register = React.lazy(() => import('./components/Register/Register'))

const App = props => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='content'>
          <Route path='/employees/:currentPage?' render={withReactSuspense(EmployeesContainer)} />
          <Route path='/profile/:employeeId?' render={withReactSuspense(ProfileContainer)} />
          <Route path='/login' render={withReactSuspense(Login)} />
          <Route path='/register' render={withReactSuspense(Register)} />
          <Route path='/myprofile' render={withReactSuspense(MyProfileContainer)} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
