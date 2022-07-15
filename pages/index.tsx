import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import useStore from "../src/store/store";

const Home: NextPage = () => {
  const { isDark, handleIsDark } = useStore();
  return (
    <div className={styles.container}>
      <p>hello</p>

      <p className="italic">tailwind TEST</p>

      <p>Zustand TEST : 지금 화면은 {isDark ? "다크" : "화이트"} 모드이다</p>
      <button onClick={handleIsDark}>클릭시 화면 모드 변경</button>
    </div>
  );
};

export default Home;
