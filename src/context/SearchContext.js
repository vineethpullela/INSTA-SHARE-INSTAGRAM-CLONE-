import React from 'react'

const SearchContext = React.createContext({
  searchText: '',
  updateSearchText: () => {},
})

export default SearchContext
