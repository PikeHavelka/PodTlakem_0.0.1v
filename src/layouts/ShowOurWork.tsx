import "./ShowOurWork.scss"
import CardOfCleaningFirst from "../components/ShowOurWorkCards/CardOfCleaningFirst"
import CardOfCleaningSecond from "../components/ShowOurWorkCards/CardOfCleaningSecond"
import CardOfCleaningThird from "../components/ShowOurWorkCards/CardOfCleaningThird"
import CardOfCleaningFour from "../components/ShowOurWorkCards/CardOfCleaningFour"
import CardOfCleaningFive from "../components/ShowOurWorkCards/CardOfCleaningFive"
import CardOfCleaningSix from "../components/ShowOurWorkCards/CardOfCleaningSix"
import { useState, useRef, useEffect } from "react"

function ShowOurWork() {
  // Create useState
  const [isDraggging, setIsDragging] = useState(false)

  // State for random component in ShowOurWork
  const [randomIndex0, setRandomIndex0] = useState(0)
  const [randomIndex1, setRandomIndex1] = useState(1)
  const [randomIndex2, setRandomIndex2] = useState(2)

  // Create refs
  const refShowOurWork = useRef<HTMLDivElement>(null)

  // Current for refs
  const showOurWorkCurrent = refShowOurWork.current

  // When click on element for PC
  const handlePointerDown = () => {
    setIsDragging(true);
    if (showOurWorkCurrent) showOurWorkCurrent.style.userSelect = "none";
  }

  // When stop click on element
  const handlePointerUp = () => {
    setIsDragging(false);
  }

  // When leave element
  const handleMouseLeave = () => {
    setIsDragging(false);
    if (showOurWorkCurrent) showOurWorkCurrent.style.userSelect = "auto";
  }

  // Accepts refs from cards component and change images
  const handlePointerMoveFactory = (
    clipDivCurrent: HTMLDivElement | null,
    circleDivCurrent: HTMLDivElement | null,
    imgDivConteinerCurrent: HTMLDivElement | null
  ) => {
    return (e: React.MouseEvent) => {
      if (
        isDraggging &&
        clipDivCurrent &&
        circleDivCurrent &&
        imgDivConteinerCurrent
      ) {
        const width = imgDivConteinerCurrent.getBoundingClientRect()
        let newValue = e.clientX - width.left - 0.5

        if (newValue <= 0) {
          newValue = 0;
        } else if (newValue > width.width) {
          newValue = width.width;
        }

        clipDivCurrent.style.clipPath = `inset(0 0 0 ${newValue}px)`
        circleDivCurrent.style.left = `${newValue}px`
      }
    }
  }

  const components = [
    <CardOfCleaningFirst
      handleMouseLeave={handleMouseLeave}
      handlePointerUp={handlePointerUp}
      handlePointerDown={handlePointerDown}
      handlePointerMoveFactory={handlePointerMoveFactory}
    />,

    <CardOfCleaningSecond
      handleMouseLeave={handleMouseLeave}
      handlePointerUp={handlePointerUp}
      handlePointerDown={handlePointerDown}
      handlePointerMoveFactory={handlePointerMoveFactory}
    />,

    <CardOfCleaningThird
      handleMouseLeave={handleMouseLeave}
      handlePointerUp={handlePointerUp}
      handlePointerDown={handlePointerDown}
      handlePointerMoveFactory={handlePointerMoveFactory}
    />,

    <CardOfCleaningFour
      handleMouseLeave={handleMouseLeave}
      handlePointerUp={handlePointerUp}
      handlePointerDown={handlePointerDown}
      handlePointerMoveFactory={handlePointerMoveFactory}
    />,

    <CardOfCleaningFive
      handleMouseLeave={handleMouseLeave}
      handlePointerUp={handlePointerUp}
      handlePointerDown={handlePointerDown}
      handlePointerMoveFactory={handlePointerMoveFactory}
    />,

    <CardOfCleaningSix
      handleMouseLeave={handleMouseLeave}
      handlePointerUp={handlePointerUp}
      handlePointerDown={handlePointerDown}
      handlePointerMoveFactory={handlePointerMoveFactory}
    />,
  ];

  const chooseRandomComponent = (components: JSX.Element[]) => {
    const randomValue = Math.floor(Math.random() * 3);
    const randomNumber = Math.floor(Math.random() * components.length);

    if (
      randomNumber !== randomIndex0 &&
      randomNumber !== randomIndex1 &&
      randomNumber !== randomIndex2
    ) {
      if (randomValue === 0) {
        setRandomIndex0(randomNumber);
      } else if (randomValue === 1) {
        setRandomIndex1(randomNumber);
      } else if (randomValue === 2) {
        setRandomIndex2(randomNumber);
      }
    } else {
      chooseRandomComponent(components);
    }
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      chooseRandomComponent(components);
    }, 20000);

    return () => clearInterval(intervalID);
  }, [randomIndex0, randomIndex1, randomIndex2]);

  return (
    <section className="show-our-work" ref={refShowOurWork}>
      <div className="container">
        <div className="header">
          <h1>Ukázky naší práce</h1>
          <h3>
            Rádi Vás provedeme veškerým postupem, který probíhá při realizaci
            zakázky.
          </h3>
        </div>

        <div className="our-work">
          {components[randomIndex0]}
          {components[randomIndex1]}
          {components[randomIndex2]}
        </div>
      </div>
    </section>
  );
}

export default ShowOurWork;
