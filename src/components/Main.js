import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import {aboutUsPage, contactPage, homePage, loginPage, productsPage, registerPage, teamPage} from "../utils/constants";
import Home from "./Home/Home";
import Products from "./Products";
import About from "./About/About";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal/Modal";

const Main = () => {
    return (
        <div>
            <Switch>
               {/*<Route path={['/', `${homePage}`]} exact component={Home}/>*/}
               {/*<Route path={`${productsPage}`} component={Products}/>*/}
               {/*<Route path={`${aboutUsPage}`} component={About}/>*/}
               {/*<Route path={`${teamPage}`} component={Team}/>*/}
               {/*<Route path={`${contactPage}`} component={Contact}/>*/}
               {/*<Route path={`${loginPage}`} component={Login}/>*/}
               {/*<Route path={`${registerPage}`} component={Register}/>*/}
           </Switch>
        </div>
    )
};

export default Main;