const gridBoxClasses = "xl:container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4 xl:gap-7 mt-4 xl:mt-8";
const gridBoxClassesFull = "xl:container mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-4 xl:gap-7 mt-4 xl:mt-8";
const bulletItemClasses = "text-brandNeutral-400 mt-2";
const bulletItemTextClasses = "text-brandPrimaryWhite";

// Programming & Frameworks
const bulletPointsProgrammingFrameworks = [
	"PHP, Laravel, Laravel Livewire, Laravel Octane (FrankenPHP), Java, Spring Boot, GraphQL",
	"TypeScript, JavaScript, Node.js, NestJS, Next.js, Express.js",
	"Angular, Vue.js, React.js, Svelte, Alpine.js",
	"HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap, jQuery",
	"AstroJS, Ink (React CLI), Commander, Flutter",
	"Python, C, C++",
];

// Backend & API Development
const bulletPointsBackendAPI = [
	"RESTful API Development, GraphQL, Laravel API, NestJS API, Express.js API, Node.js, Strapi",
	"TypeORM, Swagger/OpenAPI, class-validator/class-transformer, Zod",
	"Helmet, Rate Limiting, Redis Caching (cache-manager, ioredis)",
	"Bruno API Client, Authentication & Security",
	"Payment Gateway Integration (Billplz, CHIP, Stripe, TobbiyPay, SenangPay)",
	"Webhooks, Database Architecture",
	"Composer Package Development, NPM Package Development",
	"Modular Architecture, Dependency Injection",
];

// DevOps & Infrastructure
const bulletPointsDevOps = [
	"Linux, Apache, Nginx",
	"Docker (Multi-stage Builds), Docker Compose",
	"CI/CD Pipelines (GitLab CI, GitHub Actions)",
	"AWS EC2, AWS ECR, AWS RDS, AWS CloudFront, AWS S3",
	"AWS CloudFormation, AWS API Gateway, AWS WAF, AWS VPC, AWS ECS Fargate",
	"Multi-region Deployment, Server Deployment, Reverse Proxy",
	"DNS Management, SSL/TLS Management",
	"Cloudflare Tunnel, LocalTunnel",
	"Alibaba Cloud, Alibaba OSS, Tencent COS",
	"DigitalOcean, IPServerOne Nova Cloud, VPS Management",
	"Shell Scripting (Bash)",
	"Infrastructure Monitoring & Performance Troubleshooting",
	"PM2",
];

// Cloud, CDN & Security
const bulletPointsCloudSecurity = [
	"AWS (EC2, ECR, RDS, CloudFront, S3, CloudFormation, API Gateway, WAF, VPC, ECS Fargate)",
	"Cloudflare (CDN, DNS, SSL/TLS, Zero Trust)",
	"API Security, Rate Limiting, Helmet Security Headers",
	"Vulnerability Scanning (Tenable Nessus)",
	"Web Security Testing (Burp Suite)",
];

// Geospatial Processing
const bulletPointsGeospatial = [
	"GeoJSON",
	"GPS Coordinates",
	"Polygon-based Location Detection",
];

// Databases
const bulletPointsDatabases = [
	"MySQL, MariaDB, PostgreSQL, SQLite, MSSQL, Redis, TypeORM",
	"Database Design, Query Optimization, Data Migration",
	"phpMyAdmin, TablePlus, DBngin",
];

// Testing
const bulletPointsTesting = [
	"Jest, Vitest, Playwright, Supertest",
	"React Testing Library (@testing-library/react)",
	"TDD/BDD, Unit Testing, Integration Testing",
	"Automated tests across repos",
];

// AI, Automation & Integration
const bulletPointsAIAutomation = [
	"n8n Workflow Automation",
	"API Integration, System Integration",
	"OpenAI API (ChatGPT), Prompt Engineering",
	"AI-assisted Resume & Skill Analysis",
	"Document Parsing (DOC/DOCX/PDF)",
];

// Server Management
const bulletPointsServerManagement = [
	"cPanel",
	"WHM (Web Host Manager)",
];

// Development Tools
const bulletPointsDevelopmentTools = [
	"Git, GitHub, GitHub Copilot / Copilot CLI",
	"npm, nvm, homebrew, ts-node, Composer",
	"Visual Studio Code, Figma",
	"Laragon, Local, Basecamp, Notion, TinyMCE",
	"Custom CLI scripts for PHP version switching",
	"Custom SSH automation scripts for multi-environment server management",
	"Custom Terminal-based project automation tools",
];

// Architecture & Documentation
const bulletPointsArchitectureDoc = [
	"Multi-repo Architecture, Shared NPM Package Architecture",
	"Swagger/OpenAPI Documentation, Bruno API Collections",
	"System Architecture Documentation",
	"Flowcharts, Sequence Diagrams",
	"API Workflow Diagrams",
	"Mermaid, draw.io (diagrams.net)",
];

