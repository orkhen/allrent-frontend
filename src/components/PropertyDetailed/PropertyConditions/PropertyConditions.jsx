import React, { useState } from 'react'
import './propertyConditions.css'

const PropertyConditions = () => {
    const conditions = [
        { icon: 'kitchen.svg', text: 'Mətbəx' },
        { icon: 'soba.svg', text: 'Soba' },
        { icon: 'boil.svg', text: 'Qazan' },
        { icon: 'fridge.svg', text: 'Soyuducu' },
        { icon: 'laundry.svg', text: 'Paltaryuyan' },
        { icon: 'barbecue.svg', text: 'Manqal' },
        { icon: 'kitchen.svg', text: 'Mətbəx' },
        { icon: 'soba.svg', text: 'Soba' },
        { icon: 'boil.svg', text: 'Qazan' },
        { icon: 'fridge.svg', text: 'Soyuducu' },
        { icon: 'laundry.svg', text: 'Paltaryuyan' },
        { icon: 'barbecue.svg', text: 'Manqal' },
      ];
    
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
                src={`https://allrent.io/homepage/images/svg/home_has_d/${condition.icon}`}
                alt={condition.text}
                />
                <p>{condition.text}</p>
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
