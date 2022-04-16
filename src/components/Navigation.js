import React from 'react';
import {Link} from "react-scroll";
import {aboutUsPage, contactPage, homePage, loginPage, productsPage, teamPage} from "../utils/constants";
import img from "../photo/hieducation_project_2_hiDucation_horizontal_black.png";

const Navigation = ({open}) => {
   return (
       <div>
       <Link to={`${homePage}`}>
           <button className='border-0'>
               <img className='logo' src={img} alt={"logo"}/>
           </button>
       </Link>
        <nav className='navbar navbar-expand-md d-flex justify-content-end'>
            <ul className='navbar-nav navi'>
                <Link to='home' activeClass='active' spy={true} offset={50} smooth={true} duration={500}>
                   <li className='nav-item navigation'>Home</li>
                </Link>

                <Link to='products' activeClass='active' spy={true} offset={200} smooth={true} duration={500}>
                    <li className='nav-item navigation'>Products</li>
                </Link>
                <Link to='about' activeClass='active' spy={true} offset={50} smooth={true} duration={500}>
                    <li className='nav-item navigation'>About</li>
                </Link>
                <Link to='team ' activeClass='active' spy={true} offset={50} smooth={true} duration={500}>
                    <li className='nav-item navigation'>The Team</li>
                </Link>
                <Link to='contact' activeClass='active' spy={true} offset={50} smooth={true} duration={500}>
                    <li className='nav-item navigation'>Contact</li>
                </Link>
                {/*<Link to={`${contactPage}`}>*/}
                {/*    <li className='nav-item navigation'>Contact</li>*/}
                {/*</Link>*/}
                <li onClick={open} className='nav-item navigation border-right-0'>LogIn</li>

            </ul>
        </nav>
       </div>
    );
};

export default Navigation;