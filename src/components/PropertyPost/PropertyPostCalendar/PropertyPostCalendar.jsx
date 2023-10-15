import React, { useEffect, useState } from 'react'
import './propertyPostCalendar.css'

import * as locales from 'react-date-range/dist/locale';
import { Calendar } from 'react-date-range';

const PropertyPostCalendar = ({ step, switchStep }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  
  const [locale, setLocale] = useState('en');
  
  var today = new Date();
  
  const [date, setDate] = useState(null);
  
  useEffect(() => {
    if (step === 6) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step]);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // console.log(date)
  return (
    <div className={`property-post-calendar d-flex justify-content-center ${step !== 6 ? 'hide' : 'slide-top'}`}>
      <div className="property-post-calendar-container property-post-container d-flex flex-column mb-5">
        <div className="property-post-calendar-title">
          <h4>Qonaqlar müəsisənizi hansı tarixdən etibarən rezervasiya edə bilər ?</h4>
        </div>

        <div className="property-calendar">
          <Calendar 
            onChange={item => setDate(item)}
            locale={locales[locale]} 
            date={date} 
            months={windowWidth > 768 ? 2 : 1}
            direction='horizontal'
            minDate={today}
            color='#fe4343'
            shownDate={today}
          />
        </div>

        <div className="inputs-property-buttons d-flex justify-content-between mb-5">
            <div className="button-back d-flex align-items-start gap-2" onClick={() => switchStep(-1)}>
                <p className='m-0'>Geri</p>
            </div>

            <div className={`button-next d-flex align-items-start gap-2 ${'enabled'}`} onClick={() => switchStep(1)}>
                <p className='m-0'>Davam et</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyPostCalendar
