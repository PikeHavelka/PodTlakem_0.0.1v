import "./CardOfCleaning.scss"
import solar1 from "../../assets/images/strecha1.jpeg"
import solar2 from "../../assets/images/strecha2.jpg"
import { CardProps } from "../../types/types"
import { useRef } from "react"
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"

const CardOfCleaningFirst = (props: CardProps) => {
  // Create Refs
  const refClipDiv = useRef<HTMLDivElement>(null)
  const refCircleDivContainer = useRef<HTMLDivElement>(null)
  const refImgDivContainer = useRef<HTMLDivElement>(null)

  // Current for Refs
  const clipDivCurrent = refClipDiv.current
  const circleDivCurrent = refCircleDivContainer.current
  const imgDivConteinerCurrent = refImgDivContainer.current

  // Destructoring of all props (only functions)
  const { handleMouseLeave, handleMouseMoveFactory, handlePointerUp, handlePointerDown } = props

  return <div className="card-our-work" >
    <div className="images-container" ref={refImgDivContainer} onMouseLeave={handleMouseLeave} onPointerUp={handlePointerUp} onMouseMove={handleMouseMoveFactory(clipDivCurrent, circleDivCurrent, imgDivConteinerCurrent)} >

      <div className="circle-with-arrows" ref={refCircleDivContainer} onPointerDown={handlePointerDown} >
        <IoMdArrowDropleft className="left-icon icon" />
        <IoMdArrowDropright className="right-icon icon" />
      </div>

      <div className="clip-path-left" ref={refClipDiv} >
        <img className="img1" src={solar1} alt="Znečistěný solární panel" />
      </div>

      <div className="clip-path-right">
        <img className="img2" src={solar2} alt="Čistý solární panel" />
      </div>
    </div>

    <div className="block-of-text">
      <h3 className="heading">Čištění střešní krytiny</h3>

      <p className="text">Přibližně 12 let stará sedlová střecha o ploše 100 m² z betonových tašek s akrylátovým nástřikem bez lesku. Zakázka byla zrealizována během jednoho dne, kde nejdříve došlo k mechanickému očištění střechy od všech nánosů, mechů a pylů. Po té došlo k chemickému odstranění mechu, lišejníku a plísní ze střechy s ohledem na daný typ střešní krytiny. Dále byla střecha naimpregnovaná neboli zakonzervována, čímž se vrátily střešní krytině její původní vlastnosti.</p>
    </div>
  </div>
}

export default CardOfCleaningFirst

