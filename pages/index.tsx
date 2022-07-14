import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>hello</p>
      <p className="italic">tailwind TEST</p>
    </div>
  );
};

export default Home;
