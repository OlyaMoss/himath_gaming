import React from 'react';
import {backgroundVideo} from "../../utils/constants";
import style from './home.module.css';

const Home = () => {
    // let rootElement = document.documentElement;
    // let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    //
    // function handleScroll(){
    //     let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    //     if((rootElement.scrollTop / scrollTotal) > 0.80){
    //         scrollToTopBtn.classList.add('showBtn');
    //     }else {
    //         scrollToTopBtn.classList.remove('showBtn');
    //     }
    // }
    // function scrollToTop() {
    //     rootElement.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }
    // scrollToTopBtn.addEventListener("click", scrollToTop);
    // document.addEventListener("scroll", handleScroll);

    return (
        <div className='d-flex flex-column text-center p-5 containerHeight' id='home'>
            {/*<div className={style.video}>*/}
            {/*    <video className={style.videoMedia} src={backgroundVideo} autoPlay muted loop></video>*/}
            {/*</div>*/}
            <div className={style.back}>
            <h1 className='display-1 font-weight-bolder'>hiMath Gaming</h1>
            <h2 className='display-3'>Revolutionize eLearning</h2>
            <i className="fa fa-play-circle fa-4x main"></i>
            <p className='home'>(Promotional video here)</p>
            </div>
        </div>
    );
};


export default Home;