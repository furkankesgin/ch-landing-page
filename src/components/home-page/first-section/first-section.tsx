import Image from "next/image";
import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Grid2 as Grid, Input, Typography } from "@mui/material";

import bgImage from "@/assets/images/first-section-bg.svg";
import firstImage from "@/assets/images/learn-more-first.svg";


const FirstSection = () => {
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid size={{ xl: 6, md: 6, xs: 12 }} >
					<Typography variant="h2" fontWeight={500}> Team projects, done well</Typography>

					<Typography variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, nam. Suscipit delectus eligendi expedita eaque reprehenderit earum doloribus, facere quo.
					</Typography>

					<Grid container spacing={5} py={5}>

						<Grid size={{ xl: 8, md: 8, xs: 12 }} >
							<Input placeholder="Enter your email" fullWidth />
						</Grid>

						<Grid size={{ xl: 4, md: 4, xs: 12 }} >
							<Button variant="contained" color="primary" fullWidth endIcon={React.cloneElement(<ArrowForwardIcon />)}>Contact With Us </Button>
						</Grid>
					</Grid>
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