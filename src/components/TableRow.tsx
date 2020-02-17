import React from 'react'
import { Link } from 'react-router-dom'
import { TableCell, Button } from '@material-ui/core/'

import Flag from 'components/Flag'
import { Country } from 'types'
import { useDispatch } from 'react-redux'
import { addToCart } from 'redux/actions'

type TableRowProps = {
  country: Country
}
const TableRow = ({ country }: TableRowProps) => {
  const dispatch = useDispatch()
  const languages = country.languages.map(lang => (
    <li key={lang.name}>{lang.name} </li>
  ))
  const handleClick = () => {
    dispatch(addToCart(country))
  }
  return (
    <>
      <TableCell>
        <Flag url={country.flag} countryName={country.name} />
      </TableCell>
      <TableCell>
        <Link
          to={{
            pathname: `/country/${country.name}`,
            state: { country },
          }}
        >
          {country.name}
        </Link>
      </TableCell>
      <TableCell>{languages}</TableCell>
      <TableCell>{country.population.toLocaleString()}</TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          // disabled={isInCart ? true : false}
        >
          Add
        </Button>
      </TableCell>
    </>
  )
}

TableRow.displayName = 'TableRow'

export default TableRow
