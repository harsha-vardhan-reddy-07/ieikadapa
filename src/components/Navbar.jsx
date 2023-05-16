import React, { useEffect, useState } from 'react';
import ieiLogo from '../images/iei-logo.png';
import {HiOutlineMenu} from 'react-icons/hi';
import {RxCross2} from 'react-icons/rx';

export const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const [toggleMenuStyle, setToggleMenuStyle] = useState({});
  const [toggleXStyle, setToggleXStyle] = useState({});
  const [navOptionsStyle, setNavOptionsStyle] = useState({});
  const [navLiStyle, setNavLiStyle] = useState({});

  let pagewidth = window.screen.width;

  const handleToggle = () =>{
    setToggle(!toggle);
  }

  

  useEffect(() => {
    if (toggle === true){
      setToggleMenuStyle({
        display:'none'
      });
      setToggleXStyle({
        display:'block'
      });
      setNavOptionsStyle({
        display:'block'
      });
    }
    else{
      if (pagewidth > 600){
        setToggleMenuStyle({
          display:'none'
        });
        setToggleXStyle({
          display:'none'
        });
        setNavOptionsStyle({
          display:'contents'
        });
      }else{
        setToggleMenuStyle({
          display:'block'
        });
        setToggleXStyle({
          display:'none'
        });
        setNavOptionsStyle({
          display:'none'
        });
      }
    }
  }, [toggle]);


  const [navbarStyle, setNavbarStyle] = useState({});
  const [navLogoStyle, setNavLogoStyle] = useState({});
  const [navLogoStyleh1, setNavLogoStyleh1] = useState({});
  const [navLogoStylep, setNavLogoStylep] = useState({});


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 150) {
      setNavbarStyle({
        backgroundColor: '#f2f9fa',
        height: '11vh'
      });
      setNavLogoStyle({
        width:'60px',
        height:'60px',
      });
      setNavLogoStyleh1({
        fontSize:'2.2rem',
        color: '#003963'
      });
      setNavLogoStylep({
        fontSize:'1rem',
        color: '#003963'
      });
      setNavLiStyle({
        color: '#055188'
      });


    } else {
      setNavbarStyle({
        background: 'none',
      });
      setNavLogoStyle({
        width:'100px',
        height:'100px',
      });
      setNavLogoStyleh1({
        fontSize:'4rem',
        color: '#055188'
      });
      setNavLogoStylep({
        fontSize:'1.5rem',
        color: '#055188'
      });
      setNavLiStyle({
        color: '#cccaca'
      });
    }
  };



  return (
    <div className='navbar' style={navbarStyle} >
        <div className="navbarLogo">
          <img src={ieiLogo} alt="" style={navLogoStyle} />
          <div className='navbarLogoText'>
            <h1 style={navLogoStyleh1}>IEI</h1>
            <p style={navLogoStylep}>Kadapa</p>
          </div>
        </div>

        <div className="toggle">
            <HiOutlineMenu id='toggleMenu' onClick={handleToggle} style={toggleMenuStyle} />
            <RxCross2 id='toggleX' onClick={handleToggle} style={toggleXStyle} />
        </div>

        <div className="navOptions" style={navOptionsStyle}>
          <ul >
            <li ><a href="#" style={navLiStyle}>Home</a></li>
            <li ><a href="#AboutUs" style={navLiStyle}>About Us</a></li>
            <li ><a href="#Events" style={navLiStyle}>Events</a></li>
            <li ><a href="#Membership" style={navLiStyle}>Membership</a></li>
            <li ><a href="#ContactUs" style={navLiStyle}>Contact Us</a></li>
          </ul>
        </div>
        
    </div>
  )
}