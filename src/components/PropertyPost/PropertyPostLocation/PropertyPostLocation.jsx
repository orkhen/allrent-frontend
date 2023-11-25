import React, { useRef, useEffect, useState, useContext } from 'react'
import './propertyPostLocation.css'

import Select from 'react-select';
import { GoogleMap, LoadScript, Marker, Autocomplete  } from '@react-google-maps/api';
import { PropertyPostContext } from '../../../pages/PropertyPostPage/PropertyPostPage';

const PropertyPostLocation = () => {
  const { switchStep, step, setData, data } = useContext(PropertyPostContext)

    const [location, setLocation] = useState('')

    const valuesList = [
      "Ağcabədi",
      "Ağdam",
      "Ağdaş",
      "Ağdərə",
      "Ağstafa",
      "Ağsu",
      "Astara",
      "Bakı",
      "Balakən",
      "Beyləqan",
      "Biləsuvar",
      "Bərdə",
      "Cəbrayıl",
      "Cəlilabad",
      "Daşkəsən",
      "Dəliməmmədli",
      "Fizuli",
      "Goranboy",
      "Göyçay",
      "Göygöl",
      "Göytəpə",
      "Gədəbəy",
      "Gəncə",
      "Hacıqabul",
      "Horadiz",
      "İmişli",
      "İsmayıllı",
      "Kürdəmir",
      "Kəlbəcər",
      "Laçın",
      "Lerik",
      "Liman",
      "Lənkəran",
      "Masallı",
      "Mingəçevir",
      "Naftalan",
      "Naxçıvan MR",
      "Neftçala",
      "Oğuz",
      "Qax",
      "Qazax",
      "Qobustan",
      "Quba",
      "Qubadlı",
      "Qusar",
      "Qəbələ",
      "Saatlı",
      "Sabirabad",
      "Şabran",
      "Salyan",
      "Şamaxı",
      "Samux",
      "Şirvan",
      "Siyazən",
      "Sumqayıt",
      "Şuşa",
      "Şəki",
      "Şəmkir",
      "Tovuz",
      "Tərtər",
      "Ucar",
      "Xaçmaz",
      "Xaçmaz / Nabran",
      "Xaçmaz / Xudat",
      "Xırdalan",
      "Xızı",
      "Xocəvənd",
      "Yardımlı",
      "Yevlax",
      "Zaqatala",
      "Zəngilan",
      "Zərdab"
    ];
  
    const options = valuesList.map(value => ({
      value: value.toLowerCase(),
      label: value
    }));
    
    const mapContainerStyle = {
      width: '100%',
      height: '400px',
    };

    const defaultCenter = {
      lat: 40.4093,
      lng: 49.8671,
    };

    const autocompleteRef = useRef(null);

    const onPlaceSelect = (place) => {
      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        // Update the map's center to the selected location
        defaultCenter.lat = lat;
        defaultCenter.lng = lng;
      }
    };

    const handleLocation = (selectedOption) => {
      setLocation(selectedOption.label);
    }

    const validate = () => {
      return (location !== '')
    }

    const confirmData = () => {
      setData({
          ...data,
          location: location
      })

      switchStep(1)
    }
    
    useEffect(() => {
      if (step === 5) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      }, [step]);

  return (
    <div className={`property-post-location d-flex justify-content-center ${step !== 5 ? 'hide' : 'slide-top'}`}>
      <div className="property-post-location-container property-post-container d-flex flex-column">
        <div className="property-post-location-title d-flex flex-column gap-3">
            <h4>Ünvanınız harada yerləşir ?</h4>
            <p>Ünvanınız yalnız rezervasiyadan sonra müştərilər tərəfindən görünəcək</p>
        </div>

        <div className="property-location d-flex flex-column gap-5">
            <div className="location-city d-flex flex-column gap-4">
                <div className="location-city-name">
                    <h4>Şəhər</h4>
                </div>

                <div className="location-city-input">
                    <Select
                        className="basic-single"
                        defaultValue={'None'}
                        isClearable={false}
                        name="color"
                        options={options}
                        placeholder='Regionu daxil edin'
                        onChange={handleLocation}
                    />
                </div>
            </div>

            <div className="location-map">
                <LoadScript
                  googleMapsApiKey="AIzaSyCrzkvw-ACJIJaNV4fl-k0ttZPc786ltHc"
                >
                  {/* <Autocomplete
                    onLoad={(autocomplete) => {
                      autocompleteRef.current = autocomplete;
                    }}
                    onPlaceChanged={() => {
                      if (autocompleteRef.current) {
                        const place = autocompleteRef.current.getPlace();
                        onPlaceSelect(place);
                      }
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Enter an address"
                      className="map-search-input"
                    />
                  </Autocomplete> */}
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={defaultCenter}
                    zoom={12}
                  >
                    <Marker
                      position={defaultCenter}
                    />
                  </GoogleMap>
                </LoadScript>
            </div>

        </div>

        <div className="inputs-property-buttons d-flex justify-content-between mb-5">
            <div className="button-back d-flex align-items-start gap-2" onClick={() => switchStep(-1)}>
                <p className='m-0'>Geri</p>
            </div>

            <div className={`button-next d-flex align-items-start gap-2 ${validate() && 'enabled'}`} onClick={() => validate() && confirmData()}>
                <p className='m-0'>Davam et</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyPostLocation
