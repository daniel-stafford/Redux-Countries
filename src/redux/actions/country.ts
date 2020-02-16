import { Dispatch } from 'redux'

import { Country, CountryActions, FETCH_COUNTRIES } from '../../types'

export function fetchCountries(data: Country[]): CountryActions {
  console.log('fetch country action')
  return {
    type: FETCH_COUNTRIES,
    payload: data,
  }
}

// Async action processed by redux-thunk middleware
// export function fetchCountriesFromAPI() {
//   console.log('fetchCountriesFromAPI running')
//   return function(dispatch: Dispatch) {
//     console.log('logging inside fetchCountries')
//     return fetch(`https://restcountries.eu/rest/v2/all`)
//       .then(resp => resp.json())
//       .then(data => {
//         dispatch(fetchCountries(data))
//       })
//   }
// }

export function fetchCountriesFromAPI() {
  return function(dispatch: Dispatch) {
    console.log('inside fetch api')
    return fetch(`https://restcountries.eu/rest/v2/all`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then(json => {
        dispatch(fetchCountries(json))
      })
  }
}
