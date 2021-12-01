import React from 'react'
import Zodiac from '../zodiac/Zodiac'
import { zodiac } from '../../data'

export default function Main() {
  return (
    <div>
      {zodiac.map((sign) => (
        <Zodiac key={sign.name} {...sign} />
      ))}
    </div>
  )
}
