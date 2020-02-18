import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountriesThunk } from '../redux/actions'

import { AppState } from 'types'

const useCountries = () => {
  const dispatch = useDispatch()
  const allCountries = useSelector(
    (state: AppState) => state.country.allCountries,
  )
  useEffect(() => {
    if (allCountries.length === 0) dispatch(fetchCountriesThunk())
  }, [dispatch, allCountries])
}

export default useCountries
