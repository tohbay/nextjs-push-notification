importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");
// importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js"
// );

firebase?.initializeApp({
  apiKey: `${process.env.apiKey}`,
  authDomain: `${process.env.authDomain}`,
  projectId: `${process.env.projectId}`,
  storageBucket: `${process.env.storageBucket}`,
  messagingSenderId: `${process.env.messagingSenderId}`,
  appId: `${process.env.appId}`,
  measurementId: `${process.env.measurementId}`,
});

const messaging = firebase.messaging();
