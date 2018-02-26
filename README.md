# Vuelo

### _Time flies, we capture it_

## Preface

### Summary

Internal and external web application for planning resources, tracking time,
sharing estimations and maybe more.

### Motivation & Goals

* Keep time tracking tools to a minimum <br> _Single app to track your time for
  a project. No more double cheking, syncing_

* Pretty, professional looking timesheet to proudly show clients <br> _A
  spreadsheet can do a lot, but doesn't look very clean_

* Easy to understand yet meaningful estimation template <br> _Colors, pictures,
  comments and overall better structure_

* Helpful and fast summaries, projections for the internal users <br> _Every
  tool can do this, usually it's overkill, figure out just the right amount of
  complexity_

* Manage projects, team, prices and resouce allocations <br> _This is probably
  the hardest to balance out right_

* Open source, we can prodly share the codebase to future clients <br> _This
  project has fairly complex frontend and backend code, time to show off!_

### Project name

Vuelo is spanish for _I fly_, _flight_ <br> Time flies, we better keep track of
it!

## Development

### Install

`npm i`

### Run

`npm start`

**Note:**\
The backend enpoint currently depends on `NODE_ENV`, but CRA si weird and doesn't
pass it locally.\
Run the backend locally, or change the enpoint URL in the code.

### Deploy

npm run deploy

**Note**\
You need to have access to the Vuelo Firebase project.\
`firebase-tools` might need some setup initially.
