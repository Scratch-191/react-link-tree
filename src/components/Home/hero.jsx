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
        
          <a href="https://github.com/Scratch-191" target="_blank" rel="noopener noreferrer">   <button className='button1'>
      <img src='./images/github.png' alt="GitHub Logo" className='logo' />
          GitHub   </button></a>
       

         <button className='button2'>
            X
            
         </button>

        
         <a
                href="https://www.linkedin.com/in/samuel-annan-88b0b329a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              
                target="_blank"
                rel="noreferrer"
              >  <button className='button3'>
              LinkedIn
              <img src='./images/linkedin.png' alt="LinkedIn Logo" className='logo3' /></button></a>
        

        
            <a
                href="https://www.instagram.com/sam_mhy191?igsh=dDRtYWowNXN4bmQ4&utm_source=qr"
               
                target="_blank"
                rel="noreferrer"
              >  <button className='button4'>
              <img src='./images/instagram.png' alt="Instagram Logo" className='logo4' />
                 Instagram
      </button> </a>
         
        </div>
        
        
    </div>
  )
}

export default Hero




