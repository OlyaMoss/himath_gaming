import React from 'react';
import style from './about.module.css';
import photo from '../../photo/study1.jpg';
import photo2 from '../../photo/study2.jpg';
import portrait1 from '../../photo/pexels-ekaterina-belinskaya-4923052.jpg';
import portrait2 from '../../photo/pexels-italo-melo-2379004.jpg';
import portrait3 from '../../photo/pexels-pixabay-220453.jpg';


const About = () => {
    return (
        <div className={style.backColor} id='about'>
            <h2 className={style.aboutHeaderH2}>About hiMath Gaming Mission</h2>
            <h3 className={style.aboutHeaderH3}>Your best teacher is YOU!</h3>
            <p className='p-5'>
                <img className='w-25 h-25 float-left pr-2' src={photo}/>
                <img className='w-25 h-25 float-right' src={photo2}/>
                hiMath Gaming intends to improve(by revolution) students eLearning experience by providing them the best conditions...
                Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Sit amet nisl purus in mollis nunc sed id.
                Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices.
                Donec massa sapien faucibus et molestie ac feugiat sed lectus.
                Hac habitasse platea dictumst quisque sagittis purus.
                Eleifend quam adipiscing vitae proin. Condimentum mattis pellentesque id nibh tortor.
                Ultricies integer quis auctor elit sed vulputate mi sit amet.
                Euismod in pellentesque massa placerat. Interdum posuere lorem ipsum dolor sit amet.
                Nibh mauris cursus mattis molestie a iaculis at.
                Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.
                Orci phasellus egestas tellus rutrum tellus pellentesque.
                Scelerisque in dictum non consectetur a erat nam at.</p>
            <h2 className={style.aboutSuccess}>Success stories</h2>
            <div>
                <div className='d-flex justify-content-around flex-nowrap'>
                    <p className='border border-2 border-dark p-1 ml-2'> <img className={style.imgPortrait} src={portrait1}/>
                        Israel Israeli,
                        <br/><span className='border-bottom border-dark'>Tel Aviv</span>
                        <br/>"I improved Calculus grade from 48 to 94
                        <br/>thanks to hiMath Gaming Calculus applications"
                    </p>
                    <p className='border border-2 border-dark p-1 ml-2'><img className={style.imgPortrait} src={portrait2}/>
                        Mark Zukerberg
                        <br/><span className='border-bottom border-dark'>Facebook</span>
                        <br/>"I learned how to code thanks to hiProg Gaming"
                    </p>

                    <p className='border border-2 border-dark p-1 ml-2'><img className={style.imgPortrait} src={portrait3}/>
                        Bill Gates
                        <br/><span className='border-bottom border-dark'>Harvard</span>
                        <br/>"Thanks to hiMath Gaming!finished Bs.c degree"
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;