import React from 'react'
import { CssBaseline } from '@material-ui/core'

import Search from 'components/Search'
import useCountries from '../hooks/useCountries'
import TableContainer from 'components/TableContainer'

export default function App() {
  useCountries()

  return (
    <>
      <CssBaseline />
      <Search />
      <TableContainer />
    </>
  )
}
