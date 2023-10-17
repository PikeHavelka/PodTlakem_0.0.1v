import "./NavigationBar.scss"
import logo from "../assets/images/logo.png"
import navIcons from "../data/navIcons"
import { useState, useEffect } from "react"

function NavigationBar() {
  // Create UseStates
  const [showMenu, setShowMenu] = useState<boolean>()
  const [navStyle, setNavStyle] = useState<boolean>()

  // Show/Hide Hamburger Menu for small/big screen
  const hamburgerMenu = () => {
    setShowMenu(!showMenu)
  }

  // NavBar change className and design
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setNavStyle(true)
      } else {
        setNavStyle(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Show all social icons
  const mapingSocialMedia = () => {
    return (
      navIcons.map((oneIcon) => {
        const { id, name, url, alt } = oneIcon

        return (
          <li className="social-media" key={id}>
            <a href={url}>
              <img src={name} alt={alt} />
            </a>
          </li>
        )
      })
    )
  }

  return <nav className={`${navStyle ? "" : "transparent" }`}>
    <div className={`container flex-nav-bar ${showMenu ? "show-menu" : "hide-menu"}`}>
      <div className="company-logo">
        <a href="/">
          <img src={logo} alt="Pod-Tlakem.cz" />
        </a>
      </div>

      <ul>
        <li>
          <a href="/#úvod" >Úvod</a>
        </li>

        <li>
          <a href="/#naše_služby">Naše Služby</a>
        </li>

        <li>
          <a href="#kontakt">Kontakty</a>
        </li>

        <div className="all-social-media">
          {mapingSocialMedia()}
        </div>
      </ul>

      <button className="hamburger-menu" onClick={hamburgerMenu}>
        <div className="bar"></div>
      </button>
    </div>
  </nav>
}

export default NavigationBar