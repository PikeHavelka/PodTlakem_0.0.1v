import RepairBlockOne from "../components/PagesBlock/RepairBlocks/RepairBlockOne"
import RepairBlockTwo from "../components/PagesBlock/RepairBlocks/RepairBlockTwo"
import RepairBlockThree from "../components/PagesBlock/RepairBlocks/RepairBlockThree"
import RepairBlockFour from "../components/PagesBlock/RepairBlocks/RepairBlockFour"
import "./AllPages.scss"
import SignpostOfRepair from "../components/PagesBlock/RepairBlocks/SignpostOfRepair"

function TheRepair() {
  return <>
    <SignpostOfRepair />
    <RepairBlockOne />
    <RepairBlockTwo />
    <RepairBlockThree />
    <RepairBlockFour />
  </>
}

export default TheRepair