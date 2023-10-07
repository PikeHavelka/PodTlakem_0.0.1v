import "./CardOfCleaning.scss";
import Strecha_cista_02 from "../../assets/images/Strecha_cista_02.jpeg";
import Strecha_spinava_02 from "../../assets/images/Strecha_spinava_02.jpg";
import { CardProps } from "../../types/types";
import { useRef } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CardOfCleaningSix = (props: CardProps) => {
  // Create Refs
  const refClipDiv = useRef<HTMLDivElement>(null);
  const refCircleDivContainer = useRef<HTMLDivElement>(null);
  const refImgDivContainer = useRef<HTMLDivElement>(null);

  // Current for Refs
  const clipDivCurrent = refClipDiv.current;
  const circleDivCurrent = refCircleDivContainer.current;
  const imgDivConteinerCurrent = refImgDivContainer.current;

  // Destructoring of all props (only functions)
  const {
    handlePointerLeave,
    handlePointerMoveFactory,
    handlePointerUp,
    handlePointerDown
  } = props;

  return (
    <div className="card-our-work">
      <div
        className="images-container"
        ref={refImgDivContainer}
        onPointerLeave={handlePointerLeave}
        onPointerUp={handlePointerUp}

        onPointerMove={handlePointerMoveFactory(
          clipDivCurrent,
          circleDivCurrent,
          imgDivConteinerCurrent
        )}
      >
        <div
          className="circle-with-arrows"
          ref={refCircleDivContainer}
          onPointerDown={handlePointerDown}
        >
          <IoMdArrowDropleft className="left-icon icon" />
          <IoMdArrowDropright className="right-icon icon" />
        </div>

        <div className="clip-path-left" ref={refClipDiv}>
          <img src={Strecha_cista_02} alt="Znečistěný solární panel" />
        </div>

        <div className="clip-path-second">
          <img src={Strecha_spinava_02} alt="Čistý solární panel" />
        </div>
      </div>

      <div className="block-of-text">
        <h3 className="heading">Čištění střešní krytiny</h3>

        <p className="text">
          Přibližně 12 let stará sedlová střecha o ploše 100 m² z betonových
          tašek s akrylátovým nástřikem bez lesku. Zakázka byla zrealizována
          během jednoho dne, kde nejdříve došlo k mechanickému očištění střechy
          od všech nánosů, mechů a pylů. Poté došlo k chemickému odstranění
          mechu, lišejníku a plísní ze střechy s ohledem na daný typ střešní
          krytiny. Dále byla střecha naimpregnovaná neboli zakonzervována, čímž
          se vrátily střešní krytině její původní vlastnosti.
        </p>
      </div>
    </div>
  );
};

export default CardOfCleaningSix;
