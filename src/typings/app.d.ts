declare namespace App {

  export interface Tier {
    number: number
    maps: Map[]
  }

  export interface Map {
    completed: boolean
    edges?: Edge[]
    id: number
    level: number
    name: string
    owned: boolean
    unique?: boolean
    tier: number
  }

  export interface Node extends Map {
    className: string
    style: {
      transform: string
    }
  }

  export type EdgeType
    = 'drops'
    | 'upgrades'

  export interface Edge {
    to: string
    type: EdgeType
  }
}
