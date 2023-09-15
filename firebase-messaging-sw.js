importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCV0FklGmiaTBdqsAoJ7dTSG4p0QwHIxk8",
    authDomain: "utx-app-uat.firebaseapp.com",
    databaseURL: "https://utx-app-uat-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "utx-app-uat",
    storageBucket: "utx-app-uat.appspot.com",
    messagingSenderId: "269188687520",
    appId: "1:269188687520:web:57a9c99dba18c352c78bc5",
    measurementId: "G-GVH2Y6CCP9"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});