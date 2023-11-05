import React from 'react'
import './signinPage.css'
import PageNav from '../../components/Navbar/Navbar'
import SigninForm from '../../components/SiginForm/SigninForm'

const SigninPage = () => {
  return (
    <div>
        <PageNav hideSearch={true}/>
        <SigninForm />
    </div>
  )
}

export default SigninPage
