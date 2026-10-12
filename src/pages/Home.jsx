import { useRef, useState } from "react";

function Home() {
  const servicesRef = useRef(null);
  const [showCourses, setShowCourses] = useState(false);
  const [likes, setLikes] = useState(0);

  function exploreMore() {
    servicesRef.current.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <div className="container">
      <section className="hero">
        <h1>Welcome to MyWebsite</h1>
        <p>
          Learn programming and develop your technical skills.
        </p>

        <button onClick={exploreMore}>
          Explore More
        </button>

        <button onClick={() => setLikes(likes + 1)}>
          👍 Like {likes}
        </button>
      </section>

      <section className="content" ref={servicesRef}>
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>Learn HTML, CSS and React.</p>
          </div>

          <div className="card">
            <h3>Programming</h3>
            <p>Improve your coding skills.</p>
          </div>

          <div className="card">
            <h3>Project Development</h3>
            <p>Build practical projects.</p>
          </div>
        </div>

        <button onClick={() => setShowCourses(!showCourses)}>
          {showCourses ? "Hide Courses" : "Show Courses"}
        </button>

        {showCourses && (
          <div className="card">
            <h3>Available Courses</h3>
            <p>1. React JS</p>
            <p>2. Java Programming</p>
            <p>3. Web Development</p>
            <p>4. Database Management</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;