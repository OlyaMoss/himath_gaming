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
import {base_url} from "./utils/constants";

class App extends Component{
    constructor() {
        super();
        this.state = {
        show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true});
    }
    hideModal = () => {
        this.setState({ show: false});
    }


    render() {

        return (
            <div className='container-fluid'>
                {/*<Header/>*/}
                <Main/>
                <Navigation open={this.showModal}/>
                <Modal show={this.state.show} handleClose={this.hideModal}/>
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
