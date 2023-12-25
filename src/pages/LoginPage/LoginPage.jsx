import React from 'react'
import PageNav from '../../components/Navbar/Navbar'
import LoginForm from '../../components/LoginForm/LoginForm'

import './loginPage.css'

const LoginPage = () => {
  return (
    <div>
      <PageNav hideSearch={true}/>
      <LoginForm/>
    </div>
  )
}

export default LoginPage
