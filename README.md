# Homeschool App
Homeschool App is my front end capstone project at NSS. It is an app that allows parents to create profiles for their children and browse through homeschool curriculum.

Users can sign in via Google authentication, and then use the interface to look through different books. They are able to filter the books based on subject, grade, and brand. Users can also create profiles for their children. They can come back and edit or delete the profiles at any time.

[Check out the deployed site here.] (https://homeschool-capstone.firebaseapp.com)

## Screenshots

## Technologies Used
React
Sass
Axios
Firebase
Create-React-App
Reactstrap
Bootstrap
Prop-Types
Sweet Alerts
Font Awesome

## How to run this app
Note: To run this app you will need a firebase account and a new project.

## 1. Configure Firebase
• Clone the repository to your local machine.
• Run the following command in terminal to download the web dependencies: `npm install`
• In the db folder, rename `apiKeys.json.example` to `apiKeys.json`.
• In Firebase, create a new project.
• Navigate to your config object, and copy the keys from Firebase into the `apiKeys.json` file.
• Create a realtime database in Firebase, and start in test mode.
• Navigate to the Data tab inside the realtime database, and import `!base.json`. You should now see sets of data titled Resources and Child.
• Click on Resources, and the import the `resources.json` file. Repeat this step for the `child.json`.

## 2. Serve up the app
Run `npm start` to launch the app
Open http://localhost:3000 to view it in the browser.