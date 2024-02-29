import React from 'react'
import NavBar from '../Nav'
import Footer from '../Footer'
import UseTitle from '../Custum/CustumHook'

const Lookbook = () => {
  UseTitle("Look book")
  return (
    <div>
      <NavBar/>
      <Footer />
      </div>
  )
}

export default Lookbook