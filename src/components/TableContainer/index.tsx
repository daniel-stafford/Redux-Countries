import React from 'react'
import { useSelector } from 'react-redux'
import {
  TableContainer as Container,
  Table,
  TableHead,
  TableRow as Row,
  TableBody,
} from '@material-ui/core/'

import TableRow from 'components/TableRow'
import TableHeader from 'components/TableHeader'
import useCountries from 'hooks/useCountries'
import { AppState } from 'types'

const TableContainer = () => {
  useCountries()
  const filteredCountries = useSelector(
    (state: AppState) => state.country.filteredCountries,
  )
  return (
    <>
      <Container>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <Row>
              <TableHeader />
            </Row>
          </TableHead>
          <TableBody>
            {filteredCountries.map(country => (
              <Row key={country.name}>
                <TableRow country={country} />
              </Row>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  )
}

TableContainer.displayName = 'TableContainer'

export default TableContainer
