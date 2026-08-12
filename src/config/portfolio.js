// Source of Truth Data Architecture from Resume of Suhas N R

export const portfolio = {
  personal: {
    name: "Suhas N R",
    headline: "Computer Science Engineer | AI & Full-Stack Systems Architect",
    role: "Computer Science Engineer",
    subhead: "building intelligent software & scalable web applications.",
    about: "Computer Science Engineering student at Canara Engineering College (CGPA: 8.13). Passionate about artificial intelligence, full-stack systems engineering, and document privacy analysis. Proven track record in architecting AI-powered platforms with Google Gemini AI, OpenAI Whisper, PyAnnote speaker diarization, and Tesseract OCR.",
    profileImage: "/profile.jpg",
    profileImageVariants: [
      "/profile.jpg",
      "/profile.png",
      "/profile.webp"
    ],
    resumePdf: "/Suhas_N_R_Resume.pdf",
    codeTag: "SNR.DEV",
    batch: "CSE • 2027",
    cgpa: "8.13 CGPA",
    location: "Mangaluru, India",
    email: "suhasnr733@gmail.com",
    phone: "+91 86600 64479",
    githubUrl: "https://github.com/suhasnr733-design",
    linkedinUrl: "https://linkedin.com/in/suhasnr",
    tagline: "BUILD • LEARN • CREATE",
    floatingBadges: [
      { text: "CS ENGINEER", position: "top-left" },
      { text: "AI × FULL STACK", position: "bottom-right" }
    ]
  },

  education: [
    {
      institution: "Canara Engineering College",
      location: "Mangaluru, India",
      degree: "Bachelor of Engineering in Computer Science (CSE)",
      score: "CGPA: 8.13",
      period: "2023 – 2027",
      details: "Specializing in Computer Science Engineering, Algorithms, Full-Stack Architecture, and Artificial Intelligence."
    },
    {
      institution: "Government Pre-University College",
      location: "Sringeri, Karnataka",
      degree: "Pre-University Course (PCMB)",
      score: "90.67%",
      period: "2021 – 2023",
      details: "Physics, Chemistry, Mathematics, Biology specialization with strong analytical foundation."
    }
  ],

  experience: [
    {
      company: "InAmigos Foundation",
      role: "AI Web Development Intern",
      period: "Internship",
      description: "Contributed to AI-integrated web application development, implementing responsive interfaces, API endpoints, and intelligent automation workflows."
    }
  ],

  skills: {
    languages: ["Java", "Python", "JavaScript", "SQL", "C"],
    backend: ["Node.js", "Express.js", "FastAPI"],
    frontend: ["React.js", "HTML5", "CSS3"],
    databases: ["MongoDB", "MySQL", "SQLite"],
    aiMl: ["Google Gemini AI", "OpenAI Whisper", "NLP", "OCR", "Prompt Engineering"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "FFmpeg"]
  },

  // Tech Universe Orbiting Nodes
  skillUniverse: [
    { name: "Google Gemini AI", category: "AI/ML", orbitRadius: 180, color: "#38bdf8" },
    { name: "OpenAI Whisper", category: "AI/ML", orbitRadius: 210, color: "#a855f7" },
    { name: "React.js", category: "Frontend", orbitRadius: 150, color: "#61dafbaa" },
    { name: "FastAPI", category: "Backend", orbitRadius: 190, color: "#10b981" },
    { name: "Node.js", category: "Backend", orbitRadius: 160, color: "#22c55e" },
    { name: "MongoDB", category: "Database", orbitRadius: 220, color: "#47a248" },
    { name: "Python", category: "Language", orbitRadius: 140, color: "#3776ab" },
    { name: "Java", category: "Language", orbitRadius: 200, color: "#f89820" },
    { name: "Tesseract OCR", category: "AI/ML", orbitRadius: 230, color: "#ec4899" }
  ],

  projects: [
    {
      id: "careercopilot-ai",
      title: "CareerCopilot AI",
      subtitle: "AI-Powered Career & Resume Parsing Platform",
      featured: true,
      category: "Full Stack & AI",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Google Gemini AI"],
      metrics: [
        { label: "Resume Parsing Accuracy", value: "95–98%" },
        { label: "ATS Score Prediction", value: "85–90%" }
      ],
      description: "Built an AI-powered career platform that parses resumes and matches candidates to job roles with 95-98% accuracy in internal testing. Integrated Google Gemini AI to predict ATS compatibility scores with 85-90% accuracy, enabling job seekers to optimize resumes before applying.",
      architecture: [
        { layer: "Frontend UI", tech: "React.js + Responsive Components" },
        { layer: "API & Backend", tech: "Node.js + Express.js + REST API" },
        { layer: "AI Intelligence", tech: "Python + Google Gemini AI Engine" },
        { layer: "Database Storage", tech: "MongoDB Document Store" }
      ],
      bullets: [
        "Built an AI-powered career platform parsing resumes and matching candidates to job roles with 95–98% resume parsing accuracy in internal testing.",
        "Integrated Google Gemini AI to predict ATS compatibility scores with 85–90% accuracy, enabling users to optimize resumes before applying.",
        "Developed a full-stack architecture using React.js, Node.js, Express.js, and MongoDB to deliver real-time resume feedback and career recommendations."
      ],
      github: "https://github.com/suhasnr733-design",
      liveDemo: "#"
    },
    {
      id: "pii-shield",
      title: "PII Shield",
      subtitle: "Personal Data Privacy & Document Analyzer",
      featured: true,
      category: "Cybersecurity & OCR",
      technologies: ["React.js", "FastAPI", "Python", "Tesseract OCR", "PyMuPDF"],
      metrics: [
        { label: "Document Processing", value: "Real-time" },
        { label: "PII Detection", value: "Multi-Format" }
      ],
      description: "Developed a privacy analysis tool that scans documents and images to automatically detect and flag personally identifiable information (PII). Implemented OCR-based text extraction using Tesseract and PyMuPDF to process scanned documents and PDFs for sensitive data detection.",
      architecture: [
        { layer: "User Interface", tech: "React.js Dashboard & Risk Reports" },
        { layer: "Backend Service", tech: "FastAPI Async Web Service" },
        { layer: "OCR Extraction", tech: "Tesseract OCR + PyMuPDF Parser" },
        { layer: "Redaction Engine", tech: "Python Regex & PII Categorizer" }
      ],
      bullets: [
        "Developed a privacy analysis tool that scans documents and images to automatically detect and flag personally identifiable information (PII).",
        "Implemented OCR-based text extraction using Tesseract and PyMuPDF to process scanned documents and PDFs for sensitive data detection.",
        "Designed a FastAPI backend and React.js frontend to deliver real-time privacy risk reports with actionable redaction suggestions."
      ],
      github: "https://github.com/suhasnr733-design",
      liveDemo: "#"
    },
    {
      id: "silent-whisper",
      title: "Silent Whisper Notetaker",
      subtitle: "AI Meeting Transcription & Diarization Tool",
      featured: true,
      category: "Speech AI & Diarization",
      technologies: ["Python", "FastAPI", "React.js", "OpenAI Whisper", "PyAnnote"],
      metrics: [
        { label: "Transcription Accuracy", value: "92%" },
        { label: "Speaker Diarization", value: "85%" }
      ],
      description: "Built an AI-based meeting transcription tool converting speech to text using OpenAI Whisper with 92% transcription accuracy. Applied PyAnnote for speaker diarization, achieving 85% speaker identification accuracy across multi-speaker audio recordings.",
      architecture: [
        { layer: "Audio Input UI", tech: "React.js Web Audio Recorder" },
        { layer: "API Backend", tech: "FastAPI Streaming Endpoint" },
        { layer: "Speech Model", tech: "OpenAI Whisper AI Model" },
        { layer: "Diarization Core", tech: "PyAnnote Speaker Identifier" }
      ],
      bullets: [
        "Built an AI-based meeting transcription tool converting speech to text using OpenAI Whisper with 92% transcription accuracy.",
        "Applied PyAnnote for speaker diarization, achieving 85% speaker identification accuracy across multi-speaker audio recordings.",
        "Architected a FastAPI backend and React.js frontend to process audio uploads and generate structured, speaker-labeled transcripts."
      ],
      github: "https://github.com/suhasnr733-design",
      liveDemo: "#"
    }
  ],

  achievements: [
    {
      title: "Top 10 Finisher — CORE UNLEASHED",
      event: "36-Hour Innovation Marathon",
      detail: "Selected in the Top 10 out of numerous competing teams for innovative software engineering solution."
    },
    {
      title: "50+ DSA Problems Solved",
      event: "LeetCode & HackerRank",
      detail: "Strengthened core computer science fundamentals, data structures, and algorithmic efficiency."
    }
  ],

  certifications: [
    { title: "Google AI Essentials", issuer: "Google" },
    { title: "MongoDB Basics for Students", issuer: "MongoDB University" },
    { title: "Python 3.4.3 Training", issuer: "Spoken Tutorial Project, IIT Bombay" },
    { title: "AI Web Development Internship", issuer: "InAmigos Foundation" }
  ],

  mindsetProcess: [
    { step: "01", title: "PROBLEM", desc: "Identify real-world bottlenecks & privacy/parsing needs." },
    { step: "02", title: "THINK", desc: "Analyze algorithmic trade-offs, model selection & data flow." },
    { step: "03", title: "DESIGN", desc: "Craft modular REST/FastAPI endpoints & intuitive React interfaces." },
    { step: "04", title: "BUILD", desc: "Develop clean code with Gemini AI, Whisper & full-stack frameworks." },
    { step: "05", title: "TEST", desc: "Validate parsing accuracy, ATS scores & speaker diarization precision." },
    { step: "06", title: "IMPROVE", desc: "Iterate based on performance metrics & document redaction feedback." }
  ]
};
