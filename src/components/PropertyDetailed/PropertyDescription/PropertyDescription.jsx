import React from 'react'
import './propertyDescription.css'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';    

const PropertyDescription = () => {
  return (
    <div className="property-detailed-description mt-4">
        <div className="property-detailed-overview">
            <div className="property-detailed-overview-icons">
                <Splide options={{ type: 'slide',perPage: 2, rewind: false, drag: 'free', speed: 3000, gap: 0, arrows: false, pagination: false, start: 0}}>
                    <SplideSlide className='property-detailed-overview-slide'>
                        <div className="property-detailed-overview-icon">
                            <img src="https://allrent.io/homepage/images/svg/details/guest_count.svg" alt="detail icon"/>
                            <p>9</p>
                            {/* <span className="overview-description">Maximum Guests</span> */}
                        </div>
                    </SplideSlide>
                    
                    <SplideSlide>
                        <div className='property-detailed-overview-icon'>
                            <img src="https://allrent.io/homepage/images/svg/details/bedroom_count.svg" alt="detail icon"/>
                            <p>3</p>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className='property-detailed-overview-icon'>
                            <img src="https://allrent.io/homepage/images/svg/details/bed_count.svg" alt="detail icon"/>
                            <p>0</p>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className='property-detailed-overview-icon'>
                            <img src="https://allrent.io/homepage/images/svg/details/double_bed_count.svg" alt="detail icon"/>
                            <p>3</p>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className='property-detailed-overview-icon'>
                            <img src="https://allrent.io/homepage/images/svg/details/bathroom_count.svg" alt="detail icon"/>
                            <p>1</p>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className='property-detailed-overview-icon'>
                            <img src="https://allrent.io/homepage/images/svg/details/additional_room_count.svg" alt="detail icon"/>
                            <p>2</p>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>

        <div className="propert-detailed-description-text">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod pariatur et at velit aperiam, omnis nemo dicta ipsa quaerat, esse animi ex recusandae quas cum delectus est? Ex quae ipsa placeat.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod pariatur et at velit aperiam, omnis nemo dicta ipsa quaerat, esse animi ex recusandae quas cum delectus est? Ex quae ipsa placeat.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod pariatur et at velit aperiam, omnis nemo dicta ipsa quaerat, esse animi ex recusandae quas cum delectus est? Ex quae ipsa placeat.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod pariatur et at velit aperiam, omnis nemo dicta ipsa quaerat, esse animi ex recusandae quas cum delectus est? Ex quae ipsa placeat.
            </p>
        </div>

        <div className="property-detailed-owner d-flex">
            <div className="owner-profile my-auto">
                <svg width="50" height="50" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="120" rx="60" fill="#C9C9C9"></rect>
                    <path d="M51.7525 73.607C57.2712 73.1623 62.8153 73.1623 68.334 73.607C71.3393 73.7822 74.3303 74.1581 77.2881 74.7324C83.6886 76.0284 87.8671 78.1429 89.6579 81.5533C91.0029 84.215 91.0029 87.3836 89.6579 90.0453C87.8671 93.4557 83.8544 95.7066 77.2218 96.8662C74.2663 97.4622 71.2746 97.8496 68.2677 98.0257C65.482 98.3327 62.6963 98.3327 59.8774 98.3327H54.8035C53.7422 98.1963 52.7142 98.1281 51.7193 98.1281C48.7123 97.9734 45.7199 97.5973 42.7652 97.0026C36.3648 95.7748 32.1862 93.5922 30.3954 90.1817C29.7041 88.8606 29.3396 87.3848 29.3337 85.8846C29.3198 84.3752 29.6732 82.8861 30.3622 81.5533C32.1199 78.1429 36.2984 75.9261 42.7652 74.7324C45.733 74.1499 48.7355 73.7739 51.7525 73.607ZM60.0101 21.666C71.1276 21.666 80.1401 30.9343 80.1401 42.3674C80.1401 53.8004 71.1276 63.0687 60.0101 63.0687C48.8926 63.0687 39.88 53.8004 39.88 42.3674C39.88 30.9343 48.8926 21.666 60.0101 21.666Z" fill="white"></path>
                </svg>
            </div>

            <div className="owner-info">
                <div className="owner-name">
                    Üç Gözəl Qəbələ
                </div>

                <div className="owner-rating d-flex">
                    <img class="details-name-favorite" src="https://allrent.io/homepage/images/svg/details/active_fav.svg" alt="favorite svg"/>
                    <p className='m-0'>5.0</p>
                </div>

                <div className="owner-languages">
                    <span>Dil : </span>Azərbaycan, Rus, İngilis
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyDescription
