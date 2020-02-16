import { Dispatch } from 'redux'

import { Country, CountryActions, FETCH_COUNTRIES } from '../../types'

export function fetchCountries(data: Country[]): CountryActions {
  console.log('fetch countries action creator is running', data)
  return {
    type: FETCH_COUNTRIES,
    payload: data,
  }
}

// Async action processed by redux-thunk middleware
export function fetchCountriesFromAPI() {
  console.log('fetchCountriesFromAPI running')
  return function(dispatch: Dispatch) {
    return fetch(`https://restcountries.eu/rest/v2/all`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: FETCH_COUNTRIES, payload: data })
      })
  }
}
