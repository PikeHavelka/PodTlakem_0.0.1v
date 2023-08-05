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
  handleMouseMoveFactory: (
    clip: HTMLDivElement | null,
    circle: HTMLDivElement | null,
    img: HTMLDivElement | null)  => (e: React.MouseEvent) => void
}