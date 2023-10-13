import "./CardOfCleaning.scss";
import Solar_cisty_01 from "../../assets/images/Solar_cisty_01.jpg";
import Solar_spinavy_01 from "../../assets/images/Solar_spinavy_01.jpg";
import { CardProps } from "../../types/types";
import { useRef } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CardOfCleaningThird = (props: CardProps) => {
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
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleMouseMoveFactory,

    handleTouchStart,
    handleTouchEnd,
    handleTouchCancel,
    handleTouchMoveFactory
  } = props;

  return (
    <div className="card-our-work">
      <div
        className="images-container"
        ref={refImgDivContainer}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}

        onMouseMove={handleMouseMoveFactory(
          clipDivCurrent,
          circleDivCurrent,
          imgDivConteinerCurrent
        )}

        onTouchCancel={handleTouchCancel}
        onTouchEnd={handleTouchEnd}

        onTouchMove={handleTouchMoveFactory(
          clipDivCurrent,
          circleDivCurrent,
          imgDivConteinerCurrent
        )}
      >
        <div
          className="circle-with-arrows"
          ref={refCircleDivContainer}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <IoMdArrowDropleft className="left-icon icon" />
          <IoMdArrowDropright className="right-icon icon" />
        </div>

        <div className="clip-path-left" ref={refClipDiv}>
          <img src={Solar_cisty_01} alt="Znečistěný solární panel" />
        </div>

        <div className="clip-path-second">
          <img src={Solar_spinavy_01} alt="Čistý solární panel" />
        </div>
      </div>

      <div className="block-of-text">
        <h3 className="heading">Čištění solárních panelů</h3>

        <p className="text">
          Postavený dům byl obklopen řadou jehličnatých a listnatých stromů,
          které zavdaly ideálním podmínkám pro vznik nečistot jako je mech
          lišejník či pyl. Čímž došlo ke sníženi výkonnosti solárních panelů. Na
          čištění jsme využili průtokové šetrné koště za pomocí kterého jsme
          nanesli speciálně upravenou vodu pro maximálně šetrný účinnek včetně
          čistícího a impregnačního přípravku.
        </p>
      </div>
    </div>
  );
};

export default CardOfCleaningThird;
