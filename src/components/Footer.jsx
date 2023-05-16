import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerTitle">
            <h2>Quick Links</h2>
            <hr />
        </div>
        <div className="footerLinks">
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Upcomming Events</li>
          </ul>
          <ul>
            <li>Events & News</li>
            <li>IEI kadapa life</li>
            <li>Internships</li>
          </ul>
          <ul>
            <li>Address</li>
            <li>Committee members</li>
            <li>Our vision</li>
          </ul>
        </div>
        <div className="footerCopyRights">
          <hr />
          <p>&#169; 2023 IEI Kadapa </p>
        </div>
    </div>
  )
}

export default Footer