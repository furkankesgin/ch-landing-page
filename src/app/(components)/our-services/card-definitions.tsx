import ComputerIcon from "@mui/icons-material/Computer";
import DevicesIcon from "@mui/icons-material/Devices";

import { ServiceCardProps } from "@/app/(components)/our-services/service-card";


const ServiceCards: ServiceCardProps[] = [
	{
		title: "Web Development",
		description: "We build web applications using the latest technologies",
		icon: (
			<ComputerIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>
		)
	},
	{
		title: "Mobile Development",
		description: "We build mobile applications using the latest technologies",
		icon: (
			<DevicesIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>
		)
	},
	{
		title: "Desktop Development",
		description: "We build desktop applications using the latest technologies",
		icon: (
			<ComputerIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>
		)
	},
	{
		title: "DevOps",
		description: "We build CI/CD pipelines using the latest technologies",
		icon: (
			<ComputerIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>
		)
	},
	{
		title: "Cloud",
		description: "We build cloud applications using the latest technologies",
		icon: (
			<ComputerIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>
		)
	},
	{
		title: "Machine Learning",
		description: "We build machine learning models using the latest technologies",
		icon: (
			<DevicesIcon
				color="primary"
				sx={{ fontSize: 100 }}
			/>
		)
	}
]

export default ServiceCards;
