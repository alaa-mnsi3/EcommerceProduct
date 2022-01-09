import React, { useContext, useState } from 'react'
// Images in component
import plusIcon from '../../images/icon-plus.svg'
import minusIcon from '../../images/icon-minus.svg'

// Context
import { cartContext } from '../../App'
import { ImageContext } from './Main'

function SliderInfo() {
    // calculate Quantity
    const [Quantity,setQuantity]=useState(0)

    // header for product
    const HeaderProduct='Fall limited Edition Sneakers'

    // using context api to arrive to cart in nav component
    const {setcart,setcartQuantity,setmsg}=useContext(cartContext)

    // for image in cart
    let {imageSlider}=useContext(ImageContext)

    // filled cart
    const handleCart =(e)=>
    {
        let price=+e.currentTarget.getAttribute('data-price')
        // seting cart
        setcart([{
        'cartHeadeing':`${HeaderProduct} $${price}.00 x ${Quantity}`,
        'Totalprice':(Quantity * price),
        'imageSrc':imageSlider}])
        setcartQuantity(Quantity)
        setmsg('')
    }
    
    // Minus Quantity
    const handleMinus=()=>
    {
        if(Quantity <= 0)
        {
            setQuantity(0)
        }else
        setQuantity((prev)=>prev-1)
    }
    
    return (
        <section className='col-lg-4 offset-lg-1 offset-md-1 col-md-5 col-11 col-sm-10 SliderInfo'>
            <h6 className='SliderInfo-topHeader'>Sneaker Company</h6>
            <h2 className='SliderInfo-Header'>{HeaderProduct}</h2>
            <p className='SliderInfo-pragraph'>
                These low-profile sneakers are your prefect casual wear
                companion.Featuring a durable rubber outer sole , 
                they will withstand everything the weather can offer
            </p>
            <p className='SliderInfo-NewPrice d-flex align-items-center'>
                <span>${Quantity * 125}.00</span>
                <span>50%</span>
            </p>
            <p className='SliderInfo-OldPrice'>${Quantity * 250}.00</p>
            <div className='d-flex SliderInfo-btnsWrapper'>
                <div className='SliderInfo-btnsWrapper-BouMin d-flex justify-content-around align-items-center'>
                    <button onClick={handleMinus}>
                        <img role='img' src={minusIcon} alt="miuns Icon" className='img-fluid'/>
                    </button>
                    <span>{Quantity}</span>
                    <button onClick={()=>setQuantity((prev)=>prev+1)}>
                        <img role='img' src={plusIcon} alt="miuns Icon" className='img-fluid'/>
                    </button>
                </div>
                <button data-price='125.00' className={Quantity===0?'SliderInfo-btnsWrapper-submit disabled':'SliderInfo-btnsWrapper-submit'} onClick={(e)=>handleCart(e)}>
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Add to cart
                    </span>
                </button>
            </div>
        </section>
    )
}

export default SliderInfo
