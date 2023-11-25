import React, { useContext, useState, createContext } from 'react'
import { AppContext } from '../../App'

import './propertyPostPage.css'
import PageNav from '../../components/Navbar/Navbar'
import PropertyPost from '../../components/PropertyPost/PropertyPost'
import PropertyInputsGeneral from '../../components/PropertyPost/PropertyInputsGeneral/PropertyInputsGeneral'
import PropertyPostRooms from '../../components/PropertyPost/PropertyPostRooms/PropertyPostRooms'
import PropertyPostConditions from '../../components/PropertyPost/PropertyPostConditions/PropertyPostConditions'
import PropertyPostLocation from '../../components/PropertyPost/PropertyPostLocation/PropertyPostLocation'
import PropertyPostCalendar from '../../components/PropertyPost/PropertyPostCalendar/PropertyPostCalendar'
import PropertyPostPhotos from '../../components/PropertyPost/PropertyPostPhotos/PropertyPostPhotos'
import PropertyPostPrice from '../../components/PropertyPost/PropertyPostPrice/PropertyPostPrice'
import PropertyPostNav from '../../components/PropertyPost/PropertyPostNav/PropertyPostNav'

export const PropertyPostContext = createContext(null);

const PropertyPostPage = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    rooms: 0,
    guests: 0,
    bathrooms: 0,
    location: undefined
  })

  const switchStep = (val) => {
    setStep(step + val)
  }
  return (
    <PropertyPostContext.Provider value={{ step, switchStep, setData, data }} >
      <div className='property-post-main'>
          <PropertyPostNav />
          <PropertyPost />
          <PropertyInputsGeneral />
          <PropertyPostRooms />
          <PropertyPostConditions />
          <PropertyPostLocation />
          <PropertyPostCalendar />
          <PropertyPostPhotos />
          <PropertyPostPrice />
      </div>
    </PropertyPostContext.Provider>
  )
}

export default PropertyPostPage
