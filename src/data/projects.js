export const projects = [
  {
    slug: 'garbage-management-system',
    title: 'Garbage Management System',
    tagline: 'Waste management platform with role-based dashboards for users, vendors and admins.',
    description:
      'A full stack waste management system that gives users, vendors and administrators their own dashboard, so pickups can be scheduled, tracked and managed from one platform instead of ad hoc coordination.',
    problem:
      'Coordinating waste pickups between residents, vendors and administrators is hard to manage without a shared system, which leads to missed bookings and no clear oversight of who is responsible for what.',
    solution:
      "A Django-based platform with three role-based dashboards, so residents can schedule pickups, vendors can manage the bookings assigned to them, and admins get oversight and control, all backed by Django's authentication and CRUD workflows.",
    techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'SQLite', 'Git'],
    features: [
      'Separate dashboards for users, vendors and administrators',
      'Waste pickup scheduling and booking management with full CRUD functionality',
      'Role-based access control and administrative management through Django',
    ],
    challenges: [
      'Structuring Django models and permissions to keep three distinct roles cleanly separated',
      'Designing a booking and scheduling flow that stays consistent across all three dashboards',
    ],
    screenshots: [
      {
        src: '/projects/garbage-management-system/cover.png',
        alt: 'Garbage Management System',
      },
    ],
    github: 'https://github.com/deepakkv8335/garbage-management-system',
    demo: 'https://garbage-management-system-ecosort.onrender.com',
  },
  {
    slug: 'matrimony-platform',
    title: 'Matrimony Platform',
    tagline: 'Responsive matrimony platform with Supabase-backed auth and real-time profiles.',
    description:
      'A responsive matrimony platform built with vanilla JavaScript and Supabase, so members can create an account, build a profile and keep it up to date securely.',
    problem:
      'A matrimony platform handles sensitive personal profile data, so it needs secure sign-in and profile information that stays in sync the moment a member updates it.',
    solution:
      "A responsive front end built with vanilla JavaScript, using Supabase Auth for secure sign-in and Supabase's real-time database so profile creation, edits and updates reflect immediately.",
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Supabase', 'Git'],
    features: [
      'Secure user authentication with Supabase Auth',
      'Real-time database for profile creation, updates and management',
      'Dynamic, JavaScript-driven interactions for a seamless user experience',
      'Fully responsive layout across devices',
    ],
    challenges: [
      'Wiring Supabase Auth and its real-time database into a vanilla JavaScript front end without a framework',
      'Keeping the profile UI in sync with real-time database updates',
    ],
    screenshots: [
      {
        src: '/projects/matrimony-platform/cover.png',
        alt: 'Matrimony Platform',
      },
    ],
    github: 'https://github.com/deepakkv8335/matrimony-platform',
    demo: 'https://wcmatrimony.pages.dev',
  },
  {
    slug: 'task-management-system',
    title: 'Task Management System',
    tagline: 'Role-based task management app for Admins, Managers and Users.',
    description:
      'A Django task management application built around three roles, Admin, Manager and User, each with its own workflow for assigning, updating and tracking work.',
    problem:
      "Teams need a shared way to assign tasks, update their status and track progress without one role's actions stepping on another's permissions.",
    solution:
      'A Django application with Admin, Manager and User roles, each with its own workflow for assigning tasks, updating status and tracking progress, backed by secure authentication and full CRUD operations.',
    techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'SQLite', 'Git'],
    features: [
      'Admin, Manager and User roles with distinct workflows',
      'Task assignment, status updates and progress tracking',
      'Secure authentication and full CRUD operations for task management',
    ],
    challenges: [
      'Designing role-based workflows so each of the three roles sees only what it should',
      'Keeping task status and progress tracking consistent as multiple roles update the same tasks',
    ],
    screenshots: [
      {
        src: '/projects/task-management-system/cover.png',
        alt: 'Task Management System',
      },
    ],
    github: 'https://github.com/deepakkv8335/task-management-system',
    demo: 'https://task-management-system-curd-project.onrender.com',
  },
  {
    slug: 'tourism-management-system',
    title: 'Tourism Management System',
    tagline:
      'Tourism booking platform with vendor package management, built during a Django internship.',
    description:
      'A tourism management system built during a Python Full Stack Developer internship at Marklance Infotech (Feb 2024 – May 2024), where travelers can browse travel packages and manage bookings, and vendors can list and manage their own packages.',
    problem:
      'Travelers need an easy way to browse and book travel packages, while vendors need their own tools to list and manage the packages they offer.',
    solution:
      "A Django-based tourism management system where travelers can browse packages and manage bookings, vendors can add, edit and manage their own tour packages, and Django's authentication system and admin panel keep the platform secure.",
    techStack: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'SQLite', 'Git'],
    features: [
      'Browsing travel packages and managing bookings',
      'Vendor tools for adding, editing and managing tour packages',
      "Django's authentication system and admin panel for secure platform management",
    ],
    challenges: [
      'Separating traveler-facing booking flows from vendor package-management tools within one Django project',
      "Using Django's admin panel effectively for day-to-day platform management",
    ],
    screenshots: [
      {
        src: '/projects/tourism-management-system/cover.png',
        alt: 'Tourism Management System',
      },
    ],
    github: 'https://github.com/deepakkv8335/tourism-management-system',
    demo: 'https://tourism-management-system-focuz.onrender.com',
  },
  {
    slug: 'weather-api-application',
    title: 'Weather API Application',
    tagline: 'Real-time weather lookup built with the Fetch API and an external weather API.',
    description:
      'A real-time weather application that integrates an external weather API, so users can search for a location and see live weather data rendered on the page.',
    problem:
      'Finding current weather for a location quickly needs a lightweight interface backed by live data rather than static content.',
    solution:
      "A vanilla JavaScript app that calls an external weather API through JavaScript's Fetch API and renders the live results in a responsive search interface.",
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'REST API', 'Git'],
    features: [
      'Real-time weather data from an external weather API',
      "Live data retrieved using JavaScript's Fetch API",
      'Responsive interface for searching weather information by location',
    ],
    challenges: [
      'Handling asynchronous Fetch API calls and rendering results without a framework',
      'Designing a responsive layout that reads well across different weather data and locations',
    ],
    screenshots: [
      {
        src: '/projects/weather-api-application/cover.png',
        alt: 'Weather API Application',
      },
    ],
    github: 'https://github.com/deepakkv8335/weather-api-app',
    demo: 'https://deepakkv8335.github.io/weather-api-app',
  },
];
