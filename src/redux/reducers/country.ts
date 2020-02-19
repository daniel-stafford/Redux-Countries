import _ from 'lodash'

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
        ? _.orderBy(state.filteredCountries, [selectedField])
        : _.orderBy(state.filteredCountries, [selectedField]).reverse()
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
