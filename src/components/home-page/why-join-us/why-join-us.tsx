import Image from "next/image";

import React from "react";

import DoneIcon from "@mui/icons-material/Done";
import { Box, Container, Grid2 as Grid, ListItemIcon, ListItemText, Typography } from "@mui/material";

import firstImage from "@/assets/images/learn-more-first.svg";
import bgImage from "@/assets/images/why-join-us-bg.svg";


const WhyJoinUs = () => {
	return (
		<Container>
			<Grid container spacing={2} p={10}>
				<Grid size={{ xl: 6, md: 6, xs: 12 }} >
					<Typography variant="h2" fontWeight={500}>CodeHouse</Typography>

					<ListItemIcon sx={{ py: 5, alignItems: "center" }}>
						<ListItemIcon>
							<DoneIcon color="success" />
						</ListItemIcon>

						<ListItemText primary= "Customer-oriented behavior is the key to our success. We are committed to providing the best possible service to our customers." />
					</ListItemIcon>

					<ListItemIcon sx={{ alignItems: "center" }}>
						<ListItemIcon>
							<DoneIcon color="success" />
						</ListItemIcon>

						<ListItemText primary= "CodeHouse,  is a leading global provider of telecom solutions, software products and services for communications networks. CodeHouse’s solutions enable network operators and service providers to monetize every potential connection beyond limits while enhancing subscriber experience." />
					</ListItemIcon>

	
					
				</Grid>

				<Grid size={{ xl: 6, md: 6, xs: 12 }}>
					<Box
						maxWidth={{ md: 600, xs: 350 }}
						sx={{
							backgroundImage: `url(${bgImage.src})`,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "start"
							
							
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

export default WhyJoinUs;