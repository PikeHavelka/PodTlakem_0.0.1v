import RemovingBlockOne from "../components/PagesBlock/RemovingBlocks/RemovingBlockOne"
import RemovingBlockTwo from "../components/PagesBlock/RemovingBlocks/RemovingBlockTwo"
import SignpostOfRemoving from "../components/PagesBlock/RemovingBlocks/SignpostOfRemoving"
import "./AllPages.scss"

function TheRemoving() {
  return <>
    <SignpostOfRemoving />
    <RemovingBlockOne />
    <RemovingBlockTwo />
  </>
}

export default TheRemoving