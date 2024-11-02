import React from 'react';

// Project Component
function Project({ title, description, technologies, github }) {
  return (
    <div className="card shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="text-sm text-gray-500 mt-2">Technologies: {technologies}</p>
        {/* <div className="card-actions justify-end">
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a>
        </div> */}
      </div>
    </div>
  );
}

// Projects Component
function Projects() {
  const user_info = {
    projects: [
      {
        title: "Dalan-Dalan Toba Website",
        description: "This website helps tourists find information about tourist destinations in Toba. Role: Project Manager and Front-End Developer. Responsibilities included leading a team of 4 members, designing and implementing the ‘About’ page, and conducting thorough testing.",
        technologies: "React, HTML, CSS, JavaScript",
        // github: "", // Add the GitHub link if available
      },
      {
        title: "Lumban Binanga Website",
        description: "This website provides information about Lumban Binanga Village. Role: Software Tester and Full Stack Developer. Responsibilities included designing the contact feature, testing the website functions, and designing an attractive UI for the home page.",
        technologies: "React, Node.js, Express, MongoDB",
        // github: "", // Add the GitHub link if available
      },
      {
        title: "Library Management System",
        description: "This system assists library managers with book collection management, loans, and returns. Role: Software Tester and Developer. Responsibilities included conducting functionality and performance testing and designing an attractive UI.",
        technologies: "Java, NetBeans",
        // github: "", // Add the GitHub link if available
      },
      {
        title: "IT Del Campus Information Application",
        description: "An application providing complete information about activities and services on the IT Del campus. Role: Software Tester and UI Designer. Responsibilities included testing all features and designing an attractive UI.",
        technologies: "React, HTML, CSS",
        // github: "", // Add the GitHub link if available
      },
      {
        title: "The Deck Restaurant and Lounge Reservation and Management Application",
        description: "An application built to manage restaurant and lounge reservations and operations efficiently. Role: Project Manager and Software Tester. Responsibilities included leading a team of 4 members and successfully testing the application using the Robot Framework.",
        technologies: "React, Node.js, Express",
        // github: "", // Add the GitHub link if available
      },
    ],
  };

  return (
    <section id="projects" className="p-10 bg-base-100">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16">
        {user_info.projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            // github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
