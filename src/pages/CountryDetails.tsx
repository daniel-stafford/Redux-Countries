import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core'

import BackButton from 'components/BackButton'
import Flag from 'components/Flag'

const CountryDetails = () => {
  console.log(
    'useParms',
    useParams(),
    'useLocation',
    useLocation(),
    'useHistory',
    useHistory(),
  )
  const history = useHistory()
  const location: any = useLocation()
  const country = location.state.country
  return (
    <>
      <Typography variant="h1">{country.name}</Typography>
      <Typography variant="body1">Native name: {country.nativeName}</Typography>
      <Typography variant="body1">
        Flag: <Flag url={country.flag} countryName={country.name}></Flag>
      </Typography>

      <Typography variant="body1">
        Population: {country.population.toLocaleString()}
      </Typography>
      <BackButton history={history} />
    </>
  )
}

CountryDetails.displayName = 'CountryDetails'
export default CountryDetails
