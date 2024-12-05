import React from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";


export interface AccordionProps {
	title: string;
	description: string;
}

const AccordionPage = (props: AccordionProps) => {
	return (
		<Container>
			<Box py={1}>
				<Accordion>
					<AccordionSummary
						expandIcon={<ArrowDownwardIcon />}
						aria-controls="panel1-content"
						id="panel1-header"
					>
						<Typography variant="h5">
							{props.title}
						</Typography>
					</AccordionSummary>

					<AccordionDetails>
						<Typography variant="body1">
							{props.description}
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Container>
	);
};

export default AccordionPage;