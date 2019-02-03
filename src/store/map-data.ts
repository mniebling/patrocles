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
    [ { to: `Underground Sea` }
    , { to: `Jungle Valley` }
    ]
  }
, { id: 25
  , name: `Lighthouse`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: `Jungle Valley` }
    ]
  }
, { id: 26
  , name: `Crater`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: `Jungle Valley` }
    , { to: `Mausoleum` }
    ]
  }
, { id: 27
  , name: `Glacier`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: `Alleyways` }
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
    , { to: `Maze` }
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
    [ { to: `Maze` }
    , { to: `Port` }
    ]
  }
, { id: 31
  , name: `Lookout`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: `Residence` }
    ]
  }
, { id: 32
  , name: `Courtyard`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: `Gardens` }
    ]
  }
, { id: 33
  , name: `Barrows`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: `Vaal Pyramid` }
    ]
  }
, { id: 34
  , name: `Beach`
  , tier: 4
  , level: 71
  , completed: false
  , owned: false
  , edges:
    [ { to: `Vaal Pyramid` }
    , { to: `City Square` }
    ]
  }
  // #endregion
  // #region Tier 5
, { id: 35
  , name: `Underground Sea`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: `Oba's Cursed Trove` }
    , { to: `Volcano` }
    ]
  }
, { id: 36
  , name: `Oba's Cursed Trove`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 37
  , name: `Jungle Valley`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: `Precinct` }
    ]
  }
, { id: 38
  , name: `Mausoleum`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: `Precinct` }
    , { to: `Sulphur Vents` }
    ]
  }
, { id: 39
  , name: `Alleyways`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: `Ashen Wood` }
    ]
  }
, { id: 40
  , name: `Maze`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: `Academy` }
    , { to: `Doryani's Machinarium`}
    ]
  }
, { id: 41
  , name: `Doryani's Machinarium`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 42
  , name: `Port`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: `Academy` }
    , { to: `Haunted Mansion` }
    ]
  }
, { id: 43
  , name: `Residence`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: `Phantasmagoria` }
    , { to: `Temple` }
    ]
  }
, { id: 44
  , name: `Gardens`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: `Temple` }
    , { to: `Wharf` }
    ]
  }
, { id: 45
  , name: `Vaal Pyramid`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: `Vaults of Atziri` }
    , { to: `Canyon` }
    ]
  }
, { id: 46
  , name: `Vaults of Atziri`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 47
  , name: `City Square`
  , tier: 5
  , level: 72
  , completed: false
  , owned: false
  , edges:
    [ { to: `Fields` }
    ]
  }
  // #endregion
  // #region Tier 6
, { id: 48
  , name: `Volcano`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Lava Chamber` }
    ]
  }
, { id: 49
  , name: `Precinct`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Conservatory` }
    , { to: `Geode` }
    ]
  }
, { id: 50
  , name: `Sulphur Vents`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Geode` }
    ]
  }
, { id: 51
  , name: `Ashen Wood`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Primordial Pool` }
    ]
  }
, { id: 52
  , name: `Academy`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Underground River` }
    ]
  }
, { id: 53
  , name: `Haunted Mansion`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Underground River` }
    , { to: `Cells` }
    ]
  }
, { id: 54
  , name: `Phantasmagoria`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Bazaar` }
    , { to: `Arcade` }
    ]
  }
, { id: 55
  , name: `Temple`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Poorjoy's Asylum` }
    , { to: `Arcade` }
    , { to: `Toxic Sewer` }
    ]
  }
, { id: 56
  , name: `Poorjoy's Asylum`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 57
  , name: `Wharf`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Toxic Sewer` }
    ]
  }
, { id: 58
  , name: `Canyon`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Ghetto` }
    ]
  }
, { id: 59
  , name: `Fields`
  , tier: 6
  , level: 73
  , completed: false
  , owned: false
  , edges:
    [ { to: `Dunes` }
    ]
  }
  // #endregion
  // #region Tier 7
, { id: 60
  , name: `Lava Chamber`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Overgrown Ruin` }
    ]
  }
, { id: 61
  , name: `Conservatory`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Sepulchre` }
    ]
  }
