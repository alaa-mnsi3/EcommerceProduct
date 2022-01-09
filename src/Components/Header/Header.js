import React, { useContext, useEffect, useState } from 'react'
import {Link ,NavLink} from 'react-router-dom'
import logo from '../../images/logo.svg'
import cartIcon from '../../images/icon-cart.svg'
import closeIcon from '../../images/icon-close.svg'
import MenuIcon from '../../images/icon-menu.svg'
import DeleteIcon from '../../images/icon-delete.svg'
import avatar from '../../images/image-avatar.png'
import { cartContext } from '../../App'

// scss/Components/_Header.scss
function Header() {
    // to put information in cart
    const {cart,setcart,cartQuantity,setcartQuantity,setmsg,msg}=useContext(cartContext)

    //to appear what inside cart
    const [OpenCart,setOpenCart]=useState(false)

    // to appear nav in mob
    const [OpenNav,setOpenNav]=useState(false)

    // To remove item in cart
    const handleRemove=(index)=>
    {   
        let x=index
        setcart(prevState => prevState.filter((item,index) => {return index !== x}))
        setcartQuantity(0)
        setmsg('Your cart is empty')
    }


    return (
        <header className='Nav fixed-top'>
            <div role='navigation' className='container d-flex Nav-wrapper align-items-center justify-content-between h-100'>
                {/* Nav items and Toggle and Brand */}
                <div className='d-flex Nav-wrapper-sec align-items-center h-100'>
                    
                    {/* Toggle button in Mob to appear nav Bar */}
                    <button className='d-flex d-lg-none d-md-flex ToggleOpenIcon' onClick={()=>setOpenNav(true)} title='Toggle'>
                        <img src={MenuIcon} alt='Menu Icon' className='h-100' role='img'/>
                    </button>

                    {/* Brand */}
                    <Link exact='true' className='Nav-wrapper-sec-brand' to='/'>
                        <img src={logo} alt="logo" role='img'/>
                    </Link>

                    {/* right navbar */}
                    <ul className={OpenNav?'d-flex Nav-wrapper-sec-ul active':'d-flex Nav-wrapper-sec-ul'}>
                        <li className='d-flex d-lg-none d-md-flex ToggleClose'>
                            <button title='ToggleClose' onClick={()=>setOpenNav(false)}>
                                <img src={closeIcon} role='img' alt="close menu"/>
                            </button>
                        </li>
                        <li className='Nav-wrapper-sec-ul-li'>
                            <NavLink role='link' className='' to='/Collections'>
                                Collections
                            </NavLink>
                        </li>
                        <li className='Nav-wrapper-sec-ul-li'>
                            <NavLink role='link' className='' to='/Men'>
                                Men
                            </NavLink>
                        </li>
                        <li className='Nav-wrapper-sec-ul-li'>
                            <NavLink role='link' className='' to='/Women'>
                                Women
                            </NavLink>
                        </li>
                        <li className='Nav-wrapper-sec-ul-li'>
                            <NavLink role='link' className='' to='/About'>
                                About
                            </NavLink>
                        </li>
                        <li className='Nav-wrapper-sec-ul-li'>
                            <NavLink role='link' className='' to='/Contact'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>    
                </div>

                {/* left navbar */}
                <ul className='d-flex Nav-wrapper-ul align-items-center'>
                    <li className='Nav-wrapper-ul-li'>
                        {/* button open cart */}
                        <button title='cartbtn' onClick={()=>setOpenCart(!OpenCart)} className='Nav-wrapper-ul-li-sec1'>
                            <span className='Nav-wrapper-ul-li-sec1-quantity text-center'>{cartQuantity}</span>
                            <img src={cartIcon} alt="Cart" role='img'/>
                        </button>

                        {/* what inside the cart */}
                        <div className={OpenCart?'Nav-wrapper-ul-li-sec2 active':'Nav-wrapper-ul-li-sec2'}>
                            <h4>
                                Cart
                            </h4>
                            {!msg?
                                <>
                                    {/* when cart is filled */}
                                    {cart.map((item,index)=>
                                    (
                                        <React.Fragment key={Math.random()}>
                                            {item.cartHeadeing &&
                                            <div className='Nav-wrapper-ul-li-sec2-wrapperCart d-flex flex-column'>
                                                <div className='d-flex Nav-wrapper-ul-li-sec2-wrapperCart-sec1 align-items-center'>
                                                    
                                                    <img src={item.imageSrc} alt='ProductImage' role='img'/>

                                                    <p>
                                                        {item.cartHeadeing} <span className='TotalPrice'> ${item.Totalprice}.00</span>
                                                    </p>

                                                    <button onClick={()=>handleRemove(index)} className='d-flex' title='Delete Icon'>
                                                        <img className='img-fluid' src={DeleteIcon} alt='Remove Icon' role='img'/>
                                                    </button>

                                                </div>

                                                <button title='Checkout Icon' className='Nav-wrapper-ul-li-sec2-wrapperCart-btnCheck'>
                                                    CheckOut
                                                </button>
                                            </div>}
                                        </React.Fragment>
                                    ))}
                                </>
                                // message in cart when no product
                                :<div className='Nav-wrapper-ul-li-sec2-CartMsg'>{msg}</div>
                            }
                        </div>
                    </li>
                    <li className='Nav-wrapper-ul-li div-img'>
                        <img src={avatar} alt="Avatar" role='img'/>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
