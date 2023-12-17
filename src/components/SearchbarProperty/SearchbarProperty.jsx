import React, { useState, useEffect, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './searchbarProperty.css'
import { AppContext } from '../../App'

import { DateRange } from 'react-date-range'

const SearchbarProperty = () => {
  const { searchExpanded, setSearchExpanded } = useContext(AppContext)

  const searchbarRef = useRef(null)

  const handleClickOutside = (event) => {
    if (searchbarRef.current && !searchbarRef.current.contains(event.target)) {
      setSearchExpanded(false);
      setIsCalendarOpen(false)
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigation = useNavigate()
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
  
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    ]);

  const handleDateSelect = (ranges) => {
      setSelectedDates([ranges.selection])
      if ([ranges.selection][0].startDate != [ranges.selection][0].endDate) {
          setIsCalendarOpen(false)
      }};
  
    const formatDateRange = () => {
      const formatSingleDate = (date) => {
          const day = date.getDate().toString().padStart(2, '0');
          const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
          const year = date.getFullYear().toString().substr(-2);
          return `${day}.${month}.${year}`;
      };
  
        const { startDate, endDate } = selectedDates[0];
        return `${formatSingleDate(startDate)}-${formatSingleDate(endDate)}`;
    };

  var today = new Date();
  return (
    <div className={`searchbar-property d-flex flex-column align-items-center ${isSearchbarFixed ? 'fixed-searchbar' : ''}`} id='searchbar'>
      <div ref={searchbarRef} className="searchbar-property-container" onClick={() => {}} id='searchbar'>
        <div className="searchbar-property-input-form d-flex">
            <div className="searchbar-property-input">
                <div className={`searchbar-property-inputs d-flex ${!searchExpanded && 'clickable'}`} onClick={() => setSearchExpanded(true)}>
                  <div className="searchbar-input-region">
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
                          placeholder='Haraya?'
                          sx={{
                            '& .MuiInputBase-input::placeholder': {
                              fontSize: '16px',
                            },
                            '& .MuiInputBase-input': {
                              cursor: !searchExpanded ? 'pointer' : '',
                            },
                            '& .MuiInputBase-root': {
                              cursor: !searchExpanded ? 'pointer' : '',
                              width: '100%',
                            }
                          }}
                        />)}
                    />
                  </div>

                  <div className={`searchbar-input-dates ${!searchExpanded ? 'search-collapsed' : 'search-expanded'}`} onClick={() => setIsCalendarOpen(!isCalendarOpen)} >
                    <input type='text' placeholder='Nə zaman?' value={formatDateRange()} className='clickable noselect' />
                  </div>
                  
                  <div className={`searchbar-input-guests ${!searchExpanded ? 'search-collapsed' : 'search-expanded'}`}>
                    <input type='text' placeholder='Neçə adam?' />
                  </div>
                </div>

                <button onClick={() => navigation('/search')}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" >
                    <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                  </svg>
                </button>
            </div>

            {isCalendarOpen && (
            <DateRange
                // ref={calendarRef}
                className="daterange-custom"
                editableDateInputs={true}
                onChange={handleDateSelect} 
                moveRangeOnFirstSelection={false}
                ranges={selectedDates}
                months={1}
                direction="horizontal"
                rangeColors={['#40918B']}
                minDate={today}
            />)}
        </div>
      </div>
    </div>
  )
}

export default SearchbarProperty
