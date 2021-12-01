import React from 'react'
import './Zodiac.css'

export default function Zodiac({ name, dates }) {
  return (
    <div className="zodiac">
      <div> {name} </div>
      <div>{dates}</div>

      <img src={`${process.env.PUBLIC_URL}/zodiac_images/${name}.png`} />
    </div>
  )
}
