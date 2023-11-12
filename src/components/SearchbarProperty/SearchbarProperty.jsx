import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './searchbarProperty.css'

const SearchbarProperty = () => {
  const regions = [
    { label: 'Ağcabədi'},
    { label: 'Bakı'},
    { label: 'Lerik'},
    { label: 'Qax'},
    { label: 'Quba'},
    { label: "Qusar"},
    { label: 'Qəbələ'},
  ]

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
    <div className={`searchbar-property d-flex flex-column align-items-center ${isSearchbarFixed ? 'fixed-searchbar' : ''}`} id='searchbar'>
      <div className="searchbar-property-container">
        <div className="searchbar-property-input-form d-flex">
            <div className="searchbar-property-input">
                <Autocomplete
                  noOptionsText="Region tapılmadı"
                  disablePortal
                  options={regions}
                  // sx={{ width: 300 }}
                  sx={{
                    '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {          
                      fontFamily: 'Inter'
                    }
                  }}
                  renderInput={(params) => (
                    <TextField 
                      {...params} 
                      placeholder='Gedəcəyiniz regionu daxil edin'
                      sx={{
                        '& .MuiInputBase-input::placeholder': {
                          fontSize: '16px',
                        }
                      }}
                    />)}
                />
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" >
                    <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                  </svg>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchbarProperty
