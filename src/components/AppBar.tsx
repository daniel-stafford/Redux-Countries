import React from 'react'

import { default as Bar } from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
const AppBar = () => {
  return (
    <Bar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Rest Countries API
        </Typography>
        <IconButton
          aria-label="show countries in shopping cart"
          color="inherit"
        >
          <Badge badgeContent={5} color="secondary">
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