, { id: 62
  , name: `Geode`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Mineral Pools` }
    ]
  }
, { id: 63
  , name: `Primordial Pool`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Promenade` }
    ]
  }
, { id: 64
  , name: `Underground River`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Caer Blaidd, Wolfpack's Den` }
    , { to: `Laboratory` }
    ]
  }
, { id: 65
  , name: `Caer Blaidd, Wolfpack's Den`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 66
  , name: `Cells`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Laboratory` }
    ]
  }
, { id: 67
  , name: `Bazaar`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Shore` }
    , { to: `Arachnid Nest` }
    ]
  }
, { id: 68
  , name: `Arcade`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Arachnid Nest` }
    ]
  }
, { id: 69
  , name: `Toxic Sewer`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Mud Geyser` }
    ]
  }
, { id: 70
  , name: `Ghetto`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Wasteland` }
    ]
  }
, { id: 71
  , name: `Dunes`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , edges:
    [ { to: `Pillars of Arun` }
    , { to: `Orchard` }
    , { to: `Infested Valley` }
    ]
  }
, { id: 72
  , name: `Pillars of Arun`
  , tier: 7
  , level: 74
  , completed: false
  , owned: false
  , unique: true
  }
  // #endregion
  // #region Tier 8
, { id: 73
  , name: `Overgrown Ruin`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Waterways` }
    ]
  }
, { id: 74
  , name: `Sepulchre`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Arena` }
    ]
  }
, { id: 75
  , name: `Mineral Pools`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Museum` }
    ]
  }
, { id: 76
  , name: `Promenade`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Hall of Grandmasters` }
    , { to: `Vault` }
    ]
  }
, { id: 77
  , name: `Hall of Grandmasters`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 78
  , name: `Laboratory`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Moon Temple` }
    ]
  }
, { id: 79
  , name: `Shore`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Mao Kun` }
    , { to: `Relic Chambers` }
    ]
  }
, { id: 80
  , name: `Mao Kun`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 81
  , name: `Arachnid Nest`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Ancient City` }
    ]
  }
, { id: 82
  , name: `Mud Geyser`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Scriptorium` }
    ]
  }
, { id: 83
  , name: `Wasteland`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Cemetary` }
    ]
  }
