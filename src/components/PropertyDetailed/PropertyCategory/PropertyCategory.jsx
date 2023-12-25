import React, { useContext } from 'react'
import './propertyCategory.css'
import { PropertyContext } from '../PropertyContext'

const PropertyCategory = () => {
  const { property } = useContext(PropertyContext)

  return (
  <div className="property-detailed-category d-flex justify-content-between">
      <div className="property-detailed-category-text my-auto">
          <h5>{property.category}</h5>
      </div>
  </div>
  )
}



export default PropertyCategory
