import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCart } from '../redux/actions'

const useCart = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])
}

export default useCart
