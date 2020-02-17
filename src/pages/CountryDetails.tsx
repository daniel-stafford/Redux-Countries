import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core'

import BackButton from 'components/BackButton'
import Flag from 'components/Flag'
import { useSelector } from 'react-redux'
import { AppState } from 'types'
import useCountries from 'hooks/useCountries'

const CountryDetails = () => {
  useCountries()
  const { name } = useParams()
  const history = useHistory()
  const [country] = useSelector(
    (state: AppState) => state.country.allCountries,
  ).filter(c => c.name === name)

  if (!country) return <p>Loading...</p>
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
