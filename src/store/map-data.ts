export const version = '3.6.1'

export const maps: App.Map[] = [
  // #region Tier 1
  { id: 1
  , name: `Cursed Crypt`
  , tier: 1
  , level: 68
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Dungeon` }
    , { to: `Cursed Crypt`}
    , { to: `The Coward's Trial` }
    ]
  }
, { id: 2
  , name: `The Coward's Trial`
  , tier: 1
  , level: 68
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 3
  , name: `Alleyways`
  , tier: 1
  , level: 68
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Excavation` }
    , { to: `Haunted Mansion` }
    ]
  }
, { id: 4
  , name: `Fungal Hollow`
  , tier: 1
  , level: 68
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Peninsula` }
    , { to: `Strand` }
    ]
  }
, { id: 5
  , name: `Iceberg`
  , tier: 1
  , level: 68
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Ramparts` }
    ]
  }
  // #endregion
  // #region Tier 2
, { id: 6
  , name: `Dungeon`
  , tier: 2
  , level: 69
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Arid Lake` }
    , { to: `Leyline` }
    , { to: `Barrows` }
    ]
  }
, { id: 7
  , name: `Excavation`
  , tier: 2
  , level: 69
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Maze` }
    ]
  }
, { id: 8
  , name: `Haunted Mansion`
  , tier: 2
  , level: 69
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Desert` }
    ]
  }
, { id: 9
  , name: `Peninsula`
  , tier: 2
  , level: 69
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Spider Lair` }
    ]
  }
, { id: 10
  , name: `Strand`
  , tier: 2
  , level: 69
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Channel` }
    , { to: `Whakawairua Tuahu` }
    ]
  }
, { id: 900
  , name: `Whakawairua Tuahu`
  , tier: 2
  , level: 69
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 11
  , name: `Ramparts`
  , tier: 2
  , level: 69
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Jungle Valley` }
    , { to: `Ashen Wood` }
    , { to: `Atoll` }
    ]
  }
  // #endregion
  // #region Tier 3
, { id: 12
  , name: `Arid Lake`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Beach` }
    ]
  }
, { id: 13
  , name: `Leyline`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Port` }
    ]
  }
, { id: 14
  , name: `Barrows`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Port` }
    , { to: `Arcade` }
    ]
  }
, { id: 16
  , name: `Maze`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Mausoleum` }
    , { to: `Doryani's Machinarium` }
    ]
  }
, { id: 902
  , name: `Doryani's Machinarium`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 17
  , name: `Desert`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Flooded Mine` }
    ]
  }
, { id: 18
  , name: `Spider Lair`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Lookout` }
    , { to: `Underground Sea` }
    ]
  }
, { id: 19
  , name: `Channel`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Underground Sea` }
    , { to: `Armory` }
    ]
  }
, { id: 20
  , name: `Jungle Valley`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `City Square` }
    ]
  }
, { id: 21
  , name: `Ashen Wood`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `City Square` }
    ]
  }
, { id: 23
  , name: `Atoll`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Glacier` }
    , { to: `Maelström of Chaos` }
    ]
  }
, { id: 901
  , name: `Maelström of Chaos`
  , tier: 3
  , level: 70
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
  // #endregion
  // #region Tier 4
, { id: 24
  , name: `Beach`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Ancient City` }
    ]
  }
, { id: 25
  , name: `Port`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Pen` }
    ]
  }
, { id: 26
  , name: `Arcade`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Pen` }
    ]
  }
, { id: 27
  , name: `Mausoleum`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Cage` }
    , { to: `Grotto` }
    ]
  }
, { id: 28
  , name: `Flooded Mine`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Grotto` }
    , { to: `Sulphur Vents` }
    ]
  }
, { id: 30
  , name: `Lookout`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Marshes` }
    ]
  }
, { id: 31
  , name: `Underground Sea`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Marshes` }
    , { to: `Graveyard` }
    , { to: `Oba's Cursed Trove` }
    ]
  }
, { id: 904
  , name: `Oba's Cursed Trove`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 32
  , name: `Armory`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Graveyard` }
    ]
  }
, { id: 33
  , name: `City Square`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Crater` }
    , { to: `Courtyard` }
    ]
  }
, { id: 34
  , name: `Glacier`
  , tier: 4
  , level: 71
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Courtyard` }
    , { to: `Thicket` }
    ]
  }
  // #endregion
  // #region Tier 5
, { id: 35
  , name: `Ancient City`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Sepulchre` }
    ]
  }
, { id: 37
  , name: `Pen`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Sepulchre` }
    , { to: `Lair` }
    , { to: `Vault` }
    ]
  }
, { id: 38
  , name: `Cage`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Burial Chambers` }
    , { to: `Necropolis` }
    ]
  }
