import "./RepairWork.scss"
import repair from "../../assets/icons/repair1.png"
import { Link } from "react-router-dom"

function RepairWork() {
  return <div className="repair-work">
    <div className="icon-container">
      <img src={repair} alt="Nářadí" />
    </div>

    <div className="text">
      <h2>Opravné práce</h2>
      <Link to="/opravné_práce">Více zde</Link>
    </div>
  </div>
}

export default RepairWork