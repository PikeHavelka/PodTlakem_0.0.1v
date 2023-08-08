import CleaningBlockOne from "../components/PagesBlock/CleaningBlocks/CleaningBlockOne"
import CleaningBlockTwo from "../components/PagesBlock/CleaningBlocks/CleaningBlockTwo"
import CleaningBlockThree from "../components/PagesBlock/CleaningBlocks/CleaningBlockThree"
import CleaningBlockFour from "../components/PagesBlock/CleaningBlocks/CleaningBlockFour"
import CleaningBlockFive from "../components/PagesBlock/CleaningBlocks/CleaningBlockFive"
import CleaningBlockSix from "../components/PagesBlock/CleaningBlocks/CleaningBlockSix"
import CleaningBlockSeven from "../components/PagesBlock/CleaningBlocks/CleaningBlockSeven"
import SignpostOfCleaning from "../components/PagesBlock/CleaningBlocks/SignpostOfCleaning"
import "./AllPages.scss"

function TheCleaning() {
  return <>
    <SignpostOfCleaning />
    <CleaningBlockOne />
    <CleaningBlockTwo />
    <CleaningBlockThree />
    <CleaningBlockFour />
    <CleaningBlockFive />
    <CleaningBlockSix />
    <CleaningBlockSeven />
  </>
}

export default TheCleaning