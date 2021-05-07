import React from "react"
import { pricingInfo } from "../constants/Pricinginfo"
import { Link } from "gatsby"

const Pricing = () => {
  return (
    <section className="pricing-info">
      {/* <h1>Pricing</h1> */}
      <div className="grid3">
        {pricingInfo.map(item => {
          return (
            <div className="price" key={item.id}>
              <h1>{item.plan}</h1>
              <h2>
                MYR <span>{item.pricing}</span> /m
              </h2>
              <ul className="infos">
                <li>{item.infos.info1}</li>
                <li>{item.infos.info2}</li>
                <li>{item.infos.info3}</li>
              </ul>
              <Link to="/contact">
                <button className="btn">Get Started</button>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Pricing
