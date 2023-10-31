import React from 'react'
import Banner from '../components/Club/Banner'
import About from '../components/Club/About'
import Features from '../components/Club/Features'
import Events from '../components/Club/Events'
import Officials from '../components/Club/Officials'
import Form from '../components/Club/Form'
import './Club.css'
export default function Club({cldImg}) {
  const clubId = "6533775e2349114ecd9f79ca";
  return (
    <div className='club-main' >
      <Banner clubId={clubId} />
      <About clubId={clubId} />
      <Features />
      <Events />
      <Officials />
      <Form />
    </div>
  )
}