, { id: 39
  , name: `Grotto`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Necropolis` }
    ]
  }
, { id: 40
  , name: `Sulphur Vents`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Overgrown Shrine` }
    ]
  }
, { id: 42
  , name: `Marshes`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Residence` }
    ]
  }
, { id: 43
  , name: `Graveyard`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Geode` }
    ]
  }
, { id: 44
  , name: `Crater`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Primordial Pool` }
    , { to: `Pit` }
    ]
  }
, { id: 45
  , name: `Courtyard`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Pit` }
    , { to: `The Vinktar Square` }
    ]
  }
, { id: 905
  , name: `The Vinktar Square`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 47
  , name: `Thicket`
  , tier: 5
  , level: 72
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Pit` }
    , { to: `Promenade` }
    ]
  }
  // #endregion
  // #region Tier 6
, { id: 48
  , name: `Sepulchre`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Fields` }
    , { to: `Ghetto` }
    ]
  }
, { id: 49
  , name: `Lair`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Ghetto` }
    , { to: `Bone Crypt` }
    ]
  }
, { id: 50
  , name: `Vault`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Bone Crypt` }
    ]
  }
, { id: 51
  , name: `Burial Chambers`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Mineral Pools` }
    ]
  }
, { id: 52
  , name: `Necropolis`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Mineral Pools` }
    , { to: `Mud Geyser` }
    , { to: `Death and Taxes` }
    ]
  }
, { id: 907
  , name: `Death and Taxes`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 53
  , name: `Overgrown Shrine`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Mud Geyser` }
    , { to: `Bazaar` }
    , { to: `Acton's Nightmare` }
    ]
  }
, { id: 908
  , name: `Acton's Nightmare`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 54
  , name: `Residence`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Shore` }
    ]
  }
, { id: 55
  , name: `Geode`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Shore` }
    , { to: `Pier` }
    ]
  }
, { id: 57
  , name: `Primordial Pool`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Estuary` }
    , { to: `Spider Forest` }
    ]
  }
, { id: 58
  , name: `Pit`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Spider Forest` }
    , { to: `Academy` }
    ]
  }
, { id: 59
  , name: `Promenade`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Academy` }
    , { to: `Hall of Grandmasters` }
    ]
  }
, { id: 906
  , name: `Hall of Grandmasters`
  , tier: 6
  , level: 73
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
  // #endregion
  // #region Tier 7
, { id: 60
  , name: `Fields`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Dunes` }
    ]
  }
, { id: 61
  , name: `Ghetto`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Lighthouse` }
    , { to: `Orchard` }
    ]
  }
, { id: 62
  , name: `Bone Crypt`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Orchard` }
    , { to: `Olmec's Sanctum` }
    ]
  }
, { id: 909
  , name: `Olmec's Sanctum`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 63
  , name: `Mineral Pools`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Conservatory` }
    ]
  }
, { id: 64
  , name: `Mud Geyser`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Conservatory` }
    ]
  }
, { id: 66
  , name: `Bazaar`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Phantasmagoria` }
    ]
  }
, { id: 67
  , name: `Estuary`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Volcano` }
    , { to: `Cemetary` }
    ]
  }
, { id: 68
  , name: `Spider Forest`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Cemetary` }
    , { to: `Lava Chambers` }
    ]
  }
, { id: 601
  , name: `Academy`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Lava Chambers` }
    ]
  }
, { id: 69
  , name: `Shore`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Waterways` }
    , { to: `Mao Kun` }
    ]
  }
, { id: 910
  , name: `Mao Kun`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 70
  , name: `Pier`
  , tier: 7
  , level: 74
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Toxic Sewers` }
    ]
  }
  // #endregion
  // #region Tier 8
, { id: 73
  , name: `Dunes`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Underground River` }
    , { to: `Laboratory` }
    , { to: `Pillars of Arun` }
    ]
  }
, { id: 911
  , name: `Pillars of Arun`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 74
  , name: `Lighthouse`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Canyon` }
    ]
  }
, { id: 75
  , name: `Orchard`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Canyon` }
    ]
  }
, { id: 76
  , name: `Conservatory`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Vaal Pyramid` }
    ]
  }
, { id: 78
  , name: `Phantasmagoria`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Tropical Island` }
    , { to: `Coral Ruins` }
    ]
  }
, { id: 79
  , name: `Volcano`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Coral Ruins` }
    , { to: `Museum` }
    ]
  }
, { id: 81
  , name: `Cemetary`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Museum` }
    , { to: `Castle Ruins` }
    , { to: `Hallowed Ground` }
    ]
  }
, { id: 912
  , name: `Hallowed Ground`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 82
  , name: `Lava Chambers`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Castle Ruins` }
    ]
  }
