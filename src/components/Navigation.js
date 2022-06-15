import React from 'react';
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import {loginPage} from "../utils/constants";
import img from "../photo/hieducation_project_2_hiDucation_horizontal_black.png";

const Navigation = ({open}) => {
   return (
       <div>
           <nav className='navbar navbar-expand-md d-flex justify-content-end position-relative'>
            <ul className='navbar-nav navi'>
                <Link to='home'>
                    <li>
                        <img id='logo' src={img} alt={"logo"}/>
                    </li>
                </Link>
                <Link to='home' activeClass='active' spy={true} smooth={true} duration={400}>
                   <li className='nav-item navigation'>Home</li>
                </Link>

                <Link to='products' activeClass='active' spy={true} smooth={true} duration={400}>
                    <li className='nav-item navigation'>Products</li>
                </Link>
                <Link to='about' activeClass='active' spy={true} smooth={true} duration={400}>
                    <li className='nav-item navigation'>About</li>
                </Link>
                <Link to='team' activeClass='active' spy={true} smooth={true} duration={400}>
                    <li className='nav-item navigation'>The Team</li>
                </Link>
                <Link to='contact' activeClass='active' spy={true} smooth={true} duration={400}>
                    <li className='nav-item navigation'>Contact</li>
                </Link>
                {/*<Link to={`${contactPage}`}>*/}
                {/*    <li className='nav-item navigation'>Contact</li>*/}
                {/*</Link>*/}
                <NavLink to={loginPage}>
                <li onClick={open} className='nav-item navigation border-right-0'>LogIn</li>
                </NavLink>
            </ul>
        </nav>
       </div>
    );
};

export default Navigation;