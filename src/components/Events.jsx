import React from 'react';
import Carousel from 'better-react-carousel';

const Events = () => {
  return (
    <div className='events'  >
        <div className="eventsTitles" id='Events'>
            <h1>News & Events</h1>
            <hr id='eventsHr1' />
            <h2>Upcomming Events</h2>
            <hr id="eventsHr2" />
        </div>

        <div className="eventsTotalContent">
            <div className="newsEvents">

                <Carousel cols={3} rows={1} gap={10} loop={true} showDots={true}  >
                    <Carousel.Item >
                        <img width="100%"  src="https://picsum.photos/800/600?random=1" id='eveImg1'  style={{borderRadius:'1rem', maxHeight:'50vh'}} />
                        <label htmlFor="eveImg1">New administration</label>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=2" id='eveImg2' style={{borderRadius:'1rem'}} />
                        <label htmlFor="eveImg2">building opening</label>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=3" id='eveImg3' style={{borderRadius:'1rem'}} />
                        <label htmlFor="eveImg3">administration building</label>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=3" id='eveImg4' style={{borderRadius:'1rem'}} />
                        <label htmlFor="eveImg4">New administration building opening</label>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/800/600?random=2" id='eveImg5' style={{borderRadius:'1rem'}} />
                        <label htmlFor="eveImg5">New administration building opening</label>
                    </Carousel.Item>
                    <Carousel.Item  >
                        <img width="100%"  src="https://picsum.photos/800/600?random=1" id='eveImg6'  style={{borderRadius:'1rem'}} />
                        <label htmlFor="eveImg6">New administration building opening</label>
                    </Carousel.Item>
                </Carousel>

            </div>
            <div className="upcommingEvents">
                <p>No Upcomming events!</p>
            </div>
        </div>


    </div>
  )
}

export default Events