import React from 'react';
import secratary from '../images/secretary.jpg';
import chairman from '../images/chairman.jpg';
import president from '../images/president.jpg';
import ieiBg from '../images/ieiPic.jpg';
import {FaGraduationCap} from 'react-icons/fa';
import {TbTargetArrow} from 'react-icons/tb';

const About = () => {
  return (
    <div className='about' >
      
      <div className="aboutPart1" id='AboutUs'>
        <h1>About Us</h1>
        <hr />
      </div>
      <div className='aboutBox'>
        <img src={ieiBg} alt="" />
        <div className="aboutBoxContent">
          <div className="aboutContentPara">
          <p>The Institution of Engineers, India (IEI) is a highly esteemed professional organization with a rich history and a strong commitment to the advancement of engineering in India. One of its prominent branches, the Kadapa Local Center, plays a vital role in serving the needs of engineers, engineering students, and various stakeholders within the region.</p>
          <p>The Kadapa Local Center of IEI serves as a hub of knowledge and expertise for individuals interested in the field of engineering. It provides a platform for engineers from diverse backgrounds to come together, collaborate, and share their knowledge and experiences.</p>
          </div>
          <div className='aboutBoxIcons'>
            <div className="aboutIcon1">
              <TbTargetArrow />
              <p>Our vision</p>
            </div>
            <div className="aboutIcon2">
              <FaGraduationCap />
              <p>Hallmark Points</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutPart2">


          <div className="aboutPart2Content">
            
            <div className="localAuthority">
              <div className="localAuthorityTitle">
                <hr id="hr1" />
                <h1>Authorities of IEI KLC</h1>
                <hr id="hr2" />
              </div>
              <div className="localAuthorityPersons">
                <div className="localPerson1">
                  <img src={chairman} alt="" />
                  <h2>Er. N. Bramhanda Reddy, <span style={{fontSize: '0.8rem', fontWeight: '400'}} >FIE</span></h2>
                  <p>Chairman, IEI KLC</p>
                </div>
              
                <div className="localAuthorityPerson">
                  <img src={secratary} alt="" />
                  <h2>Er. R. Narendra Rao, <span style={{fontSize: '0.8rem', fontWeight: '400'}} >MIE</span></h2>
                  <p>Honorary Secretary, IEI KLC</p>
                </div>
              </div>
            </div>
            <div className="higherAuthority">
              <div className="higherAuthorityTitle">
                <hr id="hr1" />
                <h1>Higher Authorities</h1>
                <hr id="hr2" />
              </div>
              <div className="higherAuthorityPerson">
                <img src={president} alt="" />
                <h2>Er. Chinmay Debnath, <span style={{fontSize: '0.8rem', fontWeight: '400'}} >FIE</span></h2>
                <p>President, IEI</p>
              </div>
            </div>
          </div>



        {/* <div className="aboutPart2Content">
          <div className="aboutPerson">
            <div className="aboutPersonImgData">
              <img src={chairman} alt="" />
              <h2>Er. N. Bramhanda Reddy, <span style={{fontSize: '0.8rem', fontWeight: '400'}} >FIE</span></h2>
              <p>Chairman, IEI KLC</p>
            </div>
            <div className='aboutPersonQuote'>
              <p>"The Institution of Engineers, India (IEI) is a prestigious professional organization established to promote and advance the field of engineering in India. The Kadapa Local Center caters to the needs of engineers, engineering students, and other stakeholders in the region. "</p>
            </div>
          </div>
          <div className="aboutPerson">
            <div className='aboutPersonQuote'>
              <p>" The Kadapa Local Center caters to the needs of engineers, engineering students, and other stakeholders in the region.  It serves as a valuable resource for individuals interested in the field of engineering, promoting the exchange of ideas and the advancement of engineering education and practice."</p>
            </div>
            <div className="aboutPersonImgData">
              <img src={secratary} alt="" />
              <h2>Er. R. Narendra Rao, <span style={{fontSize: '0.8rem', fontWeight: '400'}} >MIE</span></h2>
              <p>Honorary Secretary, IEI KLC</p>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default About