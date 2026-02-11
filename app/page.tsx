"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  const [githubHover, setGithubHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);

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

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setFormMessage('Thank you! Your message has been sent successfully.');
        form.reset();
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        setFormStatus('error');
        setFormMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Failed to send message. Please try again later.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">Portfolio.</a>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-link active"><a href="#" onClick={closeMenu}>Home</a></li>
          <li className="nav-link"><a href="#about" onClick={closeMenu}>About Me</a></li>
          <li className="nav-link"><a href="#projects" onClick={closeMenu}>My Projects</a></li>
          <li className="nav-link"><a href="#skills" onClick={closeMenu}>My Skills</a></li>
          <li className="nav-link"><a href="#contact" onClick={closeMenu}>Contact</a></li>
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
            I&apos;m a&nbsp;
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
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: '#c8d0d8',
            margin: '0',
            maxWidth: '520px',
            padding: '10px'
          }}>
            Enthusiastic about crafting user-focused digital solutions using the latest web technologies. I&apos;m eager to
            learn and bring my creative ideas to life through engaging interfaces and mobile app experiences.
          </p>
          <div className="btn-sci" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <a href="#" className="btn">Download CV</a>
            <a 
              href="https://github.com/Ransiluni2003"
              onMouseEnter={() => setGithubHover(true)}
              onMouseLeave={() => setGithubHover(false)}
              style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '55px',
              height: '55px',
              padding: '10px',
              border: '2px solid #7cf03d',
              borderRadius: '50%',
              fontSize: '26px',
              color: githubHover ? '#1f242d' : '#7cf03d',
              background: githubHover ? '#7cf03d' : 'transparent',
              transition: 'all 0.3s ease',
              boxShadow: githubHover ? '0 6px 25px rgba(124, 240, 61, 0.4)' : '0 4px 15px rgba(124, 240, 61, 0.1)',
              transform: githubHover ? 'translateY(-3px)' : 'translateY(0)'
            }}><i className='bx bxl-github'></i></a>
            <a 
              href="https://www.linkedin.com/in/pinithi-ransiluni-8b8936329/"
              onMouseEnter={() => setLinkedinHover(true)}
              onMouseLeave={() => setLinkedinHover(false)}
              style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '55px',
              height: '55px',
              padding: '10px',
              border: '2px solid #7cf03d',
              borderRadius: '50%',
              fontSize: '26px',
              color: linkedinHover ? '#1f242d' : '#7cf03d',
              background: linkedinHover ? '#7cf03d' : 'transparent',
              transition: 'all 0.3s ease',
              boxShadow: linkedinHover ? '0 6px 25px rgba(124, 240, 61, 0.4)' : '0 4px 15px rgba(124, 240, 61, 0.1)',
              transform: linkedinHover ? 'translateY(-3px)' : 'translateY(0)'
            }}><i className='bx bxl-linkedin'></i></a>
          </div>
        </div>
      </section>

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

      <section className="projects section" id="projects">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-grid">
          <div className="project-card">
            <img src="1.png" alt="Project 1" className="project-img" />
            <div className="project-info">
              <h2>The Ring restaurant</h2>
              <p>Designed the Ring Restaurant app in Figma with intuitive navigation, interactive menu browsing, 
secure payments, and special deal features to enhance user engagement.</p>
              <div className="project-languages">
                <span>Kotlin</span>
                <span>Android Studio</span>
                <span>Figma</span>
              </div>
              <p className="git"><a href="https://github.com/Ransiluni2003/Ring-Restaurant-App" target="_blank" rel="noopener noreferrer">Source code</a></p>
            </div>
          </div>
          <div className="project-card">
            <img src="GIM.jpeg" alt="Project 2" className="project-img" />
            <div className="project-info">
              <h2>Fitness and Wellness Center</h2>
              <p>Created a scalable and user-friendly full-stack Fitness and Wellness Center Management System using the MERN stack for membership management, booking, fitness monitoring, virtual consultations, pharmacy services, and financial operations.</p>
              <div className="project-languages">
                <span>MongoDB</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>React</span>
              </div>
              <p className="git"><a href="https://github.com/Ransiluni2003/BODYDOC_Fitness_And_Wellness_Center" target="_blank" rel="noopener noreferrer">Source code</a></p>
            </div>
          </div>
  
          <div className="project-card">
            <img src="Multi.png" alt="Project 3" className="project-img" />
            <div className="project-info">
              <h2>Multi-gatewat-platform</h2>
              <p>Developed web applications using HTML, CSS, JavaScript, and the MERN stack, integrating backend APIs and managing databases with Node.js, Express.js, and MongoDB while improving UI and UX, performance, and collaboration using Git and GitHub.</p>
              <div className="project-languages">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>Node.js</span>
                <span>React</span>
                <span>Docker</span>
              </div>
              <p className="git"><a href="https://github.com/Ransiluni2003/BODYDOC_Fitness_And_Wellness_Center" target="_blank" rel="noopener noreferrer">Source code</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <h1 className="skills-title">My Skills</h1>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-react'></i>
            </div>
            <div className="skill-info">
              <h3>React</h3>
              <p>Building dynamic and responsive user interfaces with modern React patterns and hooks</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-nodejs'></i>
            </div>
            <div className="skill-info">
              <h3>Node.js</h3>
              <p>Developing scalable backend services and RESTful APIs</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-mongodb'></i>
            </div>
            <div className="skill-info">
              <h3>MongoDB</h3>
              <p>Database design and management for modern web applications</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-javascript'></i>
            </div>
            <div className="skill-info">
              <h3>JavaScript</h3>
              <p>Creating interactive web experiences with modern ES6+ features</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-html5'></i>
            </div>
            <div className="skill-info">
              <h3>HTML and CSS</h3>
              <p>Crafting semantic markup and responsive, beautiful designs</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-figma'></i>
            </div>
            <div className="skill-info">
              <h3>Figma</h3>
              <p>UI and UX design and prototyping for mobile and web applications</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-git'></i>
            </div>
            <div className="skill-info">
              <h3>Git and GitHub</h3>
              <p>Version control and collaborative development workflows</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-docker'></i>
            </div>
            <div className="skill-info">
              <h3>Docker</h3>
              <p>Containerization and deployment of applications</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxs-data'></i>
            </div>
            <div className="skill-info">
              <h3>Express.js</h3>
              <p>Building robust server-side applications and APIs</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-wordpress'></i>
            </div>
            <div className="skill-info">
              <h3>WordPress</h3>
              <p>Creating and customizing WordPress websites with themes and plugins</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-java'></i>
            </div>
            <div className="skill-info">
              <h3>Java</h3>
              <p>Object-oriented programming and enterprise application development</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-c-plus-plus'></i>
            </div>
            <div className="skill-info">
              <h3>C and C++</h3>
              <p>System programming and performance-critical applications</p>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className='bx bxl-microsoft'></i>
            </div>
            <div className="skill-info">
              <h3>C#</h3>
              <p>.NET development and Windows application programming</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className='bx bxs-phone'></i>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>0763042001</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className='bx bxs-envelope'></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>pransiluni@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className='bx bxs-location-plus'></i>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Kaluthara, Western Province, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <input type="hidden" name="access_key" value="f8bed0ac-2e8e-47fd-baf2-5a9ad731ec1b" />
              <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" required />
              </div>
              
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows={6} required></textarea>
              </div>
              
              {formMessage && (
                <div className={`form-message ${formStatus}`}>
                  {formMessage}
                </div>
              )}
              
              <button type="submit" className="btn-submit" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
