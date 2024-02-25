import React, { useState, createContext, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import PageNav from '../../components/Navbar/Navbar'
import SearchBody from '../../components/SearchBody/SearchBody'
import PageFooter from '../../components/Footer/Footer'

export const searchContext = createContext(null)

const SearchPage = () => {
  const [filterOpen, setFilterOpen] = useState(false)

  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const region = queryParams.get('region');
  const startDate = queryParams.get('startDate');
  const endDate = queryParams.get('endDate');
  const guests = queryParams.get('guests');
  const category = queryParams.get('category');
  
  return (
    <searchContext.Provider value={{ filterOpen, setFilterOpen, region, startDate, endDate, guests, category }}>
      <div className='search-page'>
        <PageNav hideSearch hideBottomNav={filterOpen ? true : false} />
        <SearchBody />
        <PageFooter />
      </div>
    </searchContext.Provider>
  )
}

export default SearchPage
