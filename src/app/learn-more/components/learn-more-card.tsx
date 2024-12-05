import Image from "next/image";
import React from "react";

import { Box, Container, Typography } from "@mui/material";

import { LearnMoreCardDefinition } from "@/app/learn-more/components/card-definitions";


interface LearnMoreCardProps extends LearnMoreCardDefinition {
	variant: "left" | "right";
}

const LearnMoreCard = (props: LearnMoreCardProps) => {
	return (
		<Container>
			<Box
				display="flex"
				flexDirection={{
					md: props.variant === "left" ? "row" : "row-reverse",
					xs: "column"
				}}
				justifyContent="space-between"
				alignItems="center"
				gap={1}
				bgcolor="grey.200"
				p={5}
			>
				<Box maxWidth={{ md: 500, xs: 250 }}>
					<Image
						width={0}
						height={0}
						layout="responsive"
						src={props.image}
						alt={props.title}
					/>
				</Box>

				<Box
					display="flex"
					flexDirection="column"
					gap={3}
				>
					<Typography
						component="h5"
						variant="h5"
						fontWeight={900}
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
			</Box>
		</Container>
	);
};

export default LearnMoreCard;
