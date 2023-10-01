import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import './navbar.css'

const PageNav = ({activeLink}) => {
    const [isLogged, setIsLogged] = useState(true)

    const [menuToggled, setMenuToggled] = useState(false)
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    const handleToggler = () => {
        setMenuToggled(!menuToggled)
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
                                console.log('Clicked');}}}>
                            Xəritə
                        </a>

                        <a href={isLogged ? '/reservations' : ''} className='navbar-link' id={activeLink === 'reservations' ? 'active-page' : 'none'}
                        onClick={(e) => {
                            if (!isLogged) {
                                e.preventDefault();
                                console.log('Clicked');}}}>
                            Rezervasiyalar
                        </a>
                        
                        <a href={isLogged ? '/favorites' : ''} className='navbar-link' id={activeLink === 'favorites' ? 'active-page' : 'none'} 
                        onClick={(e) => {
                            if (!isLogged) {
                                e.preventDefault();
                                console.log('Clicked');}}}>
                            Bəyənilər
                        </a>
                        
                        <a href={isLogged ? '/property/post' : ''} className='post-property-button' 
                        onClick={(e) => {
                            if (!isLogged) {
                                e.preventDefault();
                                console.log('Clicked');}}}>
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
                            <a href='' className='navbar-link'>Xəritə</a>
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
        </Navbar>
    </div>
  )
}

export default PageNav
