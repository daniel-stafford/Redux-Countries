import React from 'react'

import useCountries from '../hooks/useCountries'
import TableContainer from 'components/TableContainer'

export default function App() {
  useCountries()
  return (
    <>
      <TableContainer />
    </>
  )
}
