// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const FETCH_CART = 'FETCH_CART'

export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

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

// export type CountryInCart = {
//   flag: string
//   name: string
//   population: number
//   languages: Languages[]
//   region: string
//   nativeName: string
//   alpha2Code: string
// }

export type FetchCountriesAction = {
  type: typeof FETCH_COUNTRIES
  payload: Country[]
}

export type FetchCartAction = {
  type: typeof FETCH_CART
  payload: Country[]
}

export type FilterCountriesAction = {
  type: typeof FILTER_COUNTRIES
  payload: string
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

export type CountryActions = FetchCountriesAction | FilterCountriesAction

export type CartActions =
  | AddToCartAction
  | RemoveFromCartAction
  | FetchCartAction

export type CountryState = {
  allCountries: Country[]
  filteredCountries: Country[]
}

export type CartState = {
  inCart: Country[]
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
