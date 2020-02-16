import React from 'react'
import { TableCell } from '@material-ui/core/'

const labels = ['Flag', 'Name', 'Languages', 'Population', 'Region'] // move out of function body to avoid rerenders as this a non-primitive

const TableHeader = () => {
  return (
    <>
      {labels.map(label => {
        return <TableCell key={label}>{label}</TableCell>
      })}
    </>
  )
}

TableHeader.displayName = 'TableHeader'

export default TableHeader
