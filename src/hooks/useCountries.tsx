import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCountriesFromAPI } from '../redux/actions'
// import { Country } from '../types'
// import _ from 'lodash'

const useCountries = () => {
  // const dataInLocalStorage: null | Country[] = JSON.parse(
  //   localStorage.getItem('allCountries'),
  // )

  // console.log('dataInLocalStorage in hook', dataInLocalStorage)

  // dataInLocalStorage && dispatch(fetchCountries(dataInLocalStorage))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCountriesFromAPI())
  }, [dispatch])
}

export default useCountries
