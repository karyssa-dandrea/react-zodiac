import React from 'react'
import Zodiac from '../zodiac/Zodiac'
import { zodiac } from '../../data'
import './Main.css'
import stars from '../../stars.jpg'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${stars})` }}>
      {zodiac.map((sign) => (
        <Zodiac key={sign.name} {...sign} />
      ))}
    </main>
  )
}
