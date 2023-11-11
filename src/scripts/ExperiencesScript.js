import Divider from "@/components/Divider.vue";

const purpleBackgroundClasses = "bg-brandSecondaryPurple p-4 xl:p-8 rounded-2xl h-[70vh] md:h-[45vh] xl:h-screen";
const gridBoxClasses = "grid grid-cols-1 xl:grid-cols-5 items-center gap-4 xl:gap-7 h-full w-full mt-4 xl:mt-8";
const leftExperienceClasses =
	"h-full bg-brandNeutral-700 w-full xl:col-span-2 border border-brandNeutral-700 py-4 xl:p-10 rounded-2xl";
const rightExperienceClasses =
	"hidden xl:block h-full w-full xl:col-span-3 bg-brandNeutral-700 border border-brandNeutral-700 p-4 xl:p-10 rounded-2xl";
const bulletItemClasses = "text-brandSecondaryGreen mt-2";
const bulletItemTextClasses = "text-brandPrimaryWhite";

const bulletPointsWebDeveloper = [
	"Developed websites and web applications for both clients and the company's own product portfolio, wrote code for both the back-end and front-end, enhanced and maintained the company's existing projects.",
	"Collaborated with other team members and participated in all aspects of web projects, such as ideation, design, development, deployment, optimization, and maintenance.",
	"Moved between projects to offer support as a full stack developer or front end developer according to stakeholder needs.",
	"Assisted other team members in diagnosing and troubleshooting issues of their projects.",
	"Actively participated in weekly meetings, demonstrating dedication to agile methodologies and ensuring transparent updates on work progress.",
	"Worked jointly with Creative Strategist and Head of Animation & Video to ensure all web animation and transitions were delivered based on stakeholders’ needs.",
];

const bulletPointsAchievementsWebDeveloper = [
	"Wrote base code of a booking system for the company, designed and built a working prototype for KLCC & Alamanda project, demonstrated the system to the potential clients, ensuring a clear understanding of the proposed system, iterated based on stakeholders’ feedback and secured buy-in of a long-term of 5 years contract for proposed solutions with the clients during the first month of probation period. The company’s upcoming product, EATSI, which will be released in the US, uses the base code as its starting points. Responsible for the development of the KLCC/Alamanda project as a full stack developer and contributed to EATSI as a front-end team member. Reverse-engineered existing base code and databases to fit the stakeholders requirements for every new project.",
	"Created a working prototype for a spin the wheel game for the company by writing the base code and designing it within a month. The company's long-term client, Yoodo gave their approval for the suggested solutions to be used as a spin the wheel game in two of their campaigns, Wheel Yoo Win (WYW) in 2022 and Riang Ria Raya (RRR) in 2023, respectively. In charge of the development of game campaigns as a full-stack developer. For each new campaign, existing base code and databases were reverse-engineered to meet the needs of the stakeholders, created and managed databases, iterated based on the stakeholders’ feedback, documented the reports and recorded the results of each campaign. Solved any problem within the allotted time. Proposed to have several online meetings with the stakeholders to speed up the process for them to give their feedback. The issues were resolved immediately during the meeting to ensure delivery before the designated launching timeframe.",
	"Proactively conducted rigorous testing of different websites of the company's clients and potential clients to ensure that every page on the websites meets the average score of at least 65 in performance, best practices, SEO, and accessibility criteria. Examined each page interface and searched for solutions to improve the page UIUX design and improve SEO based on the HTML coding standards, meticulously documenting them. Shared the proposed solutions with the stakeholders. Extensive contracts were secured for maintaining existing client websites, such as Yoodo, Big Bad Wolf, and Rohto (Sunplay and Lipcare). Attracted new clients, including RedOne, Celcom, and CelcomDigi. Involved in the Yoodo, Rohto (Sunplay and Lipcare) and CelcomDigi projects.",
	"Documented plans to improve Yoodo website by separating it into several development phases. Managed to launch newly improved UIUX of the pages of the website in January, April and July (2023). Managed to improve the average score of each page of the website in each criteria of performance, best practices, SEO, and accessibility. Desktop scores went up from an average of 42 to an average of 85. While on mobile, the scores increased from an average of 21 to an average of 65. Each month for two consecutive years, the results were documented.",
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
	"Worked with different teams of developers and developed websites for companies and e-Commerce platforms in WordPress, WooCommerce, HTML, CSS, SCSS, JS, JQuery and PHP for clients depending on the specific requirements of each project, which included iteration and recommendation procedures.",
	"Collaborated and interacted with a diversified team of developers, designers, clients, and stakeholders on a daily basis.",
	"Increased the click rate on the Tonggak Mega Design website's link by 76%, which led to a rise in website sales of 55% with the revamped landing page and SEO setup.",
];

const bulletPointsFreelanceDesigner = [
	"Provided excellent customer service to clients that resulted in repeat clients.",
	"Spoke daily with customer personnel, ensuring that contract protocols and services were satisfied.",
	"Worked closely with a team of designers and created logo design, brand design, and UIUX design for clients, and increased satisfaction by creating solutions for product enhancement.",
	"Communicated and collaborated with a multi-disciplinary team of designers, producers, clients, and stakeholders on a daily basis.",
	"Achieved sales target for Tonggak Mega Design’s promotion closing sales by using urgency in copywriting that managed to close the graphic design promotion with RM5750 with 5 clients in less than 1 hour.",
	"Increased sales by 65% for Tonggak Mega Design by designing the social media advertisement templates on a daily basis.",
];

const bulletPointsIntern = [
	"Became a member of the Back End development team in Telekom Malaysia.",
	"Contributed to assist the software developers in enhancing, maintaining, and supporting the map updating platform built in React and NodeJS.",
	"Gathered and conducted a user requirement study, which included software development testing.",
	"Prepared test cases, functional requirements, and system design documentation.",
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
	bulletPointsWebDeveloper,
	bulletPointsAchievementsWebDeveloper,
	bulletPointsFrontEndDeveloper,
	bulletPointsFreelanceWebDeveloper,
	bulletPointsFreelanceDesigner,
	bulletPointsIntern,
};
