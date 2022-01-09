import React,{useState} from 'react'
import Product from './Product'
import SliderInfo from './SliderInfo'
import FProduct from '../../images/image-product-1.jpg' 

export const ImageContext=React.createContext()

function Main() {
    // put images in state to show
    const [imageSlider,setimageSlider]=useState(FProduct)

    return (
        <main className='Main' role='main'> 
            <div className='d-flex Main-wrapper align-items-center'>
                <ImageContext.Provider value={({'imageSlider':imageSlider,'setimageSlider':setimageSlider})}>
                    <Product/>
                    <SliderInfo/>
                </ImageContext.Provider>
            </div>
        </main>
    )
}

export default Main
