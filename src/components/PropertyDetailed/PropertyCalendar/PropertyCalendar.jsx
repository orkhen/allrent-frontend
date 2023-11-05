import React from 'react'
import './propertyCalendar.css'
import Calendar from './Calendar'

const PropertyCalendar = () => {
  return (
    <div className="property-detailed-dates mt-5">
        <div className="dates-header">
            <h5>Giriş və çıxış saatları</h5>
        </div>

        <div className="check-in-out mt-3 d-flex flex-wrap">
            <div className="check-in d-flex gap-5">
                <div className="check-in-left d-flex gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8C0 7.44772 0.447715 7 1 7H11.5858L9.29289 4.70711C8.90237 4.31658 8.90237 3.68342 9.29289 3.29289C9.68342 2.90237 10.3166 2.90237 10.7071 3.29289L14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L11.5858 9H1C0.447715 9 0 8.55228 0 8ZM15 15C15 14.4477 15.4477 14 16 14L18 14V2H16C15.4477 2 15 1.55229 15 1C15 0.447715 15.4477 0 16 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H16C15.4477 16 15 15.5523 15 15Z" fill="#1D1D1D"></path>
                    </svg>

                    <p>Giriş</p>
                </div>

                <div className="check-in-right d-flex gap-2">
                    <p>14:00</p>
                    
                    <div className="green-line"></div>
                    
                    <p>23:00</p>
                </div>
            </div>

            <div className="check-out d-flex gap-5">
                <div className="check-out-left d-flex gap-3">
                        <svg width="20" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L4.29289 3.29289C4.68342 2.90237 5.31658 2.90237 5.70711 3.29289C6.09763 3.68342 6.09763 4.31658 5.70711 4.70711L3.41421 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H3.41421L5.70711 11.2929C6.09763 11.6834 6.09763 12.3166 5.70711 12.7071C5.31658 13.0976 4.68342 13.0976 4.29289 12.7071L0.292893 8.70711ZM15 15C15 14.4477 15.4477 14 16 14L18 14V2H16C15.4477 2 15 1.55229 15 1C15 0.447715 15.4477 0 16 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H16C15.4477 16 15 15.5523 15 15Z" fill="#1D1D1D"></path>
                        </svg>

                        <p>Çıxış</p>
                    </div>

                    <div className="check-out-right d-flex gap-2">
                        <p>09:00</p>
                        
                        <div className="red-line"></div>
                        
                        <p>12:00</p>
                    </div>
            </div>
        </div>

        <div className="property-range-calendar">
            <Calendar/>
        </div>
    </div>
  )
}

export default PropertyCalendar
