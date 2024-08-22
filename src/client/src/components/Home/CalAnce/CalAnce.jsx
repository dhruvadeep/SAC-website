import React from 'react'
import Announce from './Announce/Announce'
import Calendar from './Calendar/Calendar'
import './CalAnce.css'

const combo = () => {
  return (
    <div className='combo container d-flex flex-row flex-wrap justify-content-center'>
    <Announce/>
    <Calendar/>
    </div>
  )
}

export default combo
