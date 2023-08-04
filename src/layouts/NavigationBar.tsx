import "./NavigationBar.scss"
import logo from "../assets/images/logo.png"
import navIcons from "../data/NavIcons"
import { useState, useEffect } from "react"

function NavigationBar() {
  const [showMenu, setShowMenu] = useState<boolean>()
  const [navStyle, setNavStyle] = useState<boolean>()

  const hamburgerMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== 0) {
        setNavStyle(true)
      } else {
        setNavStyle(false)
      }
    })
  }, [])

  return <nav className={`${navStyle ? "" : "transparent" }`}>
    <div className={`container flex-nav-bar ${showMenu ? "show-menu" : "hide-menu"}`}>
      <div className="company-logo">
        <a href="/">
          <img src={logo} alt="Pod-Tlakem.cz" />
        </a>
      </div>

      <ul>
        <li>
          <a href="#úvod">Úvod</a>
        </li>

        <li>
          <a href="#naše_služby">Naše Služby</a>
        </li>

        <li>
          <a href="#kontakt">Kontakty</a>
        </li>

        <div className="all-social-media">
          {navIcons.map((oneIcon) => {
            const { id, name, url, alt } = oneIcon

            return (
              <li className="social-media" key={id}>
                <a href={url}>
                  <img src={name} alt={alt} />
                </a>
              </li>
            )
          })}
        </div>
      </ul>

      <button className="hamburger-menu" onClick={hamburgerMenu}>
        <div className="bar"></div>
      </button>
    </div>
  </nav>
}

export default NavigationBar