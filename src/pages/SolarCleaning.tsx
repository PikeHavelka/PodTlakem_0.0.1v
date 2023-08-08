import CleaningSolarsBlockOne from "../components/PagesBlock/SolarCleaningBlocks/CleaningSolarsBlockOne"
import CleaningSolarsBlockTwo from "../components/PagesBlock/SolarCleaningBlocks/CleaningSolarsBlockTwo"
import CleaningSolarsBlockThree from "../components/PagesBlock/SolarCleaningBlocks/CleaningSolarsBlockThree"
import CleaningSolarsBlockFour from "../components/PagesBlock/SolarCleaningBlocks/CleaningSolarsBlockFour"
import CleaningSolarsBlockFive from "../components/PagesBlock/SolarCleaningBlocks/CleaningSolarsBlockFive"
import CleaningSolarsBlockSix from "../components/PagesBlock/SolarCleaningBlocks/CleaningSolarsBlockSix"
import CleaningSolarsBlockSeven from "../components/PagesBlock/SolarCleaningBlocks/CleaningSolarsBlockSeven"
import CleaningSolarsBlockEight from "../components/PagesBlock/SolarCleaningBlocks/CleaningSolarsBlockEight"
import CleaningSolarsBlockNine from "../components/PagesBlock/SolarCleaningBlocks/CleaningSolarsBlockNine"
import CleaningSolarPriceList from "../components/PagesBlock/SolarCleaningBlocks/CleaningSolarPriceList"
import "./AllPages.scss"
import SignpostOfSolarCleaning from "../components/PagesBlock/SolarCleaningBlocks/SignpostOfSolarCleaning"

function SolarCleaning() {
  return <>
    <SignpostOfSolarCleaning />
    <CleaningSolarsBlockOne />
    <CleaningSolarsBlockTwo />
    <CleaningSolarsBlockThree />
    <CleaningSolarsBlockFour />
    <CleaningSolarsBlockFive />
    <CleaningSolarsBlockSix />
    <CleaningSolarsBlockSeven />
    <CleaningSolarsBlockEight />
    <CleaningSolarsBlockNine />
    <CleaningSolarPriceList />
  </>
}

export default SolarCleaning