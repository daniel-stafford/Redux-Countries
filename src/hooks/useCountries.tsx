import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCountriesThunk } from '../redux/actions'
// import { Country } from '../types'
// import _ from 'lodash'

const useCountries = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])
}

export default useCountries
