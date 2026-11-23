import { useState } from "react";

const ME = {
  email: "bharathjayakumar2005@gmail.com",
  phone: "+91 93632 74544",
  github: "https://github.com/Bharath6122",
  linkedin: "https://www.linkedin.com/in/bharath-j-0a7519353/",
};

const SKILLS = {
  Backend: ["Java 17", "Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "JSON"],
  Frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive design", "Fetch API"],
  Database: ["MySQL", "SQL", "JDBC", "Relational design"],
  Tools: ["Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "Eclipse", "VS Code"],
};

const API = {
  "/profile": {
    name: "Bharath J",
    role: "Java Full Stack Developer",
    location: "Chennai, Tamil Nadu",
    education: "BCA, Bishop Heber College (2026)",
    certified: "Java Full Stack Development, Besant Technologies",
    status: "Open to full-time roles",
  },
  "/skills": {
    backend: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate"],
    frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
    database: ["MySQL"],
    tools: ["Git", "Maven", "Postman"],
  },
  "/projects": [
    { id: 1, name: "CAB Booking Application", stack: "Spring Boot, JPA, MySQL" },
    { id: 2, name: "Jaffi Motor Service Centre", stack: "HTML5, CSS3, JavaScript" },
  ],
  "/contact": { email: ME.email, phone: ME.phone, github: "Bharath6122" },
};

const PROJECTS = [
  {
    name: "CAB Booking Application",
    kind: "Backend, REST API",
    stack: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "MySQL", "Postman"],
    points: [
      "Built the backend that manages users, drivers, cabs and bookings through RESTful APIs.",
      "Implemented CRUD with Spring Data JPA, Hibernate and MySQL in a layered Controller, Service, Repository design.",
      "Covered four modules: registration and authentication, cab and driver management, booking and ride management, and booking status tracking.",
      "Tested and debugged every endpoint in Postman using JSON requests and responses.",
    ],
  },
  {
    name: "Jaffi Motor Service Centre",
    kind: "Frontend, responsive website",
    stack: ["HTML5", "CSS3", "Flexbox / Grid", "JavaScript (ES6+)", "Git"],
    points: [
      "Designed and built a fully responsive website for a service centre, with booking and enquiry forms.",
      "Reorganised service information so visitors find what they need faster on phones and desktops.",
      "Used semantic HTML, DOM manipulation and form validation, with code managed on GitHub.",
    ],
  },
];

const PATH = [
  { when: "2026", title: "Java Full Stack Development Intern", where: "Besant Technologies, Velachery, Chennai", text: "Hands-on training across front end, back end, database and REST APIs, working in Agile and SDLC practices." },
  { when: "2023 to 2026", title: "BCA, CGPA 7.0 / 10", where: "Bishop Heber College, Trichy", text: "Bachelor of Computer Applications." },
  { when: "2023", title: "Java Programming and Data Analytics", where: "METS, Trichy and DigiDARA Technologies", text: "Two certifications completed during the degree." },
];

function Console() {
  const [path, setPath] = useState("/profile");
  const body = JSON.stringify(API[path], null, 2);
  return (
    <div className="console" aria-label="Live API example">
      <div className="console-bar">
        <span className="verb">GET</span>
        <span className="url">/api/bharath{path}</span>
        <span className="ok">200 OK</span>
      </div>
      <div className="tabs" role="tablist">
        {Object.keys(API).map((p) => (
          <button key={p} role="tab" aria-selected={p === path} className={p === path ? "on" : ""} onClick={() => setPath(p)}>
            {p}
          </button>
        ))}
      </div>
      <pre key={path} className="json">{body}</pre>
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">Bharath J</a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#path">Experience</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-text">
            <h1>I build Java back ends and React front ends that work together.</h1>
            <p className="lede">
              I'm Bharath, a Java Full Stack Developer from Chennai. I design REST APIs with Spring Boot, connect them to MySQL, and build the React screens people use.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">See my projects</a>
              <a className="btn" href={`${import.meta.env.BASE_URL}Bharath_J_Resume_ATS.pdf`} download>Download résumé</a>
            </div>
          </div>
          <Console />
        </section>

        <section id="about" className="wrap section split">
          <h2>About</h2>
          <div className="prose">
            <p>
              I finished my BCA at Bishop Heber College, Trichy in 2026 and completed Java Full Stack Development training at Besant Technologies in Chennai.
            </p>
            <p>
              I work with Java 17, Spring Boot, Spring Security and Hibernate on the server, and React.js with modern JavaScript on the client. I keep code in clear layers, test endpoints in Postman, and use Git for every change.
            </p>
            <p>I'm looking for a team where I can ship real features and keep learning.</p>
          </div>
        </section>

        <section id="skills" className="wrap section split">
          <h2>Skills</h2>
          <dl className="skills">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group}>
                <dt>{group}</dt>
                <dd>{items.map((s) => <span key={s} className="chip">{s}</span>)}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="projects" className="wrap section">
          <h2>Projects</h2>
          <div className="projects">
            {PROJECTS.map((p) => (
              <article key={p.name} className="project">
                <header>
                  <h3>{p.name}</h3>
                  <p className="kind">{p.kind}</p>
                </header>
                <ul>{p.points.map((t) => <li key={t}>{t}</li>)}</ul>
                <div className="stack">{p.stack.map((s) => <span key={s} className="chip">{s}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="path" className="wrap section split">
          <h2>Experience and education</h2>
          <ol className="path">
            {PATH.map((e) => (
              <li key={e.title}>
                <span className="when">{e.when}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p className="where">{e.where}</p>
                  <p>{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="wrap section contact">
          <h2>Let's work together</h2>
          <p className="lede">I'm open to full-time Java Full Stack roles. The fastest way to reach me is email.</p>
          <a className="btn primary big" href={`mailto:${ME.email}`}>{ME.email}</a>
          <ul className="links">
            <li><a href={`tel:${ME.phone.replace(/\s/g, "")}`}>{ME.phone}</a></li>
            <li><a href={ME.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={ME.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </section>
      </main>

      <footer className="wrap foot">© 2026 Bharath J. Built with React and Vite.</footer>
    </>
  );
}
