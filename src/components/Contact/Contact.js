import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='container-fluid containerHeight backColor'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h2 className='text-center font-weight-bolder display-4 h2All getInTouch'>Get In Touch</h2>
                    <p className='text-center font-weight-light pContact'>We'd love to hear your thoughts and be in touch with us</p>
                </div>
                    <form className='col-sm-6 mt-5'>
                            <textarea className='inputMessage' name='message' placeholder='Message'/>
                    </form>

                    <form className='mt-4 form-inline'>
                        <div>
                            <input className='form-control inputAddress w-50' type='text' placeholder='Email Address'/>
                        </div>
                        <div>
                            <input className='form-control inputFullName' type='text' placeholder='Full Name'/>
                        </div>
                    </form>
                <button className='buttonSend mt-4'>Send</button>
            </div>
            <div className='d-flex justify-content-center'>
                <i className="fa fa-instagram iconContact"></i>
                <i className="fa fa-twitter iconContact"></i>
                <i className="fa fa-facebook-square iconContact"></i>
                <i className="fa fa-whatsapp iconContact"></i>
                <i className="fa fa-github iconContact"></i>
                <i className="fa fa-linkedin iconContact"></i>
                <i className="fa fa-youtube iconContact"></i>
            </div>
        </div>
    );
};

export default Contact;