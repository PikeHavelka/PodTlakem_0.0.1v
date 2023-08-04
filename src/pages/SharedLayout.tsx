import TheHeader from "../layouts/TheHeader"
import TheFooter from "../layouts/TheFooter"
import { Outlet } from "react-router-dom"

function SharedLayout() {
  return <>
    <TheHeader />
    <Outlet />
    <TheFooter />
  </>
}

export default SharedLayout