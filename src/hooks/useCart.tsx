import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCartThunk } from '../redux/actions'

const useCart = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCartThunk())
  }, [dispatch])
}

export default useCart
