import React, { useState, useEffect } from 'react'
import './propertyDetailed.css'

import PropertyImages from './PropertyImages/PropertyImages'
import PropertyCategory from './PropertyCategory/PropertyCategory'
import PropertyReserveButton from './PropertyReserveButton/PropertyReserveButton'
import PropertyOpinion from './PropertyOpinion/PropertyOpinion'
import PropertyDescription from './PropertyDescription/PropertyDescription'
import PropertyPermits from './PropertyPermits/PropertyPermits'
import PropertyConditions from './PropertyConditions/PropertyConditions'
import PropertyMap from './PropertyMap/PropertyMap'
import PropertyComments from './PropertyComments/PropertyComments'
import PageFooter from '../Footer/Footer'
import PropertyReservationForm from './PropertyReservationForm/PropertyReservationForm'
import PropertyCalendar from './PropertyCalendar/PropertyCalendar'

const PropertyDetailed = () => {
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

  return (
    <div className='property-detailed'>
      <div className="property-detailed-container">
        <div className="property-detailed-header d-flex justify-content-between">
            <div className="property-detailed-title">
                <h5 className='d-flex'>
                    <span>3 Gozel Qebele A-Frame Villa</span> 
                    <span className='property-detailed-rating'>
                        5.0
                        <img src="https://allrent.io/homepage/images/svg/details/active_fav.svg" alt="favorite svg"></img>
                    </span>
                </h5>
            </div>

            <div className="property-detailed-options d-flex">
                <div className="property-detailed-like">
                    <svg width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.52765C7.64418 -0.583106 4.02125 -0.506535 1.75736 1.75736C-0.585786 4.1005 -0.585786 7.8995 1.75736 10.2426L8.58579 17.0711C9.36684 17.8521 10.6332 17.8521 11.4142 17.0711L18.2426 10.2426C20.5858 7.8995 20.5858 4.1005 18.2426 1.75736C15.9787 -0.506535 12.3558 -0.583106 10 1.52765ZM8.82843 3.17157L9.29289 3.63604C9.68342 4.02656 10.3166 4.02656 10.7071 3.63604L11.1716 3.17157C12.7337 1.60948 15.2663 1.60948 16.8284 3.17157C18.3905 4.73367 18.3905 7.26633 16.8284 8.82843L10 15.6569L3.17157 8.82843C1.60948 7.26633 1.60948 4.73367 3.17157 3.17157C4.73367 1.60948 7.26633 1.60948 8.82843 3.17157Z" fill="#1D1D1D"></path>
                    </svg>
                    <p>Bəyən</p>
                </div>
                
                <div className="property-detailed-share">
                    <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.08334 14.5464C7.76609 14.5464 9.13022 13.1823 9.13022 11.4995C9.13022 9.81677 7.76609 8.45264 6.08334 8.45264C4.4006 8.45264 3.03647 9.81677 3.03647 11.4995C3.03647 13.1823 4.4006 14.5464 6.08334 14.5464Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16.9167 19.9634C18.5994 19.9634 19.9635 18.5992 19.9635 16.9165C19.9635 15.2338 18.5994 13.8696 16.9167 13.8696C15.2339 13.8696 13.8698 15.2338 13.8698 16.9165C13.8698 18.5992 15.2339 19.9634 16.9167 19.9634Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16.9167 9.12988C18.5994 9.12988 19.9635 7.76575 19.9635 6.08301C19.9635 4.40027 18.5994 3.03613 16.9167 3.03613C15.2339 3.03613 13.8698 4.40027 13.8698 6.08301C13.8698 7.76575 15.2339 9.12988 16.9167 9.12988Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M8.79166 10.1453L14.2083 7.43701M8.79166 12.8537L14.2083 15.562L8.79166 12.8537Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p>Paylaş</p>
                </div>
            </div>
        </div>

        <div className="property-detailed-main d-flex gap-4">
            <div className="property-detailed-content">
                <PropertyImages/>
                <PropertyCategory/>
                <PropertyOpinion/>
                <PropertyReserveButton/>
                <PropertyDescription/>
                <PropertyPermits/>
                <PropertyConditions/>
                <PropertyCalendar/>

                <PropertyMap/>
                {
                    windowWidth < 778 &&
                    <PropertyReservationForm/>
                }
                <PropertyComments/>
            </div>
            {
                windowWidth > 778 &&
                <PropertyReservationForm/>
            }
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailed
