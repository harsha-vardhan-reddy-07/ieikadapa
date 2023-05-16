import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div className='hero'>



{/* <Carousel  className='carouselHero' >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3312671/pexels-photo-3312671.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3064258/pexels-photo-3064258.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1718337/pexels-photo-1718337.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  */}









          <div className="heroPolygon">
            <div className="heroTitle">
                <h1>The Institution of Engineers (India)</h1>
                <p>Kadapa Local Centre</p>
            </div>
            <div className="heroContent">
                <p>Our goal is to provide high-quality education, conduct research, and engage in community outreach to address emerging societal needs. We aim to develop well-rounded students who are globally competitive, socially responsible, and value-driven.</p>
                <button>Explore more</button>
            </div>
          </div>
    </div>
  )
}

export default Hero