import React from 'react'
import { Link } from 'react-router-dom'
import { TableCell, Link as MaterialLink } from '@material-ui/core/'

import Flag from 'components/Flag'
import { Country } from 'types'

type TableRowProps = {
  country: Country
}

const TableRow = ({ country }: TableRowProps) => {
  const languages = country.languages.map(lang => lang.name).join(',  ')
  return (
    <>
      <TableCell>
        <Flag url={country.flag} countryName={country.name} />
      </TableCell>
      <TableCell>
        <MaterialLink></MaterialLink>
        <Link
          to={{
            pathname: `/country/${country.name.replace(/\s/g, '')}`,
            state: { country },
          }}
        >
          {country.name}
        </Link>
      </TableCell>
      <TableCell>{languages}</TableCell>
      <TableCell>{country.population.toLocaleString()}</TableCell>
      <TableCell>{country.region}</TableCell>
    </>
  )
}

TableRow.displayName = 'TableRow'

export default TableRow
