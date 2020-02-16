import { Dispatch } from 'redux'

import { Country, CountryActions, FETCH_COUNTRIES } from '../../types'

export function fetchCountries(data: Country[]): CountryActions {
  console.log('fetch country action')
  return {
    type: FETCH_COUNTRIES,
    payload: data,
  }
}

export function fetchCountriesFromAPI() {
  return async function(dispatch: Dispatch) {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`)
    const data = await res.json()
    return dispatch(fetchCountries(data))
  }
}
