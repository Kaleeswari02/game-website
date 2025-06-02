// 'use client'
// import './testimonal.css'
// import { LiaQuoteLeftSolid } from "react-icons/lia";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import { GiRoundStar } from "react-icons/gi";
// export default function Testimonal(){
 
    
//     return(
//         <>

//         <div className='container-fluid testi-background p-5 mb-xl-5 mb-md-5 mb-lg-5' id='testimonal'>
//             <div
//         id="carouselExampleIndicators"
//         className="carousel slide"
//         data-bs-ride="carousel"
//         data-bs-interval="3000" // slide every 3 seconds
//         >
//         <div className="carousel-indicators carousel-indicat-des">
//             <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//             ></button>
//             <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//             ></button>
//             <button
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//             ></button>
//         </div>

//         <div className="carousel-inner p-xl-5 p-lg-5 p-md-5">
//                 <div className='testimonal-area-content p-xl-5 p-lg-5'>
//                     <div className="carousel-item active">
//                         <div className="testimonal-area">
//                             <div className="icon-section">
//                                 <LiaQuoteLeftSolid className='icon-style-quote'/>
//                                 <ul className='start-align'>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                 </ul>
//                             </div>
//                             <div className="content-section">
//                                 <p>“Gamecrio has been a superstar, very helpful.The experience of working with Gamecrio has been outstanding. Their professionalism, expertise, and commitment to our project's success have made a significant impact.”</p>
//                             </div>
//                             <div className="thumbnail-section">
//                                 <img src="/images/testi-thumb.png" alt="" className='thumb-img'/>
//                                 <span className="name">Charlie Barnes</span>
//                                 <span className="job">Godot engine animations</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <div className="testimonal-area">
//                             <div className="icon-section">
//                                 <LiaQuoteLeftSolid className='icon-style-quote'/>
//                                 <ul className='start-align'>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                 </ul>
//                             </div>
//                             <div className="content-section">
//                                 <p>"Gamecrio did amazing work with our Unity project needs! They were proactive and came in with strong opinions to guide our project to success. Highly recommend !"</p>
//                             </div>
//                             <div className="thumbnail-section">
//                                 <img src="/images/testi-thumb.png" alt="" className='thumb-img'/>
//                                 <span className="name">Charlie Barnes</span>
//                                 <span className="job">Godot engine animations</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <div className="testimonal-area">
//                             <div className="icon-section">
//                                 <LiaQuoteLeftSolid className='icon-style-quote'/>
//                                 <ul className='start-align'>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                     <li><GiRoundStar className='icon-style-star'/> </li>
//                                 </ul>
//                             </div>
//                             <div className="content-section">
//                                 <p>“Gamecrio has been a superstar, very helpful.The experience of working with Gamecrio has been outstanding. Their professionalism, expertise, and commitment to our project's success have made a significant impact.”</p>
//                             </div>
//                             <div className="thumbnail-section">
//                                 <img src="/images/testi-thumb.png" alt="" className='thumb-img'/>
//                                 <span className="name">Charlie Barnes</span>
//                                 <span className="job">Godot engine animations</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//             </div>
//         </div>
//         </>
//     )
// }


'use client';
import './testimonal.css';
import Slider from "react-slick";
import { LiaQuoteLeftSolid } from "react-icons/lia";
import { GiRoundStar } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonal() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      content: "Gamecrio has been a superstar, very helpful. The experience of working with Gamecrio has been outstanding...",
      name: "Charlie Barnes",
      job: "Godot engine animations",
    },
    {
      content: "Gamecrio did amazing work with our Unity project needs! They were proactive and came in with strong opinions...",
      name: "Charlie Barnes",
      job: "Godot engine animations",
    },
    {
      content: "Gamecrio has been a superstar, very helpful. The experience of working with Gamecrio has been outstanding...",
      name: "Charlie Barnes",
      job: "Godot engine animations",
    }
  ];

  return (
    <div className='container-fluid testi-background p-5 mb-xl-5 mb-md-5 mb-lg-5' id='testimonal'>
      <Slider {...settings}>
        {testimonials.map((testi, idx) => (
          <div key={idx} className='testimonal-area-content p-xl-5 p-lg-5'>
            <div className="testimonal-area">
              <div className="icon-section">
                <LiaQuoteLeftSolid className='icon-style-quote' />
                <ul className='start-align'>
                  {Array(5).fill(0).map((_, i) => (
                    <li key={i}><GiRoundStar className='icon-style-star' /></li>
                  ))}
                </ul>
              </div>
              <div className="content-section">
                <p>{testi.content}</p>
              </div>
              <div className="thumbnail-section">
                <img src="/images/testi-thumb.png" alt="testimonial" className='thumb-img' />
                <span className="name">{testi.name}</span>
                <span className="job">{testi.job}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
