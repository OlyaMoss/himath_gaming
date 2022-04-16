import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {aboutUsPage, contactPage, homePage, loginPage, productsPage, teamPage} from "../utils/constants";
import Home from "./Home/Home";
import Products from "./Products";
import About from "./About/About";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import Login from "./Login";

const Main = () => {
    return (
           <Switch>
               <Route path={['/', `${homePage}`]} exact component={Home}/>
               <Route path={`${productsPage}`} component={Products}/>
               <Route path={`${aboutUsPage}`} component={About}/>
               <Route path={`${teamPage}`} component={Team}/>
               <Route path={`${contactPage}`} component={Contact}/>
               <Route path={`${loginPage}`} component={Login}/>
           </Switch>
    );
};

export default Main;