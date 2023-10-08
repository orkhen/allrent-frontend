import React from 'react'
import './propertyReserveButton.css'

const PropertyReserveButton = () => {
  return (
    <div className="property-detailed-reserve text-center">
        <a href='#reservation-form' className='property-detailed-reserve-button mx-auto red-button-animation'>
            <div className="property-detailed-reserve-text mx-auto red-button-animation">
                Rezerv et
            </div>
        </a>
    </div>
  )
}

export default PropertyReserveButton
