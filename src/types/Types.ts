export type SponsorsIcon = {
  id: number
  name: string
  alt: string
}

export type NavIcon = {
  id: number
  name: string
  url: string
  alt: string
}

// Show Our Work Cards - Cards Of Cleaning
export interface CardProps {
  handlePointerDown: () => void
  handlePointerUp: () => void
  handleMouseLeave: () => void
  handleMouseMove: (arg: React.MouseEvent) => void
}

export interface RefCardProps extends CardProps {
  refImgDivContainer: React.RefObject<HTMLDivElement>
  refCircleDiv: React.RefObject<HTMLDivElement>
  refClipDiv: React.RefObject<HTMLDivElement>
}

export interface Cards2 extends CardProps {
  refImgDivContainer2: React.RefObject<HTMLDivElement>
  refCircleDiv2: React.RefObject<HTMLDivElement>
  refClipDiv2: React.RefObject<HTMLDivElement>
}

