import React from 'react'
import Subnav from '../components/Subnav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Heading from './Heading'
import Contantpage from './Contantpage'
import InfoPage from './Dealbest'


function Alldeatail() {
  return (
      <div>
          <Subnav />
          <Header />
          <Heading />
          <Contantpage />
          <InfoPage />
          <Footer />
    </div>
  )
}

export default Alldeatail