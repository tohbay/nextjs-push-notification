importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");
// importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js"
// );

// console.log(process?.env?.apiKey);

firebase?.initializeApp({
  // apiKey: "AIzaSyCJFA2se-7TQ6OfAm3tr7t_V_BoDVRK6cs",
  // authDomain: "pwablog-2d42d.firebaseapp.com",
  // projectId: "pwablog-2d42d",
  // storageBucket: "pwablog-2d42d.appspot.com",
  // messagingSenderId: "11936801963",
  // appId: "1:11936801963:web:97ca84f0e153a49c35c3ee",
  // measurementId: "G-GBT8WQ4MQ8",
  apiKey: `${process?.env?.NEXT_PUBLIC_apiKey}`,
  authDomain: `${process?.env?.NEXT_PUBLIC_authDomain}`,
  projectId: `${process?.env?.NEXT_PUBLIC_projectId}`,
  storageBucket: `${process?.env?.NEXT_PUBLIC_storageBucket}`,
  messagingSenderId: `${process?.env?.NEXT_PUBLIC_messagingSenderId}`,
  appId: `${process?.env?.NEXT_PUBLIC_appId}`,
  measurementId: `${process?.env?.NEXT_PUBLIC_measurementId}`,
});

const messaging = firebase.messaging();
