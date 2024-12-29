import firstImage from "@/assets/images/learn-more-first.svg";
import learnmore1 from "@/assets/images/learnmore1.png";
import learnmore2 from "@/assets/images/learnmore2.png";
import learnmore3 from "@/assets/images/learnmore3.png";


export interface LearnMoreCardDefinition {
	title: string;
	description: string;
	image: string;
}

const CardDefinitions: LearnMoreCardDefinition[] = [
	{
		title: "Importance of Timely Completion and Cost Efficiency in Projects",
		description: "Today, the timely completion and cost of a project have become critical issues for companies. Achieving this is possible when companies use their resources more effectively. By focusing on the main core parts of their software, companies can outsource the generic sections, gaining both cost advantages and improved time performance.",
		image: learnmore1.src
	},
	{
		title: "CodeHouse: Meeting Your Qualified Software Developer Needs",
		description: "At CodeHouse, we address the need for qualified software developers across all sectors. Our company provides outsourcing solutions with developers at various levels of expertise. This ensures that your company's projects remain uninterrupted and progress efficiently.",
		image: learnmore2.src
	},
	{
		title: "Optimizing Costs and Project Durations Through Outsourcing",
		description: "By outsourcing the generic parts of their software development to CodeHouse, companies can concentrate on the primary elements of their projects without hiring additional staff for secondary tasks. This approach optimizes both project costs and durations, offering a streamlined and effective solution for software companies.",
		image: learnmore3.src
	},
	{
		title: "Expert Hire",
		description: "In line with the request of the companies, we also provide temporary staff rental service. It meets the competent IT personnel in the shortest time, so that you can quickly meet your instant personnel needs, and you will not miss other business opportunities that come your way.",
		image: learnmore1.src
	},
	{
		title: "Software",
		description: "As everyone knows, all sectors need software. However, not every company has its own software department. At this point, as CodeHouse, we analyze the needs of companies and meet your software needs as soon as possible by our professional team.",
		image: firstImage.src
	}

];

export default CardDefinitions;
