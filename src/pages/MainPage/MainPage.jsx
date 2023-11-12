import React, { useState, useEffect } from 'react'
import PageNav from '../../components/Navbar/Navbar';
import SearchbarProperty from '../../components/SearchbarProperty/SearchbarProperty';
import WhyUs from '../../components/WhyUs/WhyUs';
import Categories from '../../components/Categories/Categories';
import Properties from '../../components/Properties/Properties';
import Soon from '../../components/Soon/Soon'
import PageFooter from '../../components/Footer/Footer'
import BottomNav from '../../components/BottomNav/BottomNav';

import './mainpage.css'

const MainPage = ({ isLogged }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div>
      <PageNav isLogged={isLogged} />
      {windowWidth <= 768 && <SearchbarProperty />}
      <WhyUs/>
      <Categories/>
      <Properties title={'Bütün evlər'}/>
      {/* <Soon/> */}
      <Properties title={'Yaxınlıqda olan evlər'}/>
      <PageFooter/>
      {/* <BottomNav/> */}
    </div>
  )
}

export default MainPage