// CMS & Web Platforms
const bulletPointsCMSPlatforms = [
	"WordPress, Drupal",
	"Webflow, Elementor/Elementor Pro",
	"Strapi",
	"Shopify, Wix, Squarespace",
];

// UI / Frontend
const bulletPointsUIFrontend = [
	"@tanstack/react-query (Server State), @dnd-kit (Drag & Drop)",
	"Axios, Vite, react-hot-toast, Lucide Icons",
	"Responsive Web Design",
	"Web Animations (GSAP, Swiper.js)",
	"UI/UX Principles, Design Systems",
];

// Design & Prototyping
const bulletPointsDesignPrototyping = [
	"Figma, Adobe XD",
	"Photoshop, Illustrator",
];

// Softwares/Platforms/Tools
const bulletPointsSoftwareTools = [
	"Visual Studio Code, Github, GitLab, BitBucket",
	"Docker, TablePlus, DBngin",
	"Figma, Local, Laragon, Mobirise",
	"Notion, Reverso, Basecamp",
	"Google Meet, Zoom",
	"Microsoft Office, Microsoft Excel, Microsoft Word, Microsoft PowerPoint",
	"OneDrive, Google Drive",
	"Chrome, Safari, Edge, Firefox and Opera Web Browsers",
];

// Operating Systems
const bulletPointsOperatingSystems = [
	"Windows",
	"macOS",
	"Linux",
];

// Soft Skills
const bulletPointsSoftSkills = [
	"High speed of work",
	"Attention to details",
	"Self motivation and independent",
	"Multi-tasking",
	"Openness to feedback",
	"Collaborative mindset",
	"Intentiveness",
	"Ability to work under pressure",
	"Problem solving with analytic and critical thinking",
	"Planning and organisation",
	"Persuading and negotiation",
	"Time Management",
	"Adaptability",
	"Mentorship",
];

// Languages
const bulletPointsLanguages = [
	"Malay (Native)",
	"English (Highly professional working proficiency)",
	"Arabic & Japanese (Elementary proficiency)",
];

// Others/Interests
const bulletPointsOthersInterests = [
	"Copywriting, Social Media Marketing, SEO",
	"Design systems/Guidelines",
	"Website UX & UI, Mobile Apps UX & UI",
	"Branding, Logotypes",
];

const bulletPointsWorkstation = [
	'14" MacBook Pro <br class="hidden md:block lg:hidden" /> M4, 16GB<br class="block md:hidden" />RAM, 512GB Storage (Silver)',
	'Cooler Master CK720 65% Gaming Keyboard (Space Gray) With Custom Pikachu Keycaps and Switches',
	"Venom II WGC2 Space Edition Wireless Mouse (White)",
	'MSI MAG401QR 40" UWQHD Gaming Monitor With Custom Black PC Built (Windows)',
	'DarkFlash 98% GD100 Mechanical Keyboard With Custom Pikachu Keycaps',
	"Logitech MX Master 3S Mouse",
	"Apple Magic Trackpad (Black)",
];

const bulletPointsWorkTools = [
	"Visual Studio Code",
	"DBngin, TablePlus",
	"Git, GitHub, GitLab, BitBucket",
	"Docker",
	"Laragon, Local",
	"WordPress, Webflow",
	"Postman",
	"Android Studio",
	"Chrome, Safari, Edge, Firefox and Opera Web Browsers",
];

const bulletPointsProductivityTools = [
	"Figma, Adobe XD",
	"Adobe Photoshop, Adobe Illustrator",
	"Notion, Basecamp",
	"Microsoft Office (Excel, Word, PowerPoint)",
	"OneDrive, Google Drive",
	"Google Meet, Zoom",
	"TinyMCE, Mobirise, Reverso",
	"Spotify",
];

export {
	gridBoxClasses,
	gridBoxClassesFull,
	bulletItemClasses,
	bulletItemTextClasses,
	bulletPointsProgrammingFrameworks,
	bulletPointsBackendAPI,
	bulletPointsDevOps,
	bulletPointsCloudSecurity,
	bulletPointsGeospatial,
	bulletPointsDatabases,
	bulletPointsTesting,
	bulletPointsAIAutomation,
	bulletPointsServerManagement,
	bulletPointsDevelopmentTools,
	bulletPointsArchitectureDoc,
	bulletPointsCMSPlatforms,
	bulletPointsUIFrontend,
	bulletPointsDesignPrototyping,
	bulletPointsSoftwareTools,
	bulletPointsOperatingSystems,
	bulletPointsSoftSkills,
	bulletPointsLanguages,
	bulletPointsOthersInterests,
	bulletPointsWorkstation,
	bulletPointsWorkTools,
	bulletPointsProductivityTools,
};
