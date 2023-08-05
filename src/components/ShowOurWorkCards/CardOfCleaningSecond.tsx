import "../../layouts/ShowOurWork.scss"
import solar1 from "../../assets/images/plot1.jpg"
import solar2 from "../../assets/images/plot2.jpg"
import { CardProps } from "../../types/Types"
import { useRef } from "react"

const CardOfCleaningSecond = (props: CardProps) => {
  const refClipDiv = useRef<HTMLDivElement>(null)
  const refCircleDiv = useRef<HTMLDivElement>(null)
  const refImgDivContainer = useRef<HTMLDivElement>(null)

  const clipDivCurrent = refClipDiv.current
  const circleDivCurrent = refCircleDiv.current
  const imgDivConteinerCurrent = refImgDivContainer.current

  return <div className="card-our-work" >
    <div className="images-container" ref={refImgDivContainer} onMouseLeave={props.handleMouseLeave} onPointerUp={props.handlePointerUp} onMouseMove={props.handleMouseMoveFactory(clipDivCurrent, circleDivCurrent, imgDivConteinerCurrent)}>

      <div className="circle-with-arrows" ref={refCircleDiv} onPointerDown={props.handlePointerDown} >
        <span className="left-arrow"></span>
        <span className="right-arrow"></span>
      </div>

      <div className="clip-path-left" ref={refClipDiv} >
        <img src={solar1} alt="Znečistěný solární panel" />
      </div>

      <div className="clip-path-second">
        <img src={solar2} alt="Čistý solární panel" />
      </div>
    </div>

    <div className="text">
      <h3>Čištění kamenného plotu</h3>

      <p>Zde jsme čistili přes 40 m kamenného plotu sestávajícího se ze ztraceného bednění. Přizpůsobili jsme technologii práce tak, aby zde nedošlo k poškození dřevěného plotu a dále nekontrolovatelnému úniku látek potřebných k ošetření do půdy či rostlin zatímto plotem i přesto že naše prostředky jsou ekologicky odbouratelné.</p>
    </div>
  </div>
}

export default CardOfCleaningSecond