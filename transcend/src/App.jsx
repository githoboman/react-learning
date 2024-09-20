/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Whitt from './components/Whitt'; // Adjust the path if necessary



function App() {
  return (
    <>
    <div className="main-div">
      <section className='heading-color'>
        <img src='https://preview.colorlib.com/theme/transcend/images/logo.svg' alt="logo" className='img-size' />

        <div className='hamburger-flex-div'><button onClick={() => {}} className='hamburgercolor'><GiHamburgerMenu /></button><h5>Menu</h5>
        <div className="flex-div">
        <div className="sidebar">
          <h4>transcend studios</h4>
          <ol>
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>works</li>
            <li>contact</li>
          </ol>
          <section>
            <h6>
            Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.
            </h6>

          </section>
        </div>
        </div>
        
        
        </div>
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
</div>
<Whitt/>

<style>
  {`
    body {
      line-height: 1.6
    }
  `}
</style>
     

      


      
      
    
    </>
  )
}

export default App
