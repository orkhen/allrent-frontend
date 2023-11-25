import React, { useContext } from 'react';
import { PropertyContext } from '../PropertyContext';

import './propertyReserveButton.css'

const PropertyReserveButton = () => {
  const { setIsCalendarOpen } = useContext(PropertyContext);

  const handleOpenCalendar = () => {
    setIsCalendarOpen(true);
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
      reservationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="property-detailed-reserve">
      <div 
        className="property-detailed-reserve-button text-center"
        onClick={handleOpenCalendar}
      >
          Rezerv et
      </div>
    </div>
  );
};

export default PropertyReserveButton;
