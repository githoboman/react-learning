/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import { GiHamburgerMenu } from "react-icons/gi";




function App() {
  return (
    <>
      <section className='heading-color'>
        <img src='https://preview.colorlib.com/theme/transcend/images/logo.svg' alt="logo" />

        <div className='hamburger-flex-div'><button className='hamburgercolor'><GiHamburgerMenu /></button><h5>Menu</h5></div>
      </section>
      <div className='opening-text-div'>
      <h1>
      Hello folks, we are Transcend Studio.
      </h1>
     <h3 className='linz'> We create stunning digital experiences that will help your business stand out.</h3>
     
<section className='hyper-social-div'>

Follow Us 
Facebook
 
Twitter
 
LinkedIn
Who We Are
</section>
</div>

     

      


      
      
    
    </>
  )
}


export default App
