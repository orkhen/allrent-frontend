import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../App';

import PageNav from '../../components/Navbar/Navbar';
import SearchbarProperty from '../../components/SearchbarProperty/SearchbarProperty';
import WhyUs from '../../components/WhyUs/WhyUs';
import Categories from '../../components/Categories/Categories';
import Properties from '../../components/Properties/Properties';
import PageFooter from '../../components/Footer/Footer'
import BottomNav from '../../components/BottomNav/BottomNav';

import './mainpage.css'

const MainPage = () => {
  const { windowWidth } = useContext(AppContext)
  return (
    <div>
      <PageNav />
      {windowWidth <= 768 && <SearchbarProperty />}
      <WhyUs/>
      <Categories/>
      <Properties title={'Bütün evlər'}/>
      <Properties title={'Yaxınlıqda olan evlər'}/>
      <PageFooter/>
    </div>
  )
}

export default MainPage
