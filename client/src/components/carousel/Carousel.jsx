import React from 'react'
import poster1 from '../../assets/carousel/poster1.jpg'
import poster2 from '../../assets/carousel/poster2.jpg'
import poster3 from '../../assets/carousel/poster3.jpg'

const Carousel = () => {
  return (
    <>
        <div className="container-fluid">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={poster1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={poster2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={poster3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
  )
}

export default Carousel