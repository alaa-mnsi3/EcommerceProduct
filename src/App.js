import './css/main.css';
import React,{useState} from 'react';
import Header from './Components/Header/Header'
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main/Main';
import { useEffect } from 'react';

// context api between sliderInfo and header for cart
export const cartContext=React.createContext()

function App() 
{
  // state for cart
  const [cart,setcart]=useState(()=>
  {
    let localCart=localStorage.getItem('cart');
    return localCart? JSON.parse(localCart) : [{}]
  })

  // state for quantity that client has determined
  const[cartQuantity,setcartQuantity]=useState(localStorage.getItem('cartQuantity')?localStorage.getItem('cartQuantity'):0)
  
  // state if ( cart is empty )
  const[msg,setmsg]=useState(localStorage.getItem('msg')==null?'Your cart is empty':localStorage.getItem('msg'))
  
  // for local storage cart
  useEffect(()=>
  {
    localStorage.setItem('cart',JSON.stringify(cart))
    localStorage.setItem('cartQuantity',cartQuantity)
    localStorage.setItem('msg',msg)
  },[cart,cartQuantity,msg])

  return (
    <div className="App">
      <BrowserRouter>
        <cartContext.Provider value={({'cart':cart,'setcart':setcart,'cartQuantity':cartQuantity,'setcartQuantity':setcartQuantity,'msg':msg,'setmsg':setmsg})}>
          <Header/>
          <Main/>
        </cartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
