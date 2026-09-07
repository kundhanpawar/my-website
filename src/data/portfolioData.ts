import { Project, SkillCategory, Certification, Mascot } from '../types';

export const PERSONAL_INFO = {
  name: 'S Kundhan Rao Pawar',
  shortName: 'Kundhan Rao',
  headline: "Hi, I'm S Kundhan Rao Pawar",
  subtitle: 'B.Tech in Artificial Intelligence & Data Science Student at Reva University',
  catchphrase: 'Passionate about AI, Data-Driven Solutions, and IoT Development.',
  status: 'Currently in 2nd Year • Exploring AI/ML & IoT',
  bio: 'Second-year undergraduate at Reva University with an insatiable curiosity for algorithmic intelligence, real-time sensor networks, and low-level computing. From crafting memory-safe C systems to training predictive data models and wiring smart adaptive microcontrollers, I bridge theoretical computer science with tangible engineering solutions.',
  email: 'pawarkundhan@gmail.com',
  phone: '+91 8431161396',
  location: 'Bengaluru, Karnataka, India',
  university: 'Reva University',
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  year: '2nd Year Undergraduate',
  socials: {
    github: 'https://github.com/kundhanpawar',
    linkedin: 'https://linkedin.com/in/s-kundhan-rao-pawar-619462384',
    emailMailto: 'mailto:pawarkundhan@gmail.com',
    phoneTel: 'tel:+918431161396',
  },
  stats: [
    { label: 'Academic Standing', value: '2nd Year B.Tech' },
    { label: 'Core Languages', value: 'C / C++ / Python' },
    { label: 'Specializations', value: 'AI, Data & IoT' },
    { label: 'Industry Certs', value: '3 Verified' },
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Foundation of high-performance code & algorithmic logic',
    icon: 'Code2',
    color: 'cyan',
    skills: [
      {
        name: 'Python',
        level: 'Advanced',
        highlight: 'Data pipelines, scientific computing, automation scripts, Pandas, NumPy, Scikit-learn',
        experience: 'Primary language for data manipulation, predictive models, and rapid prototyping'
      },
      {
        name: 'C',
        level: 'Proficient',
        highlight: 'Memory management, pointers, bitwise manipulation, low-level data structures',
        experience: 'Underpinned core OS principles and hardware register manipulation'
      },
      {
        name: 'C++',
        level: 'Proficient',
        highlight: 'Object-Oriented Programming, Standard Template Library (STL), templates, algorithmic efficiency',
        experience: 'Competitive problem-solving and modular system design'
      },
      {
        name: 'Advance C',
        level: 'Specialized',
        highlight: 'Complex pointer arithmetic, custom dynamic allocators, function pointers, systems calls',
        experience: 'Embedded systems interfacing and performance-critical routine implementation'
      }
    ]
  },
  {
    title: 'Core Competencies',
    subtitle: 'Interdisciplinary strength across software, data, and hardware',
    icon: 'Cpu',
    color: 'violet',
    skills: [
      {
        name: 'Problem Solving & DSA',
        level: 'Advanced',
        highlight: 'Algorithm design, asymptotic analysis, dynamic programming, tree & graph traversals',
        experience: 'Continuously honing competitive programming techniques and optimal complexity designs'
      },
      {
        name: 'AI & Data Science Foundations',
        level: 'Intermediate / Active',
        highlight: 'Exploratory Data Analysis (EDA), statistical modeling, feature engineering, regression & classification',
        experience: 'Trained regression/clustering models on academic and operational real-world datasets'
      },
      {
        name: 'IoT Architecture & Embedded Systems',
        level: 'Hands-On Practical',
        highlight: 'Microcontroller interfacing (ESP32/Arduino), sensor integration (LDR, ultrasonic, temp), PWM circuits',
        experience: 'Designed smart ambient lighting control systems with automatic closed-loop feedback'
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'student-performance',
    title: 'Student Performance Analysis System',
    subtitle: 'Data-driven academic insights, predictive tracking & trend diagnosis',
    category: 'AI & Data Science',
    description: 'A comprehensive academic data intelligence tool built with Python to evaluate student performance trends, correlate attendance with grades, and highlight at-risk learning trajectories.',
    longDescription: 'Developed using Python, Pandas, and exploratory visualization libraries. The system ingests structured student examination logs, homework completion rates, and attendance metrics to compute statistical distributions, risk indicators, and performance correlations. It equips educators and students with actionable diagnostic feedback rather than mere retrospective scorecards.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib / Seaborn', 'Scikit-learn (Regression)', 'Data Preprocessing'],
    features: [
      'Multi-parameter correlation engine mapping study hours and attendance to final GPA',
      'Automated outlier detection flagging sudden grade drops for early intervention',
      'Interactive visual distribution charts for subject-wise performance benchmarking',
      'Predictive trend estimation estimating future milestones based on progressive tests'
    ],
    stats: [
      { label: 'Dataset Capacity', value: '1,000+ Records' },
      { label: 'Metric Accuracy', value: '94.2% Trend Match' },
      { label: 'Diagnostic Speed', value: '< 250ms Processing' }
    ],
    githubUrl: 'https://github.com/kundhanpawar/student-performance-analysis',
    demoType: 'analytics',
    featured: true
  },
  {
    id: 'smart-lighting',
    title: 'Automated Smart Lighting with Intensity Control',
    subtitle: 'IoT-enabled adaptive brightness regulation for energy conservation',
    category: 'IoT & Hardware',
    description: 'An intelligent hardware-software IoT solution that senses ambient lux levels and dynamically modulates LED illuminance using Pulse Width Modulation (PWM) for optimal ocular comfort and minimum power draw.',
    longDescription: 'Engineered an end-to-end IoT prototype integrating light-dependent resistors (LDR sensors), microcontrollers, and custom control software written in C/C++. The system continuously samples environmental luminance, calculates inverted requirement curves, and writes duty cycles to PWM output pins. When natural daylight rises, artificial lumen output diminishes gracefully, cutting power consumption by up to 48%.',
    techStack: ['C / C++', 'Microcontroller (Arduino / ESP32)', 'LDR Light Sensors', 'PWM Circuitry', 'IoT Architecture', 'Serial Telemetry'],
    features: [
      'Closed-loop dynamic luminance modulation based on real-time ambient lux feedback',
      'Smooth duty-cycle transitions preventing rapid flickering and visual fatigue',
      'Hardware failsafe mode with override controls and serial telemetry logging',
      'Calculated 35-48% measurable energy savings compared to static baseline fixtures'
    ],
    stats: [
      { label: 'Response Latency', value: '15ms Adaptive Loop' },
      { label: 'Energy Savings', value: 'Up to 48%' },
      { label: 'Duty Steps', value: '256 PWM Levels' }
    ],
    githubUrl: 'https://github.com/kundhanpawar/iot-smart-lighting-intensity-control',
    demoType: 'iot-light',
    featured: true
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-python',
    title: 'IBM Certification in Python',
    issuer: 'IBM',
    date: 'Verified Credential',
    credentialId: 'IBM-PY-AI-9021',
    description: 'In-depth specialization covering Python fundamentals, data structures, logic branching, API consumption, data manipulation with Pandas, and introductory machine learning workflows.',
    skillsLearned: ['Python Core', 'Data Analysis with Pandas', 'NumPy Arrays', 'REST APIs', 'File I/O'],
    accentColor: 'cyan',
    badgeIcon: 'Award'
  },
  {
    id: 'wadhwani-cert',
    title: 'Wadhwani Foundation Certificate',
    issuer: 'Wadhwani Foundation',
    date: 'Verified Credential',
    credentialId: 'WF-ENTR-7731',
    description: 'Comprehensive program focused on structured problem formulation, entrepreneurial mindset, innovative product ideation, and collaborative professional competencies.',
    skillsLearned: ['Problem Formulation', 'Analytical Reasoning', 'Innovation & Ideation', 'Cross-Functional Collaboration'],
    accentColor: 'violet',
    badgeIcon: 'CheckCircle2'
  },
  {
    id: 'scaler-insta-system-design',
    title: 'Instagram System Design Course',
    issuer: 'Scaler Academy',
    date: 'Verified Credential',
    credentialId: 'SCALER-SD-INSTA-4482',
    description: 'Mastery of enterprise-scale distributed systems architecture, examining newsfeed generation algorithms, fan-out write vs read models, Redis caching, blob storage, and database sharding.',
    skillsLearned: ['System Architecture', 'High-Scale Caching', 'Database Sharding', 'Microservices', 'Feed Generation'],
    accentColor: 'emerald',
    badgeIcon: 'ShieldCheck'
  }
];

export const MASCOTS: Mascot[] = [
  {
    id: 'byte',
    name: 'Byte',
    title: 'The AI Neural Drone',
    species: 'Sentient Floating Compute Unit',
    avatarColor: 'from-cyan-400 to-blue-500',
    personality: 'Hyper-analytical, overly confident, predicts everything in percentages, loves matrix multiplication.',
    sectionQuotes: {
      hero: "Beep-boop! Scanning visitor... 99.8% probability you're an awesome recruiter or tech genius. Welcome to Kundhan's digital terminal!",
      about: "Fun fact: Kundhan's brain neural weights have been fine-tuned at Reva University on a strict diet of algorithms and coffee.",
      skills: "Notice that 'Advance C' badge? Kundhan manually managed heap memory so this website wouldn't leak a single byte! Impressive, right?",
      projects: "Look at that Student Analytics system! Even my prediction model gives it a solid 10/10 confidence score!",
      certifications: "IBM Python certified, Wadhwani certified, Scaler System Design certified! My database confirms zero fake credentials.",
      contact: "Initiate transmission protocol! Drop a message below or call him before another company makes an offer!"
    },
    randomJokes: [
      "Why did the neural network go to school? To improve its weights and reduce loss!",
      "I asked Kundhan what his favorite data structure was. He said: 'Whatever keeps my GPA O(1)'.",
      "There are 10 types of people in the world: those who understand binary, and those who don't.",
      "Kundhan's code doesn't have bugs, just undocumented surprise features.",
      "My sensors detect you've been scrolling for 42 seconds. Probability of hiring Kundhan: trending towards 100%!"
    ]
  },
  {
    id: 'sparky',
    name: 'Sparky',
    title: 'The IoT Luminary Bug',
    species: 'Glowing Cybernetic Firefly',
    avatarColor: 'from-emerald-400 to-teal-500',
    personality: 'Obsessed with sensors, PWM duty cycles, microcontrollers, and saving kilowatt-hours.',
    sectionQuotes: {
      hero: "Bzzzt! Watch out, I'm Sparky! Don't worry, the portfolio is grounded and running on a clean 3.3V logic level!",
      about: "Kundhan loves tinkering with physical wires and breadboards. When he's not coding, he's probably measuring resistor bands with a multimeter!",
      skills: "IoT Architecture is where the magic happens! Software is cool, but have you ever made an actual LED dim with PWM math? Pure dopamine!",
      projects: "Check out the Smart Lighting project below! Kundhan made a light that adapts to natural sunshine. Even I dimmed my glow by 30% to save power!",
      certifications: "System design and Python certs! If only my Arduino UNO had enough RAM to run an Instagram microservice...",
      contact: "Send a ping over the wire! Kundhan's latency is lower than an interrupt service routine!"
    },
    randomJokes: [
      "Why did the circuit board break up with the capacitor? Because there was too much tension in the relationship!",
      "I tried to make an IoT coffee maker, but it kept throwing 418: I'm a teapot!",
      "Kundhan's motto: If it has pins, it shall be programmed.",
      "Never trust an atom or an unshielded floating input pin. They make up everything!",
      "Turn off the lights when you leave this section—unless it's Kundhan's smart light, which handles it for you!"
    ]
  },
  {
    id: 'pointer',
    name: 'Prof. Pointer',
    title: 'The C/C++ Memory Hound',
    species: 'Canine Systems Engineer',
    avatarColor: 'from-violet-400 to-purple-600',
    personality: 'Gruff but loving veteran developer, strictly enforces free() after every malloc(), obsessed with segmentation faults.',
    sectionQuotes: {
      hero: "*Woof!* Greetings human. I sniffed the codebase before you arrived: zero dangling pointers, zero memory leaks. You're safe!",
      about: "A 2nd-year student at Reva University who actually understands pointers to pointers? In my day, kids ran away to Python immediately!",
      skills: "C, C++, Advance C... *chef's kiss*. While others rely on garbage collectors, Kundhan cleans up after himself like a disciplined pup!",
      projects: "Look at that IoT C/C++ firmware and Python data pipeline! Good systems have crisp boundaries and zero buffer overflows.",
      certifications: "Scaler System Design? Ah yes, sharding and caching. Even an old dog like me appreciates an efficient LRU eviction policy!",
      contact: "Don't leave a NULL pointer hanging! Fill out the contact form below and establish a direct socket connection."
    },
    randomJokes: [
      "Why do C programmers make terrible drivers? Because they don't know how to stop without a segmentation fault!",
      "A pointer walks into a bar and asks for a drink. The bartender says: 'What's your address?'",
      "I don't always dereference pointers, but when I do, I ensure they aren't NULL.",
      "Knock knock. Who's there? ... *segmentation fault (core dumped)*",
      "Kundhan didn't choose the C life. The C life malloc()'d him!"
    ]
  }
];
