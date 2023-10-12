import React, { useState, useEffect } from 'react'
import './propertyPostRooms.css'

const PropertyPostRooms = ({ switchStep, step, setData, data }) => {
    const [maxGuests, setMaxGuests] = useState(0)
    const [bedrooms, setBedrooms] = useState(0)
    const [doubleBed, setDoubleBed] = useState(0)
    const [singleBed, setSingleBed] = useState(0)
    const [extraBed, setExtraBed] = useState(0)
    const [bathroom, setBathroom] = useState(0)

    const rooms = [
        ['Maksimum qonaq sayı', maxGuests, setMaxGuests],
        ['Bir nəfərlik çarpayı', singleBed, setSingleBed],
        ['Yataq Otağı', bedrooms, setBedrooms],
        ['Əlavə yataq', extraBed, setExtraBed],
        ['İki nəfərlik çarpayı', doubleBed, setDoubleBed],
        ['Hamam otağı', bathroom, setBathroom]
    ]

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

    const confirmData = () => {
        setData({
            ...data,
            rooms: bedrooms,
            bathrooms: bathroom,
            guests: maxGuests
        })

        switchStep(1)
    }

    useEffect(() => {
        if (step === 3) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        }, [step]);

  return (
    <div className={`property-post-rooms d-flex justify-content-center ${step !== 3 ? 'hide' : 'slide-top'}`}>
      <div className="property-post-rooms-container property-post-container">
        <div className="property-post-inputs-rooms d-flex flex-column">
            <div className="property-post-rooms-title">
                <h4>Obyekt haqqında bəzi əsas məlumatları qeyd edin</h4>
            </div>

            <div className="property-post-rooms-boxes">
                {
                    rooms.map((room, index) => {
                        return (
                        <div className="room-box d-flex align-items-center">
                            <h4>{room[0]}</h4>

                            <div className="room-box-control d-flex gap-4 noselect">
                                <div className={`control-decrement d-flex align-items-center ${room[1] === 0 && 'control-decrement-disabled'}`} onClick={() => handleControls(room[2], room[1], -1)}>
                                    <svg width="24" height="24" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={ room[1] > 0 ? 'path-active' : 'path-deactive' } d="M0.800049 2.00059C0.800049 1.22739 1.42685 0.600586 2.20005 0.600586H21.8C22.5732 0.600586 23.2 1.22739 23.2 2.00059C23.2 2.77378 22.5732 3.40059 21.8 3.40059H2.20005C1.42685 3.40059 0.800049 2.77378 0.800049 2.00059Z"></path>
                                    </svg>
                                </div>

                                <div className="control-number">
                                    {room[1]}
                                </div>

                                <div className="control-increment d-flex align-items-center" onClick={() => handleControls(room[2], room[1], 1)}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0.799805C12.7732 0.799805 13.4 1.42661 13.4 2.1998V10.5998H21.8C22.5732 10.5998 23.2 11.2266 23.2 11.9998C23.2 12.773 22.5732 13.3998 21.8 13.3998H13.4V21.7998C13.4 22.573 12.7732 23.1998 12 23.1998C11.2269 23.1998 10.6 22.573 10.6 21.7998V13.3998H2.20005C1.42685 13.3998 0.800049 12.773 0.800049 11.9998C0.800049 11.2266 1.42685 10.5998 2.20005 10.5998H10.6V2.1998C10.6 1.42661 11.2269 0.799805 12 0.799805Z" fill="#6C6C6C"></path>
                                    </svg>
                                </div>  
                            </div>
                        </div>
                    )})}
            </div>

            <div className="inputs-property-buttons d-flex">
                <div className="button-back d-flex align-items-start gap-2" onClick={() => switchStep(-1)}>
                    <p className='m-0'>Geri</p>
                </div>

                <div className={`button-next d-flex align-items-start gap-2 ${validate() && 'enabled'}`} onClick={() => validate() && confirmData()}>
                    <p className='m-0'>Davam et</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyPostRooms
