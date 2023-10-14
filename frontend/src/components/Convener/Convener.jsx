import React from 'react'
import ClubMain from '../Clubs/ClubMain'
import Club from '../Clubs/Club'
import Events from '../Convener/Events'
import Officials from '../Clubs/Officials'

export default function Convener() {
  return (
    <div>
      <Club />
      <Events />
      <Officials />
    </div>
  )
}
