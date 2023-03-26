import CardATM from "../assets/images/cardATM.svg"
import "./AnimatedCard.css"
import React from 'react'
import {Box} from '@mui/material'

export default function AnimatedCard() {
  return (
    <Box className="updown-animation">
          <img style={{width: '30vw', zIndex:1}} src={CardATM} alt="ATM card" />
    </Box>
  )
}