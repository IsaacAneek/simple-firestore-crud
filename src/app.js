// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { collection, addDoc, getDocs, initializeFirestore, getFirestore, setDoc, doc, updateDoc, deleteDoc, getDoc, onSnapshot } from "firebase/firestore"
import { firebaseConfig } from '../secrets';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const list = document.getElementById("item-list")
const input = document.getElementById("name");

document.getElementById("submit-btn").addEventListener('click', () => {
  // Add document to DB and reset the input field
  if (input.value != "") {
    addDoc(collection(db, 'users'), {
      "name": input.value
    });

    input.value = ""
  }
});

onSnapshot(collection(db, 'users'), (querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {
    if (change.type == "added") {
      const docId = change.doc.id;

      const li = document.createElement("li");

      // Create the container div
      const containerDiv = document.createElement("div");
      containerDiv.className = "li-container";

      const inputElement = document.createElement("input");
      inputElement.type = "text";
      inputElement.value = change.doc.data().name || "";
      inputElement.readOnly = true;

      const divName = document.createElement("div");
      divName.className = "name-edit";
      divName.appendChild(inputElement);

      containerDiv.appendChild(divName);

      const buttonsDiv = document.createElement("div");
      buttonsDiv.className = "buttons";

      const updateBtn = document.createElement("button");
      updateBtn.textContent = "Update";
      updateBtn.addEventListener("click", () => {
        if (inputElement.readOnly) {
          // If readonly when the button was clicked then change
          // focus mode and make the input field editable
          inputElement.readOnly = false;
          inputElement.focus();
          updateBtn.style.whiteSpace = "pre";
          updateBtn.textContent = "  Save  ";
        }
        else {
          // If the input field was already editable and the
          // 'Save' button was clicked then update the corresponding document
          updateDoc(doc(db, 'users', docId), {
            name: inputElement.value
          });
          inputElement.readOnly = true;
          updateBtn.textContent = "Update";
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        deleteDoc(doc(db, 'users', docId));
        li.remove();
      })

      buttonsDiv.appendChild(updateBtn);
      buttonsDiv.appendChild(deleteBtn);

      containerDiv.appendChild(buttonsDiv);

      li.appendChild(containerDiv);

      document.getElementById("item-list").appendChild(li);
    }
  })
})