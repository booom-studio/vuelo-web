Vuelo
======
###### Booom's time tracking tool

## Preface

### Summary

Internal and external web application for tracking time, sharing estimations and maybe more.

### Motivation & Goals

- Keep time tracking tools to a minimum <br>
 _Single app to track your time for a project. No more double cheking, syncing_

- Pretty, professional looking timesheet to proudly show clients <br>
  _A spreadsheet can do a lot, but doesn't look very clean_
  
- Easy to understand yet meaningful estimation template <br>
  _Colors, pictures, comments and overall better structure_
  
- Helpful and fast summaries, projections for the internal users <br>
  _Every tool can do this, usually it's overkill, figure out just the right amount of complexity_
  
- Manage projects, team, prices and resouce allocations <br>
  _This is probably the hardest to balance out right_
  
- Open source, we can prodly share the codebase to future clients <br>
  _This project has fairly complex frontend and backend code, time to show off!_

### Project name

Vuelo is spanish for _I fly_, _flight_ <br>
Time flies, we better keep track of it!

## Data Structure

### Team member

- Connected with Google, get name, email, picture (maybe phone number)
- Position (eg. sales, operations, developer, designer etc.)
- Seniority
- Default hourly fee
- Manage holidays

### Client

- Name
- Contact people

### Project

- Name
- Client
- Estimation
- Is active
- Team members
  - Hourly fee
  - Capacity per week
  - Schedule (if different than project start / end)
- Schedule
  - Start date
  - End date (optional)
  - Phases❓

### Estimation

## Web app structure

### For clients

Contact people receive invitation via email.

Anyone with the link can view
eg. [vuelo.booom.studio/12345abcde]()

_or_

Contact people have access to the client's projects.
eg. Log in with the invited email address

If a client has only one project, open that automatically. If more, that show a list of projects.
