import React from 'react';
import styles from './css-modules/register.module.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import {loginPage, registerPage} from "../utils/constants";

const Register = () => {
    // const [firstName, setFirstName] = useState(null);
    // const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [showModal,setShowModal] = useState(false);
    const[passwordShown,setPasswordShown] = useState(false);

    const url = 'https://virtserver.swaggerhub.com/GregorySheygam/himath-gaming/0.0.1/user/registration';

    const user = {
        'email': email,
        'password': password
    }

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        // if(id === "firstName"){
        //     setFirstName(value);
        // }
        // if(id === "lastName"){
        //     setLastName(value);
        // }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }
    const handleSubmit  = () => {
        // console.log(firstName,lastName,email,password,confirmPassword);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (response.ok) {
                    return console.log(user);
                } else {
                    throw new Error(response.status);
                }
            })
            .catch(e => console.log(e.message));
        // setFirstName('');
        // setLastName('');
        setEmail('');
        setPassword('');
    }

    const openModal = () => {
        setShowModal( !showModal);
    }
    const showPassword = () => {
        setPasswordShown(!passwordShown);
        // this.setState( {passwordShown: !this.state.passwordShown});
    }
    return (
        <div>
            <div>
                <div className='d-flex flex-column align-items-center' >
                    <h1 className='text-center mt-5 font-weight-bolder'>Registration</h1>
                    {/*<div className="username">*/}
                    {/*    <label className='mt-2 text-uppercase labelLogIn font-weight-bold' htmlFor="firstName">First Name </label>*/}
                    {/*    <input className={styles.form_input} type="text" value={firstName}*/}
                    {/*           onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>*/}
                    {/*</div>*/}
                    {/*<div className="lastname">*/}
                    {/*    <label className="text-uppercase mt-2 labelLogIn font-weight-bold" htmlFor="lastName">Last Name </label>*/}
                    {/*    <input type="text" id="lastName" value={lastName} className={styles.form_input}*/}
                    {/*           onChange={(e) => handleInputChange(e)} placeholder="LastName"/>*/}
                    {/*</div>*/}
                    <div className="email">
                        <label className="text-uppercase mt-4 labelLogIn font-weight-bold" htmlFor="email">Email </label>
                        <input type='email' id="email" className={styles.form_input} value={email}
                               onChange={(e) => handleInputChange(e)} placeholder="Email"/>

                    </div>
                    <div className="password position-relative">
                        <label className="text-uppercase mt-4 labelLogIn font-weight-bold" htmlFor="password">Password </label>
                        <input className={styles.form_input} type={passwordShown ? 'text' : 'password'} id="password" value={password}
                               onChange={(e) => handleInputChange(e)} placeholder="Password"
                        />
                        <i onClick={showPassword} className="fa fa-eye fa-1x p-viewerReg"></i>

                    </div>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <button onClick={() => handleSubmit()} type="submit" className="btn m-4 inputLogin btn btn-primary ">Register</button>
                </div>
                <div className='d-flex justify-content-around align-items-center w-100'>
                    <hr className='ml-2 mb-3 borderOr'/>
                    <div>or</div>
                    <hr className='mr-2 mb-3 borderOr'/>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <button className='inputLogin m-3 btn border-dark font-weight-bolder'>Continue with Google</button>
                    <button className='inputLogin m-3 btn border-dark font-weight-bolder'>Continue with Facebook</button>
                    <button className='inputLogin m-3 btn border-dark font-weight-bolder'>Continue with Apple</button>
                </div>
                <p className='text-center'>
                        <span>
                            Already have an account ?
                            <Link to={loginPage}>
                                 <button onClick={openModal} className='login-btn' type='button'>Login</button>
                            </Link>

                        </span>

                </p>
            </div>
        </div>
    );
};

export default Register;