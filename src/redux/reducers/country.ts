import { CountryState, CountryActions, FETCH_COUNTRIES } from '../../types'

export default function country(
  state: CountryState = {
    allCountries: [],
    filteredCountries: [],
  },
  action: CountryActions,
): CountryState {
  console.log('country reducer running', action.type)
  switch (action.type) {
    case FETCH_COUNTRIES:
      console.log('fetch countries case running', action)
      return { ...state, allCountries: action.payload }
    default:
      return state
  }
}