, { id: 84
  , name: `Orchard`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Waste Pool` }
    ]
  }
, { id: 85
  , name: `Infested Valley`
  , tier: 8
  , level: 75
  , completed: false
  , owned: false
  , edges:
    [ { to: `Tropical Island` }
    ]
  }
  // #endregion
  // #region Tier 9
, { id: 86
  , name: `Waterways`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `Belfry` }
    ]
  }
, { id: 87
  , name: `Arena`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `Leyline` }
    , { to: `Coral Ruins` }
    ]
  }
, { id: 88
  , name: `Museum`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `The Putrid Cloister` }
    , { to: `Coral Ruins` }
    ]
  }
, { id: 89
  , name: `The Putrid Cloister`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 90
  , name: `Vault`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `Coves` }
    ]
  }
, { id: 91
  , name: `Moon Temple`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `The Twilight Temple` }
    , { to: `Pit` }
    ]
  }
, { id: 92
  , name: `The Twilight Temple`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 93
  , name: `Relic Chambers`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `Plaza` }
    ]
  }
, { id: 94
  , name: `Ancient City`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `Plaza` }
    ]
  }
, { id: 95
  , name: `Scriptorium`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `Plateau` }
    ]
  }
, { id: 96
  , name: `Cemetary`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `Hallowed Ground` }
    , { to: `Pier` }
    ]
  }
, { id: 97
  , name: `Hallowed Ground`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 98
  , name: `Waste Pool`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `Pier` }
    ]
  }
, { id: 99
  , name: `Tropical Island`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [ { to: `Spider Forest` }
    , { to: `Estuary` }
    ]
  }
  // #endregion
  // #region Tier 10
, { id: 100
  , name: `Belfry`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , edges:
    [ { to: `Arachnid Tomb` }
    ]
  }
, { id: 101
  , name: `Leyline`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , edges:
    [ { to: `Mesa` }
    ]
  }
, { id: 102
  , name: `Coral Ruins`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , edges:
    [ { to: `Crystal Ore` }
    ]
  }
, { id: 103
  , name: `Coves`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , edges:
    [ { to: `Burial Chambers` }
    ]
  }
, { id: 104
  , name: `Pit`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , edges:
    [ { to: `Park` }
    ]
  }
, { id: 105
  , name: `Plaza`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , edges:
    [ { to: `Siege` }
    ]
  }
, { id: 106
  , name: `Plateau`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , edges:
    [ { to: `Bog` }
    ]
  }
, { id: 107
  , name: `Pier`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , edges:
    [ { to: `Factory` }
    ]
  }
, { id: 108
  , name: `Spider Forest`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , edges:
    [ { to: `Factory` }
    , { to: `Chateau` }
    ]
  }
, { id: 109
  , name: `Estuary`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , edges:
    [ { to: `Chateau` }
    , { to: `Lair` }
    ]
  }
, { id: 110
  , name: `The Vinktar Square`
  , tier: 10
  , level: 77
  , completed: false
  , owned: false
  , unique: true
  }
  // #endregion
  // #region Tier 11
, { id: 111
  , name: `Arachnid Tomb`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , edges:
    [ { to: `Villa` }
    ]
  }
, { id: 112
  , name: `Mesa`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , edges:
    [ { to: `Colonnade` }
    ]
  }
, { id: 113
  , name: `Crystal Ore`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , edges:
    [ { to: `Colonnade` }
    ]
  }
, { id: 114
  , name: `Burial Chambers`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , edges:
    [ { to: `Necropolis` }
    ]
  }
, { id: 115
  , name: `Park`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , edges:
    [ { to: `Defiled Cathedral` }
    ]
  }
, { id: 116
  , name: `Siege`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , edges:
    [ { to: `Malformation` }
    ]
  }
, { id: 117
  , name: `Bog`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , edges:
    [ { to: `Arsenal` }
    , { to: `Overgrown Shrine` }
    ]
  }
, { id: 118
  , name: `Factory`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , edges:
    [ { to: `Ivory Temple` }
    ]
  }
, { id: 119
  , name: `Chateau`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , edges:
    [ { to: `The Perandus Manor` }
    , { to: `Castle Ruins` }
    ]
  }
, { id: 120
  , name: `The Perandus Manor`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 121
  , name: `Lair`
  , tier: 11
  , level: 78
  , completed: false
  , owned: false
  , edges:
    [ { to: `Castle Ruins` }
    ]
  }
  // #endregion
  // #region Tier 12
, { id: 122
  , name: `Villa`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , edges:
    [ { to: `Acid Caverns` }
    , { to: `Reef` }
    ]
  }
, { id: 123
  , name: `Colonnade`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , edges:
    [ { to: `Core` }
    ]
  }
, { id: 124
  , name: `Necropolis`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , edges:
    [ { to: `Death and Taxes` }
    , { to: `Racecourse` }
    ]
  }
, { id: 125
  , name: `Death and Taxes`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 126
  , name: `Defiled Cathedral`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , edges:
    [ { to: `Caldera` }
    ]
  }
, { id: 127
  , name: `Malformation`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , edges:
    [ { to: `Colosseum` }
    ]
  }
, { id: 128
  , name: `Arsenal`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , edges:
    [ { to: `Shrine` }
    ]
  }
, { id: 129
  , name: `Overgrown Shrine`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , edges:
    [ { to: `Acton's Nightmare` }
    , { to: `Shrine` }
    ]
  }
, { id: 130
  , name: `Acton's Nightmare`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , unique: true
  }
, { id: 131
  , name: `Ivory Temple`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , edges:
    [ { to: `Dig` }
    ]
  }
, { id: 132
  , name: `Castle Ruins`
  , tier: 12
  , level: 79
  , completed: false
  , owned: false
  , edges:
    [ { to: `Crimson Temple` }
    ]
  }
  // #endregion
  // #region Tier 13
, { id: 133
  , name: `Acid Caverns`
  , tier: 13
  , level: 80
  , completed: false
  , owned: false
  , edges:
    [ { to: `Dark Forest` }
    ]
  }
, { id: 134
  , name: `Reef`
  , tier: 13
  , level: 80
  , completed: false
  , owned: false
  , edges:
    [ { to: `Dark Forest` }
    ]
  }
