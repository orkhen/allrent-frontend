import React, { useState } from 'react'
import './propertyReservationForm.css'


const PropertyReservationForm = () => {
    const [guests, setGuests] = useState(1)

    const handleIncrement = () => {
        if (guests < 9) {
          setGuests(guests + 1);
        }
      };

    const handleDecrement = () => {
        if (guests > 1) {
            setGuests(guests - 1);
        }
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        // Ensure the input value is a number
        if (!isNaN(inputValue)) {
          // Limit the number of guests to a minimum of 1 and a maximum of 5
          const newGuests = Math.min(Math.max(parseInt(inputValue, 10), 1), 5);
          if (isNaN(newGuests)) {
            setGuests('')
          } else {
            setGuests(newGuests);
          }
        }
      };
  return (
    <div className="property-detailed-reservation">
        <div className="property-reservation-form">
            <div className="reservation-container">
                <div className="reservation-form-title d-flex justify-content-between">
                    <div className="reservation-form-price">
                        <div className="property-detailed-price">
                            <p>
                                <svg width="15" height="15" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 15V8C1 6.67392 1.52678 5.40215 2.46447 4.46447C3.40215 3.52678 4.67392 3 6 3C7.32608 3 8.59785 3.52678 9.53553 4.46447C10.4732 5.40215 11 6.67392 11 8V15M6 1V15" stroke="#35605E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                222 <span> / gecə</span>
                            </p>
                        </div>
                    </div>

                    <div className="reservation-form-rating d-flex">
                        <p className='m-0'>5.0</p>
                        <svg width="15" height="15" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.99999 9.18314L3.23332 10.8498C3.1111 10.9276 2.98332 10.9609 2.84999 10.9498C2.71665 10.9387 2.59999 10.8942 2.49999 10.8165C2.39999 10.7387 2.32221 10.6416 2.26665 10.5251C2.2111 10.4082 2.19999 10.2776 2.23332 10.1331L2.96665 6.98314L0.516653 4.86647C0.405541 4.76647 0.336208 4.65247 0.308653 4.52447C0.280653 4.39692 0.288875 4.27203 0.333319 4.1498C0.377764 4.02758 0.44443 3.92758 0.533319 3.8498C0.622208 3.77203 0.74443 3.72203 0.899986 3.6998L4.13332 3.41647L5.38332 0.449805C5.43887 0.316472 5.5251 0.216471 5.64199 0.149805C5.75843 0.0831381 5.87776 0.0498047 5.99999 0.0498047C6.12221 0.0498047 6.24176 0.0831381 6.35865 0.149805C6.4751 0.216471 6.5611 0.316472 6.61665 0.449805L7.86665 3.41647L11.1 3.6998C11.2555 3.72203 11.3778 3.77203 11.4667 3.8498C11.5555 3.92758 11.6222 4.02758 11.6667 4.1498C11.7111 4.27203 11.7195 4.39692 11.692 4.52447C11.664 4.65247 11.5944 4.76647 11.4833 4.86647L9.03332 6.98314L9.76665 10.1331C9.79999 10.2776 9.78888 10.4082 9.73332 10.5251C9.67776 10.6416 9.59999 10.7387 9.49999 10.8165C9.39999 10.8942 9.28332 10.9387 9.14999 10.9498C9.01665 10.9609 8.88888 10.9276 8.76665 10.8498L5.99999 9.18314Z" fill="#40918B"></path>
                        </svg>
                    </div>
                </div>

                <div className="reservation-form-inputs">
                    <div className="reservation-form-dates d-flex">
                        <div className="reservation-move-in">
                            <h5>Giriş</h5>
                            <input type='text' placeholder='Kalendardan tarix seçin'/>
                        </div>

                        <div className="reservation-move-out">
                            <h5>Çıxış</h5>
                            <input type='text' placeholder='Kalendardan tarix seçin'/>
                        </div>
                    </div>

                    <div className="reservation-form-guests">
                        <h5>Qonaq sayı</h5>

                        <div className="guests-number-input d-flex gap-2">
                            <div className="guests-number-decrement" onClick={handleDecrement}>
                                -
                            </div>

                            <input type='text' value={guests} onChange={handleInputChange} />

                            <div className="guests-number-increment" onClick={handleIncrement}>
                                +
                            </div>
                        </div>
                    </div>

                    <div className="reservation-form-total-price">
                        <h5>Ümumi məbləğ</h5>
                        
                        <div className="reservation-total d-flex gap-2">
                            <svg width="15" height="15" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.83331 12.8332V6.99984C1.83331 5.89477 2.2723 4.83496 3.0537 4.05356C3.8351 3.27216 4.89491 2.83317 5.99998 2.83317C7.10505 2.83317 8.16486 3.27216 8.94626 4.05356C9.72766 4.83496 10.1666 5.89477 10.1666 6.99984V12.8332M5.99998 1.1665V12.8332" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <p className='my-auto'>0</p>
                        </div>
                    </div>
                </div>

                <div className="reservation-form-button mt-3">
                    Rezerv et
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyReservationForm
