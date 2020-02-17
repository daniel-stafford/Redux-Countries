import { Dispatch } from 'redux'

import { Country, CountryActions, FETCH_COUNTRIES } from '../../types'

export function fetchCountries(data: Country[]): CountryActions {
  return {
    type: FETCH_COUNTRIES,
    payload: data,
  }
}

export function fetchCountriesThunk() {
  return async function(dispatch: Dispatch) {
    const stringJSON = localStorage.getItem('allCountries') || ''
    if (!!stringJSON) return dispatch(fetchCountries(JSON.parse(stringJSON))) //use localStorage,otherweise make API call
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)
    const apiData = await res.json()
    return dispatch(fetchCountries(apiData))
  }
}
