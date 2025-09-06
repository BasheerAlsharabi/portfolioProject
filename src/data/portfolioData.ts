// Portfolio Data Store
// This file contains all the portfolio data that can be edited through the admin panel

export interface HeroData {
  greeting: string;
  firstName: string;
  lastName: string;
  roles: string[];
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface StatData {
  number: string;
  label: string;
}

export interface SkillData {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface AboutData {
  title: string;
  description: string;
  stats: StatData[];
  skills: SkillData[];
}

export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  color: string;
  icon: string;
}

export interface ProjectsData {
  title: string;
  description: string;
  projects: ProjectData[];
}

export interface ServiceData {
  id: number;
  name: string;
  icon: string;
  description: string;
  features: string[];
  color: string;
}

export interface ServicesData {
  title: string;
  description: string;
  services: ServiceData[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

export interface FormLabels {
  name: string;
  email: string;
  message: string;
  submitButton: string;
}

export interface ContactData {
  title: string;
  description: string;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  formLabels: FormLabels;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  projects: ProjectsData;
  services: ServicesData;
  contact: ContactData;
}

// Default portfolio data
export const defaultPortfolioData: PortfolioData = {
  hero: {
    greeting: "Hello, I'm",
    firstName: "Willie",
    lastName: "Garrett",
    roles: [
      "Full Stack Developer",
      "UI/UX Designer",
      "Mobile Developer",
      "Tech Enthusiast",
    ],
    description:
      "Passionate about creating exceptional digital experiences through clean code, innovative design, and cutting-edge technology. Let's build something amazing together.",
    primaryButtonText: "View My Work",
    secondaryButtonText: "Get In Touch",
  },
  about: {
    title: "About Me",
    description:
      "I'm a passionate full-stack developer with a love for creating exceptional digital experiences. With expertise spanning frontend, backend, and mobile development, I bring ideas to life through clean code and innovative design.",
    stats: [
      { number: "5+", label: "Years Experience" },
      { number: "50+", label: "Projects Completed" },
      { number: "30+", label: "Happy Clients" },
      { number: "99%", label: "Client Satisfaction" },
    ],
    skills: [
      {
        name: "Frontend Development",
        icon: "🎨",
        description: "React, Vue, TypeScript, Tailwind CSS",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Backend Development",
        icon: "⚙️",
        description: "Node.js, Python, Express, FastAPI",
        color: "from-green-500 to-emerald-500",
      },
      {
        name: "Mobile Development",
        icon: "📱",
        description: "React Native, Flutter, iOS, Android",
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "DevOps & Cloud",
        icon: "☁️",
        description: "AWS, Docker, CI/CD, Kubernetes",
        color: "from-orange-500 to-red-500",
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    description:
      "Here are some of my recent projects that showcase my skills and expertise. Each project represents a unique challenge and solution in modern web development.",
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
        category: "Web Development",
        color: "from-blue-500 to-cyan-500",
        icon: "🛒",
      },
      {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
        technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
        category: "Mobile Development",
        color: "from-purple-500 to-pink-500",
        icon: "📋",
      },
      {
        title: "AI-Powered Analytics Dashboard",
        description:
          "A comprehensive analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.",
        technologies: ["Python", "React", "TensorFlow", "D3.js", "PostgreSQL"],
        category: "Data Science",
        color: "from-green-500 to-emerald-500",
        icon: "📊",
      },
    ],
  },
  services: {
    title: "Services I Offer",
    description:
      "From concept to deployment, I provide end-to-end development services to bring your ideas to life.",
    services: [
      {
        id: 1,
        name: "Web Development",
        icon: "🌐",
        description:
          "Custom web applications built with modern frameworks like React, Vue, and Next.js. Responsive, fast, and SEO-optimized.",
        features: [
          "React/Vue/Next.js",
          "TypeScript",
          "Responsive Design",
          "SEO Optimization",
        ],
        color: "from-blue-500 to-cyan-500",
      },
      {
        id: 2,
        name: "Mobile Development",
        icon: "📱",
        description:
          "Cross-platform mobile apps using React Native and Flutter. Native performance with shared codebase.",
        features: [
          "React Native",
          "Flutter",
          "iOS & Android",
          "App Store Deployment",
        ],
        color: "from-purple-500 to-pink-500",
      },
      {
        id: 3,
        name: "Backend Development",
        icon: "⚙️",
        description:
          "Scalable backend systems and APIs using Node.js, Python, and cloud services. Database design and optimization.",
        features: [
          "Node.js/Python",
          "RESTful APIs",
          "Database Design",
          "Cloud Deployment",
        ],
        color: "from-green-500 to-emerald-500",
      },
    ],
  },
  contact: {
    title: "Let's Connect",
    description:
      "Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together.",
    contactInfo: {
      email: "willie@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
    },
    socialLinks: [
      {
        name: "LinkedIn",
        icon: "💼",
        url: "https://www.linkedin.com/in/joshua-harris-321a24190/",
        color: "hover:bg-blue-500",
      },
      {
        name: "GitHub",
        icon: "🐙",
        url: "https://github.com/joshua-harris",
        color: "hover:bg-gray-800",
      },
      {
        name: "Twitter",
        icon: "🐦",
        url: "https://twitter.com",
        color: "hover:bg-blue-400",
      },
      {
        name: "Email",
        icon: "📧",
        url: "mailto:willie@example.com",
        color: "hover:bg-red-500",
      },
    ],
    formLabels: {
      name: "Name",
      email: "Email",
      message: "Message",
      submitButton: "Send Message",
    },
  },
};

// Data management functions
export const savePortfolioData = (data: PortfolioData) => {
  localStorage.setItem("portfolioData", JSON.stringify(data));
};

export const loadPortfolioData = (): PortfolioData => {
  const saved = localStorage.getItem("portfolioData");
  return saved ? JSON.parse(saved) : defaultPortfolioData;
};

export const resetPortfolioData = () => {
  localStorage.removeItem("portfolioData");
  return defaultPortfolioData;
};
