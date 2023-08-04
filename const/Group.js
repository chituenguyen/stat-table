let columns = [
  {
    id: 0,
    name: "Summary",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
        sorted: false,
      },
      {
        header: "Team",
        accessorKey: "team.id",
        sorted: false,
      },
      {
        header: "Player",
        accessorKey: "player.name",
        sorted: false,
      },
      {
        header: "Goals",
        accessorKey: "goals",
        sorted: true,
      },
      {
        header: "Expected goals",
        accessorKey: "expectedGoals",
        sorted: true,
      },
      {
        header: "Succ. dribbles",
        accessorKey: "successfulDribbles",
        sorted: true,
      },
      {
        header: "Tackles",
        accessorKey: "tackles",
        sorted: true,
      },
      {
        header: "Assists",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Accurate passes %",
        accessorKey: "accuratePassesPercentage",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
        sorted: true,
      },
    ],
  },
  {
    id: 1,
    name: "Attack",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
        sorted: false,
      },
      {
        header: "Team",
        accessorKey: "team.id",
        sorted: false,
      },
      {
        header: "Player",
        accessorKey: "player.name",
        sorted: false,
      },
      {
        header: "Goals",
        accessorKey: "goals",
        sorted: true,
      },
      {
        header: "Big chances missed",
        accessorKey: "bigChancesMissed",
        sorted: true,
      },
      {
        header: "Succ. dribbles",
        accessorKey: "successfulDribbles",
        sorted: true,
      },
      {
        header: "Total shots",
        accessorKey: "totalShots",
        sorted: true,
      },
      {
        header: "Goal conversion %",
        accessorKey: "goalConversionPercentage",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
        sorted: true,
      },
    ],
  },
  {
    id: 2,
    name: "Defence",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
        sorted: false,
      },
      {
        header: "Team",
        accessorKey: "team.id",
        sorted: false,
      },
      {
        header: "Player",
        accessorKey: "player.name",
        sorted: false,
      },
      {
        header: "Tackles",
        accessorKey: "tackles",
        sorted: true,
      },
      {
        header: "Interceptions",
        accessorKey: "interceptions",
        sorted: true,
      },
      {
        header: "Clearances",
        accessorKey: "clearances",
        sorted: true,
      },
      {
        header: "Errors lead to goal",
        accessorKey: "errorLeadToGoal",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
        sorted: true,
      },
    ],
  },
  {
    id: 3,
    name: "Passing",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
        sorted: false,
      },
      {
        header: "Team",
        accessorKey: "team.id",
        sorted: false,
      },
      {
        header: "Player",
        accessorKey: "player.name",
        sorted: false,
      },
      {
        header: "Big chances created",
        accessorKey: "bigChancesCreated",
        sorted: true,
      },
      {
        header: "Assists",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Acc. passes",
        accessorKey: "accuratePasses",
        sorted: true,
      },
      {
        header: "Accurate passes %",
        accessorKey: "accuratePassesPercentage",
        sorted: true,
      },
      {
        header: "Key passes",
        accessorKey: "keyPasses",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
        sorted: true,
      },
    ],
  },
  {
    id: 4,
    name: "Goalkeeper",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
        sorted: false,
      },
      {
        header: "Team",
        accessorKey: "team.id",
        sorted: false,
      },
      {
        header: "Player",
        accessorKey: "player.name",
        sorted: false,
      },
      {
        header: "Clean sheets",
        accessorKey: "cleanSheet",
        sorted: true,
      },
      {
        header: "Penaties saved",
        accessorKey: "penaltySave",
        sorted: true,
      },
      {
        header: "Saves from inside box",
        accessorKey: "savedShotsFromInsideTheBox",
        sorted: true,
      },
      {
        header: "Runs outs",
        accessorKey: "runsOut",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
        sorted: true,
      },
    ],
  },
  {
    id: 5,
    name: "Detailed",
    data: [
      {
        header: "ID",
        accessorKey: "player.id",
        sorted: false,
      },
      {
        header: "Team",
        accessorKey: "team.id",
        sorted: false,
      },
      {
        header: "Player",
        accessorKey: "player.name",
        sorted: false,
      },
      {
        header: "Goals",
        accessorKey: "goals",
        sorted: true,
      },
      {
        header: "Succ. dribbles",
        accessorKey: "successfulDribbles",
        sorted: true,
      },
      {
        header: "Tackles",
        accessorKey: "tackles",
        sorted: true,
      },
      {
        header: "Assists",
        accessorKey: "assists",
        sorted: true,
      },
      {
        header: "Accurate passes %",
        accessorKey: "accuratePassesPercentage",
        sorted: true,
      },
      {
        header: "Average UniScore rating",
        accessorKey: "rating",
        sorted: true,
      },
    ],
  },
];

export default columns;
