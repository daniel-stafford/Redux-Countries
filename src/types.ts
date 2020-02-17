// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
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
  region?: string
  nativeName?: string
  alpha2Code?: string
}

export type Languages = {
  name: string
}

export type CountyInCart = {
  flag: string
  name: string
  population: number
  languages: Languages[]
}

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES
  payload: Country[]
}

export type AddToCartAction = {
  type: typeof ADD_TO_CART
  payload: { country: Country }
}

export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART
  payload: { country: Country }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

export type CountryActions = FetchCountriesAction

export type CartActions = AddToCartAction | RemoveFromCartAction

export type CountryState = {
  allCountries: Country[]
  filteredCountries: Country[]
}

export type CartState = {
  cart: CountyInCart[]
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
  cart: CartState
}
