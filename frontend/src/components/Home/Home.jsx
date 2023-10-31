import React from 'react'
import Top from '../Top/Top'
import Banner from '../Banner/Banner'
import ClubList from '../ClubList/ClubList'
import Blog from '../Blog/Blog'
import Steps from '../Steps/Steps'

export default function Home() {
  return (
    <div>
      <Banner />
      <Blog />
      <Steps />
      <ClubList />

    </div>
  )
}
