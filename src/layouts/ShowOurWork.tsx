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

  // When click on element
  const handleMouseDown = () => {
    setIsDragging(true)
    if (showOurWorkCurrent) showOurWorkCurrent.style.userSelect = "none"
  }

  // When stop click on element
  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // When leave element
  const handleMouseLeave = () => {
    setIsDragging(false)
    if (showOurWorkCurrent) showOurWorkCurrent.style.userSelect = "auto"
  }

  // Accepts refs from cards component and change images (for PC)
  const handleMouseMoveFactory = (
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

        let newValue: number
        
        newValue = e.clientX - width.left - 0.5

        if (newValue <= 0) {
          newValue = 0
        } else if (newValue > width.width) {
          newValue = width.width;
        }

        clipDivCurrent.style.clipPath = `inset(0 0 0 ${newValue}px)`
        circleDivCurrent.style.left = `${newValue}px`
      }
    }
  }

  // When touch on element
  const handleTouchStart = () => {
    setIsDragging(true)
    if (showOurWorkCurrent) showOurWorkCurrent.style.userSelect = "none"
  }

  // When stop touches on element
  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // When stop touch element
  const handleTouchCancel = () => {
    setIsDragging(false)
    if (showOurWorkCurrent) showOurWorkCurrent.style.userSelect = "auto"
  }


  // Accepts refs from cards component and change images (touch devices)
  const handleTouchMoveFactory = (
    clipDivCurrent: HTMLDivElement | null,
    circleDivCurrent: HTMLDivElement | null,
    imgDivConteinerCurrent: HTMLDivElement | null
  ) => {
    return (e: React.TouchEvent) => {
      if (
        isDraggging &&
        clipDivCurrent &&
        circleDivCurrent &&
        imgDivConteinerCurrent
      ) {
        const width = imgDivConteinerCurrent.getBoundingClientRect()

        let newValue: number
        
        newValue = e.touches[0].clientX - width.left - 0.5

        if (newValue <= 0) {
          newValue = 0
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
      handleMouseUp={handleMouseUp}
      handleMouseDown={handleMouseDown}
      handleMouseMoveFactory={handleMouseMoveFactory}

      handleTouchStart={handleTouchStart}
      handleTouchEnd={handleTouchEnd}
      handleTouchCancel={handleTouchCancel}
      handleTouchMoveFactory={handleTouchMoveFactory}
    />,

    <CardOfCleaningSecond
      handleMouseLeave={handleMouseLeave}
      handleMouseUp={handleMouseUp}
      handleMouseDown={handleMouseDown}
      handleMouseMoveFactory={handleMouseMoveFactory}

      handleTouchStart={handleTouchStart}
      handleTouchEnd={handleTouchEnd}
      handleTouchCancel={handleTouchCancel}
      handleTouchMoveFactory={handleTouchMoveFactory}
    />,

    <CardOfCleaningThird
      handleMouseLeave={handleMouseLeave}
      handleMouseUp={handleMouseUp}
      handleMouseDown={handleMouseDown}
      handleMouseMoveFactory={handleMouseMoveFactory}

      handleTouchStart={handleTouchStart}
      handleTouchEnd={handleTouchEnd}
      handleTouchCancel={handleTouchCancel}
      handleTouchMoveFactory={handleTouchMoveFactory}
    />,

    <CardOfCleaningFour
      handleMouseLeave={handleMouseLeave}
      handleMouseUp={handleMouseUp}
      handleMouseDown={handleMouseDown}
      handleMouseMoveFactory={handleMouseMoveFactory}

      handleTouchStart={handleTouchStart}
      handleTouchEnd={handleTouchEnd}
      handleTouchCancel={handleTouchCancel}
      handleTouchMoveFactory={handleTouchMoveFactory}
    />,

    <CardOfCleaningFive
      handleMouseLeave={handleMouseLeave}
      handleMouseUp={handleMouseUp}
      handleMouseDown={handleMouseDown}
      handleMouseMoveFactory={handleMouseMoveFactory}

      handleTouchStart={handleTouchStart}
      handleTouchEnd={handleTouchEnd}
      handleTouchCancel={handleTouchCancel}
      handleTouchMoveFactory={handleTouchMoveFactory}
    />,

    <CardOfCleaningSix
      handleMouseLeave={handleMouseLeave}
      handleMouseUp={handleMouseUp}
      handleMouseDown={handleMouseDown}
      handleMouseMoveFactory={handleMouseMoveFactory}

      handleTouchStart={handleTouchStart}
      handleTouchEnd={handleTouchEnd}
      handleTouchCancel={handleTouchCancel}
      handleTouchMoveFactory={handleTouchMoveFactory}
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
