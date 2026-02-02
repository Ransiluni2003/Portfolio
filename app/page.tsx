"use client";
import { useEffect } from "react";

export default function Home() {
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

  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">Portfolio.</a>
        <ul>
          <li className="nav-link active"><a href="#">Home</a></li>
          <li className="nav-link"><a href="#about">About Me</a></li>
          <li className="nav-link"><a href="#projects">My Projects</a></li>
          <li className="nav-link"><a href="">My Skills</a></li>
          <li className="nav-link"><a href="">My Skills</a></li>
          <li className="nav-link"><a href="">Contact</a></li>
        </ul>
      </nav>

      <div className="bars-animation">
        <div className="bar" style={{ '--i': 6 } as React.CSSProperties}></div>
        <div className="bar" style={{ '--i': 5 } as React.CSSProperties}></div>
        <div className="bar" style={{ '--i': 4 } as React.CSSProperties}></div>
        <div className="bar" style={{ '--i': 3 } as React.CSSProperties}></div>
        <div className="bar" style={{ '--i': 2 } as React.CSSProperties}></div>
        <div className="bar" style={{ '--i': 1 } as React.CSSProperties}></div>
      </div>

      <section className="home">
        <div className="home-info">
          <h1>Pinithi Ransiluni</h1>
          <h2>
            I&apos;m a&nbsp;
            <span style={{ '--i': 0 } as React.CSSProperties} data-text=" Frontend Developer"> Frontend Developer</span>
            <span style={{ '--i': 1 } as React.CSSProperties} data-text=" Software Engineering Undergraduate"> Software Engineering Undergraduate</span>
            <span style={{ '--i': 2 } as React.CSSProperties} data-text=" Software developer"> Software developer</span>
            <span style={{ '--i': 3 } as React.CSSProperties} data-text=" Vedio Editor"> Vedio Editor</span>
          </h2>
        </div>

        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img src="/my-r.png" alt="image" />
            </div>
          </div>
        </div>

        <div className="home-info">
          <p>
            Enthusiastic about crafting user-focused digital solutions using the latest web technologies. I&apos;m eager to
            learn and bring my creative ideas to life through engaging interfaces and mobile app experiences.
          </p>
          <div className="btn-sci">
            <a href="#" className="btn">Download CV</a>
            <div className="sci">
              <a href="https://github.com/Ransiluni2003"><i className="bx bxl-github"></i></a>
              <a href="https://www.linkedin.com/in/pinithi-ransiluni-8b8936329/"><i className="bx bxl-linkedin"></i></a>
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
              Hi! I&apos;m Pinithi Ransiluni, a passionate Software Engineering Undergraduate with a strong interest in
              frontend development, web design, and creative digital solutions. I enjoy crafting clean, responsive user
              interfaces and turning ideas into visually appealing, interactive experiences. I&apos;m always exploring new
              technologies to expand my capabilities. I&apos;m driven by curiosity, a love for learning, and a dedication to
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
