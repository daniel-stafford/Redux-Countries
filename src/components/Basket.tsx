import React from 'react'
import { useHistory } from 'react-router-dom'
import BackButton from 'components/BackButton'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from 'types'
import Flag from './Flag'
import { Button } from '@material-ui/core/'
import { removeCart } from '../redux/actions'

const Basket = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { cart } = useSelector((state: AppState) => state.cart)

  return (
    <>
      {cart.map(item => (
        <li key={item.name}>
          <Flag url={item.flag} countryName={item.name} />
          {item.name}
          <Button onClick={() => dispatch(removeCart(item))}>Remove</Button>
        </li>
      ))}
      <BackButton history={history} />
    </>
  )
}

Basket.displayName = 'Basket'

export default Basket
