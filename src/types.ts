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
}

export type Languages = {
  name: string
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
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

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type CountryActions = FetchCountriesAction

export type ProductState = {
  inCart: Product[]
}

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
  product: ProductState
  country: CountryState
  ui: UiState
}
