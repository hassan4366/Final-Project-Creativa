import React from 'react'
import Subnav from '../components/Subnav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Pageheading from './Pageheading'
import Contactpage from './Contactpage'

function Allcontact() {
  return (
      <div>
          <Subnav />
          <Header />
          <Pageheading />
          <Contactpage />
          <Footer />
    </div>
  )
}

export default Allcontact;