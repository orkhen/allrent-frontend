import React, { useState } from 'react';
import Select from 'react-select';

import './searchbar.css';

const Searchbar = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className="searchbar">
      <div className="searchbar-container d-flex flex-column align-items-center">
        <div className='searchbar-input-form d-flex'>
          <div className='searchbar-input region d-flex'>
            <img src='https://allrent.io/homepage/images/svg/search.svg' alt=''/>
            
            {/* <input type='text' placeholder='Gedəcəyiniz regionu daxil edin'/> */}
            <Select
            className="basic-single"
            defaultValue={'None'}
            isClearable={false}
            name="color"
            options={options}
            placeholder='Regionu daxil edin'
          />
          </div>

          <div className='searchbar-input-lower d-flex'>
            <div className='searchbar-input date d-flex'>
              <img src='https://allrent.io/homepage/images/svg/calendar.svg' alt=''/>

              <input type="text" name="daterange" value="01/01/2018 - 01/15/2018" />

            </div>

            <div className='searchbar-input guests d-flex'>
              <img src='https://allrent.io/homepage/images/svg/user.svg' alt=''/>
              <input type='text' placeholder='Qonaq sayı'/>
            </div>
          </div>
        </div>

        <div className='searchbar-search'>
          <a href=''>
            <div className='search-button d-flex align-items-center'>
              Axtar
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
