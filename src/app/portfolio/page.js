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
        <div className="container-fluid mt-xl-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8">
                        <div className="portfolio-sec">
                            <h2>
                                <span className='port-headone'>Our</span><br/>
                                <span className='port-headtwo'>Portfolio</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-4 mt-xl-5 mt-lg-5 mt-md-5">
                        <div className="port-btn mt-xl-5 mt-lg-5 mt-md-5">
                          <div><button className='mb-xl-5 portfolio-btn mt-xl-5 mt-lg-5 mt-md-5' onClick={showAll}>VIEW ALL <span className='banner-btn-arrow'><FiArrowUpRight /></span></button></div>
                        </div>
                    </div>
                </div>
            </div>
            {visible && (
                <div className="image-gallary-section">
                    <div className="row">
                    <div className="col-xl-3 col-over">
                        <div className='port-image'>
                            <img src="/images/bg-5.png" alt="Banner" className="image-hover-scale" />
                            <h5 className="hover-heading">2D/3D Animation</h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-over">
                        <div className='port-image'>
                            <img src="/images/port1.png" alt="Banner" className="image-hover-scale" />
                            <h5 className="hover-heading">Video Editing</h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-over">
                        <div className='port-image'>
                            <img src="/images/port2.png" alt="Banner" className="image-hover-scale" />
                            <h5 className="hover-heading">AI & Automation</h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-over mb-xl-5">
                        <div className='port-image'>
                            <img src="/images/port3.png" alt="Banner" className="image-hover-scale" />
                            <h5 className="hover-heading">Game Development</h5>
                        </div>
                    </div>
                    </div>
                </div>
             )}
                <div className="image-gallary-section">
                    <div className="row">
                    <div className="col-xl-3 col-over">
                        <div className='port-image'>
                            <img src="/images/bg-5.png" alt="Banner" className="image-hover-scale" />
                            <h5 className="hover-heading">2D/3D Animation</h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-over">
                        <div className='port-image'>
                            <img src="/images/port1.png" alt="Banner" className="image-hover-scale" />
                            <h5 className="hover-heading">Video Editing</h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-over">
                        <div className='port-image'>
                            <img src="/images/port2.png" alt="Banner" className="image-hover-scale" />
                            <h5 className="hover-heading">AI & Automation</h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-over mb-xl-5">
                        <div className='port-image'>
                            <img src="/images/port3.png" alt="Banner" className="image-hover-scale" />
                            <h5 className="hover-heading">Game Development</h5>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        
        </>
    )
}