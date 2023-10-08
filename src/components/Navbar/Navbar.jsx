import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import './navbar.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const PageNav = ({ activeLink, isLogged }) => {
    const navigate = useNavigate();

    const [menuToggled, setMenuToggled] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleToggler = () => {
        setMenuToggled(!menuToggled);
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
    <div>
        <Navbar className={`navbar-main mx-0 mx-md-auto ${isNavbarFixed ? 'fixed-navbar' : ''}`}>
            <Container fluid className='navbar-container justify-content-between'>
                <Navbar.Brand href="/" className='navbar-brand'>
                    <img className='navbar-img-logo' src='https://allrent.io/homepage/images/Loqotip_A%C4%9F%20fonda.svg' alt='logo'/>
                </Navbar.Brand>

                <div className='navbar-links d-flex flex-column align-items-end justify-content-center navbar-state'>
                    {!isLogged &&
                    <nav className='navbar-links-top d-flex justify-content-center align-items-center'>
                        <a href='' className='navbar-link'>
                            <img src='https://allrent.io/homepage/images/svg/world.svg' alt='language' className='navbar-img-language'/>
                        </a>
                        <a href='/login' className='navbar-link'>Daxil ol</a>
                        <a href='/register' className='create-account-button red-button-animation'>Hesab yarat</a>
                    </nav>
                    }

                    {isLogged &&
                    <nav className='navbar-links-top d-flex justify-content-center align-items-center'>
                        <a href='' className='navbar-link'>
                            <img src='https://allrent.io/homepage/images/svg/world.svg' alt='language' className='navbar-img-language'/>
                        </a>

                        <a href='' className='navbar-link'>
                            <img src='https://allrent.io/homepage/images/svg/notf.svg' alt='language' className='navbar-img-notifications'/>
                        </a>
                        
                        <Dropdown>
                            <Dropdown.Toggle>
                                <div className='navbar-link profile'>
                                    <svg width= {18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2ZM3 6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6C15 9.31371 12.3137 12 9 12C5.68629 12 3 9.31371 3 6ZM5 16C3.34315 16 2 17.3431 2 19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19C0 16.2386 2.23858 14 5 14H13C15.7614 14 18 16.2386 18 19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19C16 17.3431 14.6569 16 13 16H5Z" fill="#FEFEFE"></path>
                                    </svg>
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu align={'end'}>
                                <Dropdown.Item href="" className='d-flex gap-3'>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.2929 2.29289C14.6834 1.90237 15.3166 1.90237 15.7071 2.29289L19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L16.5858 8L5 8C4.44772 8 4 7.55228 4 7C4 6.44771 4.44772 6 5 6L16.5858 6L14.2929 3.70711C13.9024 3.31658 13.9024 2.68342 14.2929 2.29289ZM9.70711 12.2929C10.0976 12.6834 10.0976 13.3166 9.70711 13.7071L7.41421 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H7.41421L9.70711 20.2929C10.0976 20.6834 10.0976 21.3166 9.70711 21.7071C9.31658 22.0976 8.68342 22.0976 8.29289 21.7071L4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929L8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929Z" fill="#1D1D1D"></path>
                                    </svg>
                                    <p className='mb-0'>Səyahətə keçin</p>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="" className='d-flex gap-3'>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8ZM8 18C6.34315 18 5 19.3431 5 21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21C3 18.2386 5.23858 16 8 16H16C18.7614 16 21 18.2386 21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 19.3431 17.6569 18 16 18H8Z" fill="#1D1D1D"></path>
                                    </svg>
                                    <p className='mb-0'>Hesab məlumatları</p>
                                </Dropdown.Item>
                                <Dropdown.Item href="" className='d-flex gap-3'>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4C11.4477 4 11 4.44772 11 5C11 6.69226 8.95399 7.53974 7.75738 6.34314C7.36686 5.95261 6.73369 5.95261 6.34317 6.34314C5.95265 6.73366 5.95265 7.36683 6.34317 7.75735C7.53982 8.954 6.69223 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C6.69236 13 7.53964 15.0461 6.34311 16.2426C5.95258 16.6332 5.95258 17.2663 6.34311 17.6569C6.73363 18.0474 7.3668 18.0474 7.75732 17.6569C8.9539 16.4603 11 17.3077 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 17.3077 15.046 16.4602 16.2427 17.6568C16.6332 18.0474 17.2664 18.0474 17.6569 17.6568C18.0474 17.2663 18.0474 16.6332 17.6569 16.2426C16.4603 15.0461 17.3077 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C17.3078 11 16.4601 8.95405 17.6568 7.75737C18.0473 7.36684 18.0473 6.73368 17.6568 6.34315C17.2663 5.95263 16.6331 5.95263 16.2426 6.34315C15.046 7.53979 13 6.69219 13 5C13 4.44772 12.5523 4 12 4ZM9.00816 4.77703C9.12224 3.2243 10.4181 2 12 2C13.5819 2 14.8778 3.2243 14.9918 4.77703C16.1704 3.75977 17.9525 3.8104 19.071 4.92894C20.1896 6.04748 20.2402 7.82955 19.2229 9.00816C20.7757 9.12221 22 10.4181 22 12C22 13.5819 20.7757 14.8778 19.223 14.9918C20.2403 16.1704 20.1896 17.9525 19.0711 19.0711C17.9525 20.1896 16.1705 20.2402 14.9918 19.2229C14.8778 20.7757 13.5819 22 12 22C10.4181 22 9.12221 20.7757 9.00816 19.2229C7.82955 20.2402 6.04745 20.1896 4.92889 19.0711C3.81034 17.9525 3.75972 16.1704 4.77702 14.9918C3.2243 14.8778 2 13.5819 2 12C2 10.4181 3.22433 9.12221 4.77709 9.00816C3.75978 7.82955 3.81041 6.04747 4.92896 4.92892C6.0475 3.81038 7.82955 3.75975 9.00816 4.77703Z" fill="#1D1D1D"></path>
                                        <path d="M12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10ZM9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157Z" fill="#1D1D1D"></path>
                                    </svg>
                                    <p className='mb-0'>İdarəetmə Paneli</p>
                                </Dropdown.Item>
                                <Dropdown.Item href="" className='d-flex gap-3'>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 2C9.55228 2 10 2.44772 10 3V4H14V3C14 2.44772 14.4477 2 15 2C15.5523 2 16 2.44772 16 3V4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H8V3C8 2.44772 8.44772 2 9 2ZM8 6H5V9H19V6H16V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6H10V7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7V6ZM19 11H5V19H19V11Z" fill="#1D1D1D"></path>
                                    </svg>
                                    <p className='mb-0'>Kalendar</p>
                                </Dropdown.Item>
                                <Dropdown.Item href="" className='d-flex gap-3'>
                                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1261_11845)">
                                            <path d="M19.228 11.1388C19.0196 11.1388 18.8198 11.0561 18.6724 10.9087C18.5251 10.7614 18.4423 10.5615 18.4423 10.3531V8.09027C18.4718 7.64502 18.3247 7.20607 18.033 6.86844C17.7412 6.5308 17.3282 6.32166 16.8834 6.28627H3.28742C3.07904 6.28627 2.87919 6.20349 2.73184 6.05614C2.58449 5.90879 2.50171 5.70894 2.50171 5.50056C2.50171 5.29217 2.58449 5.09232 2.73184 4.94497C2.87919 4.79762 3.07904 4.71484 3.28742 4.71484H16.8834C17.7466 4.74598 18.5622 5.11815 19.1513 5.74973C19.7405 6.38131 20.0551 7.22075 20.0263 8.08399V10.3468C20.0271 10.4516 20.007 10.5555 19.9671 10.6524C19.9272 10.7493 19.8684 10.8372 19.794 10.911C19.7196 10.9848 19.6312 11.043 19.534 11.0821C19.4368 11.1212 19.3328 11.1405 19.228 11.1388Z" fill="#1D1D1D"></path>
                                            <path d="M16.8834 21.1694H3.28738C2.42423 21.1383 1.60865 20.7661 1.01948 20.1345C0.430324 19.5029 0.11567 18.6635 0.144523 17.8003V3.6197C0.144523 3.41131 0.227303 3.21146 0.374653 3.06411C0.522003 2.91676 0.721853 2.83398 0.930237 2.83398C1.13862 2.83398 1.33847 2.91676 1.48582 3.06411C1.63317 3.21146 1.71595 3.41131 1.71595 3.6197V17.8003C1.68651 18.2449 1.83374 18.6831 2.12565 19.0197C2.41755 19.3564 2.83053 19.5642 3.27481 19.598H16.8834C17.3277 19.5642 17.7406 19.3564 18.0325 19.0197C18.3244 18.6831 18.4717 18.2449 18.4422 17.8003V16.2037C18.4422 15.9953 18.525 15.7955 18.6724 15.6481C18.8197 15.5008 19.0196 15.418 19.228 15.418C19.4363 15.418 19.6362 15.5008 19.7835 15.6481C19.9309 15.7955 20.0137 15.9953 20.0137 16.2037V17.8003C20.0426 18.6614 19.7296 19.499 19.1432 20.1302C18.5567 20.7615 17.7443 21.135 16.8834 21.1694Z" fill="#1D1D1D"></path>
                                            <path d="M16.5628 6.28479C16.3566 6.28482 16.1586 6.20377 16.0116 6.05913C15.8646 5.91448 15.7804 5.71785 15.7771 5.51165V3.77051C15.7624 3.39757 15.6008 3.04558 15.3276 2.79125C15.0545 2.53693 14.6919 2.40089 14.3188 2.41279H3.00453C2.68378 2.40089 2.37138 2.51658 2.13575 2.73453C1.90012 2.95249 1.76047 3.25494 1.74739 3.57565C1.76047 3.89636 1.90012 4.19881 2.13575 4.41677C2.37138 4.63472 2.68378 4.75042 3.00453 4.73851H9.91882C10.1272 4.73851 10.3271 4.82129 10.4744 4.96864C10.6218 5.11599 10.7045 5.31584 10.7045 5.52422C10.7045 5.73261 10.6218 5.93246 10.4744 6.07981C10.3271 6.22716 10.1272 6.30994 9.91882 6.30994H2.98568C2.61947 6.31576 2.25571 6.24928 1.91523 6.1143C1.57476 5.97933 1.26425 5.77851 1.0015 5.52335C0.738753 5.26819 0.528922 4.96371 0.384027 4.62733C0.239132 4.29096 0.162019 3.9293 0.157104 3.56308C0.17033 2.82563 0.47559 2.12356 1.00589 1.61094C1.53619 1.09831 2.24821 0.81702 2.98568 0.828793H14.3C14.6936 0.820462 15.0851 0.890083 15.4517 1.03365C15.8184 1.17721 16.153 1.39188 16.4364 1.6653C16.7197 1.93872 16.9462 2.26549 17.1027 2.62679C17.2593 2.98809 17.3428 3.37679 17.3485 3.77051V5.51165C17.3452 5.71785 17.261 5.91448 17.114 6.05913C16.967 6.20377 16.769 6.28482 16.5628 6.28479ZM19.7371 16.9705H15.3811C14.5302 16.9874 13.7075 16.6659 13.0935 16.0766C12.4795 15.4873 12.1244 14.6785 12.1062 13.8277V12.6899C12.1244 11.8391 12.4795 11.0303 13.0935 10.441C13.7075 9.85174 14.5302 9.53023 15.3811 9.54708H19.7811C20.056 9.5479 20.328 9.60286 20.5816 9.70881C20.8353 9.81477 21.0656 9.96964 21.2593 10.1646C21.4531 10.3595 21.6066 10.5907 21.711 10.845C21.8155 11.0993 21.8688 11.3716 21.868 11.6465V14.9088C21.858 15.4645 21.6282 15.9936 21.2287 16.3801C20.8293 16.7666 20.2929 16.9789 19.7371 16.9705ZM15.3811 11.1248C14.948 11.1077 14.5258 11.2628 14.2066 11.556C13.8874 11.8493 13.6973 12.2569 13.6777 12.6899V13.8591C13.6973 14.2921 13.8874 14.6997 14.2066 14.993C14.5258 15.2862 14.948 15.4413 15.3811 15.4242H19.7371C19.8744 15.4242 20.0061 15.3701 20.1038 15.2736C20.2015 15.1772 20.2572 15.0461 20.2588 14.9088V11.6465C20.255 11.521 20.2033 11.4018 20.1142 11.3134C20.0671 11.2641 20.0105 11.2248 19.9479 11.1978C19.8853 11.1708 19.8179 11.1567 19.7497 11.1562L15.3811 11.1248Z" fill="#1D1D1D"></path>
                                            <path d="M15.8149 14.0617C16.2488 14.0617 16.6006 13.7099 16.6006 13.2759C16.6006 12.842 16.2488 12.4902 15.8149 12.4902C15.381 12.4902 15.0292 12.842 15.0292 13.2759C15.0292 13.7099 15.381 14.0617 15.8149 14.0617Z" fill="#1D1D1D"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1261_11845">
                                                <rect width="22" height="22" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className='mb-0'>Ödənişlər</p>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="" className='d-flex gap-3'>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 20C11 19.4477 10.5523 19 10 19H5V5H10C10.5523 5 11 4.55228 11 4C11 3.44771 10.5523 3 10 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H10C10.5523 21 11 20.5523 11 20Z" fill="#1D1D1D"></path>
                                        <path d="M21.7136 12.7005C21.8063 12.6062 21.8764 12.498 21.9241 12.3828C21.9727 12.2657 21.9996 12.1375 22 12.003L22 12L22 11.997C21.9992 11.7421 21.9016 11.4874 21.7071 11.2929L17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L18.5858 11H9C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13H18.5858L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7064 12.7078L21.7136 12.7005Z" fill="#1D1D1D"></path>
                                    </svg>
                                    <p className='mb-0' onClick={handleLogout}>Çıxış</p>
                                </Dropdown.Item>
                            </Dropdown.Menu>

                        </Dropdown>
                    </nav>
                    }
                    
                    <nav className='navbar-links-bottom d-flex justify-content-center align-items-center'>
                        <a href='/' className='navbar-link' id={activeLink === 'home' ? 'active-page' : 'none'}>Ana səhifə</a>

                        <a href={isLogged ? '/map' : ''} className='navbar-link' id={activeLink === 'map' ? 'active-page' : 'none'}
                        onClick={(e) => {
                            if (!isLogged) {
                                e.preventDefault();
                                handleShow()}}}>
                            Xəritə
                        </a>

                        <a href={isLogged ? '/reservations' : ''} className='navbar-link' id={activeLink === 'reservations' ? 'active-page' : 'none'}
                        onClick={(e) => {
                            if (!isLogged) {
                                e.preventDefault();
                                handleShow()}}}>
                            Rezervasiyalar
                        </a>
                        
                        <a href={isLogged ? '/favorites' : ''} className='navbar-link' id={activeLink === 'favorites' ? 'active-page' : 'none'} 
                        onClick={(e) => {
                            if (!isLogged) {
                                e.preventDefault();
                                handleShow()}}}>
                            Bəyənilər
                        </a>
                        
                        <a href={isLogged ? '/property/post' : ''} className='post-property-button' 
                        onClick={(e) => {
                            if (!isLogged) {
                                e.preventDefault();
                                handleShow()}}}>
                            Ev paylaş
                        </a>
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
                            <a href='' className='navbar-link'>Rezervasiyalar</a>
                        </div>

                        <div className='d-flex align-items-start'>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.68377 0.0513167C6.88904 -0.0171056 7.11096 -0.0171056 7.31623 0.0513167L13 1.94591L17.3675 0.490059C18.6626 0.0583717 20 1.02231 20 2.38743V14.2792C20 15.1401 19.4491 15.9044 18.6325 16.1766L13.3162 17.9487C13.111 18.0171 12.889 18.0171 12.6838 17.9487L7 16.0541L2.63246 17.5099C1.33739 17.9416 0 16.9777 0 15.6126V3.72076C0 2.8599 0.55086 2.09562 1.36754 1.82339L6.68377 0.0513167ZM8 14.2792L12 15.6126V3.72076L8 2.38743V14.2792ZM6 2.38743L2 3.72076V15.6126L6 14.2792V2.38743ZM14 3.72076V15.6126L18 14.2792V2.38743L14 3.72076Z" fill="#6C6C6C"></path>
                            </svg>
                            <a href='/map' 
                            onClick={(e) => {
                            if (!isLogged) {                     
                            e.preventDefault()
                            handleShow()}}} className='navbar-link'>
                                Xəritə
                            </a>
                        </div>

                        <div className='d-flex align-items-start home'>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1.52765C7.64418 -0.583106 4.02125 -0.506535 1.75736 1.75736C-0.585786 4.1005 -0.585786 7.8995 1.75736 10.2426L8.58579 17.0711C9.36684 17.8521 10.6332 17.8521 11.4142 17.0711L18.2426 10.2426C20.5858 7.8995 20.5858 4.1005 18.2426 1.75736C15.9787 -0.506535 12.3558 -0.583106 10 1.52765ZM8.82843 3.17157L9.29289 3.63604C9.68342 4.02656 10.3166 4.02656 10.7071 3.63604L11.1716 3.17157C12.7337 1.60948 15.2663 1.60948 16.8284 3.17157C18.3905 4.73367 18.3905 7.26633 16.8284 8.82843L10 15.6569L3.17157 8.82843C1.60948 7.26633 1.60948 4.73367 3.17157 3.17157C4.73367 1.60948 7.26633 1.60948 8.82843 3.17157Z" fill="#6C6C6C"></path>
                            </svg>
                            <a href='' className='navbar-link'>Bəyənilənlər</a>
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

                            <div className="side-menu-button-bottom text-center">
                                <a href=''>Mənzil idarəçiliyinə keçin</a>
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
                            <a href='/map' 
                            onClick={(e) => {
                            if (!isLogged) {                     
                            e.preventDefault()
                            handleShow()}}} className='navbar-link'>
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

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>Bu əməliyyatdan istifadə etmək üçün hesaba daxil olmalısınız</Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Bağla
                </Button>
                <Button variant="primary" onClick={() => navigate('/login')}>
                    Daxil ol
                </Button>
                </Modal.Footer>
            </Modal>
        </Navbar>

        <div className={`navbar-bottom ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="navbar-bottom-container">
                <div className="navbar-bottom-nav d-flex">
                    <div className="navbar-bottom-logo">
                        <a href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 48 48">
                                <path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"></path>
                            </svg>
                        </a>
                    </div>
                    
                    <div className="navbar-bottom-search">
                        <a href='#searchbar'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                                <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="navbar-bottom-liked">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                        </svg>
                    </div>

                    <div className="navbar-bottom-account" onClick={handleToggler}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                            <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 8a5 5 0 0 0-2 9.58v2.1l-.15.03a11 11 0 0 0-6.94 4.59C9.26 27.59 12.46 29 16 29s6.74-1.41 9.09-3.7a11 11 0 0 0-6.93-4.59l-.16-.03v-2.1a5 5 0 0 0 3-4.35V14a5 5 0 0 0-5-5zm0-6A13 13 0 0 0 5.56 23.75a13.02 13.02 0 0 1 5.54-4.3l.35-.13-.02-.02A7 7 0 0 1 9 14.27L9 14a7 7 0 1 1 11.78 5.12l-.23.2.04.02c2.33.88 4.36 2.41 5.85 4.4A13 13 0 0 0 16 3z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageNav
