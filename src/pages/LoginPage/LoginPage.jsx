import React from 'react'
import './loginPage.css'
import PageNav from '../../components/Navbar/Navbar'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {
  return (
    <div>
      <PageNav hideSearch={true}/>
      <LoginForm/>
    </div>
  )
}

export default LoginPage
