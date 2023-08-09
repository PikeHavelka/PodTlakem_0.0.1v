import "../AllSignposts.scss"
import { useEffect } from "react"

function SignpostOfPainting() {
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
        <li><a href="#facades-airless-painting">Nátěry fasád</a></li>
        <li><a href="#spraying-facades-painting">Hydrofóbní a nano nástřiky</a></li>
        <li><a href="#coatings-of-constructions-painting">Nátěry konstrukcí</a></li>
        <li><a href="#protective-spraying-painting">Ochranné nástřiky fasád</a></li>
      </ul>
    </div>
  </div>
}

export default SignpostOfPainting
