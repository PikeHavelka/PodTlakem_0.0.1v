// Brand icons
export type BrandIcon = {
  id: number
  name: string
  alt: string
}

// Show Our Work Cards - Cards Of Cleaning
export type CardProps = {
  handlePointerDown: () => void
  handlePointerUp: () => void
  handlePointerLeave: () => void

  handlePointerMoveFactory: (
    clip: HTMLDivElement | null,
    circle: HTMLDivElement | null,
    img: HTMLDivElement | null)  => (e: React.MouseEvent) => void
  }

  // Social icons
  export type SocialIcon = {
    id: number
    name: string
    url: string
    alt: string
  }