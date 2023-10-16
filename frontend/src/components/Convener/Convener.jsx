import React from 'react'
import ClubMain from '../Clubs/ClubMain'
import Club from './Club'
import Events from '../Convener/Events'
import Officials from '../Clubs/Officials'
import Requests from './Requests'

export default function Convener() {
  return (
    <div>
      <Club />
      <Requests />
      <Events />
      <Officials />
    </div>
  )
}
