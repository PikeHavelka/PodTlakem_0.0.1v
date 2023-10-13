// Brand icons
export type BrandIcon = {
  id: number
  name: string
  alt: string
}

// Show Our Work Cards - Cards Of Cleaning PC
export type CardProps = {

  // For PC
  handleMouseDown: () => void
  handleMouseUp: () => void
  handleMouseLeave: () => void

  handleMouseMoveFactory: (
    clip: HTMLDivElement | null,
    circle: HTMLDivElement | null,
    img: HTMLDivElement | null)  => (e: React.MouseEvent) => void

  // Touch devices
  handleTouchStart: () => void
  handleTouchEnd: () => void
  handleTouchCancel: () => void
  
  handleTouchMoveFactory: (
    clip: HTMLDivElement | null,
    circle: HTMLDivElement | null,
    img: HTMLDivElement | null)  => (e: React.TouchEvent) => void
  }

  // Social icons
  export type SocialIcon = {
    id: number
    name: string
    url: string
    alt: string
  }