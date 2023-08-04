import "./ShowOurWork.scss"
import CardOfCleaningFirst from "../components/ShowOurWorkCards/CardOfCleaningFirst"
import CardOfCleaningSecond from "../components/ShowOurWorkCards/CardOfCleaningSecond"
import CardOfCleaningThird from "../components/ShowOurWorkCards/CardOfCleaningThird"
import { useState, useRef } from "react"

function ShowOurWork() {
  const [isDraggging, setIsDragging] = useState<boolean>()

  const refClipDiv = useRef<HTMLDivElement>(null)
  const refCircleDiv = useRef<HTMLDivElement>(null)
  const refImgDivContainer = useRef<HTMLDivElement>(null)
  const refShowOurWork = useRef<HTMLDivElement>(null)
  
  const clipDivCurrent = refClipDiv.current
  const circleDivCurrent = refCircleDiv.current 
  const imgDivConteinerCurrent = refImgDivContainer.current
  const showOurWorkCurrent = refShowOurWork.current

  function handlePointerDown() {
    setIsDragging(true)
  }

  function handlePointerUp() {
    setIsDragging(false)
  }

  function handleMouseLeave() {
    setIsDragging(false)
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (isDraggging && clipDivCurrent && circleDivCurrent && imgDivConteinerCurrent && showOurWorkCurrent) {
      const width = imgDivConteinerCurrent.getBoundingClientRect()
      let newValue = e.clientX - width.left - .5

      if (newValue <= 0) {
        newValue = 0

      } else if (newValue > width.width) {
        newValue = width.width
      }

      clipDivCurrent.style.clipPath = `inset(0 0 0 ${newValue}px)`
      circleDivCurrent.style.left = `${newValue}px`
      showOurWorkCurrent.style.userSelect = "none"
    }
  }

  return <section className="show-our-work" ref={refShowOurWork}>
    <div className="container">
      <div className="header">
        <h1>Ukázky naší práce</h1>
        <h3>Rádi Vás provedeme veškerým postupem, který probíhá při realizaci zakázky.</h3>
      </div>

      <div className="our-work">
        <CardOfCleaningFirst refImgDivContainer={refImgDivContainer} refCircleDiv={refCircleDiv} refClipDiv={refClipDiv} handleMouseLeave={handleMouseLeave} handlePointerUp={handlePointerUp} handlePointerDown={handlePointerDown} handleMouseMove={handleMouseMove} />

        <CardOfCleaningSecond refImgDivContainer={refImgDivContainer} refCircleDiv={refCircleDiv} refClipDiv={refClipDiv} handleMouseLeave={handleMouseLeave} handlePointerUp={handlePointerUp} handlePointerDown={handlePointerDown} handleMouseMove={handleMouseMove} />

        <CardOfCleaningThird refImgDivContainer={refImgDivContainer} refCircleDiv={refCircleDiv} refClipDiv={refClipDiv} handleMouseLeave={handleMouseLeave} handlePointerUp={handlePointerUp} handlePointerDown={handlePointerDown} handleMouseMove={handleMouseMove} />
      </div>
    </div>
  </section>
}

export default ShowOurWork