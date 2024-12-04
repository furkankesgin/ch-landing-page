import React from "react"

import { Box, Typography } from "@mui/material";


export interface ServiceCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const ServiceCard = (props: ServiceCardProps) => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="start"
			flexDirection="column"
			textAlign="start"
			gap={1}
			py={4}
			px={3}
			height="100%"
			bgcolor="grey.200"
			borderRadius={5}
		>
			{props.icon}

			<Typography
				component="h6"
				variant="h6"
			>
				{props.title}
			</Typography>

			<Typography
				variant="body1"
				color="text.secondary"
			>
				{props.description}
			</Typography>
		</Box>
	)
}

export default ServiceCard;
