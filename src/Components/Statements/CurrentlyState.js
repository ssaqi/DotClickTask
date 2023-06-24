import React from 'react'
import './CurrentlyState.css'
function CurrentlyState() {
  return (
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
    <div className='tabs'>
         
        <div className='tab1'>
            <p className='name1'>RECEIVED</p>
        </div>
        <div className='tab2'>
            <p className='name1'>NEGOTIATING</p>
        </div>
        <div className='tab3'>
            <p className='name1'>COMPLETED</p>
        </div>
    </div>
    </div>
  )
}

export default CurrentlyState



// <h3 className='name'>St Judes Hospital   </h3>
// <hr className='line'/>
// <p className='date'> 10 - 17</p>
// <hr className='line2'/>
// <p className='room'>20 Rooms</p>