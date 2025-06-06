'use client'
import React from 'react'
import CountUp from 'react-countup'
const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div>
    <CountUp decimal=","    decimals={2}
  prefix="EUR " end={amount} />
    </div>
  )
}

export default AnimatedCounter
