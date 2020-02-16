import React from 'react'

type FlagProps = {
  url: string
  countryName: string
}

//flag takes primitive props that don't change when, say, filtering. So prop memo avoid rerenders when a parent is rerendered
const Flag = React.memo(({ url, countryName }: FlagProps) => {
  return <img src={url} alt={countryName} width="50px" />
})

Flag.displayName = 'Flag'

export default Flag
