import React from 'react'
import PageNav from '../../components/Navbar/Navbar';
import Searchbar from '../../components/Searchbar/Searchbar'
import WhyUs from '../../components/WhyUs/WhyUs';
import Categories from '../../components/Categories/Categories';
import Properties from '../../components/Properties/Properties';
import Soon from '../../components/Soon/Soon'
import PageFooter from '../../components/Footer/Footer'

import './mainpage.css'

const MainPage = () => {
  return (
    <div>
      <PageNav />
      <Searchbar/>
      <WhyUs/>
      <Categories/>
      <Properties title={'Bütün evlər'}/>
      <Soon/>
      <Properties title={'Yaxınlıqda olan evlər'}/>
      <PageFooter/>
    </div>
  )
}

export default MainPage
