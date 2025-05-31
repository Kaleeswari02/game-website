"use client";

import React from "react";
import styles from './careers.module.css'
import AboutStyles from '../about/about.module.css'
import { FiArrowUpRight ,FiArrowRight} from 'react-icons/fi'; 
import jobs from './jobs.json'
import Header from "../header/page";
import Footerarea from "../footer/page";


export default function Careers() {
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

    <div className={`${styles.borderStyles} mt-5 mb-5`}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className={`${styles.jobList}   mt-5 mb-5  p-4 rounded-4`}>
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
            <div  className={`${styles.jobDetail}  mt-5 mb-5  p-5 rounded-4`}>
              {jobs.map((job) =>
                open === job.id ? (
                  <div key={job.id}>
                    <h3 className="mb-3">{job.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: job.description }} />
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
