# Short descriptions

| Name | Definition |
| - | :-: |
| [User](#user) | A signed in administrator who can create, edit projects and be selected for assignments |
| Role | What job a person can fulfill |
| [Project](#project) | A duration container for a list of assignments, phases |
| Duration | A start and end date |
| [Phase](#phase) | A single point in time with a label |
| [Assignment](#assignment) | A user's utilization for a duration on a project  |
| Price rate | Hourly net fee for a user |

# Complex definitions
### User

_A signed in administrator who can create, edit projects and be selected for assignments_

|Property|Required|Default|Description|Example|
|-|:-:|:-:|:-:|:-:|
| Name | yes | - | _Self explanatory_ | Jane Doe |
| Email | yes | - | _Self explanatory_ | jane.doe@booom.studio |
| Role(s) | yes | - | A list of roles this person fills (at least one) | Tech Lead, Account, Developer |
| Price rate | no | - | The usual price rate for this person | 40€|

**Note:** A client is not a User in the MVP. They can open read-only, public urls.

## Project

_A duration container for a list of assignments, phases_

|Property|Required|Default|Description|Example|
|-|:-:|:-:|:-:|:-:|
| Title | yes | - | _Self explanatory_ | Vuelo |
| Desciption | no | - | Free text for any info regarding the project | Contact: bob@client.com | 
| Duration | no | - | When will project start and end | 2017.12.19. - 2018.01.15.|
| Phases | no | - | A list of labels within the duration of the project | 2017.12.19. - Kickoff, 2018.01.10. - Bugfixing |
| Assignments | yes | The duration of the project with 8 hrs / day utilization | A list of assignments, at lease one | John working the first week 8hrs a day |
  
## Phase

_A single point in time with a label_

|Property|Required|Default|Description|Example|
|-|:-:|:-:|:-:|:-:|
| Date | yes | - | A date within the parent project's duration | 2018.03.19. |
| Label | yes | - | A simple word or expression | Discovery |

## Assignment

_A user's utilization for a duration on a project_

|Property|Required|Default|Description|Example|
|-|:-:|:-:|:-:|:-:|
| Assignee | no | - | A user | Leo |
| Duration | yes | The parent project's duration | When does it start, end. Can be outside the project's duration | 2017.01.01. - 2018.01.10. |
| Price rate | no | The assignee's price rate if applicable | Hourly rate | 45€ |
| Utilization | yes | - | See [Utilization](#utilization) | 8 hours / day |

## Assignment &rarr; Utilization

_The amount and frequency of time a person will work on an assignment_

|Property|Required|Default|Description|Example|
|-|:-:|:-:|:-:|:-:|
| Total time | yes | - | The initial estimation for the length of the assignments | 80 hrs, 12 MD |
| Duration | yes | - | Parent's duration | |
| Hours per day | yes | 8 | _Self explanatory_ | 4 |

**Note:** Total time and the duration start is fixed when calculation this, but modifiying hours per day or the end of the duration will update the other.

## _Other notes_

- Holiday is a project
- Show warning with conflicting assignments

# Unprocessed: 

### Core features
- Team member report
- Project report, stats
- Full months view, internal, everyone, all projects + filter
- Administration - projects, users

### Report Entry
- Team member
- Project?
- Description
- Date
- Duration


