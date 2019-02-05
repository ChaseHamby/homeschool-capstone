## How to run this app
Note: To run this app you will need a firebase account and a new project.

## 1. Configure Firebase
• Clone the repository to your local machine.
• Run the following command in terminal to download the web dependencies: `npm install`
• In the db folder, rename apiKeys.json.example to apiKeys.json.
• In Firebase, create a new project.
• Navigate to your config object, and copy the keys from Firebase into the apiKeys.json file.
• Create a realtime database in Firebase, and start in test mode.
• Navigate to the Data tab inside the realtime database, and import !base.json. You should now see sets of data titled Resources and Child.
• Click on Resources, and the import the resources.json file. Repeat this step for the child.json.

## 2. Serve up the app
`npm start`
Runs the app
Open`http://localhost:3000` to view it in the browser.


