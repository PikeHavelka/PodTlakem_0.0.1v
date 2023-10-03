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
    </div>
  </header>
}

export default TheHeader