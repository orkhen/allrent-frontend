import React, { useState, useContext } from 'react'
import './searchInput.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DateRange } from 'react-date-range';
import { searchContext } from '../../../pages/SearchPage/SearchPage';


const SearchInput = () => {
    const { region, startDate, endDate, guests } = useContext(searchContext)

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
      ]
    const [inputGuests, setInputGuests] = useState(guests ? guests : 1);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDates, setSelectedDates] = useState([
      {
          startDate: startDate ? new Date(startDate) : new Date(),
          endDate: endDate ? new Date(endDate) : new Date(),
          key: 'selection'
      }
      ]);

    const handleGuestsChange = (event) => {
        // const value = event.target.value;
        // const numericValue = value.replace(/[^0-9]/g, ''); // Keep only numbers
        // numericValue <= 0 ? setGuests(1) : setGuests(numericValue);
        setInputGuests(event.target.value)
    };

    const handleDateSelect = (ranges) => {
      setSelectedDates([ranges.selection])
      if ([ranges.selection][0].startDate !== [ranges.selection][0].endDate) {
          setIsCalendarOpen(false)
      }
  };

  var today = new Date();

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

  return (
    <div className='search-page-inputs d-flex gap-2'>
        <div className="search-page-inputs-container gap-2">
            <div className="search-inputs-top">
              <div className="inputs-box region-input d-flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#6C6C6C"/>
                  </svg>
                  <Autocomplete
                    noOptionsText="Region tapılmadı"
                    disablePortal
                    options={regions}
                    defaultValue={region}
                    sx={{
                      '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {          
                        fontFamily: 'Inter'
                      },
                    }}
                    renderInput={(params) => (
                      <TextField 
                        {...params} 
                        placeholder='Gedəcəyiniz region'
                        sx={{
                          '& .MuiInputBase-input': {
                            position: 'absolute',
                            top: '3px',
                            left: '0',
                            
                          },
                          '& .MuiInputBase-input::placeholder': {
                            fontSize: '16px',
                          }
                        }}
                      />)}
                  />
              </div>
            </div>
            
            <div className="search-inputs-bottom gap-2">
              <div className="inputs-box dates-input d-flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => {setIsCalendarOpen(!isCalendarOpen)}}>
                      <path d="M9 2C9.55228 2 10 2.44772 10 3V4H14V3C14 2.44772 14.4477 2 15 2C15.5523 2 16 2.44772 16 3V4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H8V3C8 2.44772 8.44772 2 9 2ZM8 6H5V9H19V6H16V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6H10V7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7V6ZM19 11H5V19H19V11Z" fill="#6C6C6C"/>
                  </svg>
                  {/* <input type='text' value={'14.01.23-16.01.23'} className='noselect' /> */}
                  <p className='mb-0 noselect' onClick={() => {setIsCalendarOpen(!isCalendarOpen)}}>{formatDateRange()}</p>
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

              <div className="inputs-box guests-input d-flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8ZM8 18C6.34315 18 5 19.3431 5 21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21C3 18.2386 5.23858 16 8 16H16C18.7614 16 21 18.2386 21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 19.3431 17.6569 18 16 18H8Z" fill="#6C6C6C"/>
                  </svg>

                  <div className="guests-inp w-100 d-flex">
                    <input type='text' 
                        value={`${inputGuests}`} 
                        onChange={handleGuestsChange}
                        placeholder='Qonaq sayı'
                    />
                    {/* <p className='mb-0'>qonaq</p> */}
                  </div>
              </div>
            </div>

        </div>

        <div className="search-page-inputs-button align-self-center">
            Axtar
        </div>
    </div>
  )
}

export default SearchInput
