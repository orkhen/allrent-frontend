import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './loginForm.css'

const LoginForm = () => {
    const [isValid, setIsValid] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validatePassword = (e) => {
        setPassword(e.target.value)

        if (validateEmail(email) && e.target.value !== '') {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }

    const validateEmail = (inputEmail) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailPattern.test(inputEmail)) {
        setEmailError('');
        password && setIsValid(true)
        return true;
        } else {
        setEmailError('Daxil etdiyiniz E-mail yalnışdır , zəhmət olmasa yenidən yoxlayın');
        return false;
        }
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    };

    const handleEmailBlur = () => {
        validateEmail(email);
      };

    const handleLogin = () => {
    if (email === 'user@example.com' && password === 'user1234') {
        setIsValid(true);
        localStorage.setItem('isLogged', 'true');
        // navigate('/')
        window.location.href = '/'
    } else {
        setIsValid(false);
        setEmailError('Email or password is incorrect');
    }
    };
    
  return (
    <div className='loginform d-flex align-items-center justify-content-center'>
      <div className="loginform-container d-flex flex-column align-items-center justify-content-center">
        <div className="loginform-header text-center">
            <h4>Giriş</h4>
        </div>

        <div className="loginform-inputs d-flex flex-column mt-3">
            <div className="email-input">
                <div className="email-input-header d-flex justify-content-between">
                    <label htmlFor="email">Elektron poçt *</label>
                </div>
                <input className={`mt-2 ${emailError && 'input-error'}`} type="text" name='email' placeholder='E-mailiniz qeyd edin' value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} />

                {emailError && <p className="error-message mt-2 mb-0">{emailError}</p>}
            </div>
            
            <div className="password-input">
                <label htmlFor="password">Şifrə *</label>
                <input className='mt-2' type={showPassword ? 'text' : 'password'} name='password' placeholder='Şifrənizi daxil edin' onChange={validatePassword}/>

                { !showPassword &&
                <div className="showPassword">
                    <img src="https://allrent.io/homepage/images/eye.png" onClick={() => setShowPassword(true)}></img>
                </div>
                }

                { showPassword &&
                <div className="hidePassword">
                    <img src="https://allrent.io/homepage/images/eye-off.png" onClick={() => setShowPassword(false)}></img>
                </div>
                }
            </div>

        </div>

        <div className="loginform-buttons d-flex flex-column mt-4 noselect">
            <div className={`login-button login red-button-subtle-animation ${isValid && 'active-button'}`} onClick={handleLogin}>
                Daxil ol
            </div>

            <div className="login-button google d-flex align-items-center">
                <img src="https://img.icons8.com/?size=512&id=17949&format=png" width={30} height={30} alt="Google" />
                <p className='m-0'>Google ilə daxil ol</p>
            </div>
        </div>

        <div className="loginform-others d-flex flex-column gap-3">
            <div className="forgot-password text-center">
                <a href=''>Şifrəmi unutdum</a>
            </div>

            <div className="create-account">
                <p>Hesabın yoxdur? <a href='/register'>Qeydiyyatdan keç</a></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
