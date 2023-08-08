import InstallationBlockOne from "../components/PagesBlock/InstallationBlocks/InstallationBlockOne"
import InstallationBlockTwo from "../components/PagesBlock/InstallationBlocks/InstallationBlockTwo"
import InstallationBlockThree from "../components/PagesBlock/InstallationBlocks/InstallationBlockThree"
import InstallationBlockFour from "../components/PagesBlock/InstallationBlocks/InstallationBlockFour"
import InstallationBlockFive from "../components/PagesBlock/InstallationBlocks/InstallationBlockFive"
import "./AllPages.scss"
import SignpostOfInstallation from "../components/PagesBlock/InstallationBlocks/SignpostOfInstallation"

function TheInstallation() {
  return <>
    <SignpostOfInstallation />
    <InstallationBlockOne />
    <InstallationBlockTwo />
    <InstallationBlockThree />
    <InstallationBlockFour />
    <InstallationBlockFive />
  </>
}

export default TheInstallation