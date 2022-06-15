import React from 'react';
import {backgroundVideo} from '../../utils/constants';

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
        <div id='home'>
            <video id='myVideo' autoPlay muted loop >
                <source src={backgroundVideo} type={'video/mp4'}/>
            </video>

        <div className=' text-center p-5 videoContent' id='home'>
            <h1 className='display-1 font-weight-bolder'>hiMath Gaming</h1>
            <h2 className='display-3'>Revolutionize eLearning</h2>
        </div>
        </div>
    );
};


export default Home;