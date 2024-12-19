// About.jsx
import React from "react";
import "./About.css";

const About = () => {
  const aboutData = {
    title: "About Us",
    tagline: "Bringing food closer to you",
    mission:
      "Our mission is to provide fast, convenient, and affordable food delivery at your doorstep.",
    team: [
      {
        name: "John Doe",
        role: "Founder & CEO",
        bio: "Experienced in tech startups and customer solutions.",
      },
      {
        name: "Jane Smith",
        role: "Lead Developer",
        bio: "Full-stack developer specializing in React and Node.js.",
      },
    ],
    values: ["Customer-first", "Convenience", "Quality"],
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    socialProof: [
      { platform: "App Store", review: "5-star ratings from 100,000+ users!" },
    ],
  };

  return (
    <div className="about">
      <div className="about-header">
        <h1>{aboutData.title}</h1>
        <p>{aboutData.tagline}</p>
      </div>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>{aboutData.mission}</p>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          {aboutData.team.map((member, index) => (
            <div className="team-member" key={index}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-values">
        <h2>Core Values</h2>
        <ul>
          {aboutData.values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </section>

      <section className="about-tech">
        <h2>Technology We Use</h2>
        <ul>
          {aboutData.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="about-social-proof">
        <h2>What People Are Saying</h2>
        {aboutData.socialProof.map((item, index) => (
          <p key={index}>
            <strong>{item.platform}:</strong> {item.review}
          </p>
        ))}
      </section>
    </div>
  );
};

export default About;
