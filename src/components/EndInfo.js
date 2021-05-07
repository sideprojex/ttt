import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const EndInfo = () => {
  return (
    <section className="end-info">
      <div className="grid">
        <StaticImage
          src="../assets/images/social-media-presence.svg"
          className="social-media-presence-img"
          alt="social-media-presence"
          placeholder="tracedSVG"
          layout="constrained"
          height={270}
        />
        <div className="end-info-details">
          <h1>Enhance Your Social Presence</h1>
          <p className="end-info-para">
            We are built specifically for the busy entrepreneurs:
          </p>
          <div className="end-info-other">
            <p>We upload & schedule your posts</p>
            <p>We curate and strategize your Ad settings</p>
            <p>Most importantly, we keep it Terus Terang</p>
          </div>
          <Link to="/contact">
            <button className="btn btn-normal">Get Started</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EndInfo
