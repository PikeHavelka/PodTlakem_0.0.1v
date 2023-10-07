import "./CardOfCleaning.scss";
import Plot_cisty_01 from "../../assets/images/Plot_cisty_01.jpg";
import Plot_spinavy_01 from "../../assets/images/Plot_spinavy_01.jpg";
import { CardProps } from "../../types/types";
import { useRef } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CardOfCleaningFive = (props: CardProps) => {
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
    handlePointerMoveFactory,
    handlePointerUp,
    handlePointerDown
  } = props;

  return (
    <div className="card-our-work">
      <div
        className="images-container"
        ref={refImgDivContainer}
        onMouseLeave={handleMouseLeave}
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
          <img src={Plot_cisty_01} alt="Znečistěný solární panel" />
        </div>

        <div className="clip-path-second">
          <img src={Plot_spinavy_01} alt="Čistý solární panel" />
        </div>
      </div>

      <div className="block-of-text">
        <h3 className="heading">Čištění kamenného plotu</h3>

        <p className="text">
          Zde jsme čistili přes 40 m kamenného plotu sestávajícího se ze
          ztraceného bednění. Přizpůsobili jsme technologii práce tak, aby zde
          nedošlo k poškození dřevěného plotu a dále nekontrolovatelnému úniku
          látek potřebných k ošetření do půdy či rostlin zatímto plotem i přesto
          že naše prostředky jsou ekologicky odbouratelné.
        </p>
      </div>
    </div>
  );
};

export default CardOfCleaningFive;
