export const maps: App.Map[] = [
  // #region Tier 1
  { id: 1
  , name: 'Beach'
  , tier: 1
  , numberInTier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Arid Lake', type: 'drops' }
    , { to: 'Desert', type: 'upgrades' }
    ]
  }
, { id: 2
  , name: 'Dungeon'
  , tier: 1
  , numberInTier: 2
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Flooded Mine', type: 'upgrades' }
    ]
  }
, { id: 3
  , name: 'Graveyard'
  , tier: 1
  , numberInTier: 3
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Marshes', type: 'upgrades' }
    ]
  }
, { id: 4
  , name: 'Lookout'
  , tier: 1
  , numberInTier: 4
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Pen', type: 'drops' }
    , { to: 'Alleyways', type: 'upgrades' }
    ]
  }
  // #endregion
  // #region Tier 2
, { id: 5
  , name: 'Arid Lake'
  , tier: 2
  , numberInTier: 1
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Peninsula', type: 'upgrades' }
    ]
  }
, { id: 6
  , name: 'Desert'
  , tier: 2
  , numberInTier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Iceberg', type: 'upgrades' }
    ]
  }
, { id: 7
  , name: 'Flooded Mine'
  , tier: 2
  , numberInTier: 3
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Cells', type: 'drops' }
    , { to: 'Excavation', type: 'upgrades' }
    , { to: 'Leyline', type: 'drops' }
    ]
  }
, { id: 8
  , name: 'Marshes'
  , tier: 2
  , numberInTier: 4
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Springs', type: 'upgrades' }
    , { to: 'Burial Chambers', type: 'drops' }
    ]
  }
, { id: 9
  , name: 'Pen'
  , tier: 2
  , numberInTier: 5
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Cage', type: 'upgrades' }
    ]
  }
, { id: 10
  , name: 'Alleyways'
  , tier: 2
  , numberInTier: 6
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Port', type: 'drops' }
    , { to: 'Cage', type: 'drops' }
    , { to: 'Arcade', type: 'upgrades' }
    ]
  }
  // #endregion
  // #region Tier 3
, { id: 11
  , name: 'Peninsula'
  , tier: 3
  , numberInTier: 1
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Strand', type: 'drops' }
    , { to: 'Canyon', type: 'upgrades' }
    ]
  }
, { id: 12
  , name: 'Iceberg'
  , tier: 3
  , numberInTier: 2
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Strand', type: 'upgrades' }
    ]
  }
, { id: 13
  , name: 'Cells'
  , tier: 3
  , numberInTier: 3
  , level: 70
  , completed: false
  , owned: false
   , edges:
    [ { to: 'Grotto', type: 'upgrades' }
    ]
  }
, { id: 14
  , name: 'Excavation'
  , tier: 3
  , numberInTier: 4
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Grotto', type: 'drops' }
    , { to: 'Gorge', type: 'upgrades' }
    ]
  }
, { id: 15
  , name: 'Leyline'
  , tier: 3
  , numberInTier: 5
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Gorge', type: 'drops' }
    , { to: 'Volcano', type: 'upgrades' }
    ]
  }
, { id: 16
  , name: 'Burial Chambers'
  , tier: 3
  , numberInTier: 6
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Relic Chambers', type: 'upgrades' }
    ]
  }
, { id: 17
  , name: 'Springs'
  , tier: 3
  , numberInTier: 7
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Chateau', type: 'upgrades' }
    ]
  }
, { id: 18
  , name: 'Cage'
  , tier: 3
  , numberInTier: 8
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Courthouse', type: 'drops' }
    , { to: 'City Square', type: 'upgrades' }
    ]
  }
, { id: 19
  , name: 'Arcade'
  , tier: 3
  , numberInTier: 9
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Courthouse', type: 'upgrades' }
    ]
  }
, { id: 20
  , name: 'Port'
  , tier: 3
  , numberInTier: 10
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Lighthouse', type: 'upgrades' }
    ]
  }
  // #endregion
  // #region Tier 4
, { id: 21
  , name: 'Canyon'
  , tier: 4
  , numberInTier: 1
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Spider Lair', type: 'upgrades' }
    ]
  }
, { id: 22
  , name: 'Strand'
  , tier: 4
  , numberInTier: 2
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Ancient City', type: 'upgrades' }
    , { to: 'Whakawairua Tuahu', type: 'drops' }
    ]
  }
, { id: 23
  , name: 'Grotto'
  , tier: 4
  , numberInTier: 3
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Maze', type: 'upgrades' }
    , { to: 'Channel', type: 'drops' }
    ]
  }
, { id: 24
  , name: 'Gorge'
  , tier: 4
  , numberInTier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Channel', type: 'upgrades' }
    , { to: 'Sulphur Vents', type: 'drops' }
    ]
  }
, { id: 25
  , name: 'Volcano'
  , tier: 4
  , numberInTier: 5
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Sulphur Vents', type: 'upgrades' }
    ]
  }
, { id: 26
  , name: 'Relic Chambers'
  , tier: 4
  , numberInTier: 6
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Barrows', type: 'upgrades' }
    ]
  }
, { id: 27
  , name: 'Chateau'
  , tier: 4
  , numberInTier: 7
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Toxic Sewer', type: 'upgrades' }
    ]
  }
, { id: 28
  , name: 'City Square'
  , tier: 4
  , numberInTier: 8
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Conservatory', type: 'upgrades' }
    , { to: 'Haunted Mansion', type: 'drops' }
    ]
  }
, { id: 29
  , name: 'Courthouse'
  , tier: 4
  , numberInTier: 9
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Haunted Mansion', type: 'upgrades' }
    , { to: 'Ivory Temple', type: 'drops' }
    ]
  }
, { id: 30
  , name: 'Lighthouse'
  , tier: 4
  , numberInTier: 10
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Ivory Temple', type: 'upgrades' }
    ]
  }
  // #endregion
  // #region Tier 5
, { id: 31
  , name: 'Spider Lair'
  , tier: 5
  , numberInTier: 1
  , level: 72
  , completed: false
  , owned: false
  }
, { id: 32
  , name: 'Ancient City'
  , tier: 5
  , numberInTier: 2
  , level: 72
  , completed: false
  , owned: false
  }
, { id: 33
  , name: 'Whakawairua Tuahu'
  , tier: 5
  , numberInTier: 3
  , level: 72
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 34
  , name: 'Maze'
  , tier: 5
  , numberInTier: 4
  , level: 72
  , completed: false
  , owned: false
  }
, { id: 35
  , name: 'Channel'
  , tier: 5
  , numberInTier: 5
  , level: 72
  , completed: false
  , owned: false
  }
, { id: 36
  , name: 'Sulphur Vents'
  , tier: 5
  , numberInTier: 6
  , level: 72
  , completed: false
  , owned: false
  }
, { id: 37
  , name: 'Barrows'
  , tier: 5
  , numberInTier: 7
  , level: 72
  , completed: false
  , owned: false
  }
, { id: 38
  , name: 'Toxic Sewer'
  , tier: 5
  , numberInTier: 8
  , level: 72
  , completed: false
  , owned: false
  }
, { id: 39
  , name: 'Conservatory'
  , tier: 5
  , numberInTier: 9
  , level: 72
  , completed: false
  , owned: false
  }
, { id: 40
  , name: 'Haunted Mansion'
  , tier: 5
  , numberInTier: 10
  , level: 72
  , completed: false
  , owned: false
  }
, { id: 41
  , name: 'Ivory Temple'
  , tier: 5
  , numberInTier: 11
  , level: 72
  , completed: false
  , owned: false
  }
  // #endregion
]
