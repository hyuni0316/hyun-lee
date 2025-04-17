import React from 'react';
import './About.css';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../../assets/profile.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="Intro">
          <div className="intro-flex">
            <div className="profile-image-container">
              <img src={profileImage} alt="Hyun Lee" className="profile-image" />
            </div>
            <div className="intro-content">
              <div className="hyun-container">
                <h1 className="hyun-title">Hi, I&apos;m Hyun Lee.</h1>
                <h1 className="hyun-title2">
                  I love to{' '}
                  <TypeAnimation
                    sequence={[
                      'design.',
                      3000,
                      // 'create.',
                      // 3000,
                      'develop.',
                      3000,
                      'research.',
                      3000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                  />
                </h1>
              </div>
              <div className="about-content">
                <div className="about-text">
                  <p>
                   Hi, I'm Hyun Lee, a Master's student at <a href="https://reflect9.github.io/ael/" target="_blank" rel="noopener noreferrer" className="highlight-text">AI Experience Lab</a>. 
                   My research explores <span className="highlight-text">human–AI interaction</span>, with a focus on designing <span className="highlight-text">LLM‑based agents</span>. 
                   I'm passionate about understanding how people perceive and interact with AI, 
                   and I strive to build user-centered AI systems.
                  </p>
                  <p>
                  With a background in computer science, 
                  I love building web applications and using data analysis and visualization to bring ideas to life through code.
                   I've also honed my creative problem‑solving skills and my UI/UX design skills through 
                   my industrial design studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="education-section">
          <h3>Education</h3>
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-date">2024.09</div>
              <div className="education-content">
                <div className="education-type">Master's Candidate</div>
                <div className="education-details"><a href="https://reflect9.github.io/ael/" target="_blank" rel="noopener noreferrer">AI Experience Lab</a> - Industrial Design - <a href="https://www.kaist.ac.kr/kr/" target="_blank" rel="noopener noreferrer">KAIST</a></div>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-date">2022.03</div>
              <div className="education-content">
                <div className="education-type">Bachelor</div>
                <div className="education-details">Computer Science - <a href="https://www.ewha.ac.kr/ewha/index.do" target="_blank" rel="noopener noreferrer">Ewha Womans University</a></div>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-date">2020.03</div>
              <div className="education-content">
                <div className="education-type"></div>
                <div className="education-details">Mechanical and Biomedical Engineering - <a href="https://www.ewha.ac.kr/ewha/index.do" target="_blank" rel="noopener noreferrer">Ewha Womans University</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 