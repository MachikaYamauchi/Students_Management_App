# Students Management Application

![StudentManagementApp](https://user-images.githubusercontent.com/95946408/210010896-6b18da17-29a4-4cd1-aa51-cef77b71110e.gif)

## About the Project
Student management Application is a responsive application that helps university personnel to manage the students information.
<br>
[DEMO Site](https://students-management-app.netlify.app)

## Technologies
Create React App


Libraries:
- Redux
- Express.js
- Axios
- JWT
- bcryptjs
- react file base64


Database:
- MongoDB


CSS:
- Material Design for Bootstrap


Hosting:
- Front-end: Netlify
- Back-end: Heroku


## Features
- Signup and login with JWT authentification
- Display the list of the all students
- Add new students information
- Edit students information
- Delete the students information

## Upcoming Features
- Search section with student's name
- Filter by school year

## Data Architecture
    .
    ├── users
    │   ├── _id
    │   ├── name
    │   ├── email
    │   └── password
    └── students
        ├── _id
        ├── firstName
        ├── lastName
        ├── email
        ├── phoneNumber
        ├── faculty
        ├── department
        ├── year
        ├── address
        ├── graduatedSchool
        ├── description
        ├── participationNumber
        ├── imageFile
        ├── editor
        └── editedAt
        
        
    
