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
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  ],
  experience: [
    {
      id: 1,
      role: "Basics of Data Structure and Algorithm (Training)",
      company: "Lovely Professional University",
      duration: "Aug 2025",
      highlights: [
        "Learnt about the basics of data structure and algorithm on the topics array, linkedlist, stack, queue, graph, trees from basics to intermediate level.",
        "Formulated a project on “Automated Timetable Generator” from basic understanding of data structure and algorithm, aimed to generate conflict-free class schedules by applying algorithmic concepts such as graph coloring and greedy methods.",
        "Gained hands-on experience using C++ STL and file handling to manage data efficiently during project designing."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "SwasthyaSetu",
      subtitle: "Healthcare Management & Telemedicine Platform",
      date: "Dec 2025",
      description: "Full-stack telemedicine platform with appointment scheduling, video consultations via WebRTC & Socket.IO, reducing manual coordination by 60%.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "WebRTC", "Socket.IO", "REST APIs", "JWT"],
      link: "https://fullstack-ca-ny6g.vercel.app/",
      github: "https://github.com/Rahman-h-md/fullstackCA",
      image: "/Screenshot 2026-03-23 231547.png"
    },
    {
      id: 2,
      title: "Human Anatomy in AR",
      subtitle: "Augmented Reality Anatomy Visualizer",
      date: "May 2025",
      description: "Immersive AR web platform for real-time 3D human anatomy interaction with 98% rendering accuracy using Three.js and AR.js.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL", "Three.js", "AR.js"],
      link: "#",
      github: "https://github.com/Rahman-h-md/frontendp"
    },
    {
      id: 3,
      title: "CycleTrack",
      subtitle: "Personal Period Tracking Companion",
      date: "Mar 2024",
      description: "Privacy-first period tracking web app with accurate cycle predictions based on personal history, featuring secure data storage and an intuitive UI.",
      tech: ["React.js", "CSS3", "JavaScript", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
      image: "/Screenshot 2026-03-23 231234.png"
    },
    {
      id: 4,
      title: "Developer Portfolio",
      subtitle: "Interactive Full-Stack Portfolio Website",
      date: "Mar 2026",
      description: "Modern personal portfolio with 3D hero section, AI chatbot, contact form backend, animated sections, and dark glassmorphism design.",
      tech: ["React.js", "Framer Motion", "Three.js", "Node.js", "MongoDB", "Express.js"],
      link: "#",
      github: "https://github.com/Rahman-h-md/portfolio",
      image: "/Screenshot 2026-03-24 010258.png"
    },
    {
      id: 5,
      title: "Sudoku Solver",
      subtitle: "DSA-Powered Puzzle Solver",
      date: "Jul 2024",
      description: "Interactive Sudoku solver using backtracking algorithm with step-by-step visualization, developed as part of GeeksForGeeks DSA training.",
      tech: ["C++", "DSA", "Backtracking", "Algorithm"],
      link: "#",
      github: "#"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Digital Skills: Social Media",
      issuer: "FutureLearn",
      date: "Mar 2026",
      file: "/digital-skills-social-media_certificate_of_achievement_s7ews3a.pdf"
    },
    {
      id: 2,
      title: "Computational Theory: Language Principle & Finite Automata Theory",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      file: "/Infosys1.pdf"
    },
    {
      id: 3,
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      file: "/Infosys2.pdf"
    },
    {
      id: 4,
      title: "Master Generative AI & Generative AI Tools (ChatGPT & more)",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      file: "/Infosys3.pdf"
    },
    {
      id: 5,
      title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      issuer: "Infosys Springboard",
      date: "Aug 2025",
      file: "/Infosys4.pdf"
    },
    {
      id: 6,
      title: "Basics of DSA — Certificate of Merit",
      issuer: "Lovely Professional University",
      date: "Jul 2025",
      file: "/Screenshot 2025-08-25 174523.png"
    },
    {
      id: 7,
      title: "Web Ka Hackathon — Participant",
      issuer: "Lovely Professional University",
      date: "2024",
      file: "/hackathon.jpg"
    },
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
        "Gained insights into technical and behavioral interview strategies, including resume building and mock interviews"
      ]
    },
    {
      id: 2,
      category: "VOLUNTEERING",
      title: "NGO Volunteer – Nayi Asha",
      organization: "Nayi Asha NGO",
      date: "July, 2024",
      highlights: [
        "Contributed towards social awareness and development initiatives",
      ]
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Solved DSA Questions",
      organization: "LeetCode",
      date: "Present",
      description: "Continuously enhancing problem-solving and algorithmic skills by consistently solving complex Data Structures and Algorithms challenges.",
      icon: "star",
      link: "#"
    },
    {
      id: 3,
      title: "Excellence in Web Development",
      organization: "Google Developer Student Clubs",
      date: "August 2024",
      description: "Recognized for outstanding contribution to the university's official student portal UI/UX redesign and frontend architecture.",
      icon: "award",
      link: "#"
    },
    {
      id: 4,
      title: "Open Source Contributor of the Month",
      organization: "React Community",
      date: "May 2024",
      description: "Highlighted for successfully merging 5 critical bug-fix pull requests into popular open source React component libraries.",
      icon: "star",
      link: "#"
    }
  ]
};
