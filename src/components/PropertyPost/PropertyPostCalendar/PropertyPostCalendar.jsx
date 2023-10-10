import React, { useEffect, useState } from 'react'
import './propertyPostCalendar.css'

import { DateRange } from 'react-date-range';

const PropertyPostCalendar = ({ step, switchStep }) => {
  const [selectedDates, setSelectedDates] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    ]);
  var today = new Date();

  useEffect(() => {
    if (step === 6) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }, [step]);

  return (
    <div className={`property-post-calendar d-flex justify-content-center ${step !== 6 ? 'hide' : 'slide-top'}`}>
      <div className="property-post-calendar-container property-post-container d-flex flex-column">
        <div className="property-post-calendar-title">
          <h4>Qonaqlar müəsisənizi hansı tarixdən etibarən rezervasiya edə bilər ?</h4>
        </div>

        <div className="property-calendar">
          {/* <DateRange
              // ref={calendarRef}
              className="daterange-custom"
              editableDateInputs={true}
              // onChange={handleDateSelect} 
              moveRangeOnFirstSelection={false}
              ranges={selectedDates}
              months={2}
              direction="vertical"
              rangeColors={['#FE4343']}
              minDate={today}
          /> */}

          Under development...
        </div>

        <div className="inputs-property-buttons d-flex justify-content-between mb-5">
            <div className="button-back d-flex align-items-start gap-2" onClick={() => switchStep(-1)}>
                <p className='m-0'>Geri</p>
            </div>

            <div className={`button-next d-flex align-items-start gap-2 ${'enabled'}`} onClick={() => switchStep(0)}>
                <p className='m-0'>Davam et</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyPostCalendar
