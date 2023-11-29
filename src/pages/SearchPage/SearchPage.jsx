import React, { useState, createContext, useContext } from 'react'
import PageNav from '../../components/Navbar/Navbar'
import SearchBody from '../../components/SearchBody/SearchBody'
import PageFooter from '../../components/Footer/Footer'

export const searchContext = createContext(null)

const SearchPage = () => {
  const [filterOpen, setFilterOpen] = useState(false)
  
  return (
    <searchContext.Provider value={{ filterOpen, setFilterOpen }} >
      <div className='search-page'>
        <PageNav hideSearch hideBottomNav={filterOpen ? true : false} />
        <SearchBody />
        <PageFooter />
      </div>
    </searchContext.Provider>
  )
}

export default SearchPage
