import React from "react"
import { FaInstagram } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import { AiOutlineYoutube } from "react-icons/ai"
import { FiFacebook } from "react-icons/fi"
import { FiLinkedin } from "react-icons/fi"

export const data = [
  {
    id: 1,
    icon: <FiFacebook className="social-icon" />,
    social: "https://www.facebook.com/Terusterang.digital1",
  },
  {
    id: 2,
    icon: <FaInstagram className="social-icon" />,
    social: "https://www.instagram.com/terusterang.digital/",
  },
  {
    id: 3,
    icon: <FiTwitter className="social-icon" />,
    social: "https://twitter.com/DigitalTerus",
  },
  {
    id: 4,
    icon: <AiOutlineYoutube className="social-icon" />,
    social: "#",
  },
  {
    id: 5,
    icon: <FiLinkedin className="social-icon" />,
    social: "#",
  },
]
