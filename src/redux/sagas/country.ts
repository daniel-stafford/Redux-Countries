import { takeLatest, select } from 'redux-saga/effects'

export function* setLocalStorageWhenAddingCountry() {
  const state = yield select()
  yield localStorage.setItem(
    'filteredCountries',
    JSON.stringify(state.country.filteredCountries),
  )
  yield localStorage.setItem(
    'allCountries',
    JSON.stringify(state.country.allCountries),
  )
}
export default [takeLatest('*', setLocalStorageWhenAddingCountry)]
