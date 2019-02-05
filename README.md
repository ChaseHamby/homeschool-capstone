
# Homeschool App
Homeschool App is my front end capstone project at NSS. It is an app that allows parents to create profiles for their children and browse through homeschool curriculum.

Users can sign in via Google authentication, and then use the interface to look through different books. They are able to filter the books based on subject, grade, and brand. Users can also create profiles for their children. They can come back and edit or delete the profiles at any time.

Check out the deployed site here: https://homeschool-capstone.firebaseapp.com

## Screenshots

### Auth 
![screen shot 2019-02-05 at 4 25 01 pm](https://user-images.githubusercontent.com/16019344/52311304-283ffe00-296c-11e9-8d11-add635934691.png)

### Home page
![screen shot 2019-02-05 at 4 25 14 pm](https://user-images.githubusercontent.com/16019344/52311308-2d04b200-296c-11e9-8c14-ec89e8c58614.png)

### Child Profile page
<img width="959" alt="screen shot 2019-02-05 at 5 36 15 pm" src="https://user-images.githubusercontent.com/16019344/52311448-9389d000-296c-11e9-85d6-c6ae007baab9.png">

### Alert that profile was added
![screen shot 2019-02-05 at 4 26 14 pm](https://user-images.githubusercontent.com/16019344/52311312-3130cf80-296c-11e9-9041-c83059748ac3.png)

### Child profile card
![screen shot 2019-02-05 at 4 26 20 pm](https://user-images.githubusercontent.com/16019344/52311318-34c45680-296c-11e9-9411-ea3b9139606f.png)

### Dropdown selection on resources page
![screen shot 2019-02-05 at 4 26 34 pm](https://user-images.githubusercontent.com/16019344/52311324-37bf4700-296c-11e9-81a2-acd44dd131cc.png)

### Resources cards
![screen shot 2019-02-05 at 4 26 50 pm](https://user-images.githubusercontent.com/16019344/52311330-3c83fb00-296c-11e9-8751-58d8f03cc0a2.png)

## Technologies Used
* React
* Sass
* Axios
* Firebase
* Create-React-App
* Reactstrap
* Bootstrap
* Sweet Alerts
* Font Awesome

## How to run this app
Note: To run this app you will need a firebase account and a new project.

## 1. Configure Firebase
* Clone the repository to your local machine.
* Run the following command in terminal to download the web dependencies: `npm install`
* In the db folder, rename `apiKeys.json.example` to `apiKeys.json`.
* In Firebase, create a new project.
* Navigate to your config object, and copy the keys from Firebase into the `apiKeys.json` file.
* Create a realtime database in Firebase, and start in test mode.
* Navigate to the Data tab inside the realtime database, and import `!base.json`. You should now see sets of data titled Resources and Child.
* Click on Resources, and the import the `resources.json` file. Repeat this step for the `child.json`.

## 2. Serve up the app
* Run `npm start` to start the app
* Open`http://localhost:3000` to view it in the browser.
