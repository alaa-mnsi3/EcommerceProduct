import React,{useState,useEffect} from 'react'
import ReactDOM  from 'react-dom'

// slider icons images
import nextIcon from '../../images/icon-next.svg'
import prevIcon from '../../images/icon-previous.svg'

// customHook for next and previous icon in slider
import useSlider from '../useSlider';
import ProductThumbnial from './productThumbnial'

// Scss/Components/Main/_productSlider
function SliderProduct({ImagesData,setShow,imageSlider,Show}) 
{

    //active state when click Thumbnial Images
    const [Title1, setTitle1]=useState('')

    const [slideNum,setSlideNum]=useState(-1)

    // put images in state to show
    const [ProductSlider,setProductSlider]=useState(imageSlider)

    //for slider for next and previous from I clicked
    let slider=useSlider(ImagesData,ImagesData.findIndex(ele => { return ele.dataImage === imageSlider }))


    // put Image when slides
    useEffect(() => {
        setProductSlider(ImagesData[slider.value].dataImage)
        setTitle1('')
        setSlideNum(slider.value)
    }, [slider.value])

    return ReactDOM.createPortal(
        <div className='d-none d-sm-none d-md-flex productSlider'>
            <div className='d-flex flex-column productSlider-wrapper align-items-center'>
                <div className='productSlider-wrapper-close'>
                    <button onClick={()=>setShow(false)} title='close icon'>
                        &times;                       
                    </button> 
                </div>
                <div className='productSlider-wrapper-sec position-relative'>
                    <button onClick={slider.previous} className='btn-slider btn-next d-flex justify-content-center align-items-center'>
                       <img  src={prevIcon} alt='Previous Icon' role='img' className='img-fluid'/>
                    </button>
                    <div className='productSlider-wrapper-sec-img w-100'>
                        <img  src={ProductSlider} alt='Product Image' role='img' className='w-100 img-fluid'/>
                    </div>
                    <button onClick={slider.next} className='btn-slider btn-prev d-flex justify-content-center align-items-center'>
                       <img  src={nextIcon} alt='Next Icon' role='img' className='img-fluid'/>
                    </button>
                </div>
                <ProductThumbnial ImagesData={ImagesData} setSlideNum={setSlideNum} setProductSlider={setProductSlider} slideNum={slideNum} Show={Show} Title1={Title1} setTitle1={setTitle1}/>
            </div>
        </div>,document.getElementById('ProductShow')
    )
}

export default SliderProduct
