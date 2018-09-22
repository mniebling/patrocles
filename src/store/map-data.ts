export const maps: App.Map[] = [
  // #region Tier 1
  { id: 1
  , name: 'Beach'
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Arid Lake', type: 'drops' }
    , { to: 'Desert', type: 'upgrades' }
    ]
  }
, { id: 4
  , name: 'Lookout'
  , tier: 1
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Pen', type: 'drops' }
    , { to: 'Alleyways', type: 'upgrades' }
    ]
  }
, { id: 2
  , name: 'Dungeon'
  , tier: 1
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
  , level: 68
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Marshes', type: 'upgrades' }
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
    [ { to: 'Peninsula', type: 'upgrades' }
    ]
  }
, { id: 6
  , name: 'Desert'
  , tier: 2
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Iceberg', type: 'upgrades' }
    ]
  }
, { id: 9
  , name: 'Pen'
  , tier: 2
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
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Port', type: 'drops' }
    , { to: 'Cage', type: 'drops' }
    , { to: 'Arcade', type: 'upgrades' }
    ]
  }
, { id: 7
  , name: 'Flooded Mine'
  , tier: 2
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
  , level: 69
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Springs', type: 'upgrades' }
    , { to: 'Burial Chambers', type: 'drops' }
    ]
  }
  // #endregion
  // #region Tier 3
, { id: 11
  , name: 'Peninsula'
  , tier: 3
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
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Strand', type: 'upgrades' }
    ]
  }
, { id: 18
  , name: 'Cage'
  , tier: 3
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
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Lighthouse', type: 'upgrades' }
    ]
  }
, { id: 13
  , name: 'Cells'
  , tier: 3
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
  , level: 70
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Chateau', type: 'upgrades' }
    ]
  }
  // #endregion
  // #region Tier 4
, { id: 21
  , name: 'Canyon'
  , tier: 4
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
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Ancient City', type: 'upgrades' }
    , { to: 'Whakawairua Tuahu', type: 'drops' }
    ]
  }
, { id: 33
  , name: 'Whakawairua Tuahu'
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 28
  , name: 'City Square'
  , tier: 4
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
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Ivory Temple', type: 'upgrades' }
    ]
  }
, { id: 23
  , name: 'Grotto'
  , tier: 4
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
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Toxic Sewer', type: 'upgrades' }
    ]
  }
  // #endregion
  // #region Tier 5
, { id: 31
  , name: 'Spider Lair'
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Fields', type: 'drops' }
    , { to: 'Jungle Valley', type: 'upgrades' }
    , { to: 'Thicket', type: 'drops' }
    ]
  }
, { id: 32
  , name: 'Ancient City'
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Fields', type: 'upgrades' }
    ]
  }
, { id: 39
  , name: 'Conservatory'
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Academy', type: 'upgrades' }
    ]
  }
, { id: 40
  , name: 'Haunted Mansion'
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Wharf', type: 'upgrades' }
    , { to: 'Academy', type: 'drops' }
    ]
  }
, { id: 41
  , name: 'Ivory Temple'
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Thicket', type: 'upgrades' }
    , { to: 'Wharf', type: 'drops' }
    ]
  }
, { id: 34
  , name: 'Maze'
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Underground Sea', type: 'upgrades' }
    ]
  }
, { id: 35
  , name: 'Channel'
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Underground Sea', type: 'drops' }
    , { to: 'Atoll', type: 'upgrades' }
    ]
  }
, { id: 36
  , name: 'Sulphur Vents'
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Atoll', type: 'drops' }
    , { to: 'Ashen Wood', type: 'upgrades' }
    ]
  }
, { id: 37
  , name: 'Barrows'
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Mausoleum', type: 'upgrades' }
    , { to: 'Ashen Wood', type: 'drops' }
    , { to: 'Cemetery', type: 'drops' }
    ]
  }
, { id: 38
  , name: 'Toxic Sewer'
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Cemetery', type: 'upgrades' }
    , { to: 'Phantasmagoria', type: 'drops' }
    ]
  }
  // #endregion
  // #region Tier 6
, { id: 42
  , name: 'Fields'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Residence', type: 'upgrades' }
    ]
  }
