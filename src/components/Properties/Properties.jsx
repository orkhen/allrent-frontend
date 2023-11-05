import React, { useState, useEffect } from 'react';
import './properties.css';

import Carousel from 'react-bootstrap/Carousel';

const Properties = ({ title, properties }) => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
    console.log(index)
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  const propertyPhotos = [
    'https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-08-18%20at%2017.07.25-f8d8-decb-2c38-d3c4.webp',
    'https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-07-08%20at%2022.16.02%20(1)-f8d8-decb-2c38-d3c4.webp',
    'https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-07-08%20at%2022.15.55-f8d8-decb-2c38-d3c4.webp',
    'https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-07-08%20at%2022.16.02%20(1)-f8d8-decb-2c38-d3c4.webp',
    // 'https://allrent.io/storage/medium_frame_WhatsApp%20Image%202023-08-18%20at%2017.07.25-f8d8-decb-2c38-d3c4.webp',
    'https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-08-18%20at%2017.07.25-f8d8-decb-2c38-d3c4.webp',
    'https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-07-08%20at%2022.16.02%20(1)-f8d8-decb-2c38-d3c4.webp',
    'https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-07-08%20at%2022.15.55-f8d8-decb-2c38-d3c4.webp',
    'https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-07-08%20at%2022.16.02%20(1)-f8d8-decb-2c38-d3c4.webp',
  ]
  const renderPropertyCards = (numColumns) => {
    const columns = Array.from({ length: numColumns }, (_, index) => (
      <div 
        className="mb-4 properties-property" 
        key={index}
        onMouseEnter={() => handleCardMouseEnter(index)}
        onMouseLeave={handleCardMouseLeave}
      >
        <a href='/property/1'>
            <div className="card">
              <Carousel touch={true} interval={null} indicators={false} controls={hoveredCardIndex === index ? true : (windowWidth <= 768 ? true : false)}>
                {
                  propertyPhotos.map((photo, index) => {
                    return (
                    <Carousel.Item key={index}>
                      <img src={photo} className="card-img-top" alt='img' />
                    </Carousel.Item>
                  )})
                }
              </Carousel>
            <div className="card-body">
                <div className="card-info d-flex flex-column">
                    <div className="info-top d-flex justify-content-between">
                        <h5 className="card-title">Property Title</h5>

                        <div className="card-rating d-flex">
                            <p>5.0</p>
                            <svg className='card-rating-star' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 16" fill="none"><path d="M8.83002 13.4221L5.02586 15.7137C4.8578 15.8207 4.68211 15.8665 4.49877 15.8512C4.31544 15.836 4.15502 15.7749 4.01752 15.6679C3.88002 15.561 3.77308 15.4274 3.69669 15.2673C3.6203 15.1066 3.60502 14.9269 3.65086 14.7283L4.65919 10.3971L1.29044 7.48668C1.13766 7.34919 1.04233 7.19243 1.00444 7.01643C0.965937 6.84105 0.977243 6.66932 1.03835 6.50127C1.09947 6.33321 1.19113 6.19571 1.31335 6.08877C1.43558 5.98182 1.60363 5.91307 1.81752 5.88252L6.26336 5.49293L7.98211 1.41377C8.0585 1.23044 8.17705 1.09294 8.33777 1.00127C8.49789 0.909603 8.66197 0.86377 8.83002 0.86377C8.99808 0.86377 9.16247 0.909603 9.32319 1.00127C9.4833 1.09294 9.60155 1.23044 9.67794 1.41377L11.3967 5.49293L15.8425 5.88252C16.0564 5.91307 16.2245 5.98182 16.3467 6.08877C16.4689 6.19571 16.5606 6.33321 16.6217 6.50127C16.6828 6.66932 16.6944 6.84105 16.6565 7.01643C16.618 7.19243 16.5224 7.34919 16.3696 7.48668L13.0008 10.3971L14.0092 14.7283C14.055 14.9269 14.0397 15.1066 13.9633 15.2673C13.8869 15.4274 13.78 15.561 13.6425 15.6679C13.505 15.7749 13.3446 15.836 13.1613 15.8512C12.9779 15.8665 12.8022 15.8207 12.6342 15.7137L8.83002 13.4221Z" fill="#40918B"/></svg>
                        </div>
                    </div>

                    <div className="info-mid">
                        <p>5 nəfər • 4 otaq • 3 tualet</p>
                    </div>

                    <div className="info-bottom d-flex justify-content-between">
                        <p className='m-0'>
                            <span className='card-price'>150 azn</span> 
                            <span className='card-price-per'>Günlük</span>
                        </p>
                    </div>

                    {/* <div className="info-reserve mx-auto mt-3">
                      <a className='card-reserve' href=''>Rezerv et</a>
                    </div> */}
                </div>
            </div>
            </div>
        </a>
      </div>
    ));

    return columns;
  };

  return (
    <div className="properties">
      <div className="properties-container">
        <div className="properties-header d-flex justify-content-between">
          <div className="properties-title">
            <h4>{title}</h4>
          </div>

          <div className="properties-more">
            <a href="">Hamısına bax</a>
          </div>
        </div>

        <div className="properties-content">
          {renderPropertyCards(10)}
          {/* <div className="row">{renderPropertyCards(4)}</div> */}
          {/* <div className="row">{renderPropertyCards(4)}</div>
          <div className="row">{renderPropertyCards(2)}</div> */}
        </div>

        <div className='properties-more-button-container d-flex align-items-center justify-content-center'>
            <div className="properties-more-button red-button-animation">
              <a href='/  map'>
                <div className="text-center">
                  Xəritədə bax
                </div>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
