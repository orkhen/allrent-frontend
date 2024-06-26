import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './favoritesBody.css'

import Carousel from 'react-bootstrap/Carousel';
import { Slider } from '@mui/material';
import Placeholder from 'react-bootstrap/Placeholder';

const FavoritesBody = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filterOpen, setFilterOpen] = useState(false)
  const [sliderVal, setSliderVal] = useState([40, 1500]);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event, newSliderVal) => {
    setSliderVal(newSliderVal);
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const userID = localStorage.getItem('userID');
      console.log(userID)

      try {
        setIsLoading(true);
        const response = await axios.get(`https://allrent.io/api/api-favorites?user_uniq_id=${userID}`);

        // Temporary array to store new properties
        const newProperties = [];
        const newFavorites = [];
        
        for (let index = 0; index < response.data.favorites.length; index++) {
          const propertiesResponse = await axios.get(`https://allrent.io/api/api-properties?id=${response.data.favorites[index].home_id}`);
          // Push the new properties to the temporary array instead of state
          newFavorites.push(response.data.favorites[index].home_id);
          newProperties.push(propertiesResponse.data.properties);
        }

        // Update the state once with all new properties
        setProperties(newProperties);
        setFavorites(newFavorites);

      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, []);
  
  const handleCardMouseEnter = (index) => {
    setHoveredCardIndex(index);
    console.log(index)
  };

  const handleCardMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  const removeFavorite = async (propertyID) => {
    const newFavorites = favorites.filter(element => (element !== propertyID));
    setFavorites(newFavorites);
    const userID = localStorage.getItem('userID');
    try {
        const response = await axios.post('https://allrent.io/api/api-favorite-remove', {
            user_uniq_id: userID,
            home_uniq_id: propertyID,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error) {
        console.error('Error removing from favorites:', error);
    }
  };

  const addFavorite = async (propertyID) => {
    const newFavorites = [...favorites];
    newFavorites.push(propertyID);
    setFavorites(newFavorites);

    const userID = localStorage.getItem('userID');
    try {
        const response = await axios.post('https://allrent.io/api/api-favorite-add', {
            user_uniq_id: userID,
            home_uniq_id: propertyID,
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error) {
        console.error('Error adding to favorites:', error);
    }
  };

  const renderPlaceholder = () => {
    return Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="mb-4 properties-property">
        <div className="card">
          <Placeholder as="div" animation="glow">
            <Placeholder xs={12} className="card-img-top" />
          </Placeholder>
          <div className="card-body">
            <Placeholder as="h5" animation="glow">
              <Placeholder xs={7} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={4} /> <Placeholder xs={8} />
            </Placeholder>
          </div>
        </div>
      </div>
    ));
  };

  const renderPropertyCards = (property, index) =>
    (
      <div 
        className="mb-4 properties-property" 
        key={index}
        onMouseEnter={() => handleCardMouseEnter(index)}
        onMouseLeave={handleCardMouseLeave}
      >
        <a href={`/property/${property.uniq_id}`}>
            <div className="card">
              <Carousel touch={true} interval={null} indicators={false} controls={hoveredCardIndex === index ? true : (windowWidth <= 768 ? true : false)}>
                {
                  property.gallery.map((photo, index) => {
                    return (
                    <Carousel.Item key={index}>
                      <img src={photo.image_name} className="card-img-top" alt={photo.image_type} />
                    </Carousel.Item>
                  )})
                }
              </Carousel>
              
              <div className="card-favorite-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" className={!favorites.includes(property.uniq_id) && 'd-none'} onClick={(e) => { e.preventDefault(); removeFavorite(property.uniq_id) }}>
                  <path d="M13.7454 2.9917C12.1331 2.9917 10.7554 4.14093 9.99845 4.93324C9.24153 4.14093 7.86691 2.9917 6.25538 2.9917C3.47768 2.9917 1.53845 4.92785 1.53845 7.69939C1.53845 10.7532 3.94691 12.7271 6.27691 14.6363C7.37691 15.5386 8.51538 16.4709 9.38845 17.5048C9.53538 17.6779 9.75076 17.7779 9.97691 17.7779H10.0215C10.2485 17.7779 10.4631 17.6771 10.6092 17.5048C11.4838 16.4709 12.6215 15.5379 13.7223 14.6363C16.0515 12.7279 18.4615 10.754 18.4615 7.69939C18.4615 4.92785 16.5223 2.9917 13.7454 2.9917Z" fill={true ? '#FE4343' : "#FEFEFE"}/>
                </svg>

                <svg width="24" height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={favorites.includes(property.uniq_id) && 'd-none'} onClick={(e) => { e.preventDefault(); addFavorite(property.uniq_id) }}>
                    <path d="M10 1.52765C7.64418 -0.583106 4.02125 -0.506535 1.75736 1.75736C-0.585786 4.1005 -0.585786 7.8995 1.75736 10.2426L8.58579 17.0711C9.36684 17.8521 10.6332 17.8521 11.4142 17.0711L18.2426 10.2426C20.5858 7.8995 20.5858 4.1005 18.2426 1.75736C15.9787 -0.506535 12.3558 -0.583106 10 1.52765ZM8.82843 3.17157L9.29289 3.63604C9.68342 4.02656 10.3166 4.02656 10.7071 3.63604L11.1716 3.17157C12.7337 1.60948 15.2663 1.60948 16.8284 3.17157C18.3905 4.73367 18.3905 7.26633 16.8284 8.82843L10 15.6569L3.17157 8.82843C1.60948 7.26633 1.60948 4.73367 3.17157 3.17157C4.73367 1.60948 7.26633 1.60948 8.82843 3.17157Z" fill="#fff"></path>
                </svg>
              </div>

              <div className="card-body">
                  <div className="card-info d-flex flex-column">
                      <div className="info-top d-flex justify-content-between">
                          <h5 className="card-title">{property.title ? property.title : `${property.category} / ${property.city}`}</h5>

                          <div className="card-rating d-flex">
                              <p>{property.rating}</p>
                              <svg className='card-rating-star' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 16" fill="none"><path d="M8.83002 13.4221L5.02586 15.7137C4.8578 15.8207 4.68211 15.8665 4.49877 15.8512C4.31544 15.836 4.15502 15.7749 4.01752 15.6679C3.88002 15.561 3.77308 15.4274 3.69669 15.2673C3.6203 15.1066 3.60502 14.9269 3.65086 14.7283L4.65919 10.3971L1.29044 7.48668C1.13766 7.34919 1.04233 7.19243 1.00444 7.01643C0.965937 6.84105 0.977243 6.66932 1.03835 6.50127C1.09947 6.33321 1.19113 6.19571 1.31335 6.08877C1.43558 5.98182 1.60363 5.91307 1.81752 5.88252L6.26336 5.49293L7.98211 1.41377C8.0585 1.23044 8.17705 1.09294 8.33777 1.00127C8.49789 0.909603 8.66197 0.86377 8.83002 0.86377C8.99808 0.86377 9.16247 0.909603 9.32319 1.00127C9.4833 1.09294 9.60155 1.23044 9.67794 1.41377L11.3967 5.49293L15.8425 5.88252C16.0564 5.91307 16.2245 5.98182 16.3467 6.08877C16.4689 6.19571 16.5606 6.33321 16.6217 6.50127C16.6828 6.66932 16.6944 6.84105 16.6565 7.01643C16.618 7.19243 16.5224 7.34919 16.3696 7.48668L13.0008 10.3971L14.0092 14.7283C14.055 14.9269 14.0397 15.1066 13.9633 15.2673C13.8869 15.4274 13.78 15.561 13.6425 15.6679C13.505 15.7749 13.3446 15.836 13.1613 15.8512C12.9779 15.8665 12.8022 15.8207 12.6342 15.7137L8.83002 13.4221Z" fill="#40918B"/></svg>
                          </div>
                      </div>

                      <div className="info-mid">
                          <p>{property.max_qonaq_sayi} nəfər • {property.yatag_otagi} otaq • {property.tualet} tualet</p>
                      </div>

                      <div className="info-bottom d-flex justify-content-between">
                          <p className='m-0'>
                              <span className='card-price'>{property.price} azn</span> 
                              <span className='card-price-per'>Günlük</span>
                          </p>
                      </div>

                      {/* <div className="info-reserve mx-auto mt-3">
                        <a className='card-reserve' href=''>Rezerv et</a>
                      </div> */}
                  </div>
              </div>
            </div>
        </a>
      </div>
    )

  const handleCheckboxes = () => {
    
  }

  return (
    <div className='favorites-body'>
      <div className="favorites-body-container d-flex flex-column">
        <div className="favorites-top d-flex align-items-center justify-content-between">
            <div className="favorites-title">
              <h5>Bəyənilənlər</h5>
            </div>

            <div className='favorites-filter'>
              <div className="favorites-filter-button d-flex align-items-center gap-2 noselect" onClick={() => setFilterOpen(!filterOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5ZM6.17071 5C6.58254 3.83481 7.69378 3 9 3C10.3062 3 11.4175 3.83481 11.8293 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H11.8293C11.4175 8.16519 10.3062 9 9 9C7.69378 9 6.58254 8.16519 6.17071 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H6.17071ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H12.1707ZM9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17ZM6.17071 17C6.58254 15.8348 7.69378 15 9 15C10.3062 15 11.4175 15.8348 11.8293 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H11.8293C11.4175 20.1652 10.3062 21 9 21C7.69378 21 6.58254 20.1652 6.17071 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H6.17071Z" fill="#1D1D1D"/>
                </svg>
                <p className='mb-0'>Filterlər</p>
              </div>

              <div className={`favorites-filter-body d-flex flex-column gap-3 noselect ${filterOpen ? '' : 'd-none'}`}>
                <div className="filter-categories">
                  <h4>Kateqoriyalar</h4>

                  <div className="filter-checkboxes">
                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Villa" name="category" onChange={handleCheckboxes} />
                        <label>Villa</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Konteyner" name="category" onChange={handleCheckboxes} />
                        <label>Konteyner</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Kooperativ" name="category" onChange={handleCheckboxes} />
                        <label>Kooperativ</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Lüks villa" name="category" onChange={handleCheckboxes} />
                        <label>Lüks villa</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Şənlik üçün ev" name="category" onChange={handleCheckboxes} />
                        <label>Şənlik üçün ev</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Hotel" name="category" onChange={handleCheckboxes} />
                        <label>Hotel</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Hovuzlu villa" name="category" onChange={handleCheckboxes} />
                        <label>Hovuzlu villa</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Kənd evi" name="category" onChange={handleCheckboxes} />
                        <label>Kənd evi</label>
                    </div>
                  </div>
                </div>

                <div className="filter-price">
                  <h4>Qiymət</h4>
                  <p className='price-informational mb-0'>1 gecə üçün</p>
                  <div className='price-min-max d-flex align-items-center gap-1 mt-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 16" fill="none">
                      <path d="M1 15V8C1 6.67392 1.52678 5.40215 2.46447 4.46447C3.40215 3.52678 4.67392 3 6 3C7.32608 3 8.59785 3.52678 9.53553 4.46447C10.4732 5.40215 11 6.67392 11 8V15M6 1V15" stroke="#1D1D1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='mb-0'>40</p> 
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="#1D1D1D"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 16" fill="none">
                      <path d="M1 15V8C1 6.67392 1.52678 5.40215 2.46447 4.46447C3.40215 3.52678 4.67392 3 6 3C7.32608 3 8.59785 3.52678 9.53553 4.46447C10.4732 5.40215 11 6.67392 11 8V15M6 1V15" stroke="#1D1D1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <p className='mb-0'>1500</p>
                  </div>

                  <div className="price-slider mt-2">
                    <Slider
                      value={sliderVal}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      min={40}
                      max={1500}
                      sx={{
                        color: '#40918B', // Line color
                        '& .MuiSlider-thumb': {
                          backgroundColor: '#FEFEFE', // Thumb color
                          border: '2px solid #40918B', // Border color
                        },
                        '& .MuiSlider-valueLabel': {
                          color: 'white', // Label color
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="filter-rooms">
                  <h4>Otaqlar</h4>

                  <div className="rooms-controls d-flex justify-content-between">
                      <div className="room-box d-flex gap-4">
                        <div className="room-name">
                          <h5 className='mt-2'>Yataq otağı</h5>
                        </div>

                        <div className="room-controls d-flex gap-3 align-items-center">
                          <div className={`controls-decrement ${bedrooms > 0 ? 'active' : 'deactive'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => {bedrooms - 1 < 0 ? setBedrooms(0) : setBedrooms(bedrooms - 1)}}>
                              <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill={bedrooms > 0 ? '#6C6C6C' : "#E7E7E7"}/>
                            </svg>
                          </div>

                          <div className="controls-number">
                            {bedrooms}
                          </div>

                          <div className="controls-increment active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => setBedrooms(bedrooms + 1)}>
                              <path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#6C6C6C"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="room-box d-flex gap-4">
                        <div className="room-name">
                          <h5 className='mt-2'>Hamam otağı</h5>
                        </div>

                        <div className="room-controls d-flex gap-3 align-items-center">
                          <div className={`controls-decrement ${bathrooms > 0 ? 'active' : 'deactive'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => {bathrooms - 1 < 0 ? setBathrooms(0) : setBathrooms(bathrooms - 1)}}>
                              <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill={bathrooms > 0 ? '#6C6C6C' : "#E7E7E7"}/>
                            </svg>
                          </div>

                          <div className="controls-number">
                            {bathrooms}
                          </div>

                          <div className="controls-increment active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => setBathrooms(bathrooms + 1)}>
                              <path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#6C6C6C"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="filter-permits">
                  <h4>İcazələr</h4>

                  <div className="filter-checkboxes">
                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Villa" name="category" onChange={handleCheckboxes} />
                        <label>Ev heyvanı</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Tütün" name="category" onChange={handleCheckboxes} />
                        <label>Tütün</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Kooperativ" name="category" onChange={handleCheckboxes} />
                        <label>Uşaq</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Parti" name="category" onChange={handleCheckboxes} />
                        <label>Parti</label>
                    </div>
                  </div>
                </div>

                <div className="filter-conditions">
                  <h4>Şərait</h4>

                  <div className="filter-checkboxes">
                    <div className="filter-checkbox">
                        <input type="checkbox" value="Mətbəx" onChange={handleCheckboxes} />
                        <label>Mətbəx</label>
                    </div>

                    <div className="filter-checkbox">
                        <input type="checkbox" value="Tütün" onChange={handleCheckboxes} />
                        <label>Parkinq</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Kooperativ" name="category" onChange={handleCheckboxes} />
                        <label>Playstation</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Parti" name="category" onChange={handleCheckboxes} />
                        <label>Soyuducu</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Parti" name="category" onChange={handleCheckboxes} />
                        <label>Netflix</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Parti" name="category" onChange={handleCheckboxes} />
                        <label>Saçquruducu</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Parti" name="category" onChange={handleCheckboxes} />
                        <label>Paltaryuyan</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Parti" name="category" onChange={handleCheckboxes} />
                        <label>Hovuz</label>
                    </div>
                  </div>
                </div>

                <div className="filter-apply-button d-flex justify-content-center mt-4">
                  Axtar
                </div>

              </div>
            </div>
        </div>
        
        {(properties.length === 0 && !isLoading) 
        ? ( <div className="favorites-no-liked">
              <h5 className='text-center'>Bəyənilən evləriniz yoxdur. Bütün evlərə baxmaq üçün Ana səhifəyə keçin.</h5>
            </div>)
        :  (<div className="favorites-cards mt-4">
              {isLoading 
              ? renderPlaceholder()
              : properties.map((property, index) => (
                renderPropertyCards(property[0], index)
              ))}
          </div>)
        }
      </div>
    </div>
  )
}

export default FavoritesBody
