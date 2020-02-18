import React from 'react'
import { Link } from 'react-router-dom'
import { TableCell, Button } from '@material-ui/core/'
import { useSelector, useDispatch } from 'react-redux'

import Flag from 'components/Flag'
import { addToCart } from 'redux/actions'
import { Country, AppState } from 'types'

type TableRowProps = {
  country: Country
}
const TableRow = ({ country }: TableRowProps) => {
  const dispatch = useDispatch()
  const { inCart } = useSelector((state: AppState) => state.cart)
  const languages = country.languages.map(lang => (
    <ul key={lang.name}>
      <li>{lang.name} </li>
    </ul>
  ))
  const handleClick = () => {
    dispatch(addToCart(country))
  }

  if (!country && !inCart) return <div>Loading...</div>

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
          disabled={inCart.find(c => c.name === country.name) ? true : false}
        >
          Add
        </Button>
      </TableCell>
    </>
  )
}

TableRow.displayName = 'TableRow'

export default TableRow
