import React from 'react'

import { default as Bar } from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useSelector } from 'react-redux'

import Search from 'components/Search'
import { AppState } from 'types'
import useCart from 'hooks/useCart'

const AppBar = () => {
  useCart()
  const { cart } = useSelector((state: AppState) => state.cart)
  return (
    <Bar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Redux Fun!
        </Typography>
        <Search />
        <IconButton
          aria-label="show countries in shopping cart"
          color="inherit"
        >
          <Badge badgeContent={cart.length} color="secondary">
            <Link
              to={{
                pathname: `/basket/`,
              }}
            >
              <ShoppingCartIcon />
            </Link>
          </Badge>
        </IconButton>
        {/* <ToggleMode /> */}
      </Toolbar>
    </Bar>
  )
}

AppBar.displayName = 'AppBar'
export default AppBar
