import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import paypal from '../../assets/paypal.svg'
import axios from '../../axios'
import './ProductItem.css'
const ProductItem = () => {
    const [productDetails, setProductDetails] = useState();
    const [productSizeList, setProductSizeList] = useState([]);
    const [productSizeDefaultValue, setProductSizeDefaultValue] = useState('')
    const [productImages, setProductImages] = useState([])
    const [productColor, setProductColor] = useState([])
    const [productPrice,setProductPrice]=useState()
    const [selected, setSelected] = useState()
    const [num, setNum] = useState(1);
    useEffect(() => {
        axios.get(`v1/getProductsDetails?product_id=67`).then((res) => {
            setProductDetails(res.data.product_details)
            setProductSizeList(res.data.product_details.size)
            const defaultValue = res.data.product_details.size.filter((item) => item.selected == "1")
            setProductSizeDefaultValue(defaultValue[0].size_name)
            setProductImages(res.data.product_details.product_images)
            setProductColor(res.data.product_details.color)
            setProductPrice(res.data.product_details.product_price)
        }
        )


    }, [])

    function sizeHandleChange(e) {
        setProductSizeDefaultValue(e.target.value);
    }
    const incNum = () => {
            setNum(Number(num) + 1);
    };
    const decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    const handleChange = (e) => {
        setNum(e.target.value);
    }
    const colorHandleChange = (e) => {
        setSelected(e.target.value);
    }
    return (

        <div className='product-item-wrapper container-fluid'>
            <div >
                <div className="row align-items-start">
                    <div className="col-sm-12 col-md-6">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a className="breadcrumb-link" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="breadcrumb-link" href="#">Shop</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Tshirt US Polo</li>
                            </ol>
                        </nav>
                        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="true">
                            <div className="carousel-indicators">
                                {productImages.map((item, index) =>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active indicato-button" aria-current="true" aria-label="Slide 1">
                                        <img src={item} className="img-fluid d-block w-100 image" />
                                    </button>
                                )}
                            </div>
                            <div className="carousel-inner">
                                {productImages.map((item, index) =>
                                    <div className="carousel-item active">
                                        <img src={item} className="d-block w-100" alt="..." />

                                    </div>

                                )}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 ">
                        <div className="product-name">
                            <h3>{productDetails && productDetails.product_name} </h3>
                        </div>
                        <div className="product-price">
                            <span>AED {productPrice && productPrice}</span>
                        </div>
                        <div className="product-description">
                            <span> Care Instructions: Machine Wash Fit Type: regular fit Fabric Composition : 100% Cotton Premium Su<a href="#pdt-desc" >...Read More</a></span>
                        </div>
                        <div >
                            <p >Color</p>
                            {productColor.map((item,index) =>
                                <div className="form-check  product-color-code">
                                    <input
                                        className="form-check-input  "
                                        checked={item.selected === "1"}
                                        type="radio"
                                        value={item.color_name}
                                        key={index}
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                        style={{ backgroundColor: `${item.color_code}` }}
                                        onClick={colorHandleChange} />
                                </div>)}
                        </div>
                        
                        <div className="product-size">
                            <div className="row">
                                <p>SIZE</p>
                                <div className="col-3">
                                    <select value={productSizeDefaultValue} className="form-select" aria-label="Default select example" onChange={sizeHandleChange}>
                                        {productSizeList && productSizeList.map((item) => (
                                            <option value={item.size_name}>{item.size_name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-9">
                                    <a href="">Size Guide</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-size">
                            <div className="row">
                                <div className="col-4">
                                    <div className=" input-group">
                                        <button className="btn btn-outline-secondary" onClick={decNum} type="button">-</button>
                                        <input type="text" value={num} onChange={handleChange} className="form-control text-center" placeholder="1" aria-label="Recipient's username with two button addons" />
                                        <button className="btn btn-outline-secondary " onClick={incNum} type="button">+</button>
                                    </div>
                                </div>
                                <div className="col-8 btn-cart ">
                                    <button type="button" className="btn btn-dark form-control  " >ADD TO CART</button>
                                </div>
                            </div>
                        </div> <hr></hr>
                        <div className="product-sku">
                            <label>SKU :</label>
                            <span>{productDetails && productDetails.product_sku}</span>
                        </div>
                    </div>




                </div>
            </div>
            <div id='pdt-desc' className='pdt-desc' >
                <ul className="nav nav-tabs nav-justified" >
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#description">Description</a>
                    </li>
                </ul>
                <div className="tab-pane text-center" id="description">
                    {productDetails && productDetails.product_description}
                </div>
            </div>
            <div className='row footer g-5 text-center'>
                <div className='col-12 col-md-12 col-lg-3 d-none d-sm-none d-md-none d-lg-block'>
                    <center><img src={logo} className="logo " /></center>
                    <a href="#" className='pdt-copyright'>&copy;2022 BALACLAVA</a>
                </div>
                <div className='col-12 col-md-12 col-lg-6 pdt-payment  text-center'>
                    <img src={paypal} className="paypal" />
                    <div className='pdt-policy'>
                        <a href="#" >PRIVACY POLICY.</a>
                        <a href="#" >REFUND POLICY.</a>
                        <a href="#" >TERMS OF USE.</a>
                        <a href="#" >ABOUT US.</a>
                        <a href="#" >CONTACT US.</a>
                    </div>
                </div>
                <div className='col-12 col-md-12 col-lg-3 hidden-xs pdt-socialmedia-icon  '>
                    <a href="#" >  <FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#" ><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#" ><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#" ><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </div>

    )
}

export default ProductItem