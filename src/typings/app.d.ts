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
    numberInTier: number
    owned: boolean
    unique?: boolean
    tier: number
  }

  export interface Edge {
    to: string
    type: 'drops' | 'upgrades'
  }
}
