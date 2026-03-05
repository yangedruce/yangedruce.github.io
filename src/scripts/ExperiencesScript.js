import Divider from "@/components/Divider.vue";

const purpleBackgroundClasses = "bg-brandNeutral-150 p-4 xl:p-8 rounded-2xl h-screen";
const gridBoxClasses = "grid grid-cols-1 xl:grid-cols-5 items-center gap-4 xl:gap-7 h-full w-full mt-4 xl:mt-8";
const leftExperienceClasses =
	"h-full bg-brandNeutral-700 w-full xl:col-span-2 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl";
const rightExperienceClasses =
	"hidden xl:block h-full w-full xl:col-span-3 bg-brandNeutral-700 border border-brandNeutral-700 p-4 xl:p-10 rounded-2xl";
const bulletItemClasses = "text-brandNeutral-400 mt-2";
const bulletItemTextClasses = "text-brandPrimaryWhite";

// Todak Digitech
const bulletPointsTodakSeniorWebDeveloper = [
	"Develop and maintain scalable web applications using modern frameworks and technologies.",
	"Design and implement RESTful APIs and backend systems using Node.js, Strapi and Laravel for mobile and web applications.",
	"Build workflow automation solutions using n8n to streamline internal and operational business processes.",
	"Develop secure and scalable backend architectures and API endpoints for enterprise systems and mobile platforms.",
	"Maintain and enhance existing applications to ensure optimal performance, reliability, responsiveness across all platforms and scalability.",
	"Collaborate with cross-functional teams including designers, product managers and QA to deliver high-quality software solutions.",
	"Write clean, efficient and maintainable code following industry best practices and coding standards.",
	"Participate in code reviews and provide constructive feedback while mentoring junior developers and interns.",
	"Troubleshoot, debug and optimize applications to improve system stability and performance.",
	"Handle QA testing, prepare UAT scripts and perform performance tuning for production releases.",
	"Stay updated with emerging web development technologies and industry best practices.",
	"Support DevOps processes including CI/CD pipelines, infrastructure configuration and security assessments.",
];

const bulletPointsAchievementsTodak = [
	"Led full-cycle development for multiple standalone systems including web applications and APIs, from server setup to production deployment.",
	"Restructured legacy codebases to improve maintainability, scalability and overall system performance.",
	"Revamped and rebuilt Todak Center, performing complex database migration while preserving legacy data through structured data mapping to prevent data loss. Upgraded legacy systems from Laravel 7 to Laravel 12, ensuring compatibility and improved performance.",
	"Hardened Todak Center system security by introducing HTTP authentication for staging environments, modernized password hashing strategies and middleware-driven role-based permissions for API routes, addressing critical vulnerabilities in the legacy system prior to the platform revamp.",
	"Prevented unintended public exposure of internal environments by implementing no-index and crawler restrictions for staging and development systems.",
	"Rebuilt Al-Ihya from Node.js and Strapi to Laravel, improving responsiveness across all devices, maintainability, performance and strengthened system security by mitigating API brute-force attacks and improving authentication protection mechanisms.",
	"Architected the Al-Ihya system revamp using Laravel Octane (FrankenPHP), separating the admin dashboard and API into independent repositories for better performance, scalability and maintainability.",
	"Developed a shared Composer package containing models, helpers, traits and notifications, enabling code reuse and synchronization between dashboard and API services without duplicating logic.",
	"Enhanced the Al-Ihya prayer time feature by integrating AdhanJS for global calculations and JAKIM GeoJSON for Malaysia-specific zones. Implemented GPS-based polygon detection using latitude/longitude and designed a fallback algorithm to determine the nearest prayer zone within a 50 km radius when zone polygons or updates are unavailable.",
	"Implemented and managed payment gateway integrations for Todak Academy, including migration from Billplz to CHIP. Resolved critical issues with Billplz API webhook integrations, ensuring accurate payment processing and reliable transaction updates.",
	"Investigated and resolved historical payment data loss issues by debugging complex legacy codebases, recovering missing data and improving system reliability.",
	"Developed a bulk data recovery tool that enables administrators to upload and restore missing payment records to the database with a single action.",
	"Resolved payment verification issues by implementing a tunneling-based webhook testing environment, allowing the system to sync CHIP and legacy Billplz payment status with the internal database despite separate local, staging and production API keys on different environments.",
	"Created automation scripts to maintain persistent tunnels, ensuring reliable webhook testing and debugging during payment integration development.",
	"Built and enhanced new features for the Todak Academy Student Portal, improving responsiveness across all devices, usability and operational workflows.",
	"Built GitLab CI/CD pipelines to automate deployment, database migrations, configuration caching and environment management for Laravel-based systems including Todak Center and Al-Ihya (dashboard and API).",
	"Improved release consistency and deployment reliability while reducing manual release risks by integrating security and configuration checks into the CI/CD workflow.",
	"Migrated static assets by implementing cloud-based asset storage, reducing server storage usage and improving application load performance using Alibaba Cloud OSS and Tencent COS for Todak Center and Todak Academy respectively.",
	"Designed and managed server infrastructure including deployment, hosting, SSL/TLS configuration, DNS management and performance monitoring.",
	"Built and maintained workflow automation using n8n for operational processes across Todak Culture i-City and Al-Ihya.",
	"Mentored junior developers and interns by providing technical guidance and code review support.",
];

