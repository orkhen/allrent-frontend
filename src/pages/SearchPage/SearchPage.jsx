import React from 'react'
import PageNav from '../../components/Navbar/Navbar'
import SearchBody from '../../components/SearchBody/SearchBody'
import PageFooter from '../../components/Footer/Footer'

const SearchPage = () => {
  return (
    <div className='search-page'>
      <PageNav hideSearch />
      <SearchBody />
      <PageFooter />
    </div>
  )
}

export default SearchPage
