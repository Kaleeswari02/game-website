"use client";

import React from "react";
import styles from './careers.module.css'
import AboutStyles from '../about/about.module.css'
import { FiArrowUpRight ,FiArrowRight} from 'react-icons/fi'; 
import jobs from './jobs.json'
import Header from "../header/page";
import Footerarea from "../footer/page";


export default function Careers() {

const jobs = [
  {
    id: "1",
    title: "Android Developer (Native) – IoT Projects",
    description: (
      <>
        We’re Hiring: Android Developer (Native) – IoT Projects <br /> Location: Madurai<br /> <br/>
        At BEEYOOND GAMING, we are developing smart, connected solutions for the next generation of devices.<br /> 
        We’re seeking a skilled Android Developer to join our IoT innovation team — where mobile meets hardware.<br /> 
        If you're passionate about Android development and excited to work with connected devices, sensors, and embedded systems, this opportunity is for you.<br /><br /> 
        <strong>Role Overview:</strong><br /> 
        As an Android Developer focused on IoT integration, you’ll build intuitive mobile interfaces that control, monitor, and interact with a range of IoT devices. Your code will directly power real-world applications in smart home, industrial automation, healthcare tech, and beyond.<br /><br /> 
        <strong>Key Responsibilities:</strong><br /> 
        - Develop native Android applications in Kotlin and/or Java<br /> 
        - Collaborate with IoT engineers and embedded system developers to connect mobile apps with smart devices<br /> 
        - Integrate wireless protocols: Bluetooth Low Energy (BLE), Wi-Fi, NFC, MQTT, etc.<br /> 
        - Design real-time data visualization and device management interfaces<br /> 
        - Optimize performance and battery usage in IoT use cases<br /> 
        - Ensure seamless user experience in connected environments<br /><br /> 
        <strong>Requirements:</strong><br /> 
        - 2+ years of professional Android development experience<br /> 
        - Strong knowledge of Kotlin (preferred) or Java<br /> 
        - Proven experience integrating Android apps with IoT devices or hardware systems<br /> 
        - Familiarity with IoT protocols and tools (e.g., BLE, MQTT, WebSockets, Firebase)<br /> 
        - Experience working with APIs, device data, and background services<br /> 
        - Strong understanding of mobile performance, security, and connectivity issues<br /><br /> 
        Interested? Let’s connect.<br /> 
        Apply now by sending your resume to <br/> <a href="mailto:info@beeyoondgaming.com" 
        style={{color: 'blue',fontSize:'16px'}}>info@beeyoondgaming.com <span className="ms-2"></span></a> or 
         <span className="ms-2"></span>
         <a href="mailto:vignesh.hrbeeyoond@gmail.com" style={{color: 'blue',fontSize:'16px'}}>
          vignesh.hrbeeyoond@gmail.com</a>
      </>
    )
  },
  {
    id: "2",
    title: "Graphic Designer with Video Editing Expertise",
    description: (
    <>
      We’re Hiring: <strong>Graphic Designer with Video Editing Expertise</strong><br />
      Location: Madurai | Experience: 2+ Years<br /><br />
      Beeyoond is on the lookout for a highly creative and detail-oriented Graphic Designer with a flair for video editing to join our dynamic creative team. If you're passionate about visual storytelling and multimedia design, we’d love to meet you!<br /><br />
      <strong>What You’ll Do:</strong><br />
      - Design engaging graphics, layouts, and visual assets for both digital and print media.<br />
      - Edit and produce high-quality videos for marketing, social media, and promotional campaigns.<br />
      - Collaborate with our talented 2D/3D animation team to deliver seamless, on-brand content.<br />
      - Contribute to brainstorming sessions and help shape our visual identity and storytelling approach.<br />
      - Uphold brand consistency across all creative outputs.<br />
      - Manage multiple creative projects while meeting timelines and maintaining high standards.<br />
      - Stay current with design trends, tools, and best practices.<br /><br />
      <strong>What We’re Looking For:</strong><br />
      - A degree in Graphic Design, Multimedia, or a related field – or equivalent hands-on experience.<br />
      - 2+ years of professional experience in graphic design and video editing.<br />
      - Proficiency in Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, After Effects).<br />
      - Bonus: Familiarity with 3D software (Blender, Cinema 4D, or Maya).<br />
      - Solid knowledge of typography, color theory, and layout design.<br />
      - Strong attention to detail and storytelling skills.<br />
      - A collaborative mindset with excellent communication and organizational abilities.<br /><br />
      If you’re ready to bring ideas to life and make a visual impact — we want to hear from you!<br /><br />
     Apply now by sending your resume to <br/> <a href="mailto:info@beeyoondgaming.com" 
        style={{color: 'blue',fontSize:'16px'}}>info@beeyoondgaming.com <span className="ms-2"></span></a> or 
         <span className="ms-2"></span>
         <a href="mailto:vignesh.hrbeeyoond@gmail.com" style={{color: 'blue',fontSize:'16px'}}>
          vignesh.hrbeeyoond@gmail.com</a><br />
      Contact: +91 99525 60396
    </>
    )
  },
  {
    id: "3",
    title: "2D Animator & 3D Artist",
    description: (
    <>
      <strong>URGENT HIRING – 2D Animator & 3D Artist</strong><br />
      BEEYOOND GAMING is growing fast — and we need top-tier creative talent NOW to keep up with demand!<br />
      Join our dynamic team and help shape the future of gaming visuals.<br /><br />
      <strong>Immediate Openings:</strong><br />
      2D Animator<br />
      3D Artist<br /><br />
      <strong>What We’re Looking For – 2D Animator:</strong><br />
      - Proven experience in 2D animation – must include fitness, product, or motion design work in your portfolio<br />
      - Expertise in After Effects, Photoshop, Illustrator & Premiere Pro<br />
      - Strong sense of timing, flow, and animation dynamics<br />
      - Solid grasp of human anatomy and physical movement (esp. for fitness/resistance scenes)<br />
      - Able to animate characters and mechanical elements seamlessly<br />
      - Skilled in preparing and optimizing layered artwork for animation<br /><br />
       <strong>What We’re Looking For – 3D Artist:</strong><br />
      - Expert in 3D animation tools (Blender preferred)<br />
      - Proficient in V-Ray, Cycles, or Unreal Engine for rendering<br />
      - Knowledge of lighting techniques, cinematic setups, and volumetric lighting<br />
      - Strong skills in hard surface modeling, rigging, and realistic texturing (metal, rubber, chrome)<br />
      - A portfolio that shows high-quality, product-focused animations<br />
      - Able to deliver work that is energetic, precise, and on-brand<br /><br />
      Ready to make an impact?<br />
      Send your resume and portfolio ASAP to:<br />
     <a href="mailto:info@beeyoondgaming.com" 
        style={{color: 'blue',fontSize:'16px'}}>info@beeyoondgaming.com <span className="ms-2"></span></a> or 
         <span className="ms-2"></span>
         <a href="mailto:vignesh.hrbeeyoond@gmail.com" style={{color: 'blue',fontSize:'16px'}}>
          vignesh.hrbeeyoond@gmail.com</a><br />
       Contact: +91 99525 60396<br />
       Location: Madurai, Tamilnadu<br /><br />
      Let’s build something extraordinary — together.
    </>
    )
  }
];

  const [open, setOpen] = React.useState("1");

  const handleApplyClick = (role) => {
    const subject = encodeURIComponent(`Application for ${role} role at Beeyoond`);
    const body = encodeURIComponent(`Hi Beeyoond team,\n\nI'm interested in the ${role} position. Please find my resume attached.\n\nBest regards,\n[Your Name]`);
    window.location.href = `mailto:hr@beeyoond.com?subject=${subject}&body=${body}`;
  };



  return (
    <>
    <Header/>
      <section  className={`${styles.careerBanner} d-flex align-items-center`}>
        <div className=" container text-center">
          <h1>Join Our Hive</h1>
          <p className="lead">Explore exciting opportunities and build the future of gaming with Beeyoond.</p>
        </div>
      </section>
            <div className={`${styles.jobTabs} container mt-5 mb-5`}>
           <h3 className={styles.heading}>Open Positions</h3>

    <div className={`${styles.borderStyles} mt-5`}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className={`${styles.jobList} mt-3  p-4 rounded-4`}>
              <div  className={`${styles.listGroup}`} >
                {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setOpen(job.id)}
                  className={`list-group-item-action rounded-3 mb-2 ${styles.listGroupItem} ${open === job.id ? styles.listGroupItemActive : ''}`}
                >
                  {job.title}
                </button>

                ))}
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div  className={`${styles.jobDetail}  mt-3 mb-5  p-4 rounded-4`}>
              {jobs.map((job) =>
                open === job.id ? (
                  <div key={job.id}>
                    <h3 className="mb-3">{job.title}</h3>
                    {/* <p dangerouslySetInnerHTML={{ __html: job.description }} /> */}
                    <p>{job.description}</p>
                      <button   onClick={() => handleApplyClick(job.title)} className={`${AboutStyles.aboutButton} px-4 mt-3`}>
                      APPLY NOW
                      <span className={`${AboutStyles.aboutButtonArrow} ms-2`}>
                      <FiArrowUpRight className={AboutStyles.arrowDefault} />
                      <FiArrowRight className={AboutStyles.arrowHover} />
                      </span>
                  </button>
                  </div>
                ) : null
              )}
            </div>
          </div>
       </div>
    </div>
</div>
<Footerarea/>
    

    </>
  );
}
