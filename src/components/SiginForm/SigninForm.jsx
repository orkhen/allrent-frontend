import React, { useState } from 'react'
import './signinForm.css'

const SigninForm = () => {
    const [isValid, setIsValid] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    // const [name, setName] = useState('');
    // const [mobileFormat, setMobileFormat] = useState('');
    

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [mobile, setMobile] = useState('+994')

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

    const handleMobileChange = (e) => {
        const newMobile = e.target.value.slice(4);
        const prefix = '+994'
        setMobile(prefix+newMobile)
    }
  return (
    <div className='signinform d-flex align-items-center justify-content-center'>
      <div className="signinform-container d-flex flex-column align-items-center justify-content-center">
        <div className="signinform-header text-center">
            <h4>Giriş</h4>
        </div>

        <div className="signinform-inputs d-flex flex-column mt-3">
            <div className="name-input">
                <div className="name-input-header d-flex justify-content-between">
                    <label htmlFor="name">Ad və Soyad *</label>

                    {/* {emailError && <p className="error-message m-0">{emailError}</p>} */}
                </div>
                <input className='mt-2' type="text" name='name' placeholder='Ad və soyadınızı qeyd edin'/>
            </div>

            <div className="email-input">
                <div className="email-input-header d-flex justify-content-between">
                    <label htmlFor="email">Elektron poçt *</label>
                </div>
                <input className={`mt-2 ${emailError && 'input-error'}`} type="text" name='email' placeholder='E-mailiniz qeyd edin' value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} />
                
                {emailError && <p className="error-message mt-2 mb-0">{emailError}</p>}
            </div>

            <div className="number-input">
                <div className="number-input-header d-flex justify-content-between">
                    <label htmlFor="number">Mobil nömrə *</label>

                    {/* {emailError && <p className="error-message m-0">{emailError}</p>} */}
                </div>
                <input className='mt-2' type="text" name='number' value={mobile} onChange={handleMobileChange} />
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

        <div className="signinform-buttons d-flex flex-column mt-4 noselect">
            <div className={`signin-button signin ${isValid && 'active-button'}`}>
                Hesab yarat
            </div>

            <div className="signin-button google">
                Google ilə daxil ol
            </div>
        </div>

        <div className="signinform-others d-flex flex-column gap-3">
            <p>
                Qeydiyyatdan keçdiyiniz halda <a href='https://allrent.io/rules' target='_blank'>istifadəçi qaydaları</a> və <a href='https://allrent.io/privacy' target='_blank'>məxfilik siyasəti</a> ilə razılaşmış olacaqsınız
            </p>
        </div>
      </div>
    </div>
  )
}

export default SigninForm
