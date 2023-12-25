import Head from "next/head";
import styles from "../styles/Home.module.css";
import BackgroundAnimation from "../components/backgroundAnimation/backgroundAnimation";
import MainLeftSection from "../components/pagesComponents/main/mainLeftSection";
import MainRightSection from "../components/pagesComponents/main/mainRightSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Курс "С# c нуля до Pro"</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainLeftSection />
        <MainRightSection />
      </main>
      <footer>
        <BackgroundAnimation />
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          z-index: 100;
          overflow: hidden;
          font-family: "StratosSkyeng", -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
