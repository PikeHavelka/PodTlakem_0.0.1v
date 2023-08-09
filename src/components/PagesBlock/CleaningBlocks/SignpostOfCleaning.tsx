import "../AllSignposts.scss"
import { useEffect } from "react"

function SignpostOfCleaning() {

  useEffect(() => {
    const signpost = document.getElementById("all-signpost")

    if (signpost) {
      signpost.scrollIntoView()
    }
  }, [])

  return <div className="signpost" id="all-signpost">
    <div className="heading container">
      <h1 className="title">Rozcestník</h1>
      <h3 className="subtitle">Práce na solárních panelech</h3>
    </div>

    <div className="filter">
      <ul>
        <li><a href="#roof-cleaning">Čištění střech</a></li>
        <li><a href="#facades-cleaning">Mytí a čištění fasád</a></li>
        <li><a href="#windows-cleaning">Mytí oken ve výškách</a></li>
        <li><a href="#gutters-cleaning">Čištění okapů</a></li>
        <li><a href="#lost-formwork-cleaning">Mytí a čištění ztraceného bednění</a></li>
        <li><a href="#decoratives-cleaning">Čištění okrasných kamenů a soch</a></li>
        <li><a href="#skylights-cleaning">Čištění světlíků</a></li>
      </ul>
    </div>
  </div>
}

export default SignpostOfCleaning