, { id: 83
  , name: `Waterways`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Temple` }
    ]
  }
, { id: 84
  , name: `Toxic Sewers`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Villa` }
    ]
  }
, { id: 85
  , name: `Arachnid Tomb`
  , tier: 8
  , level: 75
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Villa` }
    , { to: `Cells` }
    , { to: `Underground River` }
    ]
  }
  // #endregion
  // #region Tier 9
, { id: 86
  , name: `Underground River`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Overgrown Ruin` }
    , { to: `Caer Blaidd, Wolfpack's Den` }
    ]
  }
, { id: 916
  , name: `Caer Blaidd, Wolfpack's Den`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 87
  , name: `Laboratory`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Overgrown Ruin` }
    , { to: `Plateau` }
    ]
  }
, { id: 88
  , name: `Canyon`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Plateau` }
    , { to: `Moon Temple` }
    ]
  }
, { id: 90
  , name: `Vaal Pyramid`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Mesa` }
    , { to: `Vaults of Atziri` }
    ]
  }
, { id: 913
  , name: `Vaults of Atziri`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 91
  , name: `Tropical Island`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Mesa` }
    , { to: `Scriptorium` }
    ]
  }
, { id: 95
  , name: `Coral Ruins`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Factory` }
    ]
  }
, { id: 96
  , name: `Museum`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Factory` }
    , { to: `Relic Chambers` }
    , { to: `The Putrid Cloister` }
    ]
  }
, { id: 914
  , name: `The Putrid Cloister`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 98
  , name: `Castle Ruins`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Relic Chambers` }
    ]
  }
, { id: 93
  , name: `Temple`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Arachnid Nest` }
    , { to: `Chateau` }
    , { to: `Poorjoy's Asylum` }
    ]
  }
, { id: 915
  , name: `Poorjoy's Asylum`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 94
  , name: `Villa`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Chateau` }
    , { to: `Wharf` }
    ]
  }
, { id: 602
  , name: `Cells`
  , tier: 9
  , level: 76
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Wharf` }
    ]
  }
  // #endregion
  // #region Tier 10
, { id: 100
  , name: `Overgrown Ruin`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Desert Springs` }
    ]
  }
, { id: 101
  , name: `Plateau`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Desert Springs` }
    ]
  }
, { id: 102
  , name: `Moon Temple`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Desert Springs` }
    , { to: `Palace` }
    , { to: `The Twilight Temple` }
    ]
  }
, { id: 917
  , name: `The Twilight Temple`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 103
  , name: `Mesa`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Wasteland` }
    , { to: `Arsenal` }
    , { to: `Coves` }
    ]
  }
, { id: 104
  , name: `Scriptorium`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Coves` }
    ]
  }
, { id: 105
  , name: `Arachnid Nest`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Bog` }
    , { to: `Basilica` }
    ]
  }
, { id: 106
  , name: `Chateau`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Basilica` }
    , { to: `Infested` }
    , { to: `The Perandus Manor` }
    ]
  }
, { id: 918
  , name: `The Perandus Manor`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , unique: true
  }
, { id: 107
  , name: `Wharf`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Infested` }
    ]
  }
, { id: 108
  , name: `Factory`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Dig` }
    , { to: `Arena` }
    ]
  }
, { id: 109
  , name: `Relic Chambers`
  , tier: 10
  , level: 77
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Arena` }
    ]
  }
  // #endregion
  // #region Tier 11
, { id: 111
  , name: `Desert Springs`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Crystal Ore` }
    , { to: `Reef` }
    ]
  }
, { id: 112
  , name: `Palace`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Reef` }
    ]
  }
, { id: 113
  , name: `Wasteland`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Courthouse` }
    ]
  }
, { id: 114
  , name: `Arsenal`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Terrace` }
    ]
  }
, { id: 115
  , name: `Coves`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Terrace` }
    ]
  }
, { id: 116
  , name: `Bog`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Malformation` }
    ]
  }
, { id: 117
  , name: `Bog`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Precinct` }
    , { to: `Carcass` }
    ]
  }
, { id: 118
  , name: `Basilica`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Carcass` }
    ]
  }
, { id: 119
  , name: `Infested`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Malformation` }
    ]
  }
, { id: 121
  , name: `Dig`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Acid Caverns` }
    ]
  }
, { id: 600
  , name: `Arena`
  , tier: 11
  , level: 78
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Acid Caverns` }
    , { to: `Sunken City` }
    ]
  }
  // #endregion
  // #region Tier 12
, { id: 122
  , name: `Crystal Ore`
  , tier: 12
  , level: 79
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Gardens` }
    , { to: `Siege` }
    ]
  }
