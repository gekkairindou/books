import React from 'react'
import Header from '../components/Header'
import Sideber from '../components/Sideber'
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Overview from './Overview'
import AppHome from './AppHome'
import Evaluation from './Evaluation'
import Theme from './Theme'
import Credit from './Credit'

function Top() {
  return (
    <>
        <Header />
        <main className="main">
          <Sideber />
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/App" element={<AppHome />} />
              <Route path="/App/theme" element={<Theme />} />
              <Route path="/App/evaluation" element={<Evaluation />} />
              <Route path="/credit" element={<Credit />} />
          </Routes>
        </main>
    </>
  )
}

export default Top