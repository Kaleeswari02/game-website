import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/page";
import About from "./about/page";
import HomeSection from "./home/page";

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <HomeSection/>
    </>
  );
}
