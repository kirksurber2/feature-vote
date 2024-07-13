import { useState } from "react";
import './loginPage.css'
import { FaEye } from "react-icons/fa";

import Logo from '../../assets/images/Logo/logo-black.png'


export default function LoginPage() {
    // form data
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [errors, setErrors] = useState([])
    
    
    // Toggles *******************
    const [eye, setEye] = useState(false)
    const [hasAccount, setHasAccount] = useState(false)
    
    function handleCreate(e) {
        e.preventDefault()
        if(password !== confirmPassword || password === '' ){
                setErrors(prev => [...prev, "Please check your passwords (min. 12 characters)" ])
        }
        axios.post('/auth/signup')
        setErrors([])
        console.log("Submit button clicked")
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setBusinessName('')
        setPassword('')
        setConfirmPassword('')
    }
    function handleLogin(e) {
        e.preventDefault()
        axios.post('/auth/login')
    }
    
    return(
        <main>
            <div className="logoArea">
                <img src={Logo}/>
                <h1>Login or Create Your Account</h1>
            </div>
            <div className="formArea">
                <form onSubmit={hasAccount? handleLogin : handleCreate}>
                    {hasAccount? 
                        <>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                tabIndex={1}
                                required={true}
                            ></input>
                            <input
                                type={eye? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                tabIndex={2}
                                required={true}
                            ></input>
                            
                        </> 
                        : 
                        <>
                            <div className="names">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                name="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                                tabIndex={1}
                                required={true}
                            ></input>
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                name="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                                tabIndex={2}
                                required={true}
                                ></input>
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                tabIndex={3}
                                required={true}
                            ></input>
                            <input
                                type="text"
                                placeholder="Business Name"
                                name="businessName"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                tabIndex={4}
                                required={true}
                            ></input>
                            <input
                                type="text"
                                placeholder="Phone"
                                value={phone}
                                name="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                tabIndex={5}
                                required={true}
                            ></input>
                            <input
                                type={eye? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                tabIndex={6}
                                required={true}
                                minLength={12}
                            ></input>
                            <input
                                type={eye? 'text' : 'password'}
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                tabIndex={7}
                                required={true}
                                minLength={12}
                            ></input>
                            <FaEye size={15} color="royalblue" onClick={(e) => setEye(!eye)}/>
                        </>
                    
                    }
                    {errors.map((item) => {
                        return <li style={{color: "rgba(0,0,0, .5)", marginLeft: '10px', fontSize: '16px'}}>{item}</li>
                    })}
                    {hasAccount? 
                        <p  className= 'account' onClick={() => setHasAccount(!hasAccount)}><i><u>Create Account</u></i></p>
                    :
                        <p className= 'account'  onClick={() => setHasAccount(!hasAccount)}><i><u>Login</u></i></p>
                    }
                    <button>Submit</button>
                </form>

            </div>

        </main>
    )
}