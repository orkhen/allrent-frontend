import React, { useState, useEffect, useContext } from 'react'
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
import PropertyReservationForm from './PropertyReservationForm/PropertyReservationForm'
import PropertyCalendar from './PropertyCalendar/PropertyCalendar'
import { AppContext } from '../../App'
import PropertyHeader from './PropertyHeader/PropertyHeader'
import { PropertyContext } from './PropertyContext'

const PropertyDetailed = () => {
  const { property } = useContext(PropertyContext);
  const { windowWidth } = useContext(AppContext)

  return (
    <div className='property-detailed'>
      <div className="property-detailed-container">
        <PropertyHeader />

        <div className="property-detailed-main d-flex gap-4">
            <div className="property-detailed-content">
                <PropertyImages/>
                <PropertyCategory/>
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

        <div className="property-detailed-bottom">
          <div className="bottom-left">
            <div className="bottom-price">
              <div className="property-detailed-price">
                  <p>
                      <svg width="15" height="15" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 15V8C1 6.67392 1.52678 5.40215 2.46447 4.46447C3.40215 3.52678 4.67392 3 6 3C7.32608 3 8.59785 3.52678 9.53553 4.46447C10.4732 5.40215 11 6.67392 11 8V15M6 1V15" stroke="#35605E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      {property.price} <span> / gecə</span>
                  </p>
              </div>
            </div>
          </div>

          <div className="bottom-right">
              <div className="bottom-reserve-button">
                <PropertyReserveButton/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailed
