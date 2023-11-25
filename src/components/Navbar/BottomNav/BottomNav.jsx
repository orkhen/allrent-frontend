import React from 'react'

const BottomNav = ({ isVisible, hideBottomNav, handleToggler }) => {
  return (
    <div className={`navbar-bottom ${isVisible ? 'visible' : 'hidden'} ${hideBottomNav && 'd-none'}`}>
        <div className="navbar-bottom-container">
            <div className="navbar-bottom-nav d-flex">
                <div className="navbar-bottom-logo">
                    <a href='/'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 48 48">
                            <path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z" fill="#6C6C6C"></path>
                        </svg>
                    </a>
                </div>
                
                <div className="navbar-bottom-liked">
                    <a href='/favorites'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                        </svg>
                    </a>
                </div>

                <div className="navbar-bottom-post">
                    <a href=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M8 0C8.55228 0 9 0.447715 9 1V7H15C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9H9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9H1C0.447715 9 0 8.55229 0 8C0 7.44772 0.447715 7 1 7H7V1C7 0.447715 7.44772 0 8 0Z"/>
                        </svg>
                    </a>
                </div>
                
                <div className="navbar-bottom-control">
                    <a href=''>
                        {localStorage.getItem('ownerMode') === 'true' ? 
                        <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 1C4 0.447715 4.44772 0 5 0H11C11.5523 0 12 0.447715 12 1H14C15.1046 1 16 1.89543 16 3V18C16 19.1046 15.1046 20 14 20H2C0.895431 20 0 19.1046 0 18V3C0 1.89543 0.895431 1 2 1H4ZM4 3H2V18H14V3H12V4C12 4.55228 11.5523 5 11 5H5C4.44772 5 4 4.55228 4 4V3ZM10 2H6V3H10V2ZM11.7071 8.79289C12.0976 9.18342 12.0976 9.81658 11.7071 10.2071L7.70711 14.2071C7.31658 14.5976 6.68342 14.5976 6.29289 14.2071L4.29289 12.2071C3.90237 11.8166 3.90237 11.1834 4.29289 10.7929C4.68342 10.4024 5.31658 10.4024 5.70711 10.7929L7 12.0858L10.2929 8.79289C10.6834 8.40237 11.3166 8.40237 11.7071 8.79289Z"></path>
                        </svg>
                        : 
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 0C6.55228 0 7 0.447715 7 1V2H11V1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V2H16C17.1046 2 18 2.89543 18 4V17C18 18.1046 17.1046 19 16 19H2C0.895431 19 0 18.1046 0 17V4C0 2.89543 0.895431 2 2 2H5V1C5 0.447715 5.44772 0 6 0ZM5 4H2V7H16V4H13V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V4H7V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5V4ZM16 9H2V17H16V9Z"/>
                        </svg>
                        }
                    </a>
                </div>

                <div className="navbar-bottom-account" onClick={handleToggler}>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                            <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 8a5 5 0 0 0-2 9.58v2.1l-.15.03a11 11 0 0 0-6.94 4.59C9.26 27.59 12.46 29 16 29s6.74-1.41 9.09-3.7a11 11 0 0 0-6.93-4.59l-.16-.03v-2.1a5 5 0 0 0 3-4.35V14a5 5 0 0 0-5-5zm0-6A13 13 0 0 0 5.56 23.75a13.02 13.02 0 0 1 5.54-4.3l.35-.13-.02-.02A7 7 0 0 1 9 14.27L9 14a7 7 0 1 1 11.78 5.12l-.23.2.04.02c2.33.88 4.36 2.41 5.85 4.4A13 13 0 0 0 16 3z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomNav
