import React from 'react'
import NavBar from '../Nav'
import UseTitle from '../Custum/CustumHook'
import Footer from '../Footer'

const Ourstory = () => {
  UseTitle('Our story')
  return (
    <div>
        <NavBar />
        <Footer />
        </div>
  )
}

export default Ourstory