// InspireNow
const bulletPointsFullStackDeveloper = [
	"Develop and manage strategies for project execution based on industry best practices and emerging trends.",
	"Oversee the selection and implementation of technology solutions to optimize project outcomes.",
	"Ensure that technology strategies are aligned with the overall goals and objectives of the projects.",
	"Conduct thorough research to identify and evaluate potential technological solutions and configurations required for project success.",
	"Stay abreast of technological advancements and recommend improvements or new tools that could benefit project efficiency and effectiveness.",
	"Work closely with relevant stakeholders to design and implement technological setups that meet project requirements.",
	"Led and delivered high-impact web solutions while unofficially holding cross-functional responsibilities as Technical Lead.",
	"Managed multiple concurrent projects across teams, owning the full technical lifecycle from planning to deployment.",
	"Provided architectural direction, DevOps configuration, code review and system design while guiding junior developers and interns.",
	"Took lead on architecture planning, technology decisions and best practice implementation.",
	"Acted as a bridge between project management and development such as resolving blockers, adjusting scope and managing expectations. Handled QA testing, UAT scripts and performance tuning for high-traffic production releases.",
	"Supported DevOps (CI/CD), infrastructure and security assessments.",
	"Provided technical mentorship to junior developers and interns.",
];

const bulletPointsWebDesigner = [
	"Primarily focus on broad aspects of frontend development, write clean, efficient and maintainable HTML, CSS and JavaScript code to implement UI/UX designs, ensure cross-browser compatibility and responsiveness of applications for a consistent user experience across various devices and platforms and keep abreast of industry trends, emerging technologies and best practices in frontend development.",
	"Collaborate closely with design teams to translate visual concepts into interactive user interfaces and work closely with backend developers to integrate frontend components seamlessly.",
	"Participate in code reviews and provide constructive feedback to optimize code quality, identify and troubleshoot UX issues and implement improvements based on user feedback while maintaining code quality, organization and automation.",
];

const bulletPointsAchievementsInspireNow = [
	"Restructure code for existing projects and current projects to improve organisation and guarantee maintainability.",
	"Help the team to identify and resolve bottlenecks and bugs as well as write backend code in KardAsia and PNB projects.",
	"Responsible for handling web server technologies including hosting, deployment, security, SSL/TLS management and DNS management for all projects. Ensured high availability and security of web applications by managing server configurations and monitoring performance.",
	"Designed and implemented infrastructure for current and upcoming projects, ensuring scalability, security and performance. Worked closely with development teams to align infrastructure with project requirements and future growth plans.",
	"Redesigned, rebuilt and migrated the INKA website from Drupal to TailwindCSS, AlpineJS and AstroJS within three weeks, implementing cleaner code architecture and improved maintainability, scalability and performance.",
	"Implemented AI-powered skill and resume analysis using the OpenAI API in KardAsia, supporting both keyword input and resume document parsing (DOC/DOCX/PDF) to generate automated recommendations for paid services.",
	"Provided technical mentorship to junior developers and interns.",
];

// 4Thirteen
const bulletPointsWebDeveloper = [
	"Developed websites and web applications for both clients and the company's own product portfolio, wrote code for both the backend and frontend, enhanced and maintained the company's existing projects and participated in all aspects of web projects, such as ideation, design, development, deployment, optimization and maintenance.",
	"Demonstrated the websites, web applications and systems to the clients and potential clients by ensuring a clear understanding of the proposed system and iterated based on stakeholders' feedback.",
	"Reverse-engineered existing base code and databases in building new systems to meet the needs of the stakeholders.",
	"Moved between projects to offer support as a full stack developer or front end developer according to stakeholder needs and assisted other team members in diagnosing and troubleshooting issues with their projects when needed.",
	"Collaborated closely with cross-functional teams especially clients, project managers, developers, Creative Strategist, Head of Animation & Video and designers to ensure every task was delivered in a timely manner, all project were developed according to the designs, animations and transitions were delivered based on stakeholders' needs.",
	"Actively participated in weekly meetings and ensured transparent updates on work progress.",
];

