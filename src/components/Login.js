import React, {useState} from 'react';
import {base_url, registerPage} from "../utils/constants";
import {Link} from "react-router-dom";

const Login = () => {
    const [showModal,setShowModal] = useState(false);
    const[passwordShown,setPasswordShown] = useState(false);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const url = `https://virtserver.swaggerhub.com/GregorySheygam/himath-gaming/0.0.1/user/login?userEmail=${email}&password=${password}`;
    const user = {
        'email': email,
        'password': password
    }

    const openModal = () => {
        setShowModal( !showModal);
    }
    const showPassword = () => {
       setPasswordShown(!passwordShown);
        // this.setState( {passwordShown: !this.state.passwordShown});
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
        // if(id === "confirmPassword"){
        //     setConfirmPassword(value);
        // }

    }
    const handleSubmit  = () => {
        // console.log(firstName,lastName,email,password,confirmPassword);
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
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

        return (
            <div>
                <div className=''>
                    <h1 className='text-center mt-5 font-weight-bolder'>Welcome Back</h1>
                    <label className='text-uppercase labelPosition mt-3 font-weight-bold'>Email</label>
                    <div className='d-flex justify-content-center'>
                        <input onChange={(e) => handleInputChange(e)} className='inputLogin'  id='email' value={email} type='text' placeholder='name@email.com'/>
                    </div>
                    <label className=' text-uppercase mt-2 labelPosition font-weight-bold'>Password</label>
                    <div className='position-relative d-flex justify-content-center'>
                        <input onChange={(e) => handleInputChange(e)} className='inputLogin' value={password} id='password' type={passwordShown ? 'text' : 'password'} placeholder='enter password'/>
                        <span className='p-viewer'>
                                <i onClick={showPassword} className="fa fa-eye fa-1x"></i>
                            </span>
                    </div>
                    <div className='mt-2 d-flex justify-content-center containerResetPass'>
                        <button type='button' className='border-0 pointer-event d-inline resetPass pr-1 '>Reset the password</button>
                        or
                        <button type='button' className='resetPass border-0 pointer-event pl-1'>Send me login link</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type='button' className='mt-5 mb-5 inputLogin btn btn-primary' onClick={handleSubmit}>Sign In</button>
                    </div>
                    <div className='d-flex justify-content-around align-items-center w-100'>
                        <hr className='ml-3 mb-4 borderOr'/>
                        <div>or</div>
                        <hr className='mr-3 mb-4 borderOr'/>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <button className='inputLogin m-3 btn border-dark font-weight-bolder'>Continue with Google</button>
                        <button className='inputLogin m-3 btn border-dark font-weight-bolder'>Continue with Facebook</button>
                        <button className='inputLogin m-3 btn border-dark font-weight-bolder'>Continue with Apple</button>
                    </div>
                </div>
                <p className='text-center'>
                        <span>
                            Not have an account ?
                            <Link to={registerPage}>
                                 <button onClick={openModal} className='login-btn' type='button'>Sign up</button>
                            </Link>

                        </span>

                </p>

            </div>

    );
};

export default Login;