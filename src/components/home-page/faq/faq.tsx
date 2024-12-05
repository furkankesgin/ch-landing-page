import React from "react";

import { Container, Typography } from "@mui/material";

import AccordionDetail from "@/components/home-page/faq/accordion-detail";
import AccordionPage from "@/components/home-page/faq/accordion-page";


const Faq = () => {
	return (
		<Container sx={{ py: 5, px: 5 }}>
			<Typography variant="h2" color="initial">FAQ</Typography>

			{AccordionDetail.map((service, index) =>
				<AccordionPage
					key={index}
					title={service.title}
					description={service.description}
					
				/>
			)}
		</Container>
	);
};

export default Faq;