const bulletPointsAchievementsWebDeveloper = [
	"Wrote reusable booking system base code for the company, developed a working prototype that secured a 5 years contract for the KLCC & Alamanda project during the first month of probation period and led the project development. The company's upcoming product, EATSI, uses the base code as its starting points and contributed to EATSI as a frontend team member.",
	"Created a working prototype for a spin the wheel game for the company by writing recyclable base code and designing it within a month, executed two Yoodo campaigns, Wheel Yoo Win (2022) and Riang Ria Raya (2023) and familiarity with the projects gave me the confidence to propose several online meetings with the stakeholders, promptly address any issues that arose during the meetings in order to hasten the process of receiving their feedback and guarantee project delivery prior to the scheduled launch date.",
	"Proactively conducted rigorous testing of different websites of the company's clients and potential clients, focusing on improving UI/UX design and SEO based on the HTML coding standards. Managed to secure extensive contracts for maintaining existing clients' websites and attracted new ones.",
	"Improved Yoodo's website by achieving average scores in performance, best practices, SEO and accessibility. Desktop scores increased from 42 to 85, while mobile scores rose from 21 to 65. The results were documented and maintained monthly for two consecutive years.",
];

// Qutu Worldwide
const bulletPointsFrontEndDeveloper = [
	"Developed websites, online applications and e-commerce platforms for clients while working with a team of developers, which included iteration and recommendation procedures depending on the particular needs of each project.",
	"Worked and communicated with a multidisciplinary team of developers, designers, clients and stakeholders on a daily basis.",
	"Accountable for frontend activities.",
	"Led developers team and established schedules along with work allocations for them.",
	"Assisted in backend chores by debugging and resolving issues.",
];

const bulletPointsAchievementsQutu = [
	"Created wireframes, designed UIUX of the website and developed Qutu Worldwide's website in 3 days with a basic SEO setup that was ready for marketing.",
];

// Tonggak Mega Design
const bulletPointsFreelanceWebDeveloper = [
	"Developed websites and e-commerce platforms using various technologies.",
	"Collaborated and interacted with a diversified team of developers, designers, clients and stakeholders on a daily basis.",
];

const bulletPointsAchievementsFreelanceWebDeveloper = [
	"Increased the click rate on the Tonggak Mega Design website's link by 76%, which led to a rise in website sales of 55% with the revamped landing page and SEO setup.",
];

const bulletPointsFreelanceDesigner = [
	"Worked closely with a team of designers and created logo design, brand design, web design and UI/UX design for clients and increased satisfaction by creating solutions for product enhancement.",
	"Communicated and collaborated with a multi-disciplinary team of designers, producers, clients and stakeholders on a daily basis.",
	"Spoke daily with customer personnel, ensuring that contract protocols and services were satisfied.",
	"Provided excellent customer service to clients that resulted in repeat clients.",
];

const bulletPointsAchievementsFreelanceDesigner = [
	"Achieved sales target for Tonggak Mega Design's promotion closing sales by using urgency in copywriting that managed to close the graphic design promotion with RM5750 with 5 clients in less than 1 hour.",
	"Increased sales by 65% for Tonggak Mega Design by designing the social media advertisement templates on a daily basis.",
];

// Telekom Malaysia
const bulletPointsIntern = [
	"Contributed as a member of the Back End development team to assist the software developers in enhancing, maintaining and supporting the map updating platform built in React.js and Node.js.",
	"Gathered and conducted a user requirement study, which included software development testing, prepared test cases, functional requirements and system design documentation.",
	"Trained on troubleshooting and fixing the second level application.",
];

export {
	Divider,
	purpleBackgroundClasses,
	gridBoxClasses,
	leftExperienceClasses,
	rightExperienceClasses,
	bulletItemClasses,
	bulletItemTextClasses,
	bulletPointsTodakSeniorWebDeveloper,
	bulletPointsAchievementsTodak,
	bulletPointsFullStackDeveloper,
	bulletPointsWebDesigner,
	bulletPointsAchievementsInspireNow,
	bulletPointsWebDeveloper,
	bulletPointsAchievementsWebDeveloper,
	bulletPointsFrontEndDeveloper,
	bulletPointsAchievementsQutu,
	bulletPointsFreelanceWebDeveloper,
	bulletPointsAchievementsFreelanceWebDeveloper,
	bulletPointsFreelanceDesigner,
	bulletPointsAchievementsFreelanceDesigner,
	bulletPointsIntern,
};
