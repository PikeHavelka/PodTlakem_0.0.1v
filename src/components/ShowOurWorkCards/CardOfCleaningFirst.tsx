import "../../layouts/ShowOurWork.scss"
import solar1 from "../../assets/images/strecha1.jpeg"
import solar2 from "../../assets/images/strecha2.jpg"
import { RefCardProps } from "../../types/Types"

const CardOfCleaningFirst = (props: RefCardProps) => {

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
      <h3>Čištění střešní krytiny</h3>

      <p>Přibližně 12 let stará sedlová střecha o ploše 100 m² z betonových tašek s akrylátovým nástřikem bez lesku. Zakázka byla zrealizována během jednoho dne, kde nejdříve došlo k mechanickému očištění střechy od všech nánosů, mechů a pylů. Po té došlo k chemickému odstranění mechu, lišejníku a plísní ze střechy s ohledem na daný typ střešní krytiny. Dále byla střecha naimpregnovaná neboli zakonzervována, čímž se vrátily střešní krytině její původní vlastnosti.</p>
    </div>
  </div>
}

export default CardOfCleaningFirst

