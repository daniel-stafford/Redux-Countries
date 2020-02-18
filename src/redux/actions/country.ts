import { Dispatch } from 'redux'

import {
  Country,
  CountryActions,
  FETCH_COUNTRIES,
  FILTER_COUNTRIES,
} from '../../types'

export function fetchCountries(allCountries: Country[]): CountryActions {
  return {
    type: FETCH_COUNTRIES,
    payload: allCountries,
  }
}

export function filterCountries(userInput: string): CountryActions {
  return {
    type: FILTER_COUNTRIES,
    payload: userInput,
  }
}

export function fetchCountriesThunk() {
  return async function(dispatch: Dispatch) {
    console.log('api func running')
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)
    const apiData = await res.json()
    return dispatch(fetchCountries(apiData))
  }
}
