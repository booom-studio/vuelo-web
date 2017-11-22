# Vuelo
### *Time flies, we capture it*

## Preface

### Summary

Internal and external web application for planning resources, tracking time, sharing estimations and maybe more.

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

## App Structure - MVP

### Admin - Projects

*Create and manage projects*

Create a project, assign people to it. A project can have phases, that determines invoice periods for a project.

### Admin - Users

*Invite and remove people*

Invite people by email to use the app.
Set user role (Admin, Business, Product, Client, Freelancer etc.)

User roles can be used for access levels, but also default views, extended data. For example a product team member can have a default hourly fee.

### Admin - Resource allocator

*Who, when, what?*

Add people to projects in a calendar, set allocation percent / hours per week / total hours.

See summary of planned / tracked hours. Sum amount of hourly fee * tracked hours.

Track holidays.

### Tracker - Calendar

*See your ongoing / assigned projects for a month*

Filtered calendar view for projects that you are on. Useful for planning, summary.

### Tracker - Week

*See your ongoing / assigned projects for a week*

Very simple view for day-to-day time tracking.

### Project - Timesheet

*How is my project going?*

Check planned vs. tracked hours.

## App Structure - Post MVP

### Calendar

- Drag & Drop
- Touch interactions
- All the filters!

### Admin - Estimation

*Create and share an estimation*

Based on our current Google Spreadsheet estimation.

### Admin - Clients

- Multiple projects per client
- Set contact person

### Admin - Projects

- Issue invoices
- Set maximum budget
- Set maximum hours
- Alert if a limit is exhausted

### Admin - Resource stats

- Utilization / person
- Monthly summary
- Planned vs. real hours, utilization hours, sold hours, avg price / person

### Integration ideas

- Jira
- Slack
- Toggl
