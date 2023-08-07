import "./AllWorks.scss"
import paint from "../../assets/icons/paint1.png"
import { Link } from "react-router-dom"

function PaintingWork() {
  return <div className="painting-work">
    <div className="icon-container">
      <img src={paint} alt="Váleček" />
    </div>

    <div className="text">
      <h2>Nátěrové práce</h2>
      <Link to="/nátěrové_práce">Více zde</Link>
    </div>
  </div>
}

export default PaintingWork