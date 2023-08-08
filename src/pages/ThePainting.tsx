import PaintingBlockOne from "../components/PagesBlock/PaintingBlocks/PaintingBlockOne"
import PaintingBlockTwo from "../components/PagesBlock/PaintingBlocks/PaintingBlockTwo"
import PaintingBlockThree from "../components/PagesBlock/PaintingBlocks/PaintingBlockThree"
import PaintingBlockFour from "../components/PagesBlock/PaintingBlocks/PaintingBlockFour"
import "./AllPages.scss"
import SignpostOfPainting from "../components/PagesBlock/PaintingBlocks/SignpostOfPainting"

function ThePainting() {
  return <>
    <SignpostOfPainting />
    <PaintingBlockOne />
    <PaintingBlockTwo />
    <PaintingBlockThree />
    <PaintingBlockFour />
  </>
}

export default ThePainting