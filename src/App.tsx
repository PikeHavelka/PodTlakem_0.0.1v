import SharedLayout from "./pages/SharedLayout"
import TheMain from "./layouts/TheMain"
import TheRepair from "./pages/TheRepair"
import TheCleaning from "./pages/TheCleaning"
import TheRemoving from "./pages/TheRemoving"
import TheInstallation from "./pages/TheInstallation"
import ThePainting from "./pages/ThePainting"
import SolarCleaning from "./pages/SolarCleaning"
import ErrorPage from "./pages/ErrorPage"
import { Routes, Route } from "react-router-dom"

function App() {
  return <Routes>
    <Route path="" element={ <SharedLayout /> } >
      <Route index element={ <TheMain /> } />
      <Route path="/opravné_práce" element={ <TheRepair /> } />
      <Route path="/čistící_práce" element={ <TheCleaning /> } />
      <Route path="/odstraňovací_práce" element={ <TheRemoving /> } />
      <Route path="/montážní_práce" element={ <TheInstallation /> } />
      <Route path="/nátěrové_práce" element={ <ThePainting /> } />
      <Route path="/čištění_solárních_panelů" element={ <SolarCleaning /> } />
      <Route path="*" element={ <ErrorPage /> } />
    </Route>
  </Routes>
}

export default App
