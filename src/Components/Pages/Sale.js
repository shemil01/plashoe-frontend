import React from 'react'
import NavBar from '../Nav'
import Footer from '../Footer'
import UseTitle from '../Custum/CustumHook'

const Sale = () => {
  UseTitle('Sale')
  return (
    <div>
      <NavBar />
      <Footer />
      </div>
  )
}

export default Sale