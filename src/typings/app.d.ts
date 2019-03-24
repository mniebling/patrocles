declare namespace App {

  export interface Tier {
    completed: boolean
    label: string
    number: number
    owned: boolean
  }

  export interface Map {
    completed: boolean
    edges?: Edge[]
    id: number
    level: number
    name: string
    owned: boolean
    shaped?: boolean
    unique?: boolean
    unlocked: boolean
    tier: number
  }

  export interface Node extends Map {
    className: string
    style: {
      transform: string
    }
  }

  export interface Edge {
    to: string
  }
}
