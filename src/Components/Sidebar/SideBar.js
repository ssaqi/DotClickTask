import React from 'react'
import './SideBar.css'
import CurrentlyState from '../Statements/CurrentlyState'
import Panel from '../ComPanel/Panel'
import Cards from '../Cards/Cards'
import IMG from '../Image/Group 9.png'

function SideBar() {
  return (
    <>
    <div className='main'>
    <div className='nav'>
      <div className='text'>  
        <h3> <i>LODGN</i></h3>
        <p className='h5'>Current requests</p>
        <hr/>
        <p className='h6'>Outgoing stays</p>
        <hr/>
        <p className='h6'>Previous stays</p>
        <hr/>
        <p className='h6'>Reports</p>
        <hr/>
        <button className='btn1'>Log-out</button>
        <p className='name1'>Help-Desk <br/> 786-874 9988</p>
    </div>
    </div>

{/* // ALL CONTENT HERE  */}

    <div className='content'>
    <CurrentlyState/>
 

    <div className='content2'>
    <Panel/>
    <Cards/>
    </div>
   
     <div className='icons'>
        <img src={IMG}  className='img'/>
     </div>

  </div>  
        
 
    
    </div>
    </>
  )
}

export default SideBar