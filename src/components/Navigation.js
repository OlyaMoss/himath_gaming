import React from 'react';
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import {loginPage} from "../utils/constants";
import img from "../photo/hieducation_project_2_hiDucation_horizontal_black.png";

const Navigation = ({open}) => {
    return (
            <div className='container-fluid'>
                <div className='row'>
                    <nav id='nav_background'
                         className='navbar navbar-expand-sm navbar-light fixed-top'>
                        <img className="navbar-brand col-1 col-md-2 mw-100" id='logo' src={img} alt={"logo"} height={50} />
                        <ul className='navbar-nav navi' >
                                <Link to='home' activeClass='active' spy={true} smooth={true} duration={400}>
                                    <li className='nav-item navigation'>
                                        <a className='nav-link active '>Home</a>
                                    </li>
                                </Link>
                                <Link to='products' activeClass='active' spy={true} smooth={true} duration={400}>
                                    <li className='nav-item navigation '>
                                        <a className='nav-link active '>Products</a>
                                    </li>
                                </Link>
                                <Link to='about' activeClass='active' spy={true} smooth={true} duration={400}>
                                    <li className='nav-item navigation'>
                                        <a className='nav-link active'>About</a>
                                    </li>
                                </Link>
                                <Link to='team' activeClass='active' spy={true} smooth={true} duration={400}>
                                    <li className='nav-item navigation '>
                                        <a className='nav-link active'>The Team</a>
                                    </li>
                                </Link>
                                <Link to='contact' activeClass='active' spy={true} smooth={true} duration={400}>
                                    <li className='nav-item navigation '>
                                        <a className='nav-link active'>Contact</a>
                                    </li>
                                </Link>
                                {/*<Link to={`${contactPage}`}>*/}
                                {/*    <li className='nav-item navigation'>Contact</li>*/}
                                {/*</Link>*/}

                                <NavLink to={loginPage}>
                                    <li onClick={open} className='nav-item navigation border-right-0'>
                                        <a className='nav-link active col-lg'>LogIn</a>
                                    </li>
                                </NavLink>
                            </ul>
                    </nav>
                </div>
            </div>
    )
        ;
};

export default Navigation;