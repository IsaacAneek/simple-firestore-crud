![crud](https://github.com/user-attachments/assets/7374535d-a3e8-41d8-82ca-dc030a907733)
# A simple CRUD app using Firestore
- Clone this repository.
- [Add Firebase to the project](https://firebase.google.com/docs/web/setup "Add firebase to your project")
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
