import React, { useState, useEffect } from 'react'
import './searchbarProperty.css'

const SearchbarProperty = () => {
  const [isSearchbarFixed, setIsSearchbarFixed] = useState(false);

  useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 120;
    
          setIsSearchbarFixed(scrollPosition > scrollThreshold);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className={`searchbar-property d-flex flex-column align-items-center ${isSearchbarFixed ? 'fixed-searchbar' : ''}`}>
      <div className="searchbar-property-container">
        <div className="searchbar-property-input-form d-flex">
            <div className="searchbar-property-input">
                <input type='text' placeholder='Gedəcəyiniz regionu daxil edin'/>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" >
                    <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                  </svg>
                </button>
            </div>

            {/* <div className="searchbar-input-button">
                <button className='text-center'>Axtar</button>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default SearchbarProperty
