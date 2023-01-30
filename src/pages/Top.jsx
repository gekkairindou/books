import React from 'react'
import Header from '../components/Header'
import Sideber from '../components/Sideber'
import { Routing } from '../components/Routing'
import { SideberLinkData } from '../components/SideberData';

function Top() {
  return (
    <>
        <Header />
        <main className="main">
          <Sideber />
          <Routing routeDate={SideberLinkData} />
        </main>
    </>
  )
}

export default Top