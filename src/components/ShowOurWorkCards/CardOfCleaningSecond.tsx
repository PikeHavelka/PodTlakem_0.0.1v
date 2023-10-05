import "./CardOfCleaning.scss";
import Strecha_cista_01 from "../../assets/images/Strecha_cista_01.jpg";
import Strecha_spinava_01 from "../../assets/images/Strecha_spinava_01.jpg";
import { CardProps } from "../../types/types";
import { useRef } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CardOfCleaningSecond = (props: CardProps) => {
  // Create Refs
  const refClipDiv = useRef<HTMLDivElement>(null);
  const refCircleDivContainer = useRef<HTMLDivElement>(null);
  const refImgDivContainer = useRef<HTMLDivElement>(null);

  // Current for Ref
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
          <img src={Strecha_cista_01} alt="Znečistěný solární panel" />
        </div>

        <div className="clip-path-second">
          <img src={Strecha_spinava_01} alt="Čistý solární panel" />
        </div>
      </div>

      <div className="block-of-text">
        <h3 className="heading">Čištění střešní krytiny</h3>

        <p className="text">
          Ukázka vyčištěné střechy, kde zákazníkem bylo požadováno vyčisti
          střechu od atmosferických nečistost, jako jsou mechy, lišejníky a
          plísně. Dále na střeše byla zaschlá špína, která byla zapříčiněna
          nedalekým stromem.
          <br />
          <br />
          Tato střešní krytina je stará již 20 let, nyní vypadá opět jako když
          se poprvé položila na střechu. Zde se postupovalo, nanesení čističe na
          střechu, následné opláchnutí teplou vodou a v neposlední řadě se
          střecha zakonzervovala impregnačním přípravkem.
        </p>
      </div>
    </div>
  );
};

export default CardOfCleaningSecond;
