import "./AllWorks.scss"
import clean from "../../assets/icons/clean1.png"
import { Link } from "react-router-dom"

function CleaningWork() {
  return <div className="cleaning-work">
    <div className="icon-container">
      <img src={clean} alt="Lesklý dům" />
    </div>

    <div className="text">
      <h2>Čistící práce</h2>
      <Link to="/čistící_práce">Více zde</Link>
    </div>
  </div>
}

export default CleaningWork