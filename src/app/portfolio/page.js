'use client'
import './portfolio.css'
import { FiArrowUpRight } from 'react-icons/fi'; // import arrow icon
import { useState } from 'react';
export default function Portfolio(){
    const [visible, setVisible] = useState(false);

  const showAll = () => {
    setVisible(prev => !prev);
  };
    return(
        <>

        <div className="container-fluid mt-xl-5 mb-xl-5" id='portfolio'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                        <div className="portfolio-sec mt-xl-0 mt-lg-0 mt-md-0 mt-5">
                            <h2>
                                <span className='port-headone'>Our</span><br/>
                                <span className='port-headtwo'>Portfolio</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-12 mt-xl-5 mt-lg-5 mt-md-5">
                        <div className="port-btn mt-xl-5 mt-lg-5 mt-md-2">
                          <div><button className='mb-xl-5 portfolio-btn mt-xl-5 mt-lg-5 mt-md-5 mb-xl-0 mb-lg-0 mb-md-5 mb-5' onClick={showAll}>VIEW ALL <span className='banner-btn-arrow'><FiArrowUpRight /></span></button></div>
                        </div>
                    </div>
                </div>
            </div>
            {visible && (
                    <div className="image-row row ">
                    <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                        <img src="/images/port1.png" alt="" />
                        <h5 className="hover-heading">2D/3D Animation</h5>
                    </div>
                    <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12 column-width">
                        <img src="/images/port2.png" alt="" />
                        <h5 className="hover-heading">Video Editing</h5>
                    </div>
                    <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                        <img src="/images/port3.png" alt="" />
                        <h5 className="hover-heading">AI & Automation</h5>
                    </div>
                    <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                        <img src="/images/port1.png" alt="" />
                        <h5 className="hover-heading">Game Development</h5>
                    </div>
                    <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                        <img src="/images/port1.png" alt="" />
                        <h5 className="hover-heading">2D/3D Animation</h5>
                    </div>
                    <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                        <img src="/images/port2.png" alt="" />
                        <h5 className="hover-heading">Video Editing</h5>
                    </div>
                </div>
             )}
                <div className="image-gallary-section mb-xl-5">
                    <div className="image-row row ">
                        <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                            <img src="/images/port1.png" alt="" />
                            <h5 className="hover-heading">2D/3D Animation</h5>
                        </div>
                        <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                            <img src="/images/port2.png" alt="" />
                            <h5 className="hover-heading">Video Editing</h5>
                        </div>
                        <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                            <img src="/images/port3.png" alt="" />
                            <h5 className="hover-heading">AI & Automation</h5>
                        </div>
                        <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                            <img src="/images/port1.png" alt="" />
                            <h5 className="hover-heading">Game Development</h5>
                        </div>
                        <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                            <img src="/images/port1.png" alt="" />
                            <h5 className="hover-heading">2D/3D Animation</h5>
                        </div>
                        <div className="image-col col-xl-2 col-lg-2 col-md-4 col-12">
                            <img src="/images/port2.png" alt="" />
                            <h5 className="hover-heading">Video Editing</h5>
                        </div>
                    </div>
                </div>
        </div>
        
        </>
    )
}