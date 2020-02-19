import React from 'react'
import { TableCell } from '@material-ui/core/'
import { useDispatch, useSelector } from 'react-redux'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import { sortCountries } from 'redux/actions'
import { AppState } from 'types'

const labels = ['Flag', 'Name', 'Languages', 'Population', 'Region']

const TableHeader = () => {
  const dispatch = useDispatch()
  const { selectedField, isAsc } = useSelector(
    (state: AppState) => state.country,
  )
  return (
    <>
      {labels.map(label => {
        return (
          <TableCell
            key={label}
            onClick={() => dispatch(sortCountries(label.toLowerCase()))}
          >
            <TableSortLabel
              active={selectedField === label.toLowerCase()}
              direction={isAsc ? 'asc' : 'desc'}
            >
              {label}
            </TableSortLabel>
          </TableCell>
        )
      })}
    </>
  )
}

TableHeader.displayName = 'TableHeader'

export default TableHeader
