import React, { useEffect, useState } from 'react'
import './propertyImages.css'

import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

const PropertyImages = () => {
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

    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
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
            <ModalHeader closeButton></ModalHeader>
            <Modal.Body>
              {/* <img src={propertyPhotos[selectedImageIndex]} alt="property image" /> */}
              <div className="modal-image-container d-flex align-items-center">
              <Carousel data-bs-theme={windowWidth > 992 ? "dark" : undefined} indicators={false} touch={true} interval={null} className="property-modal-carousel">
                {propertySlidePhotos.map((photo, index) => (
                  <Carousel.Item
                    interval={10}
                    className="property-images-carousel-item"
                    key={index}
                    onClick={() => handleImageClick(index)}
                  >
                    <div class="col d-flex align-items-center justify-content-center my-auto">
                      <img src={photo} alt="property image" />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
      
}

export default PropertyImages
