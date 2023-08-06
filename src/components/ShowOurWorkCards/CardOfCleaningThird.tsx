import "./CardOfCleaning.scss"
import solar1 from "../../assets/images/solar1.jpg"
import solar2 from "../../assets/images/solar2.jpg"
import { CardProps } from "../../types/types"
import { useRef } from "react"
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"

const CardOfCleaningThird = (props: CardProps) => {
  // Create refs
  const refClipDiv = useRef<HTMLDivElement>(null)
  const refCircleDivContainer = useRef<HTMLDivElement>(null)
  const refImgDivContainer = useRef<HTMLDivElement>(null)

  // Current for refs
  const clipDivCurrent = refClipDiv.current
  const circleDivCurrent = refCircleDivContainer.current
  const imgDivConteinerCurrent = refImgDivContainer.current

  // Destructoring of all props (only functions)
  const { handleMouseLeave, handleMouseMoveFactory, handlePointerUp, handlePointerDown } = props

  return <div className="card-our-work" >
    <div className="images-container" ref={refImgDivContainer} onMouseLeave={handleMouseLeave} onPointerUp={handlePointerUp} onMouseMove={handleMouseMoveFactory(clipDivCurrent, circleDivCurrent, imgDivConteinerCurrent)}>

      <div className="circle-with-arrows" ref={refCircleDivContainer} onPointerDown={handlePointerDown} >
        <IoMdArrowDropleft className="left-icon icon" />
        <IoMdArrowDropright className="right-icon icon" />
      </div>

      <div className="clip-path-left" ref={refClipDiv} >
        <img src={solar1} alt="Znečistěný solární panel" />
      </div>

      <div className="clip-path-second">
        <img src={solar2} alt="Čistý solární panel" />
      </div>
    </div>

    <div className="block-of-text">
      <h3 className="heading">Čištění solárních panelů</h3>

      <p className="text">Postavený dům byl obklopen řadou jehličnatých a listnatých stromů, které zavdaly ideálním podmínkám pro vznik nečistot jako je mech lišejník či pyl. Čímž došlo ke sníženi výkonnosti solárních panelů. Na čištění jsme využili průtokové šetrné koště za pomocí kterého jsme nanesli speciálně upravenou vodu pro maximálně šetrný účinnek včetně čistícího a impregnačního přípravku.</p>
    </div>
  </div>
}

export default CardOfCleaningThird