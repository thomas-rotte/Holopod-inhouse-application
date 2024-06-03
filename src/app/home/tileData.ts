export interface Tile {
  img:string,
  description:string,
  route:string
}

export const TITLE_LIST: Tile[] =
  [
    {
      img:"Dragon.dfa32dbe.png",
      description:"Video",
      route:"/video"
    },
    {
      img:"Dragon.dfa32dbe.png",
      description:"Schedule",
      route:"/schedule"
    },
    {
      img:"Dragon.dfa32dbe.png",
      description:"Game",
      route:"/game"
    },
  ]
