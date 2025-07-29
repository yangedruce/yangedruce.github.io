import Divider from "@/components/Divider.vue";

const purpleBackgroundClasses = "bg-brandNeutral-150 p-4 xl:p-8 rounded-2xl h-screen";
const gridBoxClasses = "grid grid-cols-1 xl:grid-cols-5 items-center gap-4 xl:gap-7 h-full w-full mt-4 xl:mt-8";
const leftExperienceClasses =
	"h-full bg-brandNeutral-700 w-full xl:col-span-2 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl";
const rightExperienceClasses =
	"hidden xl:block h-full w-full xl:col-span-3 bg-brandNeutral-700 border border-brandNeutral-700 p-4 xl:p-10 rounded-2xl";
const bulletItemClasses = "text-brandNeutral-400 mt-2";
const bulletItemTextClasses = "text-brandPrimaryWhite";

const bulletPointsFullStackDeveloper = [
	"Develop and manage strategies for project execution based on industry best practices and emerging trends.",
	"Oversee the selection and implementation of technology solutions to optimize project outcomes.",
	"Ensure that technology strategies are aligned with the overall goals and objectives of the projects.",
	"Conduct thorough research to identify and evaluate potential technological solutions and configurations required for project success.",
	"Stay abreast of technological advancements and recommend improvements or new tools that could benefit project efficiency and effectiveness.",
	"Work closely with relevant stakeholders to design and implement technological setups that meet project requirements.",
	"Managed multiple concurrent projects across teams, owning the full technical lifecycle from planning to deployment.",
	"Provided architectural direction, DevOps configuration, code review, and system design while guiding junior developers and interns.",
	"Took lead on architecture planning, technology decisions, and best practice implementation.",
	"Acted as a bridge between project management and development such as resolving blockers, adjusting scope, and managing expectations. Handled QA testing, UAT scripts, and performance tuning for high-traffic production releases.",
	"Supported DevOps (CI/CD), infrastructure, and security assessments.",
	"Provided technical mentorship to junior developers and interns.",
];

const bulletPointsTodakWebDeveloper = [
	"Develop and maintain web applications using modern technologies and frameworks.",
	"Design and implement APIs and backend systems using Node.js and Strapi for mobile and web applications.",
	"Build workflow automation solutions using n8n to streamline business processes.",
	"Develop robust API endpoints and backend infrastructure for mobile applications, web applications and systems.",
	"Build new and maintain existing applications and systems to ensure optimal performance and functionality.",
	"Collaborate with cross-functional teams to deliver high-quality software solutions.",
	"Write clean, efficient, and maintainable code following industry best practices.",
	"Participate in code reviews and provide constructive feedback to team members.",
	"Troubleshoot and debug applications to ensure optimal performance.",
	"Stay updated with latest web development trends and technologies.",
];

const bulletPointsWebDesigner = [
	"Primarily focus on broad aspects of front-end development, write clean, efficient, and maintainable HTML, CSS, and JavaScript code to implement UI/UX designs, ensure cross-browser compatibility and responsiveness of applications for a consistent user experience across various devices and platforms and keep abreast of industry trends, emerging technologies, and best practices in front-end development.",
	"Collaborate closely with design teams to translate visual concepts into interactive user interfaces and work closely with back-end developers to integrate front-end components seamlessly.",
	"Participate in code reviews and provide constructive feedback to optimize code quality, identify and troubleshoot UX issues and implement improvements based on user feedback.",
	"Restructure code for existing projects and current projects to improve organisation and guarantee maintainability.",
];

const bulletPointsWebDeveloper = [
	"Developed websites and web applications for both clients and the company's own product portfolio, wrote code for both the back-end and front-end, enhanced and maintained the company's existing projects  and participated in all aspects of web projects, such as ideation, design, development, deployment, optimization, and maintenance.",
	"Demonstrated the websites, web applications and systems to the clients and potential clients by ensuring a clear understanding of the proposed system and iterated based on stakeholders’ feedback.",
	"Reverse-engineered existing base code and databases in building new systems to meet the needs of the stakeholders.",
	"Moved between projects to offer support as a full stack developer or front end developer according to stakeholder needs and assisted other team members in diagnosing and troubleshooting issues with their projects when needed.",
	"Collaborated closely with cross-functional teams especially clients, project managers, developers, Creative Strategist, Head of Animation & Video and designers to ensure every task was delivered in a timely manner, all project were developed according to the designs, animations and transitions were delivered based on stakeholders’ needs.",
	"Actively participated in weekly meetings and ensured transparent updates on work progress.",
];

