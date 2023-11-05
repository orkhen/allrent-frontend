import React, { useState } from 'react'
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

const PropertyPostPage = ({ isLogged }) => {
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
    <div className='property-post-main'>
        {/* <PageNav isLogged={isLogged} /> */}
        <PropertyPostNav />
        <PropertyPost step={step} switchStep={switchStep} />
        <PropertyInputsGeneral step={step} switchStep={switchStep} />
        <PropertyPostRooms step={step} switchStep={switchStep} setData={setData} data={data} />
        <PropertyPostConditions step={step} switchStep={switchStep} />
        <PropertyPostLocation step={step} switchStep={switchStep} setData={setData} data={data} />
        <PropertyPostCalendar step={step} switchStep={switchStep} />
        <PropertyPostPhotos step={step} switchStep={switchStep} />
        <PropertyPostPrice step={step} switchStep={switchStep} data={data} />
    </div>
  )
}

export default PropertyPostPage
