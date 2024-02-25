import React, { useState, useContext } from 'react'
import { searchContext } from '../../../pages/SearchPage/SearchPage';
import { AppContext } from '../../../App';
import Dropdown from 'react-bootstrap/Dropdown';
import { Slider} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

const SearchFilter = () => {
    const { filterOpen, setFilterOpen } = useContext(searchContext)
    const { scroll, setScroll, windowWidth } = useContext(AppContext)

    const [sliderVal, setSliderVal] = useState([40, 1500]);
    const [checkboxes, setCheckboxes] = useState({  categories: [],
                                                    permissions: [],
                                                    conditions: [],  });
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [singleBed, setSingleBed] = useState(0);
    const [doubleBed, setDoubleBed] = useState(0);

    const handleCheckboxes = (category, value) => {
        setCheckboxes(prevCheckboxes => {
            // Determine if the checkbox is currently checked
            const isChecked = prevCheckboxes[category].includes(value);
            
            if (isChecked) {
                // If it's checked, remove the item
                return {
                    ...prevCheckboxes,
                    [category]: prevCheckboxes[category].filter(item => item !== value),
                };
            } else {
                // If it's not checked, add the item
                return {
                    ...prevCheckboxes,
                    [category]: [...prevCheckboxes[category], value],
                };
            }
        });

        console.log(checkboxes);
    };
    

    const handleChange = (event, newSliderVal) => {
        setSliderVal(newSliderVal);
      };

    
  return (
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
                        <input id="category1" type="checkbox" value="Villa" name="category" onChange={(e) => handleCheckboxes("categories", e.target.value)} />
                        <label>Villa</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Konteyner" name="category" onChange={(e) => handleCheckboxes("categories", e.target.value)} />
                        <label>Konteyner</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Kooperativ" name="category" onChange={(e) => handleCheckboxes("categories", e.target.value)} />
                        <label>Kooperativ</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Lüks villa" name="category" onChange={(e) => handleCheckboxes("categories", e.target.value)} />
                        <label>Lüks villa</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Şənlik üçün ev" name="category" onChange={(e) => handleCheckboxes("categories", e.target.value)} />
                        <label>Şənlik üçün ev</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Hotel" name="category" onChange={(e) => handleCheckboxes("categories", e.target.value)} />
                        <label>Hotel</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Hovuzlu villa" name="category" onChange={(e) => handleCheckboxes("categories", e.target.value)} />
                        <label>Hovuzlu villa</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Kənd evi" name="category" onChange={(e) => handleCheckboxes("categories", e.target.value)} />
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
                        <input id="category1" type="checkbox" value="Ev heyvanı" name="category" onChange={(e) => handleCheckboxes("permissions", e.target.value)} />
                        <label>Ev heyvanı</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Tütün" name="category" onChange={(e) => handleCheckboxes("permissions", e.target.value)} />
                        <label>Tütün</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Uşaq" name="category" onChange={(e) => handleCheckboxes("permissions", e.target.value)} />
                        <label>Uşaq</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Parti" name="category" onChange={(e) => handleCheckboxes("permissions", e.target.value)} />
                        <label>Parti</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Nikah şəhadətnaməsi zəruridir" name="category" onChange={(e) => handleCheckboxes("permissions", e.target.value)} />
                        <label>Nikah şəhadətnaməsi zəruridir</label>
                    </div>
                </div>
            </div>

            <div className="filter-conditions">
                <h4>Şərait</h4>

                <div className="filter-checkboxes">
                    <div className="filter-checkbox">
                        <input type="checkbox" value="Mətbəx" onChange={(e) => handleCheckboxes("conditions", e.target.value)} />
                        <label>Mətbəx</label>
                    </div>

                    <div className="filter-checkbox">
                        <input type="checkbox" value="Parkinq" onChange={(e) => handleCheckboxes("conditions", e.target.value)} />
                        <label>Parkinq</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Playstation" name="category" onChange={(e) => handleCheckboxes("conditions", e.target.value)} />
                        <label>Playstation</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Soyuducu" name="category" onChange={(e) => handleCheckboxes("conditions", e.target.value)} />
                        <label>Soyuducu</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Netflix" name="category" onChange={(e) => handleCheckboxes("conditions", e.target.value)} />
                        <label>Netflix</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Saçquruducu" name="category" onChange={(e) => handleCheckboxes("conditions", e.target.value)} />
                        <label>Saçquruducu</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Paltaryuyan" name="category" onChange={(e) => handleCheckboxes("conditions", e.target.value)} />
                        <label>Paltaryuyan</label>
                    </div>

                    <div className="filter-checkbox">
                        <input id="category1" type="checkbox" value="Hovuz" name="category" onChange={(e) => handleCheckboxes("conditions", e.target.value)} />
                        <label>Hovuz</label>
                    </div>
                </div>
            </div>

            <div className="filter-apply-button green-button-animation d-flex justify-content-center mt-4" onClick={() => {setFilterOpen(false); setScroll(true)}}>
                Axtar
            </div>

        </div>
    </div>
  )
}

export default SearchFilter
