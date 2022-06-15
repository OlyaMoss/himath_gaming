import React from 'react';
import style from './team.module.css'
import man1 from '../../photo/man1.jpg';
import man2 from '../../photo/man2.jpg';
import man3 from '../../photo/man3.jpg';


const Team = () => {
    return (
        <div id='team' className='container'>
            <h1 className={style.h1Head}>The Team</h1>
            <div className=' row d-flex justify-content-around'>
                <div className='col-sm-5 border border-2 border-dark w-100 mt-5'>
                    <img className={style.imgMen} src={man1}/>
                    <p className='pt-2'><span className='font-weight-bolder border-bottom border-dark'>
                        Dr.Igor Karasin</span>, Co-Founder
                    <br/> It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        as opposed to using 'Content here, content here'.</p>
                </div>
                <div className='col-sm-5 border border-2 border-dark w-100 h-100 mt-5'>
                    <img className={style.imgMen} src={man2}/>
                    <p className='pt-2'><span className='border-bottom border-dark font-weight-bolder'>Just. Gabi Karasin</span>, Co-Founder
                    <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='col-sm-5 border border-2 border-dark w-100 h-100 mt-5'>
                    <img className={style.imgMen} src={man3}/>
                    <p className='pt-2'><span className='font-weight-bolder border-bottom border-dark'>Prof.Kevin Manning</span>, Advisor
                    <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    );
};

export default Team;