import "./CardOfCleaning.scss";
import Strecha_cista_03 from "../../assets/images/Strecha_cista_03.jpg";
import Strecha_spinava_03 from "../../assets/images/Strecha_spinava_03.jpg";
import { CardProps } from "../../types/types";
import { useRef } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CardOfCleaningFour = (props: CardProps) => {
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
    handleMouseLeave,
    handleMouseMoveFactory,
    handlePointerUp,
    handlePointerDown,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = props;

  return (
    <div className="card-our-work">
      <div
        className="images-container"
        ref={refImgDivContainer}
        onMouseLeave={handleMouseLeave}
        onPointerUp={handlePointerUp}

        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}

        onMouseMove={handleMouseMoveFactory(
          clipDivCurrent,
          circleDivCurrent,
          imgDivConteinerCurrent
        )}
      >
        <div
          className="circle-with-arrows"
          ref={refCircleDivContainer}
          onPointerDown={handlePointerDown}
          onTouchStart={onTouchStart}
        >
          <IoMdArrowDropleft className="left-icon icon" />
          <IoMdArrowDropright className="right-icon icon" />
        </div>

        <div className="clip-path-left" ref={refClipDiv}>
          <img src={Strecha_cista_03} alt="Znečistěný solární panel" />
        </div>

        <div className="clip-path-second">
          <img src={Strecha_spinava_03} alt="Čistý solární panel" />
        </div>
      </div>

      <div className="block-of-text">
        <h3 className="heading">Čištění plechové střechy</h3>

        <p className="text">
          Nejdříve se plechová střecha očistila od atmosférických a biologických
          nečistot za pomoci chemie a horkou vodou z vapky.
          <br />
          <br />
          Následně byly vyměněny staré hřebíky za nové texové šrouby, aby při
          větším větru nedošlo k odletu plechových tabulí. Dále jsme za pomocí
          válečků a zařízení na stříkání barvy (airless) nastříkali graffitivě
          šedou barvu na přání klientky.
          <br />
          <br />
          Barva se stříkala ve 3 vrstvách pro lepší krytí.
        </p>
      </div>
    </div>
  );
};

export default CardOfCleaningFour;
