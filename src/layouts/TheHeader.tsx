import "./TheHeader.scss"
import NavigationBar from "./NavigationBar"

function TheHeader() {
  return <header id="úvod">
    <div className="overlay">
      <NavigationBar />

      <div className="sub-title-container">
        <h3 className="subtitle">
          Práce s vysokotlakým zařízením
            <span className="subtitle-brake-top"> | Ve výškách</span>
        </h3>

        <h1 className="title">Pod-Tlakem.cz</h1>

        <h3 className="subtitle">
          Čištění & Impregnování
            <span className="subtitle-brake-bot"> & Natírání</span>
        </h3>
      </div>

      <div className="mouse-icon">
        <div className="wheel"></div>
      </div>

      <div className="svg-container">
        <svg viewBox="0 0 1500 168">
          <path d="m 0,240 h 1500 v -71 c 0,0 -286,-81 -743,-81 C 300,86 0,168 0,168 Z" />
        </svg>
      </div>
    </div>
  </header>
}

export default TheHeader