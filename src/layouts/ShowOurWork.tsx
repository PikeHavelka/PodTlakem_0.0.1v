import "./ShowOurWork.scss"
import CardOfCleaningFirst from "../components/ShowOurWorkCards/CardOfCleaningFirst"
import CardOfCleaningSecond from "../components/ShowOurWorkCards/CardOfCleaningSecond"
import CardOfCleaningThird from "../components/ShowOurWorkCards/CardOfCleaningThird"
import { useState, useRef } from "react"

function ShowOurWork() {
  const [isDraggging, setIsDragging] = useState<boolean>()
  const refShowOurWork = useRef<HTMLDivElement>(null)
  const showOurWorkCurrent = refShowOurWork.current

  const handlePointerDown = () => {
    setIsDragging(true)
    if (showOurWorkCurrent) showOurWorkCurrent.style.userSelect = "none"
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (showOurWorkCurrent) showOurWorkCurrent.style.userSelect = "auto"
  }

  const handleMouseMoveFactory = (
    clipDivCurrent: HTMLDivElement | null,
    circleDivCurrent: HTMLDivElement | null,
    imgDivConteinerCurrent: HTMLDivElement | null
  ) => {
    return (
      (e: React.MouseEvent) => {
        if (isDraggging && clipDivCurrent && circleDivCurrent && imgDivConteinerCurrent ) {
          const width = imgDivConteinerCurrent.getBoundingClientRect()
          let newValue = e.clientX - width.left - .5

          if (newValue <= 0) {
            newValue = 0

          } else if (newValue > width.width) {
            newValue = width.width
          }

          clipDivCurrent.style.clipPath = `inset(0 0 0 ${newValue}px)`
          circleDivCurrent.style.left = `${newValue}px`
        }
      }
    )
  }

  return <section className="show-our-work" ref={refShowOurWork}>
    <div className="container">
      <div className="header">
        <h1>Ukázky naší práce</h1>
        <h3>Rádi Vás provedeme veškerým postupem, který probíhá při realizaci zakázky.</h3>
      </div>

      <div className="our-work">
        <CardOfCleaningFirst handleMouseLeave={handleMouseLeave} handlePointerUp={handlePointerUp} handlePointerDown={handlePointerDown} handleMouseMoveFactory={handleMouseMoveFactory} />

        <CardOfCleaningSecond handleMouseLeave={handleMouseLeave} handlePointerUp={handlePointerUp} handlePointerDown={handlePointerDown} handleMouseMoveFactory={handleMouseMoveFactory} />

        <CardOfCleaningThird handleMouseLeave={handleMouseLeave} handlePointerUp={handlePointerUp} handlePointerDown={handlePointerDown} handleMouseMoveFactory={handleMouseMoveFactory} />
      </div>
    </div>
  </section>
}

export default ShowOurWork