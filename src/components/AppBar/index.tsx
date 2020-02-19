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
import ThemeToggle from 'components/ThemeToggle'
import 'components/AppBar/index.css'
import { AppState } from 'types'

const AppBar = () => {
  const { inCart } = useSelector((state: AppState) => state.cart)
  return (
    <Bar position="sticky">
      <Toolbar className="appbar">
        <div className="appbar__left-group">
          <Link
            to={{
              pathname: `/`,
            }}
          >
            <Typography variant="h5" noWrap>
              Country API
            </Typography>
          </Link>

          <div className="appbar__search">
            <Search />
          </div>
        </div>
        <ThemeToggle />
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
