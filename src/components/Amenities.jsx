import React from 'react';
import Carousel from 'better-react-carousel';

const Amenities = () => {
  return (
    <div className='amenities'>

      <h1>Life at IEI KLC</h1>
      <hr />
        
      <Carousel cols={3} rows={1} gap={20} loop={true} showDots={true}  >
      <Carousel.Item >
        <img width="100%"  src="https://picsum.photos/800/600?random=1"   style={{borderRadius:'1rem', maxHeight:'50vh'}} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2"  style={{borderRadius:'1rem'}} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3"  style={{borderRadius:'1rem'}} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3"  style={{borderRadius:'1rem'}} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2"  style={{borderRadius:'1rem'}} />
      </Carousel.Item>
      <Carousel.Item  >
        <img width="100%"  src="https://picsum.photos/800/600?random=1"   style={{borderRadius:'1rem'}} />
      </Carousel.Item>
      

    </Carousel>

    </div>
  )
}

export default Amenities