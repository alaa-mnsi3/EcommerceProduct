import React,{useContext} from 'react'
import { ImageContext } from './Main'


function ProductThumbnial({ImagesData,Title,setTitle,setSlideNum,Show,setProductSlider,slideNum,Title1,setTitle1}) 
{

    // image in component Product.js
    const {setimageSlider}=useContext(ImageContext)

    // slider in desktop
    const SliderProduct = (e) =>
    {
        if (Show)
        {
            setSlideNum(-1)
            setProductSlider(e.currentTarget.getAttribute('data-image'))
            setTitle1(e.currentTarget.getAttribute('title'))
        }
        else
        {
            setimageSlider(e.currentTarget.getAttribute('data-image'))
            setTitle(e.currentTarget.getAttribute('title'))
        }
    }
    

    return (
        <ul className={Show?'d-flex Product-ulThumbnail':'d-md-flex Product-ulThumbnail d-none d-sm-none justify-content-center'}>
            {ImagesData.map((item,index)=>(
                <li key={index} className={((item.title===Title) || (item.title === Title1)) || (index===slideNum)?'Product-ulThumbnail-LiImage productSlider-wrapper-li active':'Product-ulThumbnail-LiImage productSlider-wrapper-li'}>
                    <button data-image={item.dataImage} title={item.title} onClick={(e)=>SliderProduct(e)}>
                        <img src={item.src} alt='Product Image' role='img' width='100%' className='img-fluid'/>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default ProductThumbnial
