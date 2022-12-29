# Students Management Application

<img width="1422" alt="StudentManagementApp_Home" src="https://user-images.githubusercontent.com/95946408/209887023-46c266da-041f-4a0d-994a-9a38f31cdabe.png">

## About the Project
Student management Application is a responsive application that helps university personnel to manage the students information.
<br>
[DEMO Site]([https://machikayamauchi.me/benchbakery/home](https://students-management-app.netlify.app)

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
        
        
    
