import { takeLatest } from 'redux-saga/effects'

import { CountryActions, FETCH_COUNTRIES } from '../../types'

function* doSomethingWhenDataChanges(action: CountryActions) {
  yield localStorage.setItem('allCountries', JSON.stringify(action.payload))
}

export default [takeLatest(FETCH_COUNTRIES, doSomethingWhenDataChanges)]
