import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Product, AppState } from '../types'
import {
  addProduct,
  removeProduct,
  fetchCountriesFromAPI,
} from '../redux/actions'

const names = ['Apple', 'Orange', 'Avocado', 'Banana', 'Cucumber', 'Carrot']

export default function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.product.inCart)

  useEffect(() => {
    dispatch(fetchCountriesFromAPI()) //I literally spent an hour debugging because I forgot to call this function.
  }, [dispatch])

  const countries = useSelector((state: AppState) => state.country.allCountries)

  console.log('data in app', countries)

  const handleAddProduct = () => {
    const product: Product = {
      id: (+new Date()).toString(),
      name: names[Math.floor(Math.random() * names.length)],
      price: +(Math.random() * 10).toFixed(2),
    }
    dispatch(addProduct(product))
  }

  return (
    <>
      <h1>Home page</h1>
      {products.length <= 0 && <div>No products in cart</div>}
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{`${p.name} - $${p.price}`}</Link>

            {'  '}

            <button onClick={() => dispatch(removeProduct(p))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add product</button>
    </>
  )
}
