import './App.css';
import './components/Modal/modal.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Modal from "./components/Modal/Modal";
import Login from "./components/Login";
import {Component} from "react";

class App extends Component{
    constructor() {
        super();
        this.state = {
            show: false,
            passwordShown: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.showPassword = this.showPassword.bind(this);
    }

    showModal = () => {
        this.setState({ show: true});
    }
    hideModal = () => {
        this.setState({ show: false});
    }
    showPassword = () => {
        this.setState( {passwordShown: !this.state.passwordShown});
    }

    render() {
        return (
            <div>
                {/*<Header/>*/}
                {/*<Main/>*/}
                <Navigation open={this.showModal}/>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <div className='d-flex flex-column align-items-center'>
                   <h1 className='text-center mt-5 font-weight-bolder'>Welcome Back</h1>
                        <label className='text-uppercase labelLogIn font-weight-bold'>Email</label>
                        <input className='inputLogin' type='text' placeholder='name@email.com'/>
                        <label className=' ml-5 mt-3 text-uppercase labelLogIn font-weight-bold'>Password</label>
                        <div className='position-relative'>
                            <input className='inputLogin' type={this.state.passwordShown ? 'text' : 'password'} placeholder='enter password'/>
                            <span className='p-viewer'>
                                <i onClick={this.showPassword} className="fa fa-eye fa-1x"></i>
                            </span>
                        </div>
                        <div className='mt-2 d-flex justify-content-center containerResetPass'>
                            <button type='button' className='border-0 pointer-event d-inline resetPass pr-1 '>Reset the password</button>
                            or
                            <button type='button' className='resetPass border-0 pointer-event pl-1'>Send me login link</button>
                        </div>
                        <button type='button' className='m-5 inputLogin btn btn-primary'>Sign In</button>
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
                </Modal>
                <Home/>
                <Products/>
                <About/>
                <Team/>
                <Contact/>
            </div>
        );
    }


}

export default App;