, { id: 135
  , name: `Core`
  , tier: 13
  , level: 80
  , completed: false
  , owned: false
  , edges:
    [ { to: `Dark Forest` }
    ]
  }
, { id: 136
  , name: `Racecourse`
  , tier: 13
  , level: 80
  , completed: false
  , owned: false
  , edges:
    [ { to: `Palace` }
    ]
  }
, { id: 137
  , name: `Caldera`
  , tier: 13
  , level: 80
  , completed: false
  , owned: false
  , edges:
    [ { to: `Sunken City` }
    , { to: `Basilica` }
    ]
  }
, { id: 138
  , name: `Colosseum`
  , tier: 13
  , level: 80
  , completed: false
  , owned: false
  , edges:
    [ { to: `Courthouse` }
    ]
  }
, { id: 139
  , name: `Shrine`
  , tier: 13
  , level: 80
  , completed: false
  , owned: false
  , edges:
    [ { to: `Courthouse` }
    , { to: `Carcass` }
    ]
  }
, { id: 140
  , name: `Dig`
  , tier: 13
  , level: 80
  , completed: false
  , owned: false
  , edges:
    [ { to: `Terrace` }
    ]
  }
, { id: 141
  , name: `Crimson Temple`
  , tier: 13
  , level: 80
  , completed: false
  , owned: false
  , edges:
    [ { to: `Terrace` }
    ]
  }
  // #endregion
  // #region Tier 14
 , { id: 142
  , name: `Dark Forest`
  , tier: 14
  , level: 81
  , completed: false
  , owned: false
  , edges:
    [ { to: `Tower` }
    ]
  }
, { id: 143
  , name: `Palace`
  , tier: 14
  , level: 81
  , completed: false
  , owned: false
  , edges:
    [ { to: `Desert Spring` }
    , { to: `Lava Lake` }
    ]
  }
, { id: 144
  , name: `Sunken City`
  , tier: 14
  , level: 81
  , completed: false
  , owned: false
  , edges:
    [ { to: `Lava Lake` }
    ]
  }
, { id: 145
  , name: `Basilica`
  , tier: 14
  , level: 81
  , completed: false
  , owned: false
  , edges:
    [ { to: `Lava Lake` }
    ]
  }
, { id: 146
  , name: `Courthouse`
  , tier: 14
  , level: 81
  , completed: false
  , owned: false
  , edges:
    [ { to: `Primordial Blocks` }
    ]
  }
, { id: 147
  , name: `Carcass`
  , tier: 14
  , level: 81
  , completed: false
  , owned: false
  , edges:
    [ { to: `Primordial Blocks` }
    ]
  }
, { id: 148
  , name: `Terrace`
  , tier: 14
  , level: 81
  , completed: false
  , owned: false
  , edges:
    [ { to: `Summit` }
    ]
  }
  // #endregion
  // #region Tier 15
, { id: 149
  , name: `Tower`
  , tier: 15
  , level: 82
  , completed: false
  , owned: false
  , edges:
    [ { to: `Lair of the Hydra` }
    ]
  }
, { id: 150
  , name: `Desert Spring`
  , tier: 15
  , level: 82
  , completed: false
  , owned: false
  , edges:
    [ { to: `Pit of the Chimera` }
    ]
  }
, { id: 151
  , name: `Lava Lake`
  , tier: 15
  , level: 82
  , completed: false
  , owned: false
  , edges:
    [ { to: `Pit of the Chimera` }
    ]
  }
, { id: 152
  , name: `Primordial Blocks`
  , tier: 15
  , level: 82
  , completed: false
  , owned: false
  , edges:
    [ { to: `Maze of the Minotaur` }
    ]
  }
, { id: 153
  , name: `Summit`
  , tier: 15
  , level: 82
  , completed: false
  , owned: false
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
  , owned: false
  , edges:
    [
    ]
  }
, { id: 155
  , name: `Pit of the Chimera`
  , tier: 16
  , level: 83
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 156
  , name: `Maze of the Minotaur`
  , tier: 16
  , level: 83
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 157
  , name: `Forge of the Phoenix`
  , tier: 16
  , level: 83
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
  // #endregion
]
