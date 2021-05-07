import React from "react"
import { data } from "../constants/FooterLinks"
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-items">
        {data.map(item => {
          return (
            <li key={item.id}>
              <a href={item.social}>{item.icon}</a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
