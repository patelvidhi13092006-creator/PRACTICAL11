import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <section className="hero">
        <h1>About Our Website</h1>
        <p>
          We help students learn technology and programming.
        </p>

        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Read Less" : "Read More"}
        </button>
      </section>

      <section className="content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide easy learning
          resources and practical knowledge.
        </p>

        {showMore && (
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              We want students to become confident developers
              through practice, creativity and teamwork.
            </p>

            <h3>Our Values</h3>
            <p>Quality, honesty, teamwork and innovation.</p>
          </div>
        )}
      </section>

      <section className="content">
        <h2>Meet Our Team</h2>

        <button onClick={() => setShowTeam(!showTeam)}>
          {showTeam ? "Hide Team" : "View Team"}
        </button>

        {showTeam && (
          <div className="cards">
            <div className="card">
              <h3>Rahul</h3>
              <p>Web Developer</p>
            </div>

            <div className="card">
              <h3>Priya</h3>
              <p>UI Designer</p>
            </div>

            <div className="card">
              <h3>Amit</h3>
              <p>Software Developer</p>
            </div>
          </div>
        )}
      </section>

      <section className="content">
        <h2>Explore Our Work</h2>
        <p>Projects explored: {count}</p>

        <button onClick={() => setCount(count + 1)}>
          Explore Project
        </button>

        <button onClick={() => setCount(0)}>
          Reset Counter
        </button>
      </section>
    </div>
  );
}

export default About;