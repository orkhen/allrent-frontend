import React, { useState } from 'react'
import './propertyPostPage.css'
import PageNav from '../../components/Navbar/Navbar'
import PropertyPost from '../../components/PropertyPost/PropertyPost'
import PropertyInputsGeneral from '../../components/PropertyPost/PropertyInputsGeneral/PropertyInputsGeneral'
import PropertyPostNav from '../../components/PropertyPost/PropertyPostNav/PropertyPostNav'
import PropertyPostRooms from '../../components/PropertyPost/PropertyPostRooms/PropertyPostRooms'
import PropertyPostConditions from '../../components/PropertyPost/PropertyPostConditions/PropertyPostConditions'
import PropertyPostLocation from '../../components/PropertyPost/PropertyPostLocation/PropertyPostLocation'
import PropertyPostCalendar from '../../components/PropertyPost/PropertyPostCalendar/PropertyPostCalendar'

const PropertyPostPage = ({ isLogged }) => {
  const [step, setStep] = useState(1)

  const switchStep = (val) => {
    setStep(step + val)
  }
  return (
    <div className='property-post-main'>
        <PageNav isLogged={isLogged} />
        <PropertyPost step={step} switchStep={switchStep} />
        <PropertyInputsGeneral step={step} switchStep={switchStep} />
        <PropertyPostRooms step={step} switchStep={switchStep} />
        <PropertyPostConditions step={step} switchStep={switchStep} />
        <PropertyPostLocation step={step} switchStep={switchStep} />
        <PropertyPostCalendar step={step} switchStep={switchStep} />
    </div>
  )
}

export default PropertyPostPage
