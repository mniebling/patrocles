export const maps: App.Map[] = [
  // #region Tier 1
  { id: 1
  , name: `Atoll`
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: `Arid Lake` }
    , { to: `Iceberg` }
    , { to: `Maelström of Chaos` }
    ]
  }
, { id: 2
  , name: `Maelström of Chaos`
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 3
  , name: `Channel`
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: `Armoury` }
    , { to: `Thicket` }
    ]
  }
, { id: 4
  , name: `Flooded Mine`
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: `Dungeon` }
    ]
  }
, { id: 5
  , name: `Ramparts`
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: `Pen` }
    ]
  }
  // #endregion
  // #region Tier 2
, { id: 6
  , name: `Arid Lake`
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: `Fungal Hollow` }
    , { to: `Grotto` }
    ]
  }
, { id: 7
  , name: `Iceberg`
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: `Grotto` }
    , { to: `Cursed Crypt` }
    ]
  }
, { id: 8
  , name: `Armoury`
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: `Graveyard` }
    , { to: `Excavation` }
    ]
  }
, { id: 9
  , name: `Thicket`
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: `Excavation` }
    , { to: `Desert` }
    ]
  }
, { id: 10
  , name: `Dungeon`
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: `Shipyard` }
    , { to: `Peninsula` }
    ]
  }
, { id: 11
  , name: `Pen`
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: `Bone Crypt` }
    , { to: `Cage` }
    ]
  }
  // #endregion
  // #region Tier 3
, { id: 12
  , name: `Fungal Hollow`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: `Marshes` }
    , { to: `Lighthouse` }
    ]
  }
, { id: 13
  , name: `Grotto`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: `Lighthouse` }
    ]
  }
, { id: 14
  , name: `Cursed Crypt`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: `Crater` }
    , { to: `The Coward's Trial` }
    ]
  }
, { id: 15
  , name: `The Coward's Trial`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 16
  , name: `Graveyard`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: `Glacier` }
    ]
  }
, { id: 17
  , name: `Excavation`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: `Glacier` }
    ]
  }
, { id: 18
  , name: `Desert`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: `Strand` }
    , { to: `Spider Lair` }
    ]
  }
, { id: 19
  , name: `Shipyard`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: `Lookout` }
    , { to: `Courtyard` }
    ]
  }
, { id: 20
  , name: `Peninsula`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: `Courtyard` }
    ]
  }
, { id: 21
  , name: `Bone Crypt`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: `Barrows` }
    , { to: `Beach`}
    , { to: `Olmec's Sanctum` }
    ]
  }
, { id: 22
  , name: `Olmec's Sanctum`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 23
  , name: `Cage`
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: `Beach` }
    ]
  }
  // #endregion
  // #region Tier 4
, { id: 24
  , name: `Marshes`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 25
  , name: `Lighthouse`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 26
  , name: `Crater`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 27
  , name: `Glacier`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 28
  , name: `Strand`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: `Whakawairua Tuahu` }
    ]
  }
, { id: 29
  , name: `Whakawairua Tuahu`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 30
  , name: `Spider Lair`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 31
  , name: `Lookout`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 32
  , name: `Courtyard`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 33
  , name: `Barrows`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 34
  , name: `Beach`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
]
