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
    [
    ]
  }
, { id: 87
  , name: `Arena`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [
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
    [
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
    [
    ]
  }
, { id: 94
  , name: `Ancient City`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
, { id: 95
  , name: `Scriptorium`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [
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
    [
    ]
  }
, { id: 99
  , name: `Tropical Island`
  , tier: 9
  , level: 76
  , completed: false
  , owned: false
  , edges:
    [
    ]
  }
]
