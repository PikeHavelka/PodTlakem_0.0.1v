import "../AllSignposts.scss"
import { useEffect } from "react"

function SignpostOfSolarCleaning() {
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
        <li><a href="#FVE-general-cleaning">Pravidelné/Nezbytnost čištění - FVE</a></li>
        <li><a href="#performance-levels-cleaning">Snížení úrovně výkonu</a></li>
        <li><a href="#efficiency-cleaning">Účinnost?</a></li>
        <li><a href="#FVE-cleaning">Jak často mýt - FVE?</a></li>
        <li><a href="#additional-informations-cleaning">Doplňkové služby a informace</a></li>
        <li><a href="#impregnation-cleaning">Důvody proč impregnovat</a></li>
        <li><a href="#frecvente-washing-cleaning">Časté mýty</a></li>
        <li><a href="#FVE-install-cleaning">Příprava střech na montáž - FVE</a></li>
        <li><a href="#tarifs-cleaning">Dlouhodobé spolupráce - TARIFY</a></li>
        <li><a href="#price-list-cleaning">Ceník služeb</a></li>
      </ul>
    </div>
  </div>
}

export default SignpostOfSolarCleaning