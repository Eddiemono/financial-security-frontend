import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

import '../css/Layout.css'
import ExchangeRate from '../components/ExchangeRate'

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
