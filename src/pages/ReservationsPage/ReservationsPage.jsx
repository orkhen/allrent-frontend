import React, { useContext } from 'react'
import './reservationsPage.css'

import PageNav from '../../components/Navbar/Navbar';
import ReservationsBody from '../../components/ReservationsBody/ReservationsBody';
import PageFooter from '../../components/Footer/Footer';
import { AppContext } from '../../App';
import SearchbarProperty from '../../components/SearchbarProperty/SearchbarProperty';

const ReservationsPage = () => {
  const { windowWidth } = useContext(AppContext)
  return (
    <div className='reservations-page'>
      <PageNav hideSearch />
      {windowWidth <= 768 && <SearchbarProperty />}
      <ReservationsBody />
      <PageFooter />
    </div>
  )
}

export default ReservationsPage
