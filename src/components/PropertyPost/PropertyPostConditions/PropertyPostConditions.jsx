import React, { useEffect, useContext } from 'react'
import './propertyPostConditions.css'

import Select from 'react-select';
import { PropertyPostContext } from '../../../pages/PropertyPostPage/PropertyPostPage';

const PropertyPostConditions = () => {
    const { switchStep, step, setData, data } = useContext(PropertyPostContext)

    const conditions = [
        "Mətbəx",
        "Soyuducu",
        "Paltaryuyan",
        "Qabyuyan",
        "Soba",
        "Qazan",
        "Manqal",
        "Parkinq",
        "Mikrodalğalı soba",
        "Geyim Asqısı",
        "Ütü",
        "Televizor",
        "Saç quruducusu",
        "Samovar",
        "Elektrik çaydanı",
        "Neftlix",
        "Hovuz",
        "Duş Kabin",
        "WI-FI",
        "Mobil Şəbəkə (Mİ-Fİ)",
        "Söhbətgah",
        "Video Müşahidə Sistemi",
        "Playstation",
        "Kabel Tv"
    ];   
    
    const permits = [
        'Ev heyvanları gətirilməsinə icazə verilir',
        'Uşaqlar üçün uyğundur',
        'Nikah şəhadətnaməsi zəruridir',
        'Siqaret çəkilməsinə icazə verilir',
        'Şənliklər üçün uyğundur',
      ];

    const timeOptions = [
    { label: '09:00', value: '09:00' },
    { label: '10:00', value: '10:00' },
    { label: '11:00', value: '11:00' },
    { label: '12:00', value: '12:00' },
    { label: '13:00', value: '13:00' },
    { label: '14:00', value: '14:00' },
    { label: '15:00', value: '15:00' },
    { label: '16:00', value: '16:00' },
    { label: '17:00', value: '17:00' },
    { label: '18:00', value: '18:00' },
    { label: '19:00', value: '19:00' },
    { label: '20:00', value: '20:00' },
    { label: '21:00', value: '21:00' },
    { label: '22:00', value: '22:00' },
    { label: '23:00', value: '23:00' },
    ];
      
    const customStyles = {
        // control: (provided, state) => ({
        //     ...provided,
        //     borderColor: state.isFocused ? '#FE4343' : 'gray',
        //     outline: 'none',
        //     '&:hover': {
        //       borderColor: '#FD4A4A',
        //     },
        // }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#FE4343' : 'white',  
          color: state.isSelected ? 'white' : 'black',
          transition: 'background-color 0.2s',
            '&:hover': {
            backgroundColor: '#FD4A4A',
            color: 'white',
            },
        })
      };
    
    useEffect(() => {
    if (step === 4) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }, [step]);

  return (
    <div className={`property-post-conditions d-flex justify-content-center ${step !== 4 ? 'hide' : 'slide-top'}`}>
      <div className="property-post-conditions-container property-post-container d-flex flex-column">
        <div className="property-conditions">
            <div className="property-conditions-title">
                <h4>Obyektdə olan şərait</h4>
            </div>

            <div className="property-conditions-checkboxes margin-top">
                {conditions.map((condition, index) => {
                    
                    return (
                    <div key={index} className="conditions-checkbox">
                        <input id="category" type="checkbox" value={condition} name="category" />
                        <label for="category">{condition}</label>
                    </div>
                )})}
            </div>
        </div>

        <div className="property-permits">
            <div className="property-permits-title">
                <h4>İcazələr</h4>
            </div>

            <div className="property-permits-checkboxes margin-top">
                {permits.map((permit, index) => {
                    
                    return (
                    <div key={index} className="permits-checkbox">
                        <input id="category" type="checkbox" value={permit} name="category" />
                        <label for="category">{permit}</label>
                    </div>
                )})}
            </div>
        </div>

        <div className="property-checkin">
            <div className="property-checkin-title">
                <h4>Obyektə daxil olma vaxtı üçün uyğun aralığı təyin edin</h4>
            </div>

            <div className="property-checkin-time margin-top d-flex justify-content-between">
                <div className="checkin-from">
                    <Select defaultValue={timeOptions[0]} styles={customStyles} options={timeOptions} isSearchable={false} />
                </div>

                <div className="checkin-until">
                    <Select defaultValue={timeOptions[timeOptions.length - 1]} styles={customStyles} options={timeOptions} isSearchable={false} />
                </div>
            </div>
        </div>

        <div className="property-checkout">
            <div className="property-checkout-title">
                <h4>Obyekti tərk etmə vaxtı üçün uyğun aralığı təyin edin</h4>
            </div>

            <div className="property-checkout-time margin-top d-flex">
                <div className="checkout-from">
                    <Select defaultValue={timeOptions[0]} styles={customStyles} options={timeOptions} isSearchable={false} />
                </div>

                <div className="checkout-until">
                    <Select defaultValue={timeOptions[3]} styles={customStyles} options={timeOptions} isSearchable={false} />
                </div>
            </div>
        </div>

        <div className="inputs-property-buttons d-flex justify-content-between">
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

export default PropertyPostConditions
