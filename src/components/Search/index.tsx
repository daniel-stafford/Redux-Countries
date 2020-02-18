import React from 'react'
import { useDispatch } from 'react-redux'
import Input from '@material-ui/core/Input'

import { filterCountries } from 'redux/actions'

const Search = () => {
  const dispatch = useDispatch()
  return (
    <Input
      placeholder="Search..."
      onChange={e => {
        dispatch(filterCountries(e.target.value))
      }}
    />
  )
}

Search.displayName = 'Search'

export default Search
