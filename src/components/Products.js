import React from 'react';
import ScrollToTop from "react-scroll-up";

const Products = () => {

    return (
        <div id='products' className='containerHeight position-relative'>
            <h2 className='display-3 text-center h2All'>hiMath Gaming Products</h2>
            <input placeholder='Topic' type='text' className='product'/>
            <button className='product'>Search</button>


        {/*    <table>*/}
        {/*        <tbody>*/}
        {/*        <tr>*/}
        {/*            <td><i className="fa fa-image icon"></i></td>*/}
        {/*                <td className='position-relative'><h4 className='font-weight-bold'>Integral Basics</h4>*/}
        {/*                    <div className='headerBorder'></div>*/}
        {/*                    <p className='m-2'>Introduction to integration operation...*/}
        {/*                    <br/> asdasd*/}
        {/*                    <br/> bla bla...</p></td>*/}
        {/*            <td><button className='purchase'>Purchase</button></td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*            <td><i className="fa fa-image icon"></i></td>*/}
        {/*            <td className='position-relative'><h4 className='font-weight-bold'>Indefinite Integral Basics</h4>*/}
        {/*                <div className='headerBorder'></div>*/}
        {/*                <p className='m-2'> Introduction to integration operation...*/}
        {/*                    <br/> asdasd*/}
        {/*                    <br/> bla bla...</p></td>*/}
        {/*               <td> <button className='purchase'>Purchase</button></td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*            <td><i className="fa fa-image icon"></i></td>*/}
        {/*            <td className='position-relative'><h4 className='font-weight-bold'>Integration by Parts</h4>*/}
        {/*                <div className='headerBorder'></div>*/}
        {/*                <p className='m-2'> Partially working integrals</p></td>*/}
        {/*            <td><button className='purchase'>Purchase</button></td>*/}
        {/*        </tr>*/}
        {/*        <tr>*/}
        {/*            <td><i className="fa fa-image icon"></i></td>*/}
        {/*            <td className='position-relative'><h4 className='font-weight-bold'>Reverse Chain Rule</h4>*/}
        {/*                <div className='headerBorder'></div>*/}
        {/*                <p className='m-2'> Reversing the world</p></td>*/}
        {/*            <td><button className='purchase'>Purchase</button></td>*/}

        {/*        </tr>*/}
        {/*        </tbody>*/}
        {/*    </table>*/}
        {/*</div>*/}
            <div className='container productWidth d-flex flex-column align-items-center'>
                {/*<div className='row'>*/}
                    {/*<div className='col-sm-4 d-flex flex-column justify-content-between align-items-end'>*/}
                    {/*    <i className="fa fa-image icon"></i>*/}
                    {/*    <i className="fa fa-image icon"></i>*/}
                    {/*    <i className="fa fa-image icon"></i>*/}
                    {/*    <i className="fa fa-image icon"></i>*/}
                    {/*    <i className="fa fa-image icon"></i>*/}
                    {/*</div>*/}
                <div className='row col-sm-7 d-flex justify-content-between align-items-start'>
                    <hr className='bordProducts'/>
                    <i className="fa fa-image icon"></i>
                    <div className='d-flex flex-column justify-content-end'>
                        <h4 className='font-weight-bold'>Integral Basics</h4>
                        <p> Introduction to integration operation...
                            <br/> asdasd
                            <br/> bla bla...</p>
                    </div>
                    <div className='col-sm-5'>
                        <button className='purchase mt-5 '>Purchase</button>
                    </div>
                </div>
                <div className='row col-sm-7 d-flex justify-content-between align-items-start'>
                    <hr className='bordProducts'/>
                    <i className="fa fa-image icon"></i>
                    <div className='d-flex flex-column'>
                    <h4 className='font-weight-bold ml-2'>Indefinite Integral Basics</h4>
                    <p className='ml-2'> Introduction to integration operation...
                        <br/> asdasd
                        <br/> bla bla...</p>
                    </div>
                    <div className='col-sm-5'>
                        <button className='purchase mt-5 '>Purchase</button>
                    </div>
                </div>
                <div className='row col-sm-7 d-flex justify-content-between align-items-start'>
                    <hr className='bordProducts'/>
                    <i className="fa fa-image icon"></i>
                    <div className='d-flex flex-column'>
                    <h4 className='font-weight-bold'>Integration by Parts</h4>
                    <p className='mb-5'> Partially working integrals</p>
                    </div>
                    <div className='col-sm-5'>
                        <button className='purchase mt-5 '>Purchase</button>
                    </div>
                </div>
                <div className='row col-sm-7 d-flex justify-content-between align-items-start'>
                    <hr className='bordProducts'/>
                    <i className="fa fa-image icon"></i>
                    <div className='d-flex flex-column'>
                    <h4 className='font-weight-bold'>Reverse Chain Rule</h4>
                    <p className='mb-5'> Reversing the world</p>
                    </div>
                    <div className='col-sm-5'>
                        <button className='purchase mt-5 '>Purchase</button>
                    </div>
                </div>
                <div className='row col-sm-7 d-flex justify-content-between align-items-start'>
                    <hr className='bordProducts'/>
                    <i className="fa fa-image icon"></i>
                    <div className='d-flex flex-column'>
                        <h4 className='font-weight-bold'>Reverse Chain Rule</h4>
                        <p className='mb-5'> Reversing the world</p>
                    </div>
                    <div className='col-sm-5'>
                        <button className='purchase mt-5 '>Purchase</button>
                    </div>
                </div>
                <div className='row col-sm-7 d-flex justify-content-between align-items-start'>
                    <hr className='bordProducts'/>
                    <i className="fa fa-image icon"></i>
                    <div className='d-flex flex-column'>
                        <h4 className='font-weight-bold'>Reverse Chain Rule</h4>
                        <p className='mb-5'> Reversing the world</p>
                    </div>
                    <div className='col-sm-5'>
                        <button className='purchase mt-5 '>Purchase</button>
                    </div>
                </div>

                        {/*<div className='col-sm-7 d-flex flex-column justify-content-between align-items-start'>*/}
                            {/*<hr className='bordProducts'/>*/}
                            {/*<i className="fa fa-image icon"></i>*/}
                            {/*<h4 className='font-weight-bold'>Integral Basics</h4>*/}
                            {/*<p> Introduction to integration operation...*/}
                            {/*    <br/> asdasd*/}
                            {/*    <br/> bla bla...</p>*/}
                            {/*<hr className='bordProducts'/>*/}
                            {/*<h4 className='font-weight-bold'>Indefinite Integral Basics</h4>*/}
                            {/*<p className='mb-4'> Introduction to integration operation...*/}
                            {/*    <br/> asdasd*/}
                            {/*    <br/> bla bla...</p>*/}
                            {/*<h4 className='font-weight-bold'>Integration by Parts</h4>*/}
                            {/*<p className='mb-5'> Partially working integrals</p>*/}
                        {/*    <h4 className='font-weight-bold'>Reverse Chain Rule</h4>*/}
                        {/*    <p className='mb-5'> Reversing the world</p>*/}
                        {/*    <h4 className='font-weight-bold'>Reverse Chain Rule</h4>*/}
                        {/*    <p className='mb-5'> Reversing the world</p>*/}
                        {/*</div>*/}
                    {/*<div className='col-sm-1 d-flex flex-column justify-content-between align-items-start'>*/}
                    {/*    <button className='purchase mt-5 '>Purchase</button>*/}
                    {/*    <button className='purchase mb-3'>Purchase</button>*/}
                    {/*    <button className='purchase mb-5'>Purchase</button>*/}
                    {/*    <button className='purchase mb-5'>Purchase</button>*/}
                    {/*    <button className='purchase mb-5'>Purchase</button>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
            <div className='list-group font-weight-bold productsNav '>
                <a className='list-group-item list-group-item-action'>Math</a>
                <a className='list-group-item list-group-item-action'>Programming</a>
                <a className='list-group-item list-group-item-action'>Physics</a>
            </div>

            <ScrollToTop showUnder={160}>
                <button className='scrollToTopBtn'>Top</button>
            </ScrollToTop>
        </div>


    );
};

export default Products;