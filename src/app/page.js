import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/page";
import About from "./about/page";
import HomeSection from "./home/page";
import Portfolio from "./portfolio/page";
import VideoPlay from "./videoplay/page";
import VisionMission from "./visionmision/page";
import Testimonal from "./testimional/page";
import CareerSection from "./career/page";
import Footerarea from "./footer/page";
import OurGames from "./ourgames/page";

export default function Home() {
  return (
    <>
      <Header/>
      <HomeSection/>
      <About/>
      <OurGames/>
      <VideoPlay/>
      <Portfolio/>
      <VisionMission/>
      <Testimonal/>
      <CareerSection/>
      <Footerarea/>
    </>
  );
}
