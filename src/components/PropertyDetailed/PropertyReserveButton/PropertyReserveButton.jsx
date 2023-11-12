import React from 'react'
import './propertyReserveButton.css'

const PropertyReserveButton = () => {
  const scrollToReservationForm = () => {
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
      reservationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="property-detailed-reserve">
      <div 
        className="property-detailed-reserve-button red-button-animation text-center"
        onClick={scrollToReservationForm}
      >
          Rezerv et
      </div>
    </div>
  )
}

export default PropertyReserveButton