, { id: 123
  , name: `Reef`
  , tier: 12
  , level: 79
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Siege` }
    ]
  }
, { id: 124
  , name: `Courthouse`
  , tier: 12
  , level: 79
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Colonnade` }
    ]
  }
, { id: 126
  , name: `Terrace`
  , tier: 12
  , level: 79
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Colonnade` }
    , { to: `Tower` }
    ]
  }
, { id: 127
  , name: `Precinct`
  , tier: 12
  , level: 79
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Colosseum` }
    ]
  }
, { id: 128
  , name: `Carcass`
  , tier: 12
  , level: 79
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Colosseum` }
    ]
  }
, { id: 129
  , name: `Malformation`
  , tier: 12
  , level: 79
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Shipyard` }
    ]
  }
, { id: 131
  , name: `Acid Caverns`
  , tier: 12
  , level: 79
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Summit` }
    , { to: `Crimson Temple` }
    ]
  }
, { id: 132
  , name: `Sunken City`
  , tier: 12
  , level: 79
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Crimson Temple` }
    , { to: `Park` }
    ]
  }
  // #endregion
  // #region Tier 13
, { id: 133
  , name: `Gardens`
  , tier: 13
  , level: 80
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Plaza` }
    ]
  }
, { id: 134
  , name: `Siege`
  , tier: 13
  , level: 80
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Plaza` }
    ]
  }
, { id: 135
  , name: `Colonnade`
  , tier: 13
  , level: 80
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Primordial Blocks` }
    , { to: `Racecourse` }
    ]
  }
, { id: 136
  , name: `Tower`
  , tier: 13
  , level: 80
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Racecourse` }
    ]
  }
, { id: 137
  , name: `Colosseum`
  , tier: 13
  , level: 80
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Belfry` }
    ]
  }
, { id: 138
  , name: `Shipyard`
  , tier: 13
  , level: 80
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Belfry` }
    , { to: `Shrine` }
    ]
  }
, { id: 139
  , name: `Summit`
  , tier: 13
  , level: 80
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Caldera` }
    ]
  }
, { id: 140
  , name: `Crimson Temple`
  , tier: 13
  , level: 80
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Caldera` }
    , { to: `Ivory Temple` }
    ]
  }
, { id: 141
  , name: `Park`
  , tier: 13
  , level: 80
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Ivory Temple` }
    ]
  }
  // #endregion
  // #region Tier 14
 , { id: 142
  , name: `Plaza`
  , tier: 14
  , level: 81
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Defiled Cathedral` }
    ]
  }
, { id: 143
  , name: `Primordial Blocks`
  , tier: 14
  , level: 81
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Lava Lake` }
    ]
  }
, { id: 144
  , name: `Racecourse`
  , tier: 14
  , level: 81
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Lava Lake` }
    ]
  }
, { id: 145
  , name: `Belfry`
  , tier: 14
  , level: 81
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Waste Pool` }
    ]
  }
, { id: 146
  , name: `Shrine`
  , tier: 14
  , level: 81
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Waste Pool` }
    ]
  }
, { id: 147
  , name: `Caldera`
  , tier: 14
  , level: 81
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Dark Forest` }
    ]
  }
, { id: 148
  , name: `Ivory Temple`
  , tier: 14
  , level: 81
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Core` }
    ]
  }
  // #endregion
  // #region Tier 15
, { id: 149
  , name: `Defiled Cathedral`
  , tier: 15
  , level: 82
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Lair of the Hydra` }
    ]
  }
, { id: 150
  , name: `Lava Lake`
  , tier: 15
  , level: 82
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Pit of the Chimera` }
    ]
  }
, { id: 151
  , name: `Dark Forest`
  , tier: 15
  , level: 82
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Maze of the Minotaur` }
    ]
  }
, { id: 152
  , name: `Core`
  , tier: 15
  , level: 82
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Maze of the Minotaur` }
    ]
  }
, { id: 153
  , name: `Waste Pool`
  , tier: 15
  , level: 82
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [ { to: `Forge of the Phoenix` }
    ]
  }
  // #endregion
  // #region Tier 16
, { id: 154
  , name: `Lair of the Hydra`
  , tier: 16
  , level: 83
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [
    ]
  }
, { id: 155
  , name: `Pit of the Chimera`
  , tier: 16
  , level: 83
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [
    ]
  }
, { id: 156
  , name: `Maze of the Minotaur`
  , tier: 16
  , level: 83
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [
    ]
  }
, { id: 157
  , name: `Forge of the Phoenix`
  , tier: 16
  , level: 83
  , completed: false
  , unlocked: false
  , owned: false
  , shaped: false
  , edges:
    [
    ]
  }
  // #endregion
]
