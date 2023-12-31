import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import PushNotificationLayout from "../components/PushNotificationLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PushNotificationLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>Home Page</h2>
        </main>
      </div>
    </PushNotificationLayout>
  );
}
