import React from 'react'
import { TableCell } from '@material-ui/core/'

const labels = ['Flag', 'Name', 'Languages', 'Population', 'Region']

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
