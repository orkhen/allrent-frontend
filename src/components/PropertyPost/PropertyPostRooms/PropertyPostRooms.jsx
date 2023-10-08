import React, { useState } from 'react'
import './propertyPostRooms.css'

const PropertyPostRooms = ({ switchStep, step }) => {
    const [maxGuests, setMaxGuests] = useState(0)
    const [bedrooms, setBedrooms] = useState(0)
    const [doubleBed, setDoubleBed] = useState(0)
    const [singleBed, setSingleBed] = useState(0)
    const [extraBed, setExtraBed] = useState(0)
    const [bathroom, setBathroom] = useState(0)

    // const [isValid, setIsValid] = useState(false)

    const handleControls = (func, val, change) => {
        if (val + change < 0) {
            func(0)
        } else (
            func(val + change)
        )
    }

    const validate = () => {
        const validBeds = doubleBed > 0 || singleBed > 0;
        const isValid = maxGuests > 0 && bedrooms > 0 && validBeds && bathroom > 0;
        // setIsValid(isValid);
        return isValid
    }

  return (
    <div className={`property-post-rooms d-flex justify-content-center ${step !== 3 && 'hide'}`}>
      <div className="property-post-rooms-container">
        <div className="property-post-inputs-rooms d-flex flex-column">
            <div className="property-post-rooms-title">
                <h4>Obyekt haqqında bəzi əsas məlumatları qeyd edin</h4>
            </div>

            <div className="property-post-rooms-boxes">
                <div className="room-box d-flex align-items-center">
                    <h4>Maksimum qonaq sayı</h4>

                    <div className="room-box-control d-flex gap-4 noselect">
                        <div className="control-decrement d-flex align-items-center" onClick={() => handleControls(setMaxGuests, maxGuests, -1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M5.80005 17.0006C5.80005 16.2274 6.42685 15.6006 7.20005 15.6006H26.8C27.5732 15.6006 28.2 16.2274 28.2 17.0006C28.2 17.7738 27.5732 18.4006 26.8 18.4006H7.20005C6.42685 18.4006 5.80005 17.7738 5.80005 17.0006Z" fill="#E7E7E7"/>
                            </svg>
                        </div>

                        <div className="control-number">
                            {maxGuests}
                        </div>

                        <div className="control-increment d-flex align-items-center" onClick={() => handleControls(setMaxGuests, maxGuests, 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M17 5.7998C17.7732 5.7998 18.4 6.42661 18.4 7.1998V15.5998H26.8C27.5732 15.5998 28.2 16.2266 28.2 16.9998C28.2 17.773 27.5732 18.3998 26.8 18.3998H18.4V26.7998C18.4 27.573 17.7732 28.1998 17 28.1998C16.2269 28.1998 15.6 27.573 15.6 26.7998V18.3998H7.20005C6.42685 18.3998 5.80005 17.773 5.80005 16.9998C5.80005 16.2266 6.42685 15.5998 7.20005 15.5998H15.6V7.1998C15.6 6.42661 16.2269 5.7998 17 5.7998Z" fill="#6C6C6C"/>
                            </svg>
                        </div>  
                    </div>
                </div>

                <div className="room-box d-flex align-items-center">
                    <h4>Bir nəfərlik çarpayı</h4>

                    <div className="room-box-control d-flex gap-4 noselect">
                        <div className="control-decrement d-flex align-items-center" onClick={() => handleControls(setSingleBed, singleBed, -1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M5.80005 17.0006C5.80005 16.2274 6.42685 15.6006 7.20005 15.6006H26.8C27.5732 15.6006 28.2 16.2274 28.2 17.0006C28.2 17.7738 27.5732 18.4006 26.8 18.4006H7.20005C6.42685 18.4006 5.80005 17.7738 5.80005 17.0006Z" fill="#E7E7E7"/>
                            </svg>
                        </div>

                        <div className="control-number">
                            {singleBed}
                        </div>

                        <div className="control-increment d-flex align-items-center" onClick={() => handleControls(setSingleBed, singleBed, 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M17 5.7998C17.7732 5.7998 18.4 6.42661 18.4 7.1998V15.5998H26.8C27.5732 15.5998 28.2 16.2266 28.2 16.9998C28.2 17.773 27.5732 18.3998 26.8 18.3998H18.4V26.7998C18.4 27.573 17.7732 28.1998 17 28.1998C16.2269 28.1998 15.6 27.573 15.6 26.7998V18.3998H7.20005C6.42685 18.3998 5.80005 17.773 5.80005 16.9998C5.80005 16.2266 6.42685 15.5998 7.20005 15.5998H15.6V7.1998C15.6 6.42661 16.2269 5.7998 17 5.7998Z" fill="#6C6C6C"/>
                            </svg>
                        </div>  
                    </div>
                </div>

                <div className="room-box d-flex align-items-center">
                    <h4>Yataq Otağı</h4>

                    <div className="room-box-control d-flex gap-4 noselect">
                        <div className="control-decrement d-flex align-items-center" onClick={() => handleControls(setBedrooms, bedrooms, -1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M5.80005 17.0006C5.80005 16.2274 6.42685 15.6006 7.20005 15.6006H26.8C27.5732 15.6006 28.2 16.2274 28.2 17.0006C28.2 17.7738 27.5732 18.4006 26.8 18.4006H7.20005C6.42685 18.4006 5.80005 17.7738 5.80005 17.0006Z" fill="#E7E7E7"/>
                            </svg>
                        </div>

                        <div className="control-number">
                            {bedrooms}
                        </div>

                        <div className="control-increment d-flex align-items-center" onClick={() => handleControls(setBedrooms, bedrooms, 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M17 5.7998C17.7732 5.7998 18.4 6.42661 18.4 7.1998V15.5998H26.8C27.5732 15.5998 28.2 16.2266 28.2 16.9998C28.2 17.773 27.5732 18.3998 26.8 18.3998H18.4V26.7998C18.4 27.573 17.7732 28.1998 17 28.1998C16.2269 28.1998 15.6 27.573 15.6 26.7998V18.3998H7.20005C6.42685 18.3998 5.80005 17.773 5.80005 16.9998C5.80005 16.2266 6.42685 15.5998 7.20005 15.5998H15.6V7.1998C15.6 6.42661 16.2269 5.7998 17 5.7998Z" fill="#6C6C6C"/>
                            </svg>
                        </div>  
                    </div>
                </div>

                <div className="room-box d-flex align-items-center">
                    <h4>Əlavə yataq</h4>

                    <div className="room-box-control d-flex gap-4 noselect">
                        <div className="control-decrement d-flex align-items-center" onClick={() => handleControls(setExtraBed, extraBed, -1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M5.80005 17.0006C5.80005 16.2274 6.42685 15.6006 7.20005 15.6006H26.8C27.5732 15.6006 28.2 16.2274 28.2 17.0006C28.2 17.7738 27.5732 18.4006 26.8 18.4006H7.20005C6.42685 18.4006 5.80005 17.7738 5.80005 17.0006Z" fill="#E7E7E7"/>
                            </svg>
                        </div>

                        <div className="control-number">
                            {extraBed}
                        </div>

                        <div className="control-increment d-flex align-items-center" onClick={() => handleControls(setExtraBed, extraBed, 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M17 5.7998C17.7732 5.7998 18.4 6.42661 18.4 7.1998V15.5998H26.8C27.5732 15.5998 28.2 16.2266 28.2 16.9998C28.2 17.773 27.5732 18.3998 26.8 18.3998H18.4V26.7998C18.4 27.573 17.7732 28.1998 17 28.1998C16.2269 28.1998 15.6 27.573 15.6 26.7998V18.3998H7.20005C6.42685 18.3998 5.80005 17.773 5.80005 16.9998C5.80005 16.2266 6.42685 15.5998 7.20005 15.5998H15.6V7.1998C15.6 6.42661 16.2269 5.7998 17 5.7998Z" fill="#6C6C6C"/>
                            </svg>
                        </div>  
                    </div>
                </div>

                <div className="room-box d-flex align-items-center">
                    <h4>İki nəfərlik çarpayı</h4>

                    <div className="room-box-control d-flex gap-4 noselect">
                        <div className="control-decrement d-flex align-items-center" onClick={() => handleControls(setDoubleBed, doubleBed, -1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M5.80005 17.0006C5.80005 16.2274 6.42685 15.6006 7.20005 15.6006H26.8C27.5732 15.6006 28.2 16.2274 28.2 17.0006C28.2 17.7738 27.5732 18.4006 26.8 18.4006H7.20005C6.42685 18.4006 5.80005 17.7738 5.80005 17.0006Z" fill="#E7E7E7"/>
                            </svg>
                        </div>

                        <div className="control-number">
                            {doubleBed}
                        </div>

                        <div className="control-increment d-flex align-items-center" onClick={() => handleControls(setDoubleBed, doubleBed, 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M17 5.7998C17.7732 5.7998 18.4 6.42661 18.4 7.1998V15.5998H26.8C27.5732 15.5998 28.2 16.2266 28.2 16.9998C28.2 17.773 27.5732 18.3998 26.8 18.3998H18.4V26.7998C18.4 27.573 17.7732 28.1998 17 28.1998C16.2269 28.1998 15.6 27.573 15.6 26.7998V18.3998H7.20005C6.42685 18.3998 5.80005 17.773 5.80005 16.9998C5.80005 16.2266 6.42685 15.5998 7.20005 15.5998H15.6V7.1998C15.6 6.42661 16.2269 5.7998 17 5.7998Z" fill="#6C6C6C"/>
                            </svg>
                        </div>  
                    </div>
                </div>

                <div className="room-box d-flex align-items-center">
                    <h4>Hamam otağı</h4>

                    <div className="room-box-control d-flex gap-4 noselect">
                        <div className="control-decrement d-flex align-items-center" onClick={() => handleControls(setBathroom, bathroom, -1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M5.80005 17.0006C5.80005 16.2274 6.42685 15.6006 7.20005 15.6006H26.8C27.5732 15.6006 28.2 16.2274 28.2 17.0006C28.2 17.7738 27.5732 18.4006 26.8 18.4006H7.20005C6.42685 18.4006 5.80005 17.7738 5.80005 17.0006Z" fill="#E7E7E7"/>
                            </svg>
                        </div>

                        <div className="control-number">
                            {bathroom}
                        </div>

                        <div className="control-increment d-flex align-items-center" onClick={() => handleControls(setBathroom, bathroom, 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M17 5.7998C17.7732 5.7998 18.4 6.42661 18.4 7.1998V15.5998H26.8C27.5732 15.5998 28.2 16.2266 28.2 16.9998C28.2 17.773 27.5732 18.3998 26.8 18.3998H18.4V26.7998C18.4 27.573 17.7732 28.1998 17 28.1998C16.2269 28.1998 15.6 27.573 15.6 26.7998V18.3998H7.20005C6.42685 18.3998 5.80005 17.773 5.80005 16.9998C5.80005 16.2266 6.42685 15.5998 7.20005 15.5998H15.6V7.1998C15.6 6.42661 16.2269 5.7998 17 5.7998Z" fill="#6C6C6C"/>
                            </svg>
                        </div>  
                    </div>
                </div>
            </div>

            <div className="inputs-property-buttons d-flex">
                <div className="button-back d-flex align-items-start gap-2" onClick={() => switchStep(-1)}>
                    <p className='m-0'>Geri</p>
                </div>

                <div className={`button-next d-flex align-items-start gap-2 ${validate() && 'enabled'}`} onClick={() => validate() &&   switchStep(1)}>
                    <p className='m-0'>Davam et</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyPostRooms
