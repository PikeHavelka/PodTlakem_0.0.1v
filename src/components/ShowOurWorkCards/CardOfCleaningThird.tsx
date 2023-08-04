import "../../layouts/ShowOurWork.scss"
import solar1 from "../../assets/images/solar1.jpg"
import solar2 from "../../assets/images/solar2.jpg"
import { RefCardProps } from "../../types/Types"

const CardOfCleaningThird = (props: RefCardProps) => {

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
      <h3>Čištění solárních panelů</h3>

      <p>Postavený dům byl obklopen řadou jehličnatých a listnatých stromů, které zavdaly ideálním podmínkám pro vznik nečistot jako je mech lišejník či pyl. Čímž došlo ke sníženi výkonnosti solárních panelů. Na čištění jsme využili průtokové šetrné koště za pomocí kterého jsme nanesli speciálně upravenou vodu pro maximálně šetrný účinnek včetně čistícího a impregnačního přípravku.</p>
    </div>
  </div>
}

export default CardOfCleaningThird