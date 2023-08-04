import "./CleaningSolarPanels.scss"
import solar from "../../assets/icons/solar1.png"
import { Link  } from "react-router-dom"

function CleaningSolarPanels() {
  return <div className="cleaning-solar-pannels">
    <div className="icon-container">
      <img src={solar} alt="Solární panel" />
    </div>

    <div className="text">
      <h2>Čištění solárních panelů</h2>
      <Link to="/čištění_solárních_panelů">Více zde</Link>
    </div>
  </div>
}

export default CleaningSolarPanels