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
    userInput: '',
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
      const userInput = action.payload
      const cleanedUserInput = userInput.toLowerCase()
      const newFilteredCountries = state.allCountries.filter(
        country =>
          country.name.toLowerCase().includes(cleanedUserInput) ||
          country.nativeName.toLowerCase().includes(cleanedUserInput) ||
          country.population < parseInt(cleanedUserInput) ||
          country.region.toLowerCase().includes(cleanedUserInput),
      )
      let newState = { ...state, filteredCountries: newFilteredCountries }
      return (newState = { ...newState, userInput })
    default:
      return state
  }
}
