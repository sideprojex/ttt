import React from "react"
import Footer from "./Footer"
import NavBar from "./Navbar"
import "../css/style.css"
import StepContext from "../context/StepContext"

const Layout = ({ children }) => {
  return (
    <StepContext>
      <NavBar />
      {children}
      <Footer />
    </StepContext>
  )
}

export default Layout
