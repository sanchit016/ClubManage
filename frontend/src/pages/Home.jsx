import React from 'react'
import Banner from '../components/Home/Banner'
import Blog from '../components/Home/Blog'
import Steps from '../components/Home/Steps'
import ClubList from '../components/ClubList/ClubList'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
        <Banner />
        <Blog />
        <Steps />
        <ClubList />
        <Footer />
    </div>
  )
}
