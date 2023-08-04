import "./AdditionalServices.scss"
import CleaningSolarPanels from "../components/AdditionalServicesCards/CleaningSolarPanels"
import CleaningWork from "../components/AdditionalServicesCards/CleaningWork"
import InstallationWork from "../components/AdditionalServicesCards/InstallationWork"
import PaintingWork from "../components/AdditionalServicesCards/PaintingWork"
import RemovingWork from "../components/AdditionalServicesCards/RemovingWork"
import RepairWork from "../components/AdditionalServicesCards/RepairWork"

function AdditionalServices() {
  return <section className="additional-services">
    <div className="container">
      <div className="header">
        <h1>Doplňkové služby</h1>
        <h3>Rádi Vám zajistíme a poskytneme naše doplňkové služby, které jsou založeny na individuálním přístupu.</h3>
      </div>

      <div className="work-list">
        <CleaningWork />
        <PaintingWork />
        <RemovingWork />
        <InstallationWork />
        <RepairWork />
        <CleaningSolarPanels />
      </div>
    </div>
  </section>
}

export default AdditionalServices