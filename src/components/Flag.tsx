import React from 'react'

type FlagProps = {
  url: string
  countryName: string
}

const Flag = React.memo(({ url, countryName }: FlagProps) => {
  return <img src={url} alt={countryName} width="50px" />
})

Flag.displayName = 'Flag'

export default Flag
