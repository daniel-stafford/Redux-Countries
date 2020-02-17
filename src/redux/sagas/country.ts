import { takeLatest, takeEvery } from 'redux-saga/effects'

import { CountryActions, FETCH_COUNTRIES } from '../../types'

export function* setLocalStorageWhenAddingCountry() {
  yield takeEvery(FETCH_COUNTRIES, function*(action: CountryActions) {
    console.log('country saga running')

    yield localStorage.setItem('allCountries', JSON.stringify(action.payload))
    yield localStorage.setItem(
      'filteredCountries',
      JSON.stringify(action.payload),
    )
  })
}
export default [takeLatest('*', setLocalStorageWhenAddingCountry)]
