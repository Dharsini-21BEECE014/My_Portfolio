import React from "react";
import "./Testimonials.css";
import Image3 from "../../assets/certificate-2.png";
import Image4 from "../../assets/certificate-1.png";
import Image5 from "../../assets/certificate-3.jpg";
import Image6 from "../../assets/certificate-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    // {
    // 	id: 1,
    // 	image: Image4,
    // 	title: "Swift",
    // 	subtitle: "@Infosys Springboard",
    // 	comment: "Fundamentals of Swift programming, including syntax, app development basics. Acquired proficiency in Swift programming for iOS app development. Gained experience with Swift's key frameworks, such as UIKit and SwiftUI, for building user interfaces and handling user interactions in iOS apps."
    // },
    {
      id: 2,
      image: Image3,
      title: "SQL",
      subtitle: "@HackerRank",
      comment:
        "Basic SQL commands, queries, and database management. Gained practical knowledge of SQL for database manipulation and querying. Developed proficiency in writing complex SQL queries for advanced data analysis and reporting.",
    },
    {
      id: 3,
      image: Image5,
      title: "C Language",
      subtitle: "@CSC Champion one Tally Academy",
      comment:
        "Understanding C syntax, including writing, compiling, and running programs, using functions, variables, loops, and conditionals. Learning about data types, pointers, dynamic memory allocation, and efficient memory management. Gaining knowledge in file handling and using input/output functions.",
    },
    {
      id: 4,
      image: Image4,
      title: "HTML",
      subtitle: "@Infosys Springboard",
      comment:
        "Demonstrated expertise in HTML5, including the use of semantic elements and responsive design principles to create user-friendly, accessible web pages. Successfully designed and developed a range of frontend websites, applying best practices in layout and design, and ensuring compatibility.",
    },
    {
      id: 5,
      image: Image6,
      title: "C++",
      subtitle: "@Bharathidasan University",
      comment:
        "Comprehensive coverage of C++ syntax and basic programming concepts.Proficiency in C++ application development and algorithm design,enhancing problem-solving skills.",
    },
    // {
    // 	id: 6,
    // 	image: Image7,
    // 	title: "MS-OFFICE",
    // 	subtitle: "@Apollo Computer Education Limited",
    // 	comment:"Covered Word,Excel and PowerPoint.Proficient in document processing,data analysis,presentation design,and email management using MS Office."
    // }
  ];

  SwiperCore.use([Pagination, Navigation, Autoplay]);

  return (
    <section className="testimonials container section">
      <h2 className="section__title">Certifications</h2>

      <Swiper
        className="testimonial__container grid"
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={true}
        grabCursor={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
