export const maps: App.Map[] = [
  // #region Tier 1
  { id: 1
  , name: 'Atoll'
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Arid Lake' }
    , { to: 'Iceberg' }
    ]
  }
, { id: 2
  , name: 'Channel'
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Armoury' }
    , { to: 'Thicket' }
    ]
  }
, { id: 3
  , name: 'Flooded Mine'
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Dungeon' }
    ]
  }
, { id: 4
  , name: 'Ramparts'
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Pen' }
    ]
  }
  // #endregion
  // #region Tier 2
, { id: 5
  , name: 'Arid Lake'
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Fungal Hollow' }
    , { to: 'Grotto' }
    ]
  }
, { id: 6
  , name: 'Iceberg'
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Grotto' }
    , { to: 'Cursed Crypt' }
    ]
  }
, { id: 7
  , name: 'Armoury'
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Graveyard' }
    , { to: 'Excavation' }
    ]
  }
, { id: 8
  , name: 'Thicket'
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Excavation' }
    , { to: 'Desert' }
    ]
  }
, { id: 9
  , name: 'Dungeon'
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Shipyard' }
    , { to: 'Peninsula' }
    ]
  }
, { id: 10
  , name: 'Pen'
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Bone Crypt' }
    , { to: 'Cage' }
    ]
  }
  // #endregion
  // #region Tier 3
, { id: 11
  , name: 'Fungal Hollow'
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Marshes' }
    , { to: 'Lighthouse' }
    ]
  }
, { id: 12
  , name: 'Grotto'
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Lighthouse' }
    ]
  }
, { id: 13
  , name: 'Cursed Crypt'
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Crater' }
    ]
  }
, { id: 14
  , name: 'Graveyard'
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Glacier' }
    ]
  }
, { id: 15
  , name: 'Excavation'
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Glacier' }
    ]
  }
, { id: 16
  , name: 'Desert'
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Strand' }
    , { to: 'Spider Lair' }
    ]
  }
, { id: 17
  , name: 'Shipyard'
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Lookout' }
    , { to: 'Courtyard' }
    ]
  }
, { id: 18
  , name: 'Peninsula'
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Courtyard' }
    ]
  }
, { id: 19
  , name: 'Bone Crypt'
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Barrows' }
    , { to: 'Beach'}
    ]
  }
, { id: 20
  , name: 'Cage'
  , tier: 3
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Beach' }
    ]
  }
  // #endregion
  // #region Tier 3
, { id: 21
  , name: 'Marshes'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 22
  , name: 'Lighthouse'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 23
  , name: 'Crater'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 24
  , name: 'Glacier'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 25
  , name: 'Strand'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 26
  , name: 'Spider Lair'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 27
  , name: 'Lookout'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 28
  , name: 'Courtyard'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 29
  , name: 'Barrows'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 30
  , name: 'Beach'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
]
