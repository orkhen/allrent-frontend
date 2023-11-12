import React, { useState, useRef } from 'react'
import './propertyReservationForm.css'

import { DateRange } from 'react-date-range';
import { range } from 'lodash';

const PropertyReservationForm = () => {
    const [guests, setGuests] = useState(1)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDates, setSelectedDates] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    ]);

    // const calendarRef = useRef(null);

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
        if (!isNaN(inputValue)) {
          const newGuests = Math.min(Math.max(parseInt(inputValue, 10), 1), 9);
          if (isNaN(newGuests)) {
            setGuests('')
          } else {
            setGuests(newGuests);
          }
        }
      };

    const handleCalendarToggle = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    const handleDateSelect = (ranges) => {
        setSelectedDates([ranges.selection])
        if ([ranges.selection][0].startDate != [ranges.selection][0].endDate) {
            setIsCalendarOpen(false)
        }
    };

    var today = new Date();
    const diffDays = () => {
        var start = new Date(selectedDates[0].endDate.toLocaleDateString())
        var end = new Date(selectedDates[0].startDate.toLocaleDateString())
        
        const diffTime = Math.abs(end - start);
        console.log(diffTime)
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    }
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
                </div>

                <div className="reservation-form-inputs noselect">
                    <div className="reservation-form-dates d-flex">
                        <div className="reservation-move-in" onClick={handleCalendarToggle}>
                            <h5>Giriş</h5>
                            <p className='m-0' onClick={handleCalendarToggle}>{selectedDates[0].startDate ? selectedDates[0].startDate.toLocaleDateString() : "Kalendardan tarix seçin"}</p>
                        </div>

                        <div className="reservation-move-out" onClick={handleCalendarToggle}>
                            <h5>Çıxış</h5>
                            <p className='m-0' onClick={handleCalendarToggle}>{selectedDates[0].endDate ? selectedDates[0].endDate.toLocaleDateString() : ''}</p>
                        </div>
                    </div>

                    {isCalendarOpen && (
                        <DateRange
                            // ref={calendarRef}
                            className="daterange-custom"
                            editableDateInputs={true}
                            onChange={handleDateSelect} 
                            moveRangeOnFirstSelection={false}
                            ranges={selectedDates}
                            months={1}
                            direction="horizontal"
                            rangeColors={['#FE4343']}
                            minDate={today}
                        />
                    )}

                    <div className="reservation-form-guests">
                        <h5>Qonaq sayı</h5>

                        <div className="guests-number-input d-flex gap-2">
                            <div className="guests-number-decrement noselect" onClick={handleDecrement}>
                                -
                            </div>

                            <input type='text' value={guests} onChange={handleInputChange} />

                            <div className="guests-number-increment noselect" onClick={handleIncrement}>
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
                            <p className='my-auto'>{diffDays() > 0 ? diffDays() * 222 : 0}</p>
                        </div>
                    </div>
                </div>

                <div className="reservation-form-button mt-3 red-button-animation noselect" id='reservation-form'>
                    Davam et
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyReservationForm
