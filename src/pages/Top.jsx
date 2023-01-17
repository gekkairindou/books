import React from 'react'
import Header from '../components/Header'
import Sideber from '../components/Sideber'
import { Routing } from '../components/Routing'

function Top() {
  return (
    <>
        <Header />
        <main className="main">
          <Sideber />
          <Routing />
        </main>
    </>
  )
}

export default Top