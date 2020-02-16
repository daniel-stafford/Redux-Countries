import React from 'react'
import { useHistory } from 'react-router-dom'
import BackButton from 'components/BackButton'

const Basket = () => {
  const history = useHistory()
  console.log('history in basket', history)
  return (
    <>
      <BackButton history={history} />
    </>
  )
}

Basket.displayName = 'Basket'

export default Basket
