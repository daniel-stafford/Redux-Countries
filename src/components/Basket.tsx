import React from 'react'
import { useHistory } from 'react-router-dom'
import BackButton from 'components/BackButton'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@material-ui/core/'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

import { removeCart } from '../redux/actions'
import Flag from './Flag'
import { AppState } from 'types'

const Basket = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { inCart } = useSelector((state: AppState) => state.cart)

  return (
    <>
      {inCart.map(item => (
        <ListItem key={item.name}>
          <Flag url={item.flag} countryName={item.name} />
          <Typography variant="h6">{item.name}</Typography>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => dispatch(removeCart(item))}
          >
            Remove
          </Button>
        </ListItem>
      ))}
      <BackButton history={history} />
    </>
  )
}

Basket.displayName = 'Basket'

export default Basket
