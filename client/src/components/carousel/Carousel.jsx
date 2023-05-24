import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import slide1 from '../../assets/images/carousel/slide-1.gif'
import slide2 from '../../assets/images/carousel/slide-2.gif'
import slide3 from '../../assets/images/carousel/slide-3.gif'

const HomeCarousel = () => {
  return (
    <>
        <Container className='py-3'>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={slide1} 
                        alt="" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={slide2} 
                        alt="" 
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100" 
                        src={slide3} 
                        alt="" 
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    </>
  )
}

export default HomeCarousel