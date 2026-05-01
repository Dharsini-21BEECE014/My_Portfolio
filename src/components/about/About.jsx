import React from "react";
import "./About.css";
import Image from "../../assets/avatar-9.png";
import Resume from "../../assets/Dharsini M.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi, I’m Dharsini, a B.E. Electronics and Communication Engineering graduate from Karpagam Academy of Higher Education, Coimbatore.
              <br />
              <br />
              I have a strong interest in software development, with hands-on experience in C, C++,Python and Java, along with foundational knowledge in Python and ReactJS. I’ve been actively building web development projects to strengthen my practical skills and deepen my understanding.
I have also completed the AWS Cloud Practitioner certification, which has given me a solid foundation in cloud computing concepts and services.I’m currently seeking opportunities as a Software Development Engineer where I can apply my skills, contribute to real-world projects, and continue learning in a collaborative environment.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about__list">
              <li>C, C++,Python, Java (Basic)</li>
             {/*<li>Swift</li>*/}
              <li>HTML, CSS, JavaScript</li>
              <li>React JS,Angular JS (Basic)</li>
              <li>GitHub</li>
              <li>SQL,Mongodb</li>
              <li>Postman</li>
              <li>AWS Cloud Computing</li>
              <li>VS Code, Eclipse, NetBeans</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Download Resume
            </button>
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;
