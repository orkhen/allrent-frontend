import React, { useState, useEffect, useContext } from 'react'
import './searchBody.css'
import SearchInput from './SearchInput/SearchInput'

import { Modal, Box, Slider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
import { AppContext } from '../../App';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { searchContext } from '../../pages/SearchPage/SearchPage';

const SearchBody = () => {
    const { scroll, setScroll, windowWidth } = useContext(AppContext)
    const [liked, setLiked] = useState([])
    const [showShare, setShowShare] = useState(false);
    const [sliderVal, setSliderVal] = useState([40, 1500]);
    const [bedrooms, setBedrooms] = useState(0)
    const [bathrooms, setBathrooms] = useState(0)
    const [singleBed, setSingleBed] = useState(0)
    const [doubleBed, setDoubleBed] = useState(0)

    const cards = [
        1, 2, 3, 4
    ];

    const { filterOpen, setFilterOpen } = useContext(searchContext)

    useEffect(() => {
        setLiked(new Array(cards.length).fill(false));
    }, [cards.length]);

    const handleLikeClick = (index) => {
        setLiked(liked.map((item, i) => (i === index ? !item : item)));
    };

    const handleShareClick = () => setShowShare(true)

    const handleCloseModal = () => setShowShare(false)

    const handleCheckboxes = () => {
    
    }

    const handleChange = (event, newSliderVal) => {
        setSliderVal(newSliderVal);
      };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        animation: 'slide-up 0.5s ease',
    };

    const propertyImg = 'https://allrent.io/storage/medium_frame_WhatsApp%20Image%202023-08-18%20at%2017.07.25-f8d8-decb-2c38-d3c4.webp'
    const propertyTitle = '3 Gozel Qebele A-Frame Villa'

  return (
    <div className='search-body'>
      <div className="search-body-container">
        <SearchInput />
        <div className="search-body-header d-flex justify-content-between mt-4">
            <div className="search-body-title">
                <h5>Axtarışda 4 ev tapıldı</h5>
            </div>
            
            <div className="search-body-filter d-flex gap-2 noselect" onClick={() => {setFilterOpen(!filterOpen); setScroll(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5ZM6.17071 5C6.58254 3.83481 7.69378 3 9 3C10.3062 3 11.4175 3.83481 11.8293 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H11.8293C11.4175 8.16519 10.3062 9 9 9C7.69378 9 6.58254 8.16519 6.17071 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H6.17071ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H12.1707ZM9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17ZM6.17071 17C6.58254 15.8348 7.69378 15 9 15C10.3062 15 11.4175 15.8348 11.8293 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H11.8293C11.4175 20.1652 10.3062 21 9 21C7.69378 21 6.58254 20.1652 6.17071 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H6.17071Z" fill="#1D1D1D"/>
                </svg>

                <h5>Filterlər</h5>
            </div>

            {/* Overlay */}
            <div className={`overlay ${filterOpen ? 'open' : ''}`} onClick={() => {setFilterOpen(false); setScroll(true)}}></div>

            {/* Filter window */}
            <div className={`filter-window ${filterOpen ? 'open' : ''}`}>
                <div className="filter-container d-flex flex-column gap-4">
                    <div className="filter-header d-flex justify-content-between mt-2">
                        <div className="filter-header-left d-flex gap-2" onClick={() => {setFilterOpen(false); setScroll(true)}}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5ZM6.17071 5C6.58254 3.83481 7.69378 3 9 3C10.3062 3 11.4175 3.83481 11.8293 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H11.8293C11.4175 8.16519 10.3062 9 9 9C7.69378 9 6.58254 8.16519 6.17071 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H6.17071ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H12.1707ZM9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17ZM6.17071 17C6.58254 15.8348 7.69378 15 9 15C10.3062 15 11.4175 15.8348 11.8293 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H11.8293C11.4175 20.1652 10.3062 21 9 21C7.69378 21 6.58254 20.1652 6.17071 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H6.17071Z" fill="#1D1D1D"/>
                            </svg>
                            <h5>Filterlər</h5> */}
                            <CloseIcon />
                        </div>

                        <div className="filter-header-right">
                            <Dropdown>
                                <Dropdown.Toggle variant='none' id="dropdown-basic">
                                    Çeşidlə
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Ucuzdan bahaya</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Bahadan ucuza</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Yüksək reytinqli</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

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

                        <div className="rooms-controls">
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

                            <div className="room-box d-flex gap-4">
                                <div className="room-name">
                                <h5 className='mt-2'>İki nəfərlik çarpayı</h5>
                                </div>

                                <div className="room-controls d-flex gap-3 align-items-center">
                                <div className={`controls-decrement ${doubleBed > 0 ? 'active' : 'deactive'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => {doubleBed - 1 < 0 ? setDoubleBed(0) : setDoubleBed(doubleBed - 1)}}>
                                    <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill={doubleBed > 0 ? '#6C6C6C' : "#E7E7E7"}/>
                                    </svg>
                                </div>

                                <div className="controls-number">
                                    {doubleBed}
                                </div>

                                <div className="controls-increment active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => setDoubleBed(doubleBed + 1)}>
                                    <path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#6C6C6C"/>
                                    </svg>
                                </div>
                                </div>
                            </div>

                            <div className="room-box d-flex gap-4">
                                <div className="room-name">
                                <h5 className='mt-2'>Bir nəfərlik çarpayı</h5>
                                </div>

                                <div className="room-controls d-flex gap-3 align-items-center">
                                <div className={`controls-decrement ${singleBed > 0 ? 'active' : 'deactive'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => {singleBed - 1 < 0 ? setSingleBed(0) : setSingleBed(singleBed - 1)}}>
                                    <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill={singleBed > 0 ? '#6C6C6C' : "#E7E7E7"}/>
                                    </svg>
                                </div>

                                <div className="controls-number">
                                    {singleBed}
                                </div>

                                <div className="controls-increment active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => setSingleBed(singleBed + 1)}>
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

                            <div className="filter-checkbox">
                                <input id="category1" type="checkbox" value="Parti" name="category" onChange={handleCheckboxes} />
                                <label>Nikah şəhadətnaməsi zəruridir</label>
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

                    <div className="filter-apply-button green-button-animation d-flex justify-content-center mt-4" onClick={() => {setFilterOpen(false); setScroll(true)}}>
                        Axtar
                    </div>

                </div>
            </div>

        </div>
        
        <div className="search-body-properties d-flex flex-column gap-3 mt-4">
            {windowWidth > 768 
            ?
            cards.map((_, index) => (
            <div key={index} className="search-card d-flex justify-content-between">
                <div className="search-card-img">
                    <img src="https://s3-alpha-sig.figma.com/img/d12f/a656/e99bd4984ba1e25bc6075ac43c6690d7?Expires=1701043200&Signature=hq6uae89OZd3Dv2-x3EPC3OjOCzs9EyR71nmIemTup8u9rV5J6P7a3OjVBhyHDRRSfLl1OCRDQMaD3cLoaHuhWDNzC1pOQ1oFotFjeF3DEMw~J5iR9WOWc2eVTyruN5XRLVOTq7tMwrqNRJLZ1u54rD7ToGCBCbU4o~gk37l1~6koK2gpBtqfekPTFbGYDklJgon3-T3COo2jVE8XBlEXnZrJjr3fAj9KYTCIi6KLkmly3jOu9ibU-utxeXg-0MHJVlTOqZYQ-hm~YfLi6cS2Nw139OZ8ghKMNJIGCYqWC~vG~rrFdxDUxCo-bjed5BVgdMldCOI8sh34AOiIG336Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>

                <div className="search-card-left d-flex justify-content-between">
                    <div className="search-card-info d-flex flex-column">
                        <div className="search-info-header d-flex gap-4 mt-2">
                            <div className="info-title">
                                <h5>Quba/Azərbaycan</h5>
                            </div>

                            <div className="info-rating d-flex">
                                <p className='mb-0'>4.7</p>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M10.3333 14.416L7.25001 16.7702C7.09723 16.8952 6.93057 16.9541 6.75001 16.9468C6.56946 16.9402 6.40973 16.8882 6.27084 16.791C6.13196 16.6938 6.02446 16.5618 5.94834 16.3952C5.87168 16.2285 5.86807 16.048 5.93751 15.8535L7.12501 11.9993L4.10418 9.85352C3.93751 9.7424 3.83334 9.59657 3.79168 9.41602C3.75001 9.23546 3.75696 9.06879 3.81251 8.91602C3.86807 8.76324 3.96529 8.62768 4.10418 8.50935C4.24307 8.39157 4.40973 8.33268 4.60418 8.33268H8.33334L9.54168 4.33268C9.61112 4.13824 9.7189 3.98879 9.86501 3.88435C10.0106 3.78046 10.1667 3.72852 10.3333 3.72852C10.5 3.72852 10.6561 3.78046 10.8017 3.88435C10.9478 3.98879 11.0556 4.13824 11.125 4.33268L12.3333 8.33268H16.0625C16.257 8.33268 16.4236 8.39157 16.5625 8.50935C16.7014 8.62768 16.7986 8.76324 16.8542 8.91602C16.9097 9.06879 16.9167 9.23546 16.875 9.41602C16.8333 9.59657 16.7292 9.7424 16.5625 9.85352L13.5417 11.9993L14.7292 15.8535C14.7986 16.048 14.7953 16.2285 14.7192 16.3952C14.6425 16.5618 14.5347 16.6938 14.3958 16.791C14.257 16.8882 14.0972 16.9402 13.9167 16.9468C13.7361 16.9541 13.5695 16.8952 13.4167 16.7702L10.3333 14.416Z" fill="#40918B"/>
                                </svg>
                            </div>
                        </div>

                        <div className="info-description d-flex flex-column justify-content-between">
                            <div className="info-rooms">
                                <p className='mb-0'>8 nəfər | 4 otaq | 2 tualet</p>
                            </div>

                            <div className="card-more-price d-flex mt-5">
                                <p className='mb-0 mt-2'><span>124 azn</span> | Günlük</p>
                            </div>
                        </div>
                    </div>

                    <div className="search-card-more d-flex flex-column justify-content-between mt-2">
                        <div className="card-more-controls d-flex gap-1 justify-content-end">
                            <div className="controls-share" onClick={() => handleShareClick()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M6.08398 14.5471C7.76673 14.5471 9.13086 13.183 9.13086 11.5002C9.13086 9.8175 7.76673 8.45337 6.08398 8.45337C4.40124 8.45337 3.03711 9.8175 3.03711 11.5002C3.03711 13.183 4.40124 14.5471 6.08398 14.5471Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.917 19.9636C18.5997 19.9636 19.9639 18.5995 19.9639 16.9167C19.9639 15.234 18.5997 13.8699 16.917 13.8699C15.2342 13.8699 13.8701 15.234 13.8701 16.9167C13.8701 18.5995 15.2342 19.9636 16.917 19.9636Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.917 9.13037C18.5997 9.13037 19.9639 7.76624 19.9639 6.0835C19.9639 4.40075 18.5997 3.03662 16.917 3.03662C15.2342 3.03662 13.8701 4.40075 13.8701 6.0835C13.8701 7.76624 15.2342 9.13037 16.917 9.13037Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.79199 10.1461L14.2087 7.43774M8.79199 12.8544L14.2087 15.5627L8.79199 12.8544Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>

                            <div className="controls-like" onClick={() => handleLikeClick(index)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={liked[index] && 'd-none'}>
                                    <path d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="#1D1D1D"/>
                                </svg>

                                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={!liked[index] && 'd-none'}>
                                    <path d="M13.7454 2.9917C12.1331 2.9917 10.7554 4.14093 9.99845 4.93324C9.24153 4.14093 7.86691 2.9917 6.25538 2.9917C3.47768 2.9917 1.53845 4.92785 1.53845 7.69939C1.53845 10.7532 3.94691 12.7271 6.27691 14.6363C7.37691 15.5386 8.51538 16.4709 9.38845 17.5048C9.53538 17.6779 9.75076 17.7779 9.97691 17.7779H10.0215C10.2485 17.7779 10.4631 17.6771 10.6092 17.5048C11.4838 16.4709 12.6215 15.5379 13.7223 14.6363C16.0515 12.7279 18.4615 10.754 18.4615 7.69939C18.4615 4.92785 16.5223 2.9917 13.7454 2.9917Z" fill="#FE4343"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="price-more-button text-center mb-3">
                            Ətraflı
                        </div>
                    </div>
                </div>

            </div>
            )) 
            : 
            cards.map((_, index) => (
            <div key={index} className="search-card-lg">
                <div className="card-lg-img">
                    <img src="https://s3-alpha-sig.figma.com/img/d12f/a656/e99bd4984ba1e25bc6075ac43c6690d7?Expires=1701043200&Signature=hq6uae89OZd3Dv2-x3EPC3OjOCzs9EyR71nmIemTup8u9rV5J6P7a3OjVBhyHDRRSfLl1OCRDQMaD3cLoaHuhWDNzC1pOQ1oFotFjeF3DEMw~J5iR9WOWc2eVTyruN5XRLVOTq7tMwrqNRJLZ1u54rD7ToGCBCbU4o~gk37l1~6koK2gpBtqfekPTFbGYDklJgon3-T3COo2jVE8XBlEXnZrJjr3fAj9KYTCIi6KLkmly3jOu9ibU-utxeXg-0MHJVlTOqZYQ-hm~YfLi6cS2Nw139OZ8ghKMNJIGCYqWC~vG~rrFdxDUxCo-bjed5BVgdMldCOI8sh34AOiIG336Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                
                {/* <div className="card-lg-controls d-flex gap-2">
                    <div className="card-lg-controls-share" onClick={() => handleShareClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 23 23" fill="none">
                            <path d="M6.08398 14.5471C7.76673 14.5471 9.13086 13.183 9.13086 11.5002C9.13086 9.8175 7.76673 8.45337 6.08398 8.45337C4.40124 8.45337 3.03711 9.8175 3.03711 11.5002C3.03711 13.183 4.40124 14.5471 6.08398 14.5471Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.917 19.9636C18.5997 19.9636 19.9639 18.5995 19.9639 16.9167C19.9639 15.234 18.5997 13.8699 16.917 13.8699C15.2342 13.8699 13.8701 15.234 13.8701 16.9167C13.8701 18.5995 15.2342 19.9636 16.917 19.9636Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.917 9.13037C18.5997 9.13037 19.9639 7.76624 19.9639 6.0835C19.9639 4.40075 18.5997 3.03662 16.917 3.03662C15.2342 3.03662 13.8701 4.40075 13.8701 6.0835C13.8701 7.76624 15.2342 9.13037 16.917 9.13037Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.79199 10.1461L14.2087 7.43774M8.79199 12.8544L14.2087 15.5627L8.79199 12.8544Z" stroke="#1D1D1D" stroke-width="1.73333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div className="card-lg-controls-like" onClick={() => handleLikeClick(index)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" className={liked[index] && 'd-none'}>
                            <path d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="#1D1D1D"/>
                        </svg>

                        <svg width="26" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={!liked[index] && 'd-none'}>
                            <path d="M13.7454 2.9917C12.1331 2.9917 10.7554 4.14093 9.99845 4.93324C9.24153 4.14093 7.86691 2.9917 6.25538 2.9917C3.47768 2.9917 1.53845 4.92785 1.53845 7.69939C1.53845 10.7532 3.94691 12.7271 6.27691 14.6363C7.37691 15.5386 8.51538 16.4709 9.38845 17.5048C9.53538 17.6779 9.75076 17.7779 9.97691 17.7779H10.0215C10.2485 17.7779 10.4631 17.6771 10.6092 17.5048C11.4838 16.4709 12.6215 15.5379 13.7223 14.6363C16.0515 12.7279 18.4615 10.754 18.4615 7.69939C18.4615 4.92785 16.5223 2.9917 13.7454 2.9917Z" fill="#FE4343"></path>
                        </svg>
                    </div>
                </div> */}

                <div className="card-lg-header mt-2">
                    <div className="card-lg-title d-flex justify-content-between mt-3">
                        <div className="title-name d-flex gap-3">
                            <h5>Quba/Azərbaycan</h5>

                            <div className="card-lg-rating d-flex">
                                <p className='mb-0'>4.7</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M10.3332 14.416L7.24989 16.7702C7.09711 16.8952 6.93044 16.9541 6.74989 16.9468C6.56933 16.9402 6.40961 16.8882 6.27072 16.791C6.13183 16.6938 6.02433 16.5618 5.94822 16.3952C5.87156 16.2285 5.86794 16.048 5.93739 15.8535L7.12489 11.9993L4.10406 9.85352C3.93739 9.7424 3.83322 9.59657 3.79156 9.41602C3.74989 9.23546 3.75683 9.06879 3.81239 8.91602C3.86795 8.76324 3.96517 8.62768 4.10406 8.50935C4.24295 8.39157 4.40961 8.33268 4.60406 8.33268H8.33322L9.54156 4.33268C9.611 4.13824 9.71878 3.98879 9.86489 3.88435C10.0104 3.78046 10.1666 3.72852 10.3332 3.72852C10.4999 3.72852 10.656 3.78046 10.8016 3.88435C10.9477 3.98879 11.0554 4.13824 11.1249 4.33268L12.3332 8.33268H16.0624C16.2568 8.33268 16.4235 8.39157 16.5624 8.50935C16.7013 8.62768 16.7985 8.76324 16.8541 8.91602C16.9096 9.06879 16.9166 9.23546 16.8749 9.41602C16.8332 9.59657 16.7291 9.7424 16.5624 9.85352L13.5416 11.9993L14.7291 15.8535C14.7985 16.048 14.7952 16.2285 14.7191 16.3952C14.6424 16.5618 14.5346 16.6938 14.3957 16.791C14.2568 16.8882 14.0971 16.9402 13.9166 16.9468C13.736 16.9541 13.5693 16.8952 13.4166 16.7702L10.3332 14.416Z" fill="#40918B"/>
                                </svg>
                            </div>
                        </div>

                        <p className='mb-0'><span>124 azn</span> / Günlük</p>
                    </div>
                </div>

                <div className="card-lg-info">
                    <div className="card-lg-overview">
                        <p className='mb-0'>8 nəfər | 4 otaq | 2 tualet</p>
                    </div>
                </div>

                <div className="card-lg-more">
                    Ətraflı
                </div>
            </div>)
            )}
        </div>

      </div>

        <Modal
            open={showShare}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseModal}
                    sx={{
                        position: 'absolute',
                        left: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <div className="modal-content mt-4">
                    <h5>Bu elanı paylaşın</h5>
                    
                    <div className="modal-property d-flex gap-3 align-items-center">
                        <img src={propertyImg} className='modal-property-image' />

                        <div className='d-flex align-items-center gap-4'>
                            <div>
                                <p className='mb-0'>{propertyTitle}</p>
                            </div>

                            <div className='property-detailed-rating d-flex'>
                                <p className='modal-rating mb-0'>5.0</p>
                                <img src="https://allrent.io/homepage/images/svg/details/active_fav.svg" alt="favorite svg"></img>
                            </div>
                        </div>
                    </div>

                    <div className="modal-socials mt-4">
                        <div className="modal-social-box d-flex gap-3 align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24   } height={24} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                                <path d="M25 5a4 4 0 0 1 4 4v17a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5h13zm0 2H12a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a2 2 0 0 0-2-2zm-3-6v2H11a6 6 0 0 0-6 5.78V22H3V9a8 8 0 0 1 7.75-8H22z"></path>
                            </svg>

                            <p className='mb-0'>Linki kopyala</p>
                        </div>

                        <div className="modal-social-box d-flex gap-3 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                            <path fill="#25d366" d="M32 0v32H0V0z"></path><path fill="#FFF" d="m4 28 1.7-6.16a11.82 11.82 0 0 1-1.6-5.95C4.1 9.33 9.46 4 16.05 4a11.9 11.9 0 0 1 8.45 3.49A11.8 11.8 0 0 1 28 15.9a11.94 11.94 0 0 1-17.66 10.45zm6.63-3.8a9.93 9.93 0 0 0 15.35-8.3A9.9 9.9 0 0 0 16.05 6a9.92 9.92 0 0 0-9.93 9.9c0 2.22.65 3.88 1.75 5.63l-1 3.64 3.76-.98zm11.36-5.52c-.07-.13-.27-.2-.57-.35-.3-.15-1.75-.86-2.03-.96-.27-.1-.46-.15-.66.15s-.77.96-.94 1.15-.35.23-.65.08c-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.04s-.02-.46.13-.6l.44-.52c.15-.17.2-.3.3-.5.1-.2.05-.36-.02-.51-.08-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.66-.5l-.57-.01a1.09 1.09 0 0 0-.8.37c-.27.3-1.03 1.01-1.03 2.46s1.06 2.86 1.2 3.06c.16.2 2.1 3.18 5.08 4.45.7.3 1.26.5 1.69.63.7.22 1.36.19 1.87.11.57-.08 1.75-.71 2-1.4s.25-1.28.17-1.4z"></path>
                        </svg>

                            <p className='mb-0'>WhatsApp</p>
                        </div>

                        <div className="modal-social-box d-flex gap-3 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                            <path fill="#1877F2" d="M32 0v32H0V0z"></path><path fill="#FFF" d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.63h4.06V32h5V20.62h3.73l.7-4.62z"></path>
                        </svg>

                            <p className='mb-0'>Facebook</p>
                        </div>

                        <div className="modal-social-box d-flex gap-3 align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 102 102" id="instagram">
                                <defs><radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"></stop><stop offset=".78" stop-color="#d82d7e"></stop></radialGradient><radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop><stop offset="1" stop-color="#8c3aaa"></stop></radialGradient></defs><path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 16"></path><path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361" data-name="Path 17"></path><path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" data-name="Path 18" transform="translate(-422.637 -426.196)"></path>
                            </svg>

                            <p className='mb-0'>Instagram</p>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    </div>
  )
}

export default SearchBody
