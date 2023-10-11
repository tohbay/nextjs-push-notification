import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
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
            vapidKey: `${process?.env?.NEXT_PUBLIC_vapidKey}`,
            // vapidKey:
            //   "BCAikdqYQnDT7_ERaLZTJR_Ly4E3ckUlZFn4dG01iJy8P_q43-DNwCb0UdMzpkFJm3Lr4XhHaH_GAO5Jz9730zQ",
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
