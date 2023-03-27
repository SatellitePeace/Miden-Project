import CardATM from "../assets/images/cardATM.svg"
import "./AnimatedCard.css"
import React from 'react'
import {Box} from '@mui/material'

export default function AnimatedCard() {
  return (
          <img className="updown-animation" style={{width: '120%', zIndex:1}} src={CardATM} alt="ATM card" />
  )
}
