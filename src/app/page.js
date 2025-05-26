import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/page";
import About from "./about/page";
export default function Home() {
  return (
    <>
      <Header/>
      <About/>
    </>
  );
}
