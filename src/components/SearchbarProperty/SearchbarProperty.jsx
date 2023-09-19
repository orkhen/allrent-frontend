import React from 'react'
import './searchbarProperty.css'

const SearchbarProperty = () => {
  return (
    <div className='searchbar-property d-flex flex-column align-items-center'>
      <div className="searchbar-property-container">
        <div className="searchbar-property-input-form d-flex">
            <div className="searchbar-property-input">
                <input type='text' placeholder='Gedəcəyiniz regionu daxil edin'/>
            </div>

            <div className="searchbar-input-button">
                <button className='text-center'>Axtar</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchbarProperty
