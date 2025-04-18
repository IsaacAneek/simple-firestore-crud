# A simple CRUD app using Firestore
- [Add Firebase to your project](https://firebase.google.com/docs/web/setup "Add firebase to your project")
- Install webpack : 
`npm install webpack webpack-cli --save-dev`
- Create a secrets.js file in the root directory
- Copy and paste your firebase config from your firebase console in the **secrets.js** file.
- Your **secrets.js** file should look like this :
```
export const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
        };
```
- Run the following command :
`npm run build`
- Start your local server
