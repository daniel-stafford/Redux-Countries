import {
  CountryState,
  CountryActions,
  FETCH_COUNTRIES,
  FILTER_COUNTRIES,
} from '../../types'

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
    case FILTER_COUNTRIES:
      const userInput = action.payload.toLowerCase()
      const newFilteredCountries = state.allCountries.filter(
        country =>
          country.name.toLowerCase().includes(userInput) ||
          country.nativeName.toLowerCase().includes(userInput) ||
          country.population < parseInt(userInput) ||
          country.region.toLowerCase().includes(userInput),
      )
      return { ...state, filteredCountries: newFilteredCountries }
    default:
      return state
  }
}
