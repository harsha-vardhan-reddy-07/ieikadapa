import React from 'react'

const Applications = () => {
  return (
    <div className='applications'> 
        <div className="applicationsTitle" id='Membership'>
            <hr id="hr1" />
            <h1>Membership Applications</h1>
            <hr id="hr2" />
        </div>
        <p>To become a member of the Institution of Engineers AP SC, utilize the new application forms provided. Previous application forms are no longer valid. Please contact the institution directly to inquire about any additional requirements for membership enrollment.</p>
        <div className="applicationLinks">
            <ul>
                <li><a href='#'>NEW MEMBERSHIP FORM FOR FIE</a></li>
                <li><a href='#'>NEW MEMBERSHIP FORM FOR MIE</a></li>
                <li><a href='#'>NEW MEMBERSHIP FORM FOR AMIE</a></li>
                <li><a href='#'>NEW MEMBERSHIP FORM FOR AMTIE</a></li>
                <li><a href='#'>NEW MEMBERSHIP FORM FOR MTIE</a></li>
                
            </ul>
            <ul>
                <li><a href='#'>NEW MEMBERSHIP FORM FOR SMIE</a></li>
                <li><a href='#'>NEW MEMBERSHIP FORM FOR ST/T</a></li>
                <li><a href='#'>COAL INDIA AWARD</a></li>
                <li><a href='#'>SAIL AWARD AND DR M VISVESVARAYA AWARD</a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Applications