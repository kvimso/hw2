import React from 'react'
import './ProductCard.css'

export default function ProductCard({fasi, odenoba, saxeli, agwera, gama}) {
  return (
  <div className='card'>
    <p>Price: {fasi}</p>
    <p>Amount: {odenoba}</p>
    <p>Name: {saxeli}</p>
    <p>Description: {agwera}</p>
    <p>Color: {gama}</p>
  </div>
  )
}
