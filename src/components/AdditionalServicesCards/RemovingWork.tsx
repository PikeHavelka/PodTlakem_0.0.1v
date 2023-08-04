import "./RemovingWork.scss"
import remove from "../../assets/icons/removing1.png"
import { Link } from "react-router-dom"

function RemovingWork() {
  return <div className="removing-work">
    <div className="icon-container">
      <img src={remove} alt="Odstraňování" />
    </div>

    <div className="text">
      <h2>Odstraňovací práce</h2>
      <Link to="/odstraňovací_práce">Více zde</Link>
    </div>
  </div>
}

export default RemovingWork