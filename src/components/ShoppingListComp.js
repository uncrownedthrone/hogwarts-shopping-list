import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShoppingListComp = () => {
  const [items, setItems] = useState([])
  const getItemsData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Item')
    console.log(resp.data)
    setItems(resp.data)
  }
  useEffect(() => {
    getItemsData()
  }, [])

  return (
    <>
      <h1>Hogwarts Shopping List</h1>
      <h2>For this term you'll need:</h2>
      {items.map(item => {
        return (
          <>
            <hr></hr>
            <h3>
              A {item.name}. The SKU is {item.sku}. We have {item.numberInStock}{' '}
              and they cost {item.price} gold galleons.
            </h3>
            <h3>Short Description: {item.shortDescription}</h3>
            <hr></hr>
          </>
        )
      })}
    </>
  )
}

export default ShoppingListComp
