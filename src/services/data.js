export function getList() {
  // SAMPLE DATA
  const JsonData = {
    mainId: 1,
    lineManager: 'Sonny',
    mainTeams: [
      {
        teamId: 1,
        teamName: 'Finance',
        subTeam: [
          {
            id: 1001,
            name: 'John1',
            desc: 'QA',
          },
          {
            id: 1002,
            name: 'John2',
            desc: 'IT Support',
          },
        ],
      },
      {
        teamId: 2,
        teamName: 'Research',
        subTeam: [
          {
            id: 1003,
            name: 'John3',
            desc: 'QA',
          },
          {
            id: 1004,
            name: 'John4',
            desc: 'BI',
          },
        ],
      },
    ],
  };

  return JsonData;
}
