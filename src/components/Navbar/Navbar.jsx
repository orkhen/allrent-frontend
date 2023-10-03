import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import './navbar.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const PageNav = ({ activeLink }) => {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(false);

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

  return (
    <div>
        <Navbar className={`navbar-main mx-0 mx-md-auto ${isNavbarFixed ? 'fixed-navbar' : ''}`}>
            <Container fluid className='navbar-container justify-content-between'>
                <Navbar.Brand href="/" className='navbar-brand'>
                    <img className='navbar-img-logo' src='https://allrent.io/homepage/images/Loqotip_A%C4%9F%20fonda.svg' alt='logo'/>
                </Navbar.Brand>

                <div className='navbar-links d-flex flex-column align-items-end justify-content-center navbar-state'>
                    <nav className='navbar-links-top d-flex justify-content-center align-items-center'>
                        <a href='' className='navbar-link'>
                            <img src='https://allrent.io/homepage/images/svg/world.svg' alt='language' className='navbar-img-language'/>
                        </a>
                        <a href='/login' className='navbar-link'>Daxil ol</a>
                        <a href='/register' className='create-account-button'>Hesab yarat</a>
                    </nav>
                    
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

            {menuToggled && (
                <div className={`navbar-side-menu d-flex flex-column ${menuToggled && 'slide-right'}`}>
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
                            <div className="side-menu-button-top text-center">
                                <a href='/login'>Daxil ol</a>
                            </div>

                            <div className="side-menu-button-bottom text-center">
                                <a href='/register'>Qeydiyyatdan keç</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
                    <div className="navbar-bottom-logo" onClick={handleToggler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 45 55" fill="none">
                        <path d="M44.4371 35.895C44.4371 40.484 44.4395 45.0705 44.4371 49.6595C44.4347 52.4764 42.7693 54.1846 40.0089 54.192C36.1609 54.1994 32.3152 54.1969 28.4671 54.192C27.0482 54.192 26.444 53.7422 25.9678 52.3584C25.1097 49.866 24.2516 47.3712 23.3887 44.8788C23.0575 43.9227 22.8618 43.7801 21.8514 43.7383C16.8141 43.5294 12.659 39.6163 12.0765 34.5358C11.4118 28.735 15.2913 23.6151 20.9861 22.7868C26.6204 21.9658 31.9937 26.1861 32.6052 31.9623C33.05 36.1629 31.4837 39.4787 28.1577 41.9588C27.29 42.6077 27.2102 42.7773 27.5607 43.8022C28.1166 45.4269 28.6726 47.0517 29.2406 48.6714C29.55 49.5563 29.9875 49.8832 30.9132 49.8881C33.4319 49.9004 35.9481 49.9029 38.4668 49.8857C39.6174 49.8783 40.1346 49.34 40.137 48.1848C40.1419 39.8081 40.137 31.4289 40.1419 23.0522C40.1419 22.1034 39.743 21.371 39.088 20.7294C35.0466 16.7893 31.0099 12.8443 26.9709 8.89932C25.8228 7.7785 24.6794 6.65275 23.5313 5.53439C22.6901 4.71589 22.0061 4.71097 21.1722 5.52701C16.8117 9.78173 12.456 14.0414 8.1003 18.2985C7.24463 19.1367 6.38896 19.9749 5.52604 20.8056C4.85891 21.4472 4.54227 22.2165 4.54227 23.1579C4.55194 31.4732 4.5471 39.7909 4.54952 48.1061C4.54952 49.3695 5.0547 49.8832 6.32853 49.8857C10.8002 49.893 15.2719 49.8857 19.7436 49.893C20.9619 49.8955 21.7402 50.5149 21.9771 51.6284C22.2309 52.8278 21.3994 54.0199 20.2005 54.16C19.9225 54.192 19.6373 54.1895 19.3569 54.1895C14.5226 54.192 9.68836 54.1207 4.85408 54.2166C2.07195 54.2731 0.20109 52.2748 0.222844 49.5268C0.292941 40.4324 0.261519 31.338 0.237347 22.2435C0.232513 20.6655 0.735278 19.4046 1.86166 18.3108C7.7063 12.6428 13.5195 6.94279 19.3521 1.26247C21.0803 -0.421231 23.6159 -0.421231 25.3417 1.26492C29.6878 5.50489 34.0241 9.75223 38.3677 13.9947C39.8494 15.4424 41.3166 16.9049 42.8297 18.3182C43.9779 19.3899 44.4661 20.6705 44.4516 22.2509C44.413 26.8006 44.4371 31.3478 44.4371 35.895ZM22.3566 39.4615C25.7164 39.4566 28.4695 36.6693 28.4913 33.2503C28.513 29.8288 25.7188 26.9997 22.3276 27.0046C18.9702 27.0095 16.2074 29.8091 16.1905 33.2183C16.1711 36.6373 18.9653 39.4664 22.3566 39.4615Z" fill="#FF5454"/>
                    </svg>
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

                    <div className="navbar-bottom-account">
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
