import React, { useEffect, useState, useRef, useContext } from 'react'
import './reservationsBody.css'
import { AppContext } from '../../App'
import axios from 'axios';

const ReservationsBody = () => {
    const { windowWidth } = useContext(AppContext)
    const [activeTab, setActiveTab] = useState('active')
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [reservations, setReservations] = useState([]);
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const updateIndicator = (tabName) => {
        const tabElement = document.querySelector(`.reservations-${tabName}`);
        if (tabElement) {
            setIndicatorStyle({
                left: tabElement.offsetLeft + 'px',
                width: tabElement.offsetWidth + 'px',
            });
        }
    }

    function daysUntil(dateString) {
        // Split the string to get day, month, and year, and adjust month for zero-based index
        const [day, month, year] = dateString.split(".");
    
        // Create a Date object for the target date (Note: month is 0-based)
        const targetDate = new Date(year, month - 1, day);
    
        // Get the current date with time reset to midnight for accurate day difference calculation
        const today = new Date();
        const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
        // Calculate the difference in milliseconds
        const diffInMilliseconds = targetDate - currentDate;
    
        // Convert milliseconds to days
        const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
    
        // Use Math.ceil to round up to the nearest whole number and return the result
        return Math.ceil(diffInDays);
    }

    useEffect(() => {        
        updateIndicator(activeTab);
    }, [activeTab]);

    useEffect(() => {
        const fetchData = async () => {
            const userID = localStorage.getItem('userID');

            try {
                setIsLoading(true);
                const response = await axios.get(`https://allrent.io/api/api-reservation-list?user_id=${userID}`)
                // console.log(response.data.reservations);
                // setReservations(response.data.reservations);
                
                const tempReservations = [];
                const tempProperties = [];
                
                for (let index = 0; index < response.data.reservations.length; index++) {
                    const propertyResponse = await axios.get(`https://allrent.io/api/api-properties?id=${response.data.reservations[index].home_id}`);
                    
                    tempReservations.push(response.data.reservations[index]);
                    tempProperties.push(propertyResponse.data.properties[0]);
                }
                
                setReservations(tempReservations);
                setProperties(tempProperties);

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='reservations-body'>
        <div className="reservations-body-container">
            <div className="reservations-body-nav d-flex">
                <div className="indicator" style={indicatorStyle}></div>
                <div className={`reservations-active ${activeTab === 'active' && 'active'}`} onClick={() => setActiveTab('active')}>
                    Aktiv olan 
                </div>

                <div className={`reservations-waiting ${activeTab === 'waiting' && 'active'}`} onClick={() => setActiveTab('waiting')}>
                    Gözləyən
                </div>

                <div className={`reservations-finished ${activeTab === 'finished' && 'active'}`} onClick={() => setActiveTab('finished')}>
                    Bitmiş
                </div>

                <div className={`reservations-canceled ${activeTab === 'canceled' && 'active'}`} onClick={() => setActiveTab('canceled')}>
                    Ləğv olunmuş
                </div>
            </div>

            <div className="reservations-body-properties d-flex flex-column gap-3">
                {windowWidth > 768 && 
                reservations.map((reservation, index) => {
                if (reservation !== undefined && properties[index] !== undefined) {
                    if (activeTab === 'active' && daysUntil(reservation.start_date) >= 0) {
                        return (
                        <div className="reservation-card d-flex justify-content-between">
                            <div className="reservation-card-img">
                                <img src={properties[index].cover_image} alt="cover_image" />
                            </div>
    
                            <div className="reservation-card-left d-flex justify-content-between">
                                <div className="reservation-card-info">
                                    <div className="info-header d-flex gap-4 mt-2">
                                        <div className="info-title">
                                            <h5>{properties[index].title ? properties[index].title : `${properties[index].category} / ${properties[index].city}`}</h5>
                                        </div>
    
                                        <div className="info-rating d-flex">
                                            <p className='mb-0'>{properties[index].rating}</p>
    
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 21 20" fill="none">
                                                <path d="M10.3333 14.416L7.25001 16.7702C7.09723 16.8952 6.93057 16.9541 6.75001 16.9468C6.56946 16.9402 6.40973 16.8882 6.27084 16.791C6.13196 16.6938 6.02446 16.5618 5.94834 16.3952C5.87168 16.2285 5.86807 16.048 5.93751 15.8535L7.12501 11.9993L4.10418 9.85352C3.93751 9.7424 3.83334 9.59657 3.79168 9.41602C3.75001 9.23546 3.75696 9.06879 3.81251 8.91602C3.86807 8.76324 3.96529 8.62768 4.10418 8.50935C4.24307 8.39157 4.40973 8.33268 4.60418 8.33268H8.33334L9.54168 4.33268C9.61112 4.13824 9.7189 3.98879 9.86501 3.88435C10.0106 3.78046 10.1667 3.72852 10.3333 3.72852C10.5 3.72852 10.6561 3.78046 10.8017 3.88435C10.9478 3.98879 11.0556 4.13824 11.125 4.33268L12.3333 8.33268H16.0625C16.257 8.33268 16.4236 8.39157 16.5625 8.50935C16.7014 8.62768 16.7986 8.76324 16.8542 8.91602C16.9097 9.06879 16.9167 9.23546 16.875 9.41602C16.8333 9.59657 16.7292 9.7424 16.5625 9.85352L13.5417 11.9993L14.7292 15.8535C14.7986 16.048 14.7953 16.2285 14.7192 16.3952C14.6425 16.5618 14.5347 16.6938 14.3958 16.791C14.257 16.8882 14.0972 16.9402 13.9167 16.9468C13.7361 16.9541 13.5695 16.8952 13.4167 16.7702L10.3333 14.416Z" fill="#40918B"/>
                                            </svg>
                                        </div>
                                    </div>
    
                                    <div className="info-description">
                                        <div className="info-rooms">
                                            <p className='mb-0'>{properties[index].max_qonaq_sayi} nəfər | {properties[index].yatag_otagi} otaq | {properties[index].tualet} tualet</p>
                                        </div>
    
                                        <div className="info-text mt-2">
                                            <p className='mb-0'>{properties[index].info}</p>
                                        </div>
                                    </div>
    
                                    <div className="info-note">
                                        <p className='mb-0'>İstirahətiniz {daysUntil(reservation.start_date)} gün sonra başlayır</p>
                                    </div>
    
                                </div>
    
                                <div className="reservation-card-more d-flex flex-column justify-content-between mt-2">
                                    <div className="card-more-price d-flex">
                                        <p>{reservation.days} gecə / <span>{reservation.total_price} azn</span></p>
                                    </div>
    
                                    <div className="price-more-button text-center mb-3">
                                        Daha çox
                                    </div>
                                </div>
                            </div>
    
                        </div>
                        )
                    } else if (activeTab === 'finished' && daysUntil(reservation.start_date) < 0) {
                        return (
                            <div className="reservation-card d-flex justify-content-between">
                                <div className="reservation-card-img">
                                    <img src={properties[index].cover_image} alt="cover_image" />
                                </div>
        
                                <div className="reservation-card-left d-flex justify-content-between">
                                    <div className="reservation-card-info">
                                        <div className="info-header d-flex gap-4 mt-2">
                                            <div className="info-title">
                                                <h5>{properties[index].title ? properties[index].title : `${properties[index].category} / ${properties[index].city}`}</h5>
                                            </div>
        
                                            <div className="info-rating d-flex">
                                                <p className='mb-0'>{properties[index].rating}</p>
        
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 21 20" fill="none">
                                                    <path d="M10.3333 14.416L7.25001 16.7702C7.09723 16.8952 6.93057 16.9541 6.75001 16.9468C6.56946 16.9402 6.40973 16.8882 6.27084 16.791C6.13196 16.6938 6.02446 16.5618 5.94834 16.3952C5.87168 16.2285 5.86807 16.048 5.93751 15.8535L7.12501 11.9993L4.10418 9.85352C3.93751 9.7424 3.83334 9.59657 3.79168 9.41602C3.75001 9.23546 3.75696 9.06879 3.81251 8.91602C3.86807 8.76324 3.96529 8.62768 4.10418 8.50935C4.24307 8.39157 4.40973 8.33268 4.60418 8.33268H8.33334L9.54168 4.33268C9.61112 4.13824 9.7189 3.98879 9.86501 3.88435C10.0106 3.78046 10.1667 3.72852 10.3333 3.72852C10.5 3.72852 10.6561 3.78046 10.8017 3.88435C10.9478 3.98879 11.0556 4.13824 11.125 4.33268L12.3333 8.33268H16.0625C16.257 8.33268 16.4236 8.39157 16.5625 8.50935C16.7014 8.62768 16.7986 8.76324 16.8542 8.91602C16.9097 9.06879 16.9167 9.23546 16.875 9.41602C16.8333 9.59657 16.7292 9.7424 16.5625 9.85352L13.5417 11.9993L14.7292 15.8535C14.7986 16.048 14.7953 16.2285 14.7192 16.3952C14.6425 16.5618 14.5347 16.6938 14.3958 16.791C14.257 16.8882 14.0972 16.9402 13.9167 16.9468C13.7361 16.9541 13.5695 16.8952 13.4167 16.7702L10.3333 14.416Z" fill="#40918B"/>
                                                </svg>
                                            </div>
                                        </div>
        
                                        <div className="info-description">
                                            <div className="info-rooms">
                                                <p className='mb-0'>{properties[index].max_qonaq_sayi} nəfər | {properties[index].yatag_otagi} otaq | {properties[index].tualet} tualet</p>
                                            </div>
        
                                            <div className="info-text mt-2">
                                                <p className='mb-0'>{properties[index].info}</p>
                                            </div>
                                        </div>
        
                                        <div className="info-note">
                                            <p className='mb-0'>{reservation.start_date} - {reservation.end_date} tarixlərində istirahət etdiniz</p>
                                        </div>
        
                                    </div>
        
                                    <div className="reservation-card-more d-flex flex-column justify-content-between mt-2">
                                        <div className="card-more-price d-flex">
                                            <p>{reservation.days} gecə / <span>{reservation.total_price} azn</span></p>
                                        </div>
        
                                        <div className="price-more-button text-center mb-3">
                                            Daha çox
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                        )
                    }
                }})}
                
                { 
                windowWidth <= 768 &&
                    reservations.map((reservation, index) => {
                        const property = properties[index];
                        if (reservation !== undefined && property !== undefined) {
                            if (activeTab === 'active' && daysUntil(reservation.start_date) >= 0) {
                                return (
                                <div className="reservation-card-lg">
                                    <div className="card-lg-img">
                                        <img src={property.cover_image} alt="cover_image" />
                                    </div>

                                    <div className="card-lg-header mt-2">
                                        <div className="card-lg-title d-flex justify-content-between mt-3">
                                            <div className="title-name d-flex gap-3">
                                                <h5>{property.title ? property.title : `${property.category} / ${property.city}`}</h5>

                                                <div className="card-lg-rating d-flex">
                                                    <p className='mb-0'>{property.rating}</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                        <path d="M10.3332 14.416L7.24989 16.7702C7.09711 16.8952 6.93044 16.9541 6.74989 16.9468C6.56933 16.9402 6.40961 16.8882 6.27072 16.791C6.13183 16.6938 6.02433 16.5618 5.94822 16.3952C5.87156 16.2285 5.86794 16.048 5.93739 15.8535L7.12489 11.9993L4.10406 9.85352C3.93739 9.7424 3.83322 9.59657 3.79156 9.41602C3.74989 9.23546 3.75683 9.06879 3.81239 8.91602C3.86795 8.76324 3.96517 8.62768 4.10406 8.50935C4.24295 8.39157 4.40961 8.33268 4.60406 8.33268H8.33322L9.54156 4.33268C9.611 4.13824 9.71878 3.98879 9.86489 3.88435C10.0104 3.78046 10.1666 3.72852 10.3332 3.72852C10.4999 3.72852 10.656 3.78046 10.8016 3.88435C10.9477 3.98879 11.0554 4.13824 11.1249 4.33268L12.3332 8.33268H16.0624C16.2568 8.33268 16.4235 8.39157 16.5624 8.50935C16.7013 8.62768 16.7985 8.76324 16.8541 8.91602C16.9096 9.06879 16.9166 9.23546 16.8749 9.41602C16.8332 9.59657 16.7291 9.7424 16.5624 9.85352L13.5416 11.9993L14.7291 15.8535C14.7985 16.048 14.7952 16.2285 14.7191 16.3952C14.6424 16.5618 14.5346 16.6938 14.3957 16.791C14.2568 16.8882 14.0971 16.9402 13.9166 16.9468C13.736 16.9541 13.5693 16.8952 13.4166 16.7702L10.3332 14.416Z" fill="#40918B"/>
                                                    </svg>
                                                </div>
                                            </div>

                                            <p className='mb-0'>{reservation.days} gecə /<span>{reservation.total_price} azn</span></p>
                                        </div>
                                    </div>

                                    <div className="card-lg-info">
                                        <div className="card-lg-overview">
                                            <p className='mb-0'>{property.max_qonaq_sayi} nəfər | {property.yatag_otagi} otaq | {property.tualet} tualet</p>
                                        </div>

                                        <div className="card-lg-description mt-3">
                                            <p className='mb-0'>{property.info}</p>
                                        </div>

                                        <div className="card-lg-note mt-2">
                                            <p className='mb-0'>İstirahətiniz {daysUntil(reservation.start_date)} gün sonra başlayır</p>
                                        </div>
                                    </div>

                                    <div className="card-lg-more">
                                        Daha çox
                                    </div>
                                </div>
                                );
                            } else if (activeTab === 'finished' && daysUntil(reservation.start_date) < 0) {
                                return (
                                    <div className="reservation-card-lg">
                                        <div className="card-lg-img">
                                            <img src={property.cover_image} alt="cover_image" />
                                        </div>
    
                                        <div className="card-lg-header mt-2">
                                            <div className="card-lg-title d-flex justify-content-between mt-3">
                                                <div className="title-name d-flex gap-3">
                                                    <h5>{property.title ? property.title : `${property.category} / ${property.city}`}</h5>
    
                                                    <div className="card-lg-rating d-flex">
                                                        <p className='mb-0'>{property.rating}</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                            <path d="M10.3332 14.416L7.24989 16.7702C7.09711 16.8952 6.93044 16.9541 6.74989 16.9468C6.56933 16.9402 6.40961 16.8882 6.27072 16.791C6.13183 16.6938 6.02433 16.5618 5.94822 16.3952C5.87156 16.2285 5.86794 16.048 5.93739 15.8535L7.12489 11.9993L4.10406 9.85352C3.93739 9.7424 3.83322 9.59657 3.79156 9.41602C3.74989 9.23546 3.75683 9.06879 3.81239 8.91602C3.86795 8.76324 3.96517 8.62768 4.10406 8.50935C4.24295 8.39157 4.40961 8.33268 4.60406 8.33268H8.33322L9.54156 4.33268C9.611 4.13824 9.71878 3.98879 9.86489 3.88435C10.0104 3.78046 10.1666 3.72852 10.3332 3.72852C10.4999 3.72852 10.656 3.78046 10.8016 3.88435C10.9477 3.98879 11.0554 4.13824 11.1249 4.33268L12.3332 8.33268H16.0624C16.2568 8.33268 16.4235 8.39157 16.5624 8.50935C16.7013 8.62768 16.7985 8.76324 16.8541 8.91602C16.9096 9.06879 16.9166 9.23546 16.8749 9.41602C16.8332 9.59657 16.7291 9.7424 16.5624 9.85352L13.5416 11.9993L14.7291 15.8535C14.7985 16.048 14.7952 16.2285 14.7191 16.3952C14.6424 16.5618 14.5346 16.6938 14.3957 16.791C14.2568 16.8882 14.0971 16.9402 13.9166 16.9468C13.736 16.9541 13.5693 16.8952 13.4166 16.7702L10.3332 14.416Z" fill="#40918B"/>
                                                        </svg>
                                                    </div>
                                                </div>
    
                                                <p className='mb-0'>{reservation.days} gecə /<span>{reservation.total_price} azn</span></p>
                                            </div>
                                        </div>
    
                                        <div className="card-lg-info">
                                            <div className="card-lg-overview">
                                                <p className='mb-0'>{property.max_qonaq_sayi} nəfər | {property.yatag_otagi} otaq | {property.tualet} tualet</p>
                                            </div>
    
                                            <div className="card-lg-description mt-3">
                                                <p className='mb-0'>{property.info}</p>
                                            </div>
    
                                            <div className="card-lg-note mt-2">
                                                <p className='mb-0'>{reservation.start_date} - {reservation.end_date} tarixlərində istirahət etdiniz</p>
                                            </div>
                                        </div>
    
                                        <div className="card-lg-more">
                                            Daha çox
                                        </div>
                                    </div>
                                    );
                            }
                        }
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default ReservationsBody
