importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");
// importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js"
// );

firebase?.initializeApp({
  apiKey: "AIzaSyCJFA2se-7TQ6OfAm3tr7t_V_BoDVRK6cs",
  authDomain: "pwablog-2d42d.firebaseapp.com",
  projectId: "pwablog-2d42d",
  storageBucket: "pwablog-2d42d.appspot.com",
  messagingSenderId: "11936801963",
  appId: "1:11936801963:web:97ca84f0e153a49c35c3ee",
  measurementId: "G-GBT8WQ4MQ8",
  // apiKey: `${process.env.apiKey}`,
  // authDomain: `${process.env.authDomain}`,
  // projectId: `${process.env.projectId}`,
  // storageBucket: `${process.env.storageBucket}`,
  // messagingSenderId: `${process.env.messagingSenderId}`,
  // appId: `${process.env.appId}`,
  // measurementId: `${process.env.measurementId}`,
});

const messaging = firebase.messaging();
