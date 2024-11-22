import React from 'react';  
import { useNavigate } from 'react-router-dom';  
import Button from 'react-bootstrap/Button';  
import Card from 'react-bootstrap/Card';  
import './About.css'; 

const About = () => {  
  const navigate = useNavigate(); 

  return (  
    <div className="about-container">  
      <h2>About Me</h2>  
      <p>My name is Jovenson SA. Icban. I’m a dedicated developer with a passion for crafting meaningful web experiences. With a solid background in front-end development, I strive to enhance the web by creating intuitive and visually appealing designs.</p>  

      {/* Card for the image with custom size */}  
      <Card className="profile-card custom-card">  
        <Card.Img variant="top" src="/images/profile.png" alt="Profile" />  
        <Card.Body>  
          <Card.Title>Background</Card.Title>  
          <Card.Text>  
          I have experience working with a range of technologies, including React, JavaScript, HTML, CSS, and various back-end frameworks. I am always enthusiastic about learning new skills and staying current with the latest advancements in web development.  
          </Card.Text>  
          {/* Button to navigate to Contact page */}
          <Button variant="primary" onClick={() => navigate('/contact')}>  
            Contact Me  
          </Button>  
        </Card.Body>  
      </Card>  

      <div className="skills-container">  
        <h3>Skills</h3>  
        <ul>  
          <li>Frontend Development: React, JavaScript, HTML5 & CSS3, Bootstrap</li>  
          <li>Backend Development: Node.js, Express, MongoDB, SQL</li>  
          <li>Tools & Other Skills: Git & GitHub, APIs, Responsive Design, UI/UX Design</li>  
        </ul>  
      </div>  

      <p>Over the years, I have acquired practical experience in designing and deploying web applications across diverse industries. Whether working independently or collaborating within a team, I am committed to consistently delivering exceptional results.</p>  
    </div>  
  );  
};  

export default About;
