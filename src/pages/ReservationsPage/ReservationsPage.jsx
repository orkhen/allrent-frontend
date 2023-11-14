import React from 'react'
import './reservationsPage.css'

import PageNav from '../../components/Navbar/Navbar';
import ReservationsBody from '../../components/ReservationsBody/ReservationsBody';
import PageFooter from '../../components/Footer/Footer';

const ReservationsPage = () => {
  return (
    <div className='reservations-page'>
      <PageNav isLogged hideSearch />
      <ReservationsBody />
      <PageFooter />
    </div>
  )
}

export default ReservationsPage
