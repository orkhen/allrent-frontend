import React, { useState, useEffect, useContext, createContext } from 'react';
import { AppContext } from '../../App';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import './navbar.css';

import { useNavigate } from 'react-router-dom';

import SearchbarProperty from '../SearchbarProperty/SearchbarProperty'
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';
import BottomNav from './BottomNav/BottomNav';

export const NavContext = createContext(null);

const PageNav = ({ hideSearch, hideBottomNav }) => {
    const { isLogged, scroll, setScroll } = useContext(AppContext)
    const [expanded, setExpanded] = useState(false)

    const navigate = useNavigate();

    const [menuToggled, setMenuToggled] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    const handleModeSwitch = () => {
        const ownerMode = localStorage.getItem('ownerMode') === 'true' ? true : false
        localStorage.setItem('ownerMode', !ownerMode)
        window.location.href = '/'
    }

    const handleToggler = () => {
        setMenuToggled(!menuToggled);
        setScroll(!scroll)
        
    }

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const scrollThreshold = 200;
    
          setIsNavbarFixed(scrollPosition > scrollThreshold);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const [isVisible, setIsVisible] = useState(true);

      useEffect(() => {
        let prevScrollPos = window.pageYOffset;
    
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          const scrollDifference = prevScrollPos - currentScrollPos;
    
          if (scrollDifference > 5) {
            setIsVisible(true);
          } else if (scrollDifference < -15) {
            setIsVisible(false);
          }
    
          prevScrollPos = currentScrollPos;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLogged');
        window.location.href = '/'
    }

  return (
    <NavContext.Provider value={{ expanded, setExpanded }}>
    <div>
        <Navbar className={`navbar-main mx-0 mx-md-auto ${isNavbarFixed ? 'fixed-navbar' : ''}`}>
            <Container fluid className='navbar-container justify-content-between'>
                <Navbar.Brand href="/" className='navbar-brand'>
                    <img className='navbar-img-logo' src='https://allrent.io/homepage/images/Loqotip_A%C4%9F%20fonda.svg' alt='logo'/>
                </Navbar.Brand>
                
                <div className={`nav-searchbar d-flex flex-column gap-2 ${hideSearch && 'd-none'} ${expanded && 'search-expanded'}`}>
                    <SearchbarProperty />
                    {expanded &&
                        <div className="nav-searchbar-expanded d-flex">
                            <div className="nav-searchbar-dates">
                                <div className="searchbar-box">
                                    <input type='text' />
                                </div>
                            </div>

                            <div className="nav-searchbar-guests">
                                <div className="searchbar-box">
                                    <input type='text' />
                                </div>
                            </div>
                        </div>  
                    }
                </div>

                <div className='navbar-links d-flex flex-column align-items-center justify-content-center navbar-state'>
                    <nav className='navbar-links-top d-flex justify-content-center align-items-center'>

                        <a className='navbar-link'>
                            <img src='https://allrent.io/homepage/images/svg/world.svg' alt='language' className='navbar-img-language'/>
                        </a>

                        <a href='/login' className={`login-account-button red-button-animation ${isLogged && 'd-none'}`}>Daxil ol</a>

                        <a href={isLogged ? '/property/post' : ''} className={`post-property-button ${!isLogged && 'd-none'}`} >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.55 2.53149C10.9558 2.18951 11.4693 2.00195 12 2.00195C12.5307 2.00195 13.0442 2.18951 13.45 2.53149L20.2 8.22349C20.707 8.65149 21 9.28049 21 9.94349V12.0215C20.5325 11.7218 20.0284 11.4835 19.5 11.3125V9.94349C19.4999 9.8343 19.4759 9.72645 19.4298 9.62748C19.3837 9.52851 19.3165 9.4408 19.233 9.37049L12.483 3.67849C12.3478 3.56467 12.1767 3.50226 12 3.50226C11.8233 3.50226 11.6522 3.56467 11.517 3.67849L4.767 9.36949C4.68347 9.4398 4.6163 9.52751 4.57018 9.62648C4.52406 9.72545 4.50011 9.8333 4.5 9.94249V19.7455C4.5 19.8835 4.612 19.9955 4.75 19.9955H11.497C11.722 20.5355 12.018 21.0395 12.374 21.4955H4.75C4.28604 21.4955 3.84108 21.3113 3.51292 20.9833C3.18476 20.6553 3.00027 20.2104 3 19.7465V9.94349C3 9.28049 3.293 8.65149 3.8 8.22349L10.55 2.53149ZM23 17.4995C23 16.0408 22.4205 14.6419 21.3891 13.6104C20.3576 12.5789 18.9587 11.9995 17.5 11.9995C16.0413 11.9995 14.6424 12.5789 13.6109 13.6104C12.5795 14.6419 12 16.0408 12 17.4995C12 18.9582 12.5795 20.3571 13.6109 21.3886C14.6424 22.42 16.0413 22.9995 17.5 22.9995C18.9587 22.9995 20.3576 22.42 21.3891 21.3886C22.4205 20.3571 23 18.9582 23 17.4995ZM18 17.9995L18.001 20.5025C18.001 20.6351 17.9483 20.7623 17.8546 20.856C17.7608 20.9498 17.6336 21.0025 17.501 21.0025C17.3684 21.0025 17.2412 20.9498 17.1474 20.856C17.0537 20.7623 17.001 20.6351 17.001 20.5025V17.9995H14.496C14.3634 17.9995 14.2362 17.9468 14.1424 17.853C14.0487 17.7593 13.996 17.6321 13.996 17.4995C13.996 17.3669 14.0487 17.2397 14.1424 17.1459C14.2362 17.0522 14.3634 16.9995 14.496 16.9995H17V14.4995C17 14.3669 17.0527 14.2397 17.1464 14.1459C17.2402 14.0522 17.3674 13.9995 17.5 13.9995C17.6326 13.9995 17.7598 14.0522 17.8536 14.1459C17.9473 14.2397 18 14.3669 18 14.4995V16.9995H20.497C20.6296 16.9995 20.7568 17.0522 20.8506 17.1459C20.9443 17.2397 20.997 17.3669 20.997 17.4995C20.997 17.6321 20.9443 17.7593 20.8506 17.853C20.7568 17.9468 20.6296 17.9995 20.497 17.9995H18Z" fill="#1D1D1D"></path>
                                </svg>
                        </a>
                            
                        <ProfileDropdown />
                    </nav>
                </div>

                <div className='navbar-menu-toggler'>
                    <RxHamburgerMenu size={30} onClick={handleToggler}/>
                </div>
            </Container>

            {menuToggled && ( isLogged ? (
                <div className={`navbar-side-menu d-flex flex-column ${menuToggled ? 'slide-left' : 'slide-right'}`}>
                    <div className='side-menu-close d-flex justify-content-end'>
                        <AiOutlineClose size={25} onClick={handleToggler}/>
                    </div>

                    <div className='side-menu-links d-flex flex-column align-items-start justify-content-start'>
                        <div className="user-profile mx-auto text-center">
                            <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="120" height="120" rx="60" fill="#C9C9C9"></rect>
                                <path d="M51.7525 73.607C57.2712 73.1623 62.8153 73.1623 68.334 73.607C71.3393 73.7822 74.3303 74.1581 77.2881 74.7324C83.6886 76.0284 87.8671 78.1429 89.6579 81.5533C91.0029 84.215 91.0029 87.3836 89.6579 90.0453C87.8671 93.4557 83.8544 95.7066 77.2218 96.8662C74.2663 97.4622 71.2746 97.8496 68.2677 98.0257C65.482 98.3327 62.6963 98.3327 59.8774 98.3327H54.8035C53.7422 98.1963 52.7142 98.1281 51.7193 98.1281C48.7123 97.9734 45.7199 97.5973 42.7652 97.0026C36.3648 95.7748 32.1862 93.5922 30.3954 90.1817C29.7041 88.8606 29.3396 87.3848 29.3337 85.8846C29.3198 84.3752 29.6732 82.8861 30.3622 81.5533C32.1199 78.1429 36.2984 75.9261 42.7652 74.7324C45.733 74.1499 48.7355 73.7739 51.7525 73.607ZM60.0101 21.666C71.1276 21.666 80.1401 30.9343 80.1401 42.3674C80.1401 53.8004 71.1276 63.0687 60.0101 63.0687C48.8926 63.0687 39.88 53.8004 39.88 42.3674C39.88 30.9343 48.8926 21.666 60.0101 21.666Z" fill="white"></path>
                            </svg>

                            <h4 className='mb-0 mt-2'>Xoş gəlmişsiniz!</h4>
                        </div>

                        <div className='d-flex align-items-start home'>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.33565 0.252591C9.71453 -0.0841969 10.2855 -0.0841969 10.6644 0.252591L19.6644 8.25259C20.0772 8.61951 20.1143 9.25158 19.7474 9.66436C19.3805 10.0771 18.7484 10.1143 18.3356 9.74741L18 9.44907V17C18 18.1046 17.1046 19 16 19H4.00001C2.89544 19 2.00001 18.1046 2.00001 17V9.44907L1.66437 9.74741C1.25159 10.1143 0.619519 10.0771 0.252601 9.66436C-0.114317 9.25158 -0.0771359 8.61951 0.335647 8.25259L9.33565 0.252591ZM4.00001 7.67129V17H7.00001V12C7.00001 11.4477 7.44773 11 8.00001 11H12C12.5523 11 13 11.4477 13 12V17H16V7.67129L10 2.33795L4.00001 7.67129ZM11 17V13H9.00001V17H11Z" fill="#6C6C6C"></path>
                            </svg>
                            <a href='/' className='navbar-link'>Ana səhifə</a>
                        </div>

                        <div className='d-flex align-items-start home'>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 1C4 0.447715 4.44772 0 5 0H11C11.5523 0 12 0.447715 12 1H14C15.1046 1 16 1.89543 16 3V18C16 19.1046 15.1046 20 14 20H2C0.895431 20 0 19.1046 0 18V3C0 1.89543 0.895431 1 2 1H4ZM4 3H2V18H14V3H12V4C12 4.55228 11.5523 5 11 5H5C4.44772 5 4 4.55228 4 4V3ZM10 2H6V3H10V2ZM11.7071 8.79289C12.0976 9.18342 12.0976 9.81658 11.7071 10.2071L7.70711 14.2071C7.31658 14.5976 6.68342 14.5976 6.29289 14.2071L4.29289 12.2071C3.90237 11.8166 3.90237 11.1834 4.29289 10.7929C4.68342 10.4024 5.31658 10.4024 5.70711 10.7929L7 12.0858L10.2929 8.79289C10.6834 8.40237 11.3166 8.40237 11.7071 8.79289Z" fill="#6C6C6C"></path>
                            </svg>
                            <a href='/reservations' className='navbar-link'>Rezervasiyalar</a>
                        </div>

                        <div className='d-flex align-items-start'>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.68377 0.0513167C6.88904 -0.0171056 7.11096 -0.0171056 7.31623 0.0513167L13 1.94591L17.3675 0.490059C18.6626 0.0583717 20 1.02231 20 2.38743V14.2792C20 15.1401 19.4491 15.9044 18.6325 16.1766L13.3162 17.9487C13.111 18.0171 12.889 18.0171 12.6838 17.9487L7 16.0541L2.63246 17.5099C1.33739 17.9416 0 16.9777 0 15.6126V3.72076C0 2.8599 0.55086 2.09562 1.36754 1.82339L6.68377 0.0513167ZM8 14.2792L12 15.6126V3.72076L8 2.38743V14.2792ZM6 2.38743L2 3.72076V15.6126L6 14.2792V2.38743ZM14 3.72076V15.6126L18 14.2792V2.38743L14 3.72076Z" fill="#6C6C6C"></path>
                            </svg>
                            <a href='/map'  className='navbar-link'>
                                Xəritə
                            </a>
                        </div>

                        <div className='d-flex align-items-start home'>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1.52765C7.64418 -0.583106 4.02125 -0.506535 1.75736 1.75736C-0.585786 4.1005 -0.585786 7.8995 1.75736 10.2426L8.58579 17.0711C9.36684 17.8521 10.6332 17.8521 11.4142 17.0711L18.2426 10.2426C20.5858 7.8995 20.5858 4.1005 18.2426 1.75736C15.9787 -0.506535 12.3558 -0.583106 10 1.52765ZM8.82843 3.17157L9.29289 3.63604C9.68342 4.02656 10.3166 4.02656 10.7071 3.63604L11.1716 3.17157C12.7337 1.60948 15.2663 1.60948 16.8284 3.17157C18.3905 4.73367 18.3905 7.26633 16.8284 8.82843L10 15.6569L3.17157 8.82843C1.60948 7.26633 1.60948 4.73367 3.17157 3.17157C4.73367 1.60948 7.26633 1.60948 8.82843 3.17157Z" fill="#6C6C6C"></path>
                            </svg>
                            <a href='/favorites' className='navbar-link'>Bəyənilənlər</a>
                        </div>

                        <div className='d-flex align-items-start home'>
                            <svg className='mt-0 mb-0' width="20" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.14614 1.24812C7.4433 0.516158 8.16138 0 9 0C9.83863 0 10.5567 0.516158 10.8539 1.24812C13.8202 2.06072 16 4.77579 16 8V12.6972L17.8321 15.4453C18.0366 15.7522 18.0557 16.1467 17.8817 16.4719C17.7077 16.797 17.3688 17 17 17H12.4646C12.2219 18.6961 10.7632 20 9 20C7.23677 20 5.77806 18.6961 5.53545 17H1C0.631206 17 0.292346 16.797 0.118327 16.4719C-0.0556921 16.1467 -0.0366195 15.7522 0.167951 15.4453L2 12.6972V8C2 4.77579 4.17983 2.06072 7.14614 1.24812ZM7.58535 17C7.79127 17.5826 8.34689 18 9 18C9.65311 18 10.2087 17.5826 10.4146 17H7.58535ZM9 3C6.23858 3 4 5.23858 4 8V13C4 13.1974 3.94156 13.3904 3.83205 13.5547L2.86852 15H15.1315L14.168 13.5547C14.0584 13.3904 14 13.1974 14 13V8C14 5.23858 11.7614 3 9 3Z" fill="#6C6C6C"/>
                            </svg>
                            <a href='' className='navbar-link'>Bildirişlər</a>
                        </div>

                        <div className='d-flex align-items-start home'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4339 21.1409C12.1601 20.679 12.8884 20.2192 13.6146 19.7573C13.9433 19.5489 14.2763 19.3427 14.5964 19.1192C15.357 18.5886 16.0703 17.9849 16.7041 17.3059C17.9587 15.9589 18.9126 14.3626 19.5164 12.6245C20.0084 11.2044 20.2189 9.70692 20.2189 8.20731V5.34774C20.2189 4.96317 19.9503 4.62802 19.5873 4.51845C19.3251 4.43895 19.0652 4.35731 18.8138 4.25204C18.8826 4.27997 18.9513 4.31005 19.0201 4.33798C18.571 4.14677 18.15 3.90184 17.7632 3.60536L17.9373 3.74071C17.5548 3.44423 17.2111 3.10263 16.9146 2.7202L17.0499 2.89423C16.7535 2.50751 16.5064 2.08427 16.3152 1.63524C16.3431 1.70399 16.3732 1.77274 16.4011 1.84149C16.3367 1.68681 16.2765 1.52782 16.225 1.36884C16.1089 1.00575 15.7845 0.737196 15.3957 0.737196H7.68491C7.33042 0.737196 6.97378 0.726454 6.61929 0.737196H6.60425C6.21323 0.737196 5.89097 1.00575 5.77495 1.36884C5.72339 1.52997 5.66538 1.68681 5.59878 1.84149C5.62671 1.77274 5.65679 1.70399 5.68472 1.63524C5.49351 2.08427 5.24644 2.50536 4.94995 2.89423L5.0853 2.7202C4.78882 3.10263 4.44507 3.44423 4.06265 3.74071L4.23667 3.60536C3.84995 3.90184 3.42671 4.14677 2.97983 4.33798C3.04858 4.31005 3.11733 4.27997 3.18608 4.25204C2.93257 4.35731 2.67476 4.43895 2.41265 4.51845C2.04956 4.62802 1.78101 4.96317 1.78101 5.34774V7.93876C1.78101 8.39423 1.78101 8.8497 1.81323 9.30516C1.88198 10.2311 2.03882 11.155 2.29878 12.0466C2.8144 13.8169 3.70815 15.4475 4.89409 16.8548C5.81577 17.9483 6.92651 18.8335 8.12964 19.5962L10.508 21.1044C10.5273 21.1173 10.5488 21.1302 10.5681 21.1431C10.9484 21.3837 11.5328 21.2354 11.7433 20.8337C11.9667 20.4083 11.84 19.9163 11.4339 19.6585C11.0472 19.4136 10.6605 19.1686 10.2759 18.9237C9.78179 18.61 9.28979 18.2985 8.79565 17.9848C8.44976 17.7657 8.11245 17.5315 7.78589 17.2823L7.95991 17.4177C7.1478 16.7882 6.41733 16.0577 5.78784 15.2456L5.92319 15.4196C5.28296 14.5882 4.75015 13.6772 4.33979 12.7104C4.36772 12.7792 4.3978 12.8479 4.42573 12.9167C4.00679 11.922 3.72104 10.8778 3.5771 9.8079C3.58784 9.88309 3.59858 9.96044 3.60718 10.0356C3.51479 9.33954 3.49976 8.64345 3.49976 7.9452V5.35634C3.28921 5.63348 3.07866 5.90848 2.86812 6.18563C3.60933 5.9622 4.3269 5.66571 4.9564 5.21239C5.7019 4.67528 6.33784 4.01356 6.8105 3.22294C7.07046 2.78895 7.27886 2.3163 7.43355 1.83505C7.1564 2.04559 6.8814 2.25614 6.60425 2.46669H14.315C14.6695 2.46669 15.0261 2.47528 15.3806 2.46669H15.3957C15.1185 2.25614 14.8435 2.04559 14.5664 1.83505C15.1056 3.51727 16.3302 4.98036 17.9373 5.73661C18.324 5.91923 18.7214 6.06102 19.1318 6.18563C18.9212 5.90848 18.7107 5.63348 18.5001 5.35634V8.40282C18.5001 8.94852 18.4636 9.49423 18.3927 10.0356C18.4035 9.96044 18.4142 9.88309 18.4228 9.8079C18.2767 10.8757 17.991 11.922 17.5742 12.9167C17.6021 12.8479 17.6322 12.7792 17.6601 12.7104C17.2498 13.6772 16.7169 14.5882 16.0767 15.4196L16.2121 15.2456C15.5826 16.0577 14.8521 16.7882 14.04 17.4177L14.214 17.2823C13.7328 17.654 13.2214 17.9741 12.7101 18.3007C12.1429 18.6616 11.5757 19.0204 11.0085 19.3813C10.8625 19.4737 10.7142 19.5682 10.5681 19.6606C10.3812 19.7788 10.233 19.9571 10.1728 20.1741C10.1169 20.3804 10.1427 20.6532 10.2587 20.8358C10.5037 21.214 11.0279 21.3987 11.4339 21.1409Z" fill="#6C6C6C"></path>
                                <path d="M6.62154 10.9548L8.82798 13.1612L9.14166 13.4749C9.47037 13.8036 10.029 13.8036 10.3577 13.4749L12.0614 11.7712L14.7577 9.07491L15.3786 8.45401C15.6965 8.13604 15.7202 7.55167 15.3786 7.23799C15.0348 6.92217 14.502 6.89854 14.1626 7.23799L12.4588 8.94171L9.76255 11.638L9.14166 12.2589H10.3577L8.15123 10.0524L7.83755 9.73878C7.51959 9.42081 6.93521 9.39717 6.62154 9.73878C6.30572 10.0825 6.28209 10.6132 6.62154 10.9548Z" fill="#6C6C6C"></path>
                            </svg>
                            <a href='' className='navbar-link'>Giriş və təhlükəsizlik</a>
                        </div>

                        <div className='d-flex align-items-start'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11C1 16.523 5.477 21 11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11Z" stroke="#6C6C6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 1.05005C12 1.05005 15 5.00005 15 11C15 17 12 20.9501 12 20.9501M10 20.9501C10 20.9501 7 17 7 11C7 5.00005 10 1.05005 10 1.05005M1.63 14.5H20.37M1.63 7.50005H20.37" stroke="#6C6C6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <a href='' className='navbar-link'>Dil</a>
                        </div>

                        <div className='d-flex align-items-start home'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 20C11 19.4477 10.5523 19 10 19H5V5H10C10.5523 5 11 4.55228 11 4C11 3.44771 10.5523 3 10 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H10C10.5523 21 11 20.5523 11 20Z" fill="#6C6C6C"></path>
                                <path d="M21.7136 12.7005C21.8063 12.6062 21.8764 12.498 21.9241 12.3828C21.9727 12.2657 21.9996 12.1375 22 12.003L22 12L22 11.997C21.9992 11.7421 21.9016 11.4874 21.7071 11.2929L17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L18.5858 11H9C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13H18.5858L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7064 12.7078L21.7136 12.7005Z" fill="#6C6C6C"></path>
                            </svg>
                            <a href='' className='navbar-link' onClick={handleLogout}>Çıxış</a>
                        </div>

                        <div className="side-menu-buttons">
                            <div className="side-menu-button-top text-center" onClick={() => navigate('/property/post')}>
                                <a href='/property/post'>Ev paylaş</a>
                            </div>

                            <div className="side-menu-button-bottom text-center" onClick={handleModeSwitch}>
                                <p className='mb-0'>{localStorage.getItem('ownerMode') === 'true' ? 'Səyahətə keçin' : 'Mənzil idarəçiliyinə keçin'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`navbar-side-menu d-flex flex-column ${menuToggled ? 'slide-left' : 'slide-right'}`}>
                    <div className='side-menu-close d-flex justify-content-end'>
                        <AiOutlineClose size={25} onClick={handleToggler}/>
                    </div>

                    <div className='side-menu-links d-flex flex-column align-items-start justify-content-start'>
                        <div className='d-flex align-items-start home'>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.33565 0.252591C9.71453 -0.0841969 10.2855 -0.0841969 10.6644 0.252591L19.6644 8.25259C20.0772 8.61951 20.1143 9.25158 19.7474 9.66436C19.3805 10.0771 18.7484 10.1143 18.3356 9.74741L18 9.44907V17C18 18.1046 17.1046 19 16 19H4.00001C2.89544 19 2.00001 18.1046 2.00001 17V9.44907L1.66437 9.74741C1.25159 10.1143 0.619519 10.0771 0.252601 9.66436C-0.114317 9.25158 -0.0771359 8.61951 0.335647 8.25259L9.33565 0.252591ZM4.00001 7.67129V17H7.00001V12C7.00001 11.4477 7.44773 11 8.00001 11H12C12.5523 11 13 11.4477 13 12V17H16V7.67129L10 2.33795L4.00001 7.67129ZM11 17V13H9.00001V17H11Z" fill="#6C6C6C"></path>
                            </svg>
                            <a href='' className='navbar-link'>Ana səhifə</a>
                        </div>
                        <div className='d-flex align-items-start'>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.68377 0.0513167C6.88904 -0.0171056 7.11096 -0.0171056 7.31623 0.0513167L13 1.94591L17.3675 0.490059C18.6626 0.0583717 20 1.02231 20 2.38743V14.2792C20 15.1401 19.4491 15.9044 18.6325 16.1766L13.3162 17.9487C13.111 18.0171 12.889 18.0171 12.6838 17.9487L7 16.0541L2.63246 17.5099C1.33739 17.9416 0 16.9777 0 15.6126V3.72076C0 2.8599 0.55086 2.09562 1.36754 1.82339L6.68377 0.0513167ZM8 14.2792L12 15.6126V3.72076L8 2.38743V14.2792ZM6 2.38743L2 3.72076V15.6126L6 14.2792V2.38743ZM14 3.72076V15.6126L18 14.2792V2.38743L14 3.72076Z" fill="#6C6C6C"></path>
                            </svg>
                            <a href='/map' className='navbar-link'>
                                Xəritə
                            </a>
                        </div>
                        <div className='d-flex align-items-start'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11C1 16.523 5.477 21 11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11Z" stroke="#6C6C6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 1.05005C12 1.05005 15 5.00005 15 11C15 17 12 20.9501 12 20.9501M10 20.9501C10 20.9501 7 17 7 11C7 5.00005 10 1.05005 10 1.05005M1.63 14.5H20.37M1.63 7.50005H20.37" stroke="#6C6C6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <a href='' className='navbar-link'>Dil</a>
                        </div>

                        <div className="side-menu-buttons">
                            <div className="side-menu-button-top text-center" onClick={() => navigate('/login')}>
                                <a href='/login'>Daxil ol</a>
                            </div>

                            <div className="side-menu-button-bottom text-center" onClick={() => navigate('/register')}>
                                <a href='/register'>Qeydiyyatdan keç</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Navbar>

        <BottomNav isVisible={isVisible} hideBottomNav={hideBottomNav} handleToggler={handleToggler} />
    </div>
    </NavContext.Provider>
  )
}

export default PageNav
