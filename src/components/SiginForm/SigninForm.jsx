import React, { useState } from 'react'
import './signinForm.css'

const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    

    const handleError = (type, bool) => {
        if (bool) {
        switch (type) {
            case 'name':
                return 'Daxil etdiyiniz Ad və Soyad yanlışdır'
            case 'email':
                return "Daxil etdiyiniz E-mail yanlışdır"
            case 'phone':
                return "Daxil etdiyiniz Mobil nömrə yanlışdır"
            default:
                break;
        }}
    }

    const validateInput = (val, type) => {
        let format
        let error

        switch (type) {
            case 'name':
                format = /^[A-Za-z]+\s[A-Za-z]+$/
                error = 'Daxil etdiyiniz Ad və Soyad yanlışdır'
                break;
            case 'email':
                format = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                error = "Daxil etdiyiniz E-mail yanlışdır"
                break;
            case 'phone':
                format = /^\+994\d{6}$/
                error = "Daxil etdiyiniz Mobil nömrə yanlışdır"
                break;
            default:
                break;
        }

        if (!format.test(val)) {
            return error
        }

        return true
    }

    const handleInput = (e, func) => {
        const newVal = e.target.value
        func(newVal)
    }
    
  return (
    <div className='signinform d-flex align-items-center justify-content-center'>
      <div className="signinform-container d-flex flex-column align-items-center justify-content-center">
        <div className="signinform-header text-center">
            <h4>Qeydiyyat</h4>
        </div>

        <div className="signinform-inputs d-flex flex-column mt-3">
            <div className="name-input">
                <div className="name-input-header d-flex justify-content-between">
                    <label htmlFor="name">Ad və Soyad *</label>

                </div>
                <input className='mt-2' type="text" name='name' placeholder='Ad və soyadınızı qeyd edin' value={name} onChange={(e) => {handleInput(e, setName)}} onBlur={handleError()}/>
            
                {<p className="error-message mt-2 mb-0">{validateInput(name, 'name')}</p>}
            </div>

            <div className="email-input">
                <div className="email-input-header d-flex justify-content-between">
                    <label htmlFor="email">Elektron poçt *</label>
                </div>
                <input className={`mt-2 ${'input-error'}`} type="text" name='email' placeholder='E-mailiniz qeyd edin' value={email} onChange={(e) => {handleInput(e, setEmail)}} />
                
                {<p className="error-message mt-2 mb-0">{validateInput(email, 'email')}</p>}
            </div>

            <div className="number-input">
                <div className="number-input-header d-flex justify-content-between">
                    <label htmlFor="number">Mobil nömrə *</label>

                    {/* {emailError && <p className="error-message m-0">{emailError}</p>} */}
                </div>
                <input className='mt-2' type="text" name='number' value={() => {}} onChange={() => {}} />
            </div>
            
            <div className="password-input">
                <label htmlFor="password">Şifrə *</label>
                <input className='mt-2' type={showPassword ? 'text' : 'password'} name='password' placeholder='Şifrənizi daxil edin' onChange={() => {}}/>

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
            <div className={`signin-button signin red-button-subtle-animation ${'active-button'}`}>
                Hesab yarat
            </div>

            <div className="signin-button google">
                <img src="https://img.icons8.com/?size=512&id=17949&format=png" width={30} height={30} alt="Google" />
                <p className='m-0'>Google ilə daxil ol</p>
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
