import React from 'react'

const Hero = () => {
  return (
    <div className='name--section--grid'> 
        
        <div className='name--picture'>
            <img className='iname' src="./images/img.png" alt="" />
        <h2>Jessica Randalle </h2>
        <span className='name--picture-2'>
            <h4>London, United Kingdom</h4>
        </span>

        </div>
        
        <div>
         <p className='paragraph'>"Front-end developer and avid-reader."</p>
         <button className='button1'>
            GitHub
         </button>
        </div>
        
        
    </div>
  )
}

export default Hero


