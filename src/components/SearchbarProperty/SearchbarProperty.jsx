import React, { useState, useEffect, useContext, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DateRange } from 'react-date-range';
import './searchbarProperty.css';
import { AppContext } from '../../App';

const SearchbarProperty = () => {
  const { searchExpanded, setSearchExpanded } = useContext(AppContext);
  const searchbarRef = useRef(null);
  const navigation = useNavigate();

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [guestsNumber, setGuestsNumber] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
  const [isSearchbarFixed, setIsSearchbarFixed] = useState(false);

  const regions = [
    { label: 'Ağcabədi'},
    { label: 'Bakı'},
    { label: 'Lerik'},
    { label: 'Qax'},
    { label: 'Quba'},
    { label: "Qusar"},
    { label: 'Qəbələ'},
    { label: 'Xızı'},
    { label: 'Zaqatala'},
    { label: 'İsmayıllı'},
    { label: 'Şəki'},
  ];

  const handleClickOutside = useCallback((event) => {
    if (searchbarRef.current && !searchbarRef.current.contains(event.target)) {
      setSearchExpanded(false);
      setIsCalendarOpen(false);
    }
  }, [setSearchExpanded]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSearchbarFixed(scrollPosition > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDateSelect = useCallback((ranges) => {
    setSelectedDates([ranges.selection]);
    if (ranges.selection.startDate !== ranges.selection.endDate) {
      setIsCalendarOpen(false);
    }
  }, []);

  const navigateToSearch = useCallback(() => {
    const query = new URLSearchParams();
    if (selectedRegion) query.set("region", selectedRegion.label);
    if (guestsNumber) query.set("guests", guestsNumber);
    const { startDate, endDate } = selectedDates[0];
    if (startDate && endDate) {
      const startYear = startDate.getFullYear();
      const startMonth = (startDate.getMonth() + 1).toString().padStart(2, '0');
      const startDay = startDate.getDate().toString().padStart(2, '0');

      query.set("startDate", `${startYear}-${startMonth}-${startDay}`);

      const endYear = endDate.getFullYear();
      const endMonth = (endDate.getMonth() + 1).toString().padStart(2, '0');
      const endDay = endDate.getDate().toString().padStart(2, '0');

      query.set("endDate", `${endYear}-${endMonth}-${endDay}`);
    }
    navigation(`/search?${query.toString()}`);
  }, [selectedRegion, guestsNumber, selectedDates, navigation]);

  const formatDateRange = () => {
    const formatSingleDate = (date) => {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString().substr(-2);
      return `${day}.${month}.${year}`;
    };

    const { startDate, endDate } = selectedDates[0];
    return `${formatSingleDate(startDate)}-${formatSingleDate(endDate)}`;
  };

  var today = new Date();

  return (
    <div className={`searchbar-property d-flex flex-column align-items-center ${isSearchbarFixed ? 'fixed-searchbar' : ''}`} id='searchbar'>
      <div ref={searchbarRef} className="searchbar-property-container" id='searchbar'>
        <div className="searchbar-property-input-form d-flex">
          <div className="searchbar-property-input">
            <div className={`searchbar-property-inputs d-flex ${!searchExpanded && 'clickable'}`} onClick={() => setSearchExpanded(true)}>
              <div className="searchbar-input-region">
                <Autocomplete
                  noOptionsText="Region tapılmadı"
                  disablePortal
                  options={regions}
                  onChange={(event, newValue) => {
                    setSelectedRegion(newValue);
                  }}
                  sx={{
                    '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {          
                      fontFamily: 'Inter'
                    }
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder='Hara?'
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
                        },
                        '& .MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
                          minWidth: '50px',
                        }
                      }}
                    />
                  )}
                />
              </div>
              <div className={`searchbar-input-dates ${!searchExpanded ? 'search-collapsed' : 'search-expanded'}`} onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
                <input type='text' 
                  placeholder='Tarix?' 
                  // value={formatDateRange()} 
                  className='clickable noselect' 
                  readOnly 
                />
              </div>
              <div className={`searchbar-input-guests ${!searchExpanded ? 'search-collapsed' : 'search-expanded'}`}>
                <input type='text' value={guestsNumber} onChange={(e) => setGuestsNumber(e.target.value)} placeholder='Say?' />
              </div>
            </div>
            <button onClick={navigateToSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" >
                <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
              </svg>
            </button>
          </div>
          {isCalendarOpen && (
            <DateRange
              className="daterange-custom"
              editableDateInputs={true}
              onChange={handleDateSelect}
              moveRangeOnFirstSelection={false}
              ranges={selectedDates}
              months={1}
              direction="horizontal"
              rangeColors={['#40918B']}
              minDate={today}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchbarProperty;
