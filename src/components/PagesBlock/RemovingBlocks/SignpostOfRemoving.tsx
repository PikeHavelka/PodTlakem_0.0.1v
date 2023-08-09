import "../AllSignposts.scss"
import { useEffect } from "react"

function SignpostOfRemoving() {
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
        <li><a href="#graffiti-removing">Odstraňování graffitu</a></li>
        <li><a href="#snow-icicles-removing">Odstraňování sněhu a rampouchu</a></li>
      </ul>
    </div>
  </div>
}

export default SignpostOfRemoving