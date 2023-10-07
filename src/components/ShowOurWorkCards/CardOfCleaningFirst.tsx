import "./CardOfCleaning.scss";
import Okap_cisty_01 from "../../assets/images/Okap_cisty_01.jpg";
import Okap_spinavy_01 from "../../assets/images/Okap_spinavy_01.jpg";
import { CardProps } from "../../types/types";
import { useRef } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CardOfCleaningFirst = (props: CardProps) => {
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
          <img
            className="img1"
            src={Okap_cisty_01}
            alt="Znečistěný solární panel"
          />
        </div>

        <div className="clip-path-right">
          <img
            className="img2"
            src={Okap_spinavy_01}
            alt="Čistý solární panel"
          />
        </div>
      </div>

      <div className="block-of-text">
        <h3 className="heading">Čištění okapového žlabu</h3>

        <p className="text">
          Ukázka naší práce, zde na přání zákazníka byl kompletně vyčištěn
          okapový žlab, od spadaného listí, různých větviček a ostatního odpadu.
        </p>
      </div>
    </div>
  );
};

export default CardOfCleaningFirst;