const bulletPointsAchievementsWebDeveloper = [
	"Wrote reusable booking system base code for the company, developed a working prototype that secured a 5 years contract for the KLCC & Alamanda project during the first month of probation period and led the project development. The company’s upcoming product, EATSI, uses the base code as its starting points and contributed to EATSI as a front-end team member.",
	"Created a working prototype for a spin the wheel game for the company by writing recyclable base code and designing it within a month, executed two Yoodo campaigns, Wheel Yoo Win (2022) and Riang Ria Raya (2023), and familiarity with the projects gave me the confidence to propose several online meetings with the stakeholders, promptly address any issues that arose during the meetings in order to hasten the process of receiving their feedback and guarantee project delivery prior to the scheduled launch date.",
	"Proactively conducted rigorous testing of different websites of the company's clients and potential clients, focusing on improving UIUX design and SEO based on the HTML coding standards. Managed to secure extensive contracts for maintaining existing clients' websites and attracted new ones.",
	"Improved Yoodo’s website by achieving average scores in performance, best practices, SEO, and accessibility. Desktop scores increased from 42 to 85, while mobile scores rose from 21 to 65. The results were documented and maintained monthly for two consecutive years.",
];

const bulletPointsFrontEndDeveloper = [
	"Developed websites, online applications, and e-commerce platforms for clients while working with a team of developers, which included iteration and recommendation procedures depending on the particular needs of each project.",
	"Worked and communicated with a multidisciplinary team of developers, designers, clients, and stakeholders on a daily basis.",
	"Established schedules, objectives, and work allocations for the Hijrah Loan web application project's developers.",
	"Accountable for front-end activities and, where needed, assistance with back-end chores.",
	"Created wireframes, designed UIUX of the website and developed Qutu Worldwide's website in 3 days using simple HTML, SCSS, JS, JQuery, and PHP with a basic SEO setup that was ready for marketing.",
	"Built the Hijrah Loan web application in a DevOps environment for Hijrah Selangor. In charge of both frontend and backend duties to aid in accelerating the processes and workflows in accordance with the timetables.",
	"Assisted in debugging and resolving backend problems.",
];

const bulletPointsFreelanceWebDeveloper = [
	"Developed websites and e-commerce platforms using various technologies.",
	"Collaborated and interacted with a diversified team of developers, designers, clients, and stakeholders on a daily basis.",
	"Increased the click rate on the Tonggak Mega Design website's link by 76%, which led to a rise in website sales of 55% with the revamped landing page and SEO setup.",
];

const bulletPointsFreelanceDesigner = [
	"Worked closely with a team of designers and created logo design, brand design, web design, and UIUX design for clients, and increased satisfaction by creating solutions for product enhancement.",
	"Communicated and collaborated with a multi-disciplinary team of designers, producers, clients, and stakeholders on a daily basis.",
	"Spoke daily with customer personnel, ensuring that contract protocols and services were satisfied.",
	"Provided excellent customer service to clients that resulted in repeat clients.",
	"Achieved sales target for Tonggak Mega Design’s promotion closing sales by using urgency in copywriting that managed to close the graphic design promotion with RM5750 with 5 clients in less than 1 hour.",
	"Increased sales by 65% for Tonggak Mega Design by designing the social media advertisement templates on a daily basis.",
];

const bulletPointsIntern = [
	"Contributed as a member of the Back End development team to assist the software developers in enhancing, maintaining, and supporting the map updating platform built in React.js and Node.js.",
	"Gathered and conducted a user requirement study, which included software development testing, prepared test cases, functional requirements, and system design documentation.",
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
	bulletPointsFullStackDeveloper,
	bulletPointsTodakWebDeveloper,
	bulletPointsWebDesigner,
	bulletPointsWebDeveloper,
	bulletPointsAchievementsWebDeveloper,
	bulletPointsFrontEndDeveloper,
	bulletPointsFreelanceWebDeveloper,
	bulletPointsFreelanceDesigner,
	bulletPointsIntern,
};
