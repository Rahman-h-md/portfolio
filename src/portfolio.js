import { Code2, Briefcase, GraduationCap, Award, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Md Hasibu Rahman",
    role: "Full Stack Developer",
    tagline: "Building modern, dynamic, and responsive web experiences.",
    about: "I am a passionate software developer specializing in React and modern web technologies. I love creating beautiful user interfaces and scalable backend systems. Always eager to learn new technologies and take on exciting challenges.",
    email: "rahmanhasibu2@gmail.com",
    github: "https://github.com/Rahman-h-md",
    linkedin: "https://www.linkedin.com/in/hasiburahman04",
    resumeUrl: "/CV-rahman-12322817.pdf",
    profileImage: "/portfolioProfile.jpg",
    aboutPage: {
      quickFacts: [
        { icon: "📍", label: "Location", value: "Bihar, India" },
        { icon: "🎓", label: "Education", value: "Pursuing B.Tech in Computer Science" },
        { icon: "💼", label: "Experience", value: "Aspiring Developer" }
      ],
      hobbies: [
        { icon: "💻", label: "Surfing Web" },
        { icon: "📚", label: "Travel" },
        { icon: "🎵", label: "Music" }
      ],
      myJourney: [
        "Hello! I'm Md Hasibu Rahman, a passionate developer with a deep fascination for transforming complex problems into elegant digital solutions.",
        "My journey in tech began with curious exploration and has evolved into a focused expertise in full-stack development. I specialize in crafting responsive, user-centered applications using React, Node.js, and modern cloud infrastructure.",
        "What drives me is the intersection of technology and creativity—finding that perfect balance between functional code and intuitive design. I'm constantly expanding my skills through hands-on projects and keeping up with emerging technologies."
      ],
      myApproach: "I believe in creating technology that's not just functional but meaningful. Every line of code I write aims to solve real problems and enhance user experiences. I value clean architecture, collaborative development, and continuous learning as the foundations of great software."
    }
  },
  education: [
    {
      id: 1,
      category: "DEGREE",
      title: "Bachelor of Technology in Computer Science",
      organization: "Lovely Professional University",
      date: "2023 - 2027",
      highlights: [
        "Specialization in Full Stack Web Development",
        "Current CGPA: 7.8"
      ]
    },
    {
      id: 2,
      category: "SENIOR SECONDARY",
      title: "Class XI/XII (CBSE)",
      organization: "Kendriya Vidyalaya Tirumalagiri",
      date: "2020 - 2022",
      highlights: [
        "Percentage: 72.4%",

      ]
    },
    {
      id: 3,
      category: "MATRICULATION",
      title: "Class X (CBSE)",
      organization: "Kendriya Vidyalaya Tirumalagiri",
      date: "2019 - 2020",
      highlights: [
        "Percentage: 85%",

      ]
    },
  ],
  skills: [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  ],
  experience: [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "2023 - Present",
      description: "Developed engaging user interfaces using React and Framer Motion. Improved application performance by 30%."
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "Digital Agency",
      duration: "2022 - 2023",
      description: "Assisted in building responsive websites for clients. Gained hands-on experience with modern CSS frameworks."
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A drag-and-drop task management tool built with React and Redux.",
      tech: ["React", "Redux", "Framer Motion"],
      link: "#",
      github: "#"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      link: "#"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2022",
      link: "#"
    }
  ],
  extracurricular: [
    {
      id: 1,
      category: "SUMMER TRAINING",
      title: "Complete Interview Preparation",
      organization: "GeeksForGeeks",
      date: "June - July, 2024",
      highlights: [
        "Learned essential DSA, system design, and core CS concepts tailored for coding interviews",
        "Practiced a wide range of coding problems with step-by-step explanations and solutions",
        "Gained insights into technical and behavioral interview strategies, including resume building and mock interviews",
        "Developed a Sudoku Solver as a Project using the DSA skills learned in the course"
      ]
    },
    {
      id: 2,
      category: "HACKATHON",
      title: "Smart India Hackathon",
      organization: "LPU",
      date: "August, 2024",
      highlights: [
        "Built an intuitive platform for farmers to list and showcase their products with images",
        "Differentiated accounts of farmers and consumers providing them different functionality",
        "Facilitated direct transactions between farmers and consumers for a seamless purchasing experience"
      ],
      tech: "HTML, CSS, JavaScript, React.Js, Node.Js, MongoDB"
    },
    {
      id: 3,
      category: "WORKSHOP",
      title: "IOT Devices",
      organization: "LPU",
      date: "March, 2023",
      highlights: [
        "Designed an automated highway lighting system for efficient energy usage",
        "Implemented Arduino to control and manage the lighting mechanism",
        "Integrated motion sensors and counters to activate lights based on vehicle movement"
      ],
      tech: "C, Arduino"
    }
  ]
};
