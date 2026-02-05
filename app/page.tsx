"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section"));
    const navLinks = Array.from(document.querySelectorAll<HTMLElement>(".nav-link"));

    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id") || "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("active");
        const a = li.querySelector("a");
        if (a && a.getAttribute("href") === `#${current}`) {
          li.classList.add("active");
        }
      });

      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          aboutSection.classList.add("visible");
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">Portfolio.</a>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-link active"><a href="#" onClick={closeMenu}>Home</a></li>
          <li className="nav-link"><a href="#about" onClick={closeMenu}>About Me</a></li>
          <li className="nav-link"><a href="#projects" onClick={closeMenu}>My Projects</a></li>
          <li className="nav-link"><a href="" onClick={closeMenu}>My Skills</a></li>
          <li className="nav-link"><a href="" onClick={closeMenu}>My Skills</a></li>
          <li className="nav-link"><a href="" onClick={closeMenu}>Contact</a></li>
        </ul>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="bars-animation">
        <div className="bar" style={{ ['--i' as any]: 6 }}></div>
        <div className="bar" style={{ ['--i' as any]: 5 }}></div>
        <div className="bar" style={{ ['--i' as any]: 4 }}></div>
        <div className="bar" style={{ ['--i' as any]: 3 }}></div>
        <div className="bar" style={{ ['--i' as any]: 2 }}></div>
        <div className="bar" style={{ ['--i' as any]: 1 }}></div>
      </div>

      <section className="home">
        <div className="home-info">
          <h1>Pinithi Ransiluni</h1>
          <h2>
            I'm a&nbsp;
            <span style={{ ['--i' as any]: 0 }} data-text=" Frontend Developer"> Frontend Developer</span>
            <span style={{ ['--i' as any]: 1 }} data-text=" Software Engineering Undergraduate"> Software Engineering Undergraduate</span>
            <span style={{ ['--i' as any]: 2 }} data-text=" Software developer"> Software developer</span>
            <span style={{ ['--i' as any]: 3 }} data-text=" Vedio Editor"> Vedio Editor</span>
          </h2>
        </div>
        
        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img src="/my-r.png" alt="image" />
            </div>
          </div>
        </div>

        <div className="home-info-bottom">
          <p>
            Enthusiastic about crafting user-focused digital solutions using the latest web technologies. I'm eager to
            learn and bring my creative ideas to life through engaging interfaces and mobile app experiences.
          </p>
          <div className="btn-sci">
            <a href="#" className="btn">Download CV</a>
            <div className="sci">
              <a href="https://github.com/Ransiluni2003"><i className='bx bxl-github'></i></a>
              <a href="https://www.linkedin.com/in/pinithi-ransiluni-8b8936329/"><i className='bx bxl-linkedin'></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about">
        <div className="about-main">
          <img src="/my-r.png" alt="image" />
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              Hi! I'm Pinithi Ransiluni, a passionate Software Engineering Undergraduate with a strong interest in
              frontend development, web design, and creative digital solutions. I enjoy crafting clean, responsive user
              interfaces and turning ideas into visually appealing, interactive experiences. I'm always exploring new
              technologies to expand my capabilities. I’m driven by curiosity, a love for learning, and a dedication to
              building user-centered designs that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects section" id="projects">
        <div className="projects-grid">
          <div className="project-card">
            <img src="1.png" alt="Project 1" className="project-img" />
            <div className="project-info">
              <h2>Project 1</h2>
              <p>Developed a user-friendly mobile app for The Ring Restaurant to view offers, prices, and place orders easily. </p>
              <div className="project-languages">
                <span>Kotlin</span>
                <span>Android Studio</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="/project2.jpg" alt="Project 2" className="project-img" />
            <div className="project-info">
              <h2>Project 2</h2>
              <p>Short description for project two. Highlight main features and purpose.</p>
              <div className="project-languages">
                <span>React</span>
                <span>CSS</span>
                <span>TypeScript</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="/project3.jpg" alt="Project 3" className="project-img" />
            <div className="project-info">
              <h2>Project Three</h2>
              <p>Short description for project three. Highlight main features and purpose.</p>
              <div className="project-languages">
                <span>Python</span>
                <span>Django</span>
                <span>HTML</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