, { id: 43
  , name: 'Jungle Valley'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Coral Ruins', type: 'upgrades' }
    ]
  }
, { id: 44
  , name: 'Thicket'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Arachnid Nest', type: 'upgrades' }
    ]
  }
, { id: 51
  , name: 'Academy'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Tribunal', type: 'upgrades' }
    , { to: 'Gardens', type: 'drops' }
    ]
  }
, { id: 52
  , name: 'Wharf'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Bazaar', type: 'upgrades' }
    ]
  }
, { id: 45
  , name: 'Underground Sea'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Underground River', type: 'upgrades' }
    , { to: 'Ramparts', type: 'drops' }
    ]
  }
, { id: 46
  , name: 'Atoll'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Ramparts', type: 'upgrades' }
    , { to: 'Maelström of Chaos', type: 'drops' }
    ]
  }
, { id: 58
  , name: 'Maelström of Chaos'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 47
  , name: 'Ashen Wood'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Lava Chamber', type: 'upgrades' }
    ]
  }
, { id: 48
  , name: 'Mausoleum'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Lava Chamber', type: 'upgrades' }
    ]
  }
, { id: 49
  , name: 'Cemetery'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Bone Crypt', type: 'upgrades' }
    , { to: 'Hallowed Ground', type: 'drops' }
    ]
  }
, { id: 61
  , name: 'Hallowed Ground'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 50
  , name: 'Phantasmagoria'
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Dunes', type: 'upgrades' }
    , { to: 'Bone Crypt', type: 'drops' }
    ]
  }
  // #endregion
  // #region Tier 7
, { id: 53
  , name: 'Residence'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Courtyard', type: 'upgrades' }
    ]
  }
, { id: 54
  , name: 'Coral Ruins'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Infested Valley', type: 'upgrades' }
    ]
  }
, { id: 55
  , name: 'Arachnid Nest'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Infested Valley', type: 'upgrades' }
    ]
  }
, { id: 63
  , name: 'Tribunal'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Vaal Pyramid', type: 'upgrades' }
    ]
  }
, { id: 64
  , name: 'Gardens'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Tropical Island', type: 'upgrades' }
    ]
  }
, { id: 65
  , name: 'Bazaar'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Laboratory', type: 'upgrades' }
    ]
  }
, { id: 56
  , name: 'Underground River'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Geode', type: 'upgrades' }
    , { to: 'Mineral Pools', type: 'drops' }
    , { to: `Caer Blaidd, Wolfpack's Den`, type: 'drops' }
    ]
  }
, { id: 71
  , name: `Caer Blaidd, Wolfpack's Den`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 57
  , name: 'Ramparts'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Armoury', type: 'upgrades' }
    ]
  }
, { id: 59
  , name: 'Lava Chamber'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Armoury', type: 'drops' }
    , { to: 'Overgrown Ruin', type: 'upgrades' }
    ]
  }
, { id: 60
  , name: 'Bone Crypt'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Olmec's Sanctum`, type: 'drops' }
    , { to: 'Mud Geyser', type: 'upgrades' }
    ]
  }
, { id: 76
  , name: `Olmec's Sanctum`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 62
  , name: 'Dunes'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: 'Shore', type: 'upgrades' }
    , { to: 'Mud Geyser', type: 'drops' }
    , { to: 'Pillars of Arun', type: 'drops' }
    ]
  }
, { id: 79
  , name: 'Pillars of Arun'
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , unique: true
  }
  // #endregion
  // #region Tier 8
, { id: 66
  , name: 'Courtyard'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
, { id: 67
  , name: 'Infested Valley'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
, { id: 68
  , name: 'Vaal Pyramid'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
, { id: 69
  , name: 'Tropical Island'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
, { id: 70
  , name: 'Laboratory'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
, { id: 72
  , name: 'Geode'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
, { id: 73
  , name: 'Mineral Pools'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
, { id: 74
  , name: 'Armoury'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
, { id: 75
  , name: 'Overgrown Ruin'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
, { id: 77
  , name: 'Mud Geyser'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
, { id: 78
  , name: 'Shore'
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  }
  // #endregion
]
