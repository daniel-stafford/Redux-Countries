import { Dispatch } from 'redux'

import { Country, CountryActions, FETCH_COUNTRIES } from '../../types'

export function fetchCountries(countries: Country[]): CountryActions {
  return {
    type: FETCH_COUNTRIES,
    payload: countries,
  }
}

export function fetchCountriesThunk() {
  return async function(dispatch: Dispatch) {
    const storedCountries = localStorage.getItem('allCountries') || ''
    if (!!storedCountries)
      return dispatch(fetchCountries(JSON.parse(storedCountries))) //use localStorage,otherweise make API call
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)
    const apiData = await res.json()
    return dispatch(fetchCountries(apiData))
  }
}
