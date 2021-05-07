import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Body = () => {
  return (
    <section className="info-section">
      <div className="grid">
        <div className="details">
          <h2>Connect, Interact & Increase Sales</h2>
          <p>
            Why choose us? You want results. We have found that the best way to
            get them is with up front research – of your company, competitors,
            target market and customer psychographics. Only after we fully
            understand you and your customers, do we recommend a plan of attack.
          </p>
        </div>
        <StaticImage
          src="../assets/images/why-choose-us.svg"
          className="why-us-img"
          alt="social-media-banner"
          placeholder="tracedSVG"
          layout="constrained"
          height={270}
        />
      </div>
    </section>
  )
}

export default Body
