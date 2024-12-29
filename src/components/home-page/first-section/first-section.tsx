import Image from "next/image";

import React from "react";

import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";

import bgImage from "@/assets/images/first-section-bg.svg";
import firstImage from "@/assets/images/learn-more-first.svg";
import ContactForm from "@/components/home-page/first-section/contact-form";



const FirstSection = () => {
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid size={{ xl: 6, md: 6, xs: 12 }} >
					<Typography variant="h2" fontWeight={500}>
						WELCOME TO CODEHOUSE WORLD
					</Typography>

					<Typography variant="body1">
						Innovative Solutions
					</Typography>

					<ContactForm />
				</Grid>

				<Grid size={{ xl: 6, md: 6, xs: 12 }}>
					<Box
						maxWidth={{ md: 500, xs: 250 }}
						sx={{
							backgroundImage: `url(${bgImage.src})`
						}}
					>
						<Image
							width={0}
							height={0}
							layout="responsive"
							src={firstImage.src}
							alt="props.title"
						/>
					</Box>
				</Grid>
			</Grid>

		</Container>
	);
};

export default FirstSection;