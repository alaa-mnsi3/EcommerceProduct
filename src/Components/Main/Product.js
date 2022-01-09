import React, { useState,useContext,useEffect} from 'react'
import ReactImageMagnify from 'react-image-magnify';

// SliderComponent to show images when click image
import SliderProduct from './SliderProduct'
import { ImageContext } from './Main'

//icon for next and previous icon
import nextIcon from '../../images/icon-next.svg'
import prevIcon from '../../images/icon-previous.svg'

// customHook for next and previous icon in slider
import useSlider from '../useSlider';

// array images that are used in website
import ImagesData from '../ImagesData';
import ProductThumbnial from './productThumbnial';

function Product() {

    // context Api for imageProduct to show
    const {imageSlider, setimageSlider}=useContext(ImageContext)

    //for slider for next and previous 
    let slider=useSlider(ImagesData,0)

    //active state when click Thumbnial Images
    const [Title, setTitle]=useState('ImageThumbnail1')

    //active state when click image to show Popup Slider
    const [Show , setShow]=useState(false)

    // for slider in mobile
    useEffect(() => {
        setimageSlider(ImagesData[slider.value].dataImage)
    }, [slider.value])

    return (
        <>
            <div className='col-lg-4 col-md-5 col-12 Product d-flex flex-column justify-content-center'>
                <div className='Product-wrapper'>
                    <button onClick={slider.previous} className='btn-slider btn-prev d-flex d-sm-flex d-md-none d-lg-none align-items-center justify-content-center'>
                        <img  src={prevIcon} alt='Previous Icon' className='img-fluid'/>
                    </button>
                    <div onClick={()=>setShow(true)} className='Product-wrapper-ProductImg'>
                        <ReactImageMagnify  {...{
                            smallImage: {
                                alt: 'Product Image',
                                isFluidWidth: true,
                                src:imageSlider
                            },
                            largeImage: {
                                src:imageSlider,
                                width: 1200,
                                height: 1800
                            }
                        }} />
                    </div>
                    <button onClick={slider.next} className='btn-slider btn-next d-flex d-sm-flex d-md-none d-lg-none align-items-center justify-content-center'>
                        <img  src={nextIcon} alt='Next Icon' className='img-fluid'/>
                    </button>
                </div>
                <ProductThumbnial  Title={Title} setTitle={setTitle} Show={Show} ImagesData={ImagesData}/>
            </div>
            {Show? <SliderProduct Show={Show} ImagesData={ImagesData} setShow={setShow} imageSlider={imageSlider}/>:null}
        </>
    )
}

export default Product
