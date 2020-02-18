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
import 'components/AppBar/index.css'

const AppBar = () => {
  const { inCart } = useSelector((state: AppState) => state.cart)
  return (
    <Bar position="sticky">
      <Toolbar className="appbar">
        <div className="appbar__left-group">
          <Typography variant="h6" noWrap>
            Redux Fun!
          </Typography>
          <div className="appbar__search">
            <Search />
          </div>
        </div>

        <IconButton
          aria-label="show countries in shopping cart"
          color="inherit"
        >
          <Badge badgeContent={inCart.length} color="secondary">
            <Link
              to={{
                pathname: `/basket/`,
              }}
            >
              <ShoppingCartIcon />
            </Link>
          </Badge>
        </IconButton>
      </Toolbar>
    </Bar>
  )
}

AppBar.displayName = 'AppBar'
export default AppBar
