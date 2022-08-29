import React from 'react'
import logo from '../../assets/logo.png'
import shophead from '../../assets/shophead.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCode, faComputer, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import ProductItem from '../productitem/ProductItem'
const Product = () => {

    return (
        <div className='container-fluid main-wrapper'>
            <div className='row  align-items-center justify-content-between'>
                <div className='col-4 '>
                
                    <img src="https://balaclavafashion.com/img/icon_menu.svg" className=' menu_icon' data-bs-toggle="offcanvas"
                        href="#offcanvasExample" role="button" aria-controls="offcanvasExample" />
                    <div class="offcanvas offcanvas-start offcanvas-wrapper" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">

                            <img src="https://backprocess.balaclavafashion.com/public/img/balaclavia-side.png" className="side-logo offcanvas-title" id="offcanvasExampleLabel" />
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div>
                                <button className="form-control btn btn-dark" type="button">Search</button>
                            </div>
                            <div >
                                <ul className='side-menu'>
                                    <li><a className="dropdown-item" href="#">HOME</a></li>
                                    <li><a className="dropdown-item" href="#">SHOP</a></li>
                                    <li><a className="dropdown-item" href="#">CONNECT AND FOLLOW</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-4 mx-auto text-center ">
                    <img src={logo} alt="logo" className='logo1' />
                </div>
                <div className="col-4 flex  ">
                    <form className="d-flex ms-auto order-5 gap-5 justify-content-end text-end">
                        <FontAwesomeIcon icon={faSearch} />
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faCartShopping} />
                    </form></div>



            </div>
            <div className=" row shop-heading text-center" >
                <img src={shophead} alt="shopHead" className='shop-head-img' />
                <h1 className='text'>Shopping Cart</h1>
            </div>

        </div>
    )
}

export default Product



