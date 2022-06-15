import React from "react";
import './modal.css';
import Login from "../Login";
import Register from "../Register";
import {Link} from "react-router-dom";
import {Switch,Route} from "react-router-dom";
import {loginPage, registerPage} from "../../utils/constants";


const Modal = ({show, handleClose}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return(
        <div className={showHideClassName}>
            <section className="modal-main position-relative">
                <Switch>
                    <Route path={loginPage} component={Login}/>
                    <Route path={registerPage} component={Register}/>
                </Switch>

                <button className='buttonClose' type="button" onClick={handleClose}>
                    x
                </button>
            </section>
        </div>
    )
}
export default Modal;