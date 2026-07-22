export const projects = [
  {
    title: 'CrisisMesh',
    description:
      'Resilient emergency communication platform. Android devices form a self-organizing mesh over Bluetooth/Nearby Connections to relay SOS messages when the internet is down, with a Spring Boot backend delivering real-time status over WebSocket, offline message queuing, retry with exponential backoff, and Dockerized deployment.',
    tech: ['Java', 'Spring Boot', 'WebSocket', 'Kotlin', 'PostgreSQL', 'Docker', 'React'],
    github: 'https://github.com/goat-89/crisismesh-offline-emergency-platform',
    demo: '',
    featured: true,
  },
  {
    title: 'InternNext Pro',
    description:
      'Internship and recruitment platform supporting 3 user roles (students, employers, admins) across 10+ workflows — listings, applications, shortlisting, search, filters, and notifications. Secured with Supabase Auth, Row Level Security, and server-side Razorpay payment verification, with automated tests protecting critical flows.',
    tech: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Razorpay'],
    github: 'https://github.com/goat-89/InternNext-pro',
    demo: '',
    featured: true,
  },
  {
    title: 'Mini Gemini API',
    description:
      'Production-style FastAPI microservice exposing a POST /generate endpoint that validates prompts with Pydantic schemas and returns Gemini-generated responses with sub-second average latency. CORS middleware, environment-based key management, and modular routing/schema/inference layers.',
    tech: ['Python', 'FastAPI', 'Pydantic', 'Google Gemini API'],
    github: 'https://github.com/goat-89/mini-gemini',
    demo: '',
    featured: true,
  },
  {
    title: 'Face Detection System',
    description:
      'Real-time computer-vision pipeline using OpenCV Haar cascade classifiers to detect and localize faces in images and live video at 25+ FPS on CPU. Grayscale conversion, histogram equalization, and frame preprocessing improve robustness — validated across 100+ images with varied lighting and angles.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Image Processing'],
    github: '',
    demo: '',
    featured: false,
  },
  {
    title: 'CodSoft Java Tasks',
    description:
      'A series of five Java console applications built during the CodSoft internship, applying OOP principles, reusable class design, input validation, and exception-aware logic.',
    tech: ['Java', 'OOP'],
    github: 'https://github.com/goat-89/CODESOFT',
    demo: '',
    featured: false,
  },
]
