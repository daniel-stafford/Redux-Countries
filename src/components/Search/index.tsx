import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from '@material-ui/core/Input'

import { filterCountries } from 'redux/actions'
import { AppState } from 'types'

const Search = () => {
  const dispatch = useDispatch()
  const userInput = useSelector((state: AppState) => state.country.userInput)

  return (
    <Input
      value={userInput}
      placeholder="Search"
      onChange={e => {
        dispatch(filterCountries(e.target.value))
      }}
    />
  )
}

Search.displayName = 'Search'

export default Search
