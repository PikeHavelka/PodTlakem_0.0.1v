import "./AllWorks.scss"
import instal from "../../assets/icons/instal1.png"
import { Link } from "react-router-dom"

function InstallationWork() {
  return <div className="installation-work">
    <div className="icon-container">
      <img src={instal} alt="Montáž" />
    </div>

    <div className="text">
      <h2>Montážní práce</h2>
      <Link to="/montážní_práce">Více zde</Link>
    </div>
  </div>
}
export default InstallationWork