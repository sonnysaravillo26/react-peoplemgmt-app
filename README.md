# react-peoplemgm

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-kehrvz)

`People Management Application`

`Task`

- Create People Management Application
- Can able to manage several teams which are split into individual sub-teams.
- Can able to assign a single employee to a single sub-team.
- Can able to allocate a line manager to all employees.

`Extra Requirements`

- Each Team name needs to be unique.
- A sub-team name needs to be unique within the team, but not necessarily across teams.
  e.g. Both the Research and the Finance teams can both have a “Data” sub-team.

`Requirements`

- Front-end using a tool like www.stackblitz.com or www.codepen.io.
- Proof of concept, you can use dummy data and we do not require you to integrate this with a
  working back-end.
- Produce short document stating how you would design a way to store the data and consider how you would report key metrics.

`` DEVELOPER'S DOCUMENTATION

`People Management System Description`

- The Web application can able to add new employee by assigning required values (eg. line manager, Team and Subteam),
- Table will be updated realtime, upon entering new employee for reporting purpose.

`Software / Application Use`

- Visual Studio Code
- Google Chrome - latest version

`Installed Package`

- React Version 17.0.2
- Bootstrap , popperjs dependency - for stackblitz
- CSS style sheet
- React Hook (e.g useState, useEffect)

`SAMPLE Data - JSON format`

- Check document data.js

```
    {
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
```

`Additional Posibilities - LATER STAGE`

- Back end framework with API
- Database

`Author`
Sonny
