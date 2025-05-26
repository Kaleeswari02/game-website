import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/page";
import About from "./about/page";
import HomeSection from "./home/page";
import Portfolio from "./portfolio/page";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeSection/>
      <About/>
      <Portfolio/>
    </>
  );
}
