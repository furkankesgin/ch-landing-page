import ComputerIcon from "@mui/icons-material/Computer";
import DevicesIcon from "@mui/icons-material/Devices";

import { ServiceCardProps } from "@/components/home-page/our-services/service-card";


const ServiceCards: ServiceCardProps[] = [
	{
		title: "Importance of Timely Completion and Cost Efficiency in Projects",
		description: "Today, the timely completion and cost of a project have become critical issues for companies. Achieving this...",
		icon:
			<ComputerIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>

	},
	{
		title: "CodeHouse: Meeting Your Qualified Software Developer Needs",
		description: "At CodeHouse, we address the need for qualified software developers across all sectors. Our company provides...",
		icon:
			<DevicesIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>

	},
	{
		title: "Optimizing Costs and Project Durations Through Outsourcing",
		description: "By outsourcing the generic parts of their software development to CodeHouse, companies can concentrate on the...",
		icon:
			<ComputerIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>

	},
	{
		title: "Expert Hire",
		description: "In line with the request of the companies, we also provide temporary staff rental service. It meets the competent...",
		icon:
			<ComputerIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>

	},
	{
		title: "Software",
		description: "As everyone knows, all sectors need software. However, not every company has its own software department. At...",
		icon:
			<ComputerIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>

	}
];

export default ServiceCards;
