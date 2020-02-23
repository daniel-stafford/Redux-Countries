import orderBy from 'lodash/orderBy'

import {
  CountryState,
  CountryActions,
  FETCH_COUNTRIES,
  FILTER_COUNTRIES,
  SORT_COUNTRIES,
} from 'types'

export default function country(
  state: CountryState = {
    allCountries: [],
    filteredCountries: [],
    userInput: '',
    isAsc: false,
    selectedField: 'name',
  }, //if I delete this code (even though it's repeated in the store init), my app crashes with the error: country init state is undefined.
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
      const filteredCountries = state.allCountries.filter(
        country =>
          country.name.toLowerCase().includes(cleanedUserInput) ||
          country.nativeName.toLowerCase().includes(cleanedUserInput) ||
          country.population < parseInt(cleanedUserInput) ||
          country.region.toLowerCase().includes(cleanedUserInput),
      )
      return { ...state, filteredCountries, userInput }
    case SORT_COUNTRIES:
      const selectedField = action.payload
      const toggledIsAsc = !state.isAsc
      const sortedCountries = toggledIsAsc
        ? orderBy(state.filteredCountries, [selectedField])
        : orderBy(state.filteredCountries, [selectedField]).reverse()
      return {
        ...state,
        filteredCountries: sortedCountries,
        isAsc: toggledIsAsc,
        selectedField,
      }
    default:
      return state
  }
}
