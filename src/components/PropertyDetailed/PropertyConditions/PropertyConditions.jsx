import React, { useState, useContext } from 'react'
import { PropertyContext } from '../PropertyContext'
import './propertyConditions.css'

const PropertyConditions = () => {
    const { property } = useContext(PropertyContext)
    const conditions = property.conditions
    
      const [showAll, setShowAll] = useState(false)
    //   const conditionsToDisplay = showAll ? conditions : conditions.slice(0, 6);

      const toggleShowMore = () => {
        setShowAll((prevShowAll) => !prevShowAll);
      };

  return (
    <div className="property-detailed-conditions d-flex flex-column">
        <div className="conditions-header">
            <h5>Şərait</h5>
        </div>

        <div className={`conditions-icons d-flex flex-row flex-wrap ${showAll && 'expanded'}`}>
            {conditions.map((condition, index) => (
            <div className="conditions-icon d-flex gap-3" key={index}>
                <img
                src={condition.img_1}
                alt={condition.name_az}
                />
                <p>{condition.name_az}</p>
            </div>
            ))}
        </div>

        {conditions.length > 6 && (
            <button className='conditions-button align-self-center' onClick={toggleShowMore}>
            {showAll ? 'Gizlət' : 'Hamısına bax'}
            </button>
        )}
    </div>
  )
}

export default PropertyConditions
