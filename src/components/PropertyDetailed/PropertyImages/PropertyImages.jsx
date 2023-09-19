import React from 'react'
import './propertyImages.css'

const PropertyImages = () => {
  return (
    <div className="property-detailed-images">
        <div class="row property-image-main">
            <div class="col">
                <img src="https://allrent.io/storage/medium_frame_WhatsApp%20Image%202023-08-18%20at%2017.07.25-f8d8-decb-2c38-d3c4.webp" alt="proeprty image" />
            </div>
        </div>

        <div class="row property-image-secondary">
            <div class="col">
                <img src="https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-08-18%20at%2017.07.25-f8d8-decb-2c38-d3c4.webp" alt="property image" />
            </div>

            <div class="col">
                <img src="https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-07-08%20at%2022.16.02%20(1)-f8d8-decb-2c38-d3c4.webp" alt="property image" />
            </div>

            <div class="col">
                <img src="https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-07-08%20at%2022.15.55-f8d8-decb-2c38-d3c4.webp" alt="property image" />
            </div>

            <div class="col" id='images-more'>
                <img src="https://allrent.io/storage/mini_frame_WhatsApp%20Image%202023-07-08%20at%2022.16.02%20(1)-f8d8-decb-2c38-d3c4.webp" alt="property image" />
                
                <div className="images-more-text text-center d-flex justify-content-center align-items-center">
                    +10 Şəkil
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyImages
