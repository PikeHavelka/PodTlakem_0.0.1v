import "../../layouts/ShowOurWork.scss"
import solar1 from "../../assets/images/plot1.jpg"
import solar2 from "../../assets/images/plot2.jpg"
import { RefCardProps } from "../../types/Types"

const CardOfCleaningSecond = (props: RefCardProps) => {

  return <div className="card-our-work" >
    <div className="images-container" ref={props.refImgDivContainer} onMouseLeave={props.handleMouseLeave} onMouseMove={props.handleMouseMove} onPointerUp={props.handlePointerUp} >

      <div className="circle-with-arrows" ref={props.refCircleDiv} onPointerDown={props.handlePointerDown} >
        <span className="left-arrow"></span>
        <span className="right-arrow"></span>
      </div>

      <div className="clip-path-left" ref={props.refClipDiv} >
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