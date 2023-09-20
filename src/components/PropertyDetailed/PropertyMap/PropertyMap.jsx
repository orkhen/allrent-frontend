import React, { useMemo } from 'react'
import './propertyMap.css'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'

const PropertyMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCrzkvw-ACJIJaNV4fl-k0ttZPc786ltHc",
});

  return (
    <div className="property-detailed-map mt-5" id='reservation-form'>

        <div className="map-header">
            <h5>Ünvan</h5>
        </div>

        <div className="map-body">
          {!isLoaded && <p>Loading...</p>}
          {isLoaded && <Map/>}
        </div>
    </div>
  )
}

export default PropertyMap

function Map() {
  const center = useMemo(() => ({lat: 44, lng: -80}), [])
  return (
    <GoogleMap 
        zoom={10} 
        center={center}
        mapContainerClassName='property-map'>

        <MarkerF position={center} />

    </GoogleMap>
  )
}