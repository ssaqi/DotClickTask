import React from 'react'
import './Panel.css'
export default function Panel() {
  return (
    <>
        <div className='hospital'>
      
      <div className='detail'>
       <div className='box'>
       <p className='name'>St Judes Hospital
       <br/> 
         <span className='tag'>Sarasota,FL. 33178</span>
         </p>
       </div>
      <div className='line'></div>
<div className='box'>
<p className='name'>10&emsp; - &emsp;17
       <br/> 
         <span className='tag'>October &ensp; December</span>
         </p>
       </div>
       <div className='line'></div>
       <div className='box'>
       <p className='name'>20 Rooms
       <br/> 
         <span className='tag'>10 singles,10 Doubles</span>
         </p>
       </div>
    </div>
    <div className='tabs1'>
         
        <div className='tabC'>
            <p className='name2'>COMPLETED</p>
        </div>
        
    </div>
    </div>
    </>
  )
}
