import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <section className="hero">
      <h1>Straight Fwd Social Media Agency.</h1>
      <p>Start First,Grow Cekaply.</p>
      <StaticImage
        src="../assets/images/social-media-banner1.svg"
        className="social-media-banner"
        alt="social-media-banner"
        placeholder="tracedSVG"
        layout="constrained"
      />
    </section>
  )
}

export default Hero
