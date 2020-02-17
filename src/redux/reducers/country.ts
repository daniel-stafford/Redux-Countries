import { CountryState, CountryActions, FETCH_COUNTRIES } from '../../types'

export default function country(
  state: CountryState = {
    allCountries: [],
    filteredCountries: [],
  },
  action: CountryActions,
): CountryState {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        filteredCountries: action.payload,
      }
    default:
      return state
  }
}
