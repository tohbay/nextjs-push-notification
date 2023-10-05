import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    console.log(process.env.apiKey);
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: `${process.env.apiKey}`,
        authDomain: `${process.env.authDomain}`,
        projectId: `${process.env.projectId}`,
        storageBucket: `${process.env.storageBucket}`,
        messagingSenderId: `${process.env.messagingSenderId}`,
        appId: `${process.env.appId}`,
        measurementId: `${process.env.measurementId}`,
      });

      try {
        const messaging = firebase?.messaging();
        const tokenInLocalForage = await localforage?.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await messaging?.getToken({
            vapidKey: `${process.env.vapidKey}`,
          });

          console.log({ fcm_token });

          // Set token in our local storage
          if (fcm_token) {
            localforage?.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};

export { firebaseCloudMessaging };
