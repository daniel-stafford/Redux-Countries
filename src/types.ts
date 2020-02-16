// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A Country
export type Country = {
  name: string
  flag: string
  languages: Languages[]
  population: number
  region: string
  nativeName: string
  alpha2Code: string
}

export type Languages = {
  name: string
}

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES
  payload: Country[]
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

export type CountryActions = FetchCountriesAction

export type CountryState = {
  allCountries: Country[]
  filteredCountries: Country[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  country: CountryState
  ui: UiState
}
