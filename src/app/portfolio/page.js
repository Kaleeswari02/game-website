'use client'
import './portfolio.css'
import { FiArrowUpRight } from 'react-icons/fi'; // import arrow icon
export default function Portfolio(){
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
                          <div><button className='mb-xl-5 portfolio-btn mt-xl-5 mt-lg-5 mt-md-5'>VIEW ALL <span className='banner-btn-arrow'><FiArrowUpRight /></span></button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-gallary-section"></div>
        </div>
        </>
    )
}