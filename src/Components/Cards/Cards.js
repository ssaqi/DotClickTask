import React from 'react'
import './Card.css'
export default function Cards() {
  return (
    <>
    <div className='cardMain'>
      <div className='card1'>
        <p className='head1'>ℋ</p>
      <p className='head'>Holiday Inn</p>
      <div className='dialogue'>
          <p className='p'>1.5 miles away from joblocation</p>
          <span className='span'>singles $120<br/> <span className='span'> Doubles $145</span></span>
        <button className='btn'>Book Now</button>
        </div>
      </div>
      <div className='card1'>
      <p className='head1'>ℋ</p>
      <p className='head'>Holiday Inn</p>
      <div className='dialogue'>
      <p className='p'>1.5 miles away from joblocation</p>
          <span className='span'>singles $120<br/> <span className='span'> Doubles $145</span></span>
        <button className='btn'>Book Now</button>
        </div>
</div>


<div className='card1'>
<p className='head1'>ℋ</p>
      <p className='head'>Holiday Inn</p>
     <div className='dialogue'>
     <p className='p'>1.5 miles away from joblocation</p>
          <span className='span'>singles $120<br/> <span className='span'> Doubles $145</span></span>
        <button className='btn'>Book Now</button>
     </div>
      </div>

    </div>
    </>
  )
}
