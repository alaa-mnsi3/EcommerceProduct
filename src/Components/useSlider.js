import React , { useState} from 'react'

const useSlider = (ImagesData,initial) =>{
    // put index
    const [x,setX]=useState(initial)

    const handleNext=()=>{
        setX((prev)=>prev+1);
        if(x === ImagesData.length-1)
        {
            setX(0)
        }
    }

    //  Previous Slider
    const handlePrev =()=>
    {
        if(x <= 0)
        {
            setX(ImagesData.length-1)
        }else
        {
            setX((prev)=>prev-1)
        }
    }

    return {
        value:x,
        next : handleNext,
        previous: handlePrev
    }
}

export default useSlider
