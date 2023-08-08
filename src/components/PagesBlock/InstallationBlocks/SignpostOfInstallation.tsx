import "../AllSignposts.scss"

function SignpostOfInstallation() {
  return <div className="signpost">
    <div className="heading container">
      <h1 className="title">Rozcestník</h1>
      <h3 className="subtitle">Práce na solárních panelech</h3>
    </div>

    <div className="filter">
      <ul>
        <li><a href="#antennas-installation">Instalace antén</a></li>
        <li><a href="#adds-installation">Instalace reklamy</a></li>
        <li><a href="#birds-barriers-installation">Ochrany proti ptactvu</a></li>
        <li><a href="#FVE-installation">Montáž FVE</a></li>
        <li><a href="#lighting-conductor-installation">Montáž hromosvodů</a></li>
      </ul>
    </div>
  </div>
}

export default SignpostOfInstallation