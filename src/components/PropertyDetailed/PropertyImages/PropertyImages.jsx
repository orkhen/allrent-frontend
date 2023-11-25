import React, { useEffect, useState, useContext } from 'react'
import './propertyImages.css'
import '@splidejs/react-splide/css';

import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { IoCloseOutline } from "react-icons/io5";

import { AppContext } from '../../../App';

const PropertyImages = () => {
    const { windowWidth } = useContext(AppContext)

    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
      };      

    const handleSelect = (selectedIndex) => {
      setSelectedImageIndex(selectedIndex);
    };

    const propertyPhotos = [
        'https://allrent.io/storage/medium_frame_WhatsApp%20Image%202023-08-18%20at%2017.07.25-f8d8-decb-2c38-d3c4.webp',
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

    const propertySlidePhotos = propertyPhotos.slice(1, propertyPhotos.length - 1)

    const propertyPhotosSecondary = propertyPhotos.slice(1, 4)

    return (
        <div className="property-detailed-images">
          <div className="row property-image-main">
            {windowWidth <= 778 ? (
              <Carousel touch={true} interval={null} className="property-images-carousel">
                {propertySlidePhotos.map((photo, index) => (
                  <Carousel.Item
                    interval={10}
                    className="property-images-carousel-item"
                    key={index}
                    onClick={() => handleImageClick(index)}
                  >
                    <div class="col">
                      <img src={photo} alt="property image" />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <div class="col">
                <img src={propertyPhotos[0]} alt="property image" onClick={() => handleImageClick(0)} />
              </div>
            )}
          </div>
      
          {windowWidth > 778 && (
            <div class="row property-image-secondary">
              {propertyPhotosSecondary.map((photo, index) => (
                <div class="col" key={index} onClick={() => handleImageClick(index + 1)}>
                  <img src={photo} alt="property image" />
                </div>
              ))}
      
              <div class="col" id="images-more" onClick={() => handleImageClick(propertyPhotos.length - 1)}>
                <img src={propertyPhotos[propertyPhotos.length - 1]} alt="property image" />
      
                <div className="images-more-text text-center d-flex justify-content-center align-items-center">
                  +{propertyPhotos.length - 4} Şəkil
                </div>
              </div>
            </div>
          )}
      
          <Modal show={showModal} fullscreen={true} onHide={() => setShowModal(false)}>
              <svg className='modal-close-svg' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" width="2em" height="2em" xmlns="http://www.w3.org/2000/svg" onClick={() => setShowModal(false)}>
                <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144m224 0L144 368"></path>
              </svg>
            <Modal.Body className='property-detailed-images-modal-main'>
              <div className="modal-slide-count text-center">
                <h5>{selectedImageIndex + 1} / 7</h5>
              </div>

              <div className="modal-image-container d-flex flex-column align-items-center">
                <Carousel fade data-bs-theme={windowWidth > 992 ? "dark" : undefined} indicators={false} touch={true} interval={null} activeIndex={selectedImageIndex} onSelect={handleSelect} className="property-modal-carousel">
                  {propertySlidePhotos.map((photo, index) => (
                    <Carousel.Item
                      interval={10}
                      className="property-images-carousel-item"
                      key={index}
                    >
                      <div class="col d-flex align-items-center justify-content-center my-auto">
                        <img src={photo} alt="property image" />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div className="modal-slide-pagination-container d-flex justify-content-center mt-2">
                <div className="modal-slide-pagination d-flex">
                <Splide options={{ type: 'slide',perPage: 2, rewind: false, drag: 'free', speed: 3000, gap: 0, arrows: false, pagination: false }}>
                  {propertySlidePhotos.map((photo, index) => (
                    <SplideSlide key={index}>
                      <img src={photo} alt={`pagination ${index}`} onClick={() => setSelectedImageIndex(index)} />
                    </SplideSlide>
                  ))}
                </Splide>
                </div>
              </div>
              
            </Modal.Body>
          </Modal>
        </div>
      );
      
}

export default PropertyImages
