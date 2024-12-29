import Image from "next/image";

import React from "react";

import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";

import client3 from "@/assets/images/bac-logo.png";
import client4 from "@/assets/images/borsa-pivot.png";
import client1 from "@/assets/images/client-Turkcell.jpg";
import client5 from "@/assets/images/defne-logo.svg";
import client6 from "@/assets/images/lidya-madencilik.png";
import client2 from "@/assets/images/tt-logo.svg";


const customers = [client1, client2, client3, client4, client5, client6];
const OurClients = () => {

	return (
		<Container>
			<Box
				justifyItems="center"
				py={10}
			>
				<Typography
					variant="h4"
					color='initial'
				>
					Our Clients
				</Typography>

				<Typography
					variant="body1"
					color="text.secondary"
				>
					We are proud to work with these companies
				</Typography>
			</Box>

			<Box display="flex" width="100%" overflow="auto" justifyContent="start" alignItems="center">

				{customers.map((customer, index) => 
					<Box key={index} p={2}>
						<Image
							width={150}
							height={0}
							src={customer}
							alt="customer"
						/>
					</Box>
				)}
			</Box>
				

			<Box>
				<Grid
					container
					spacing={2}
					p={10}
					sx={{ backgroundColor: "rgb(52, 115, 48,0.65)", borderRadius: 5 }}
				>
					<Grid size={{ xl: 6, md: 6, xs: 12 }} />

					<Grid size={{ xl: 6, md: 6, xs: 12 }}>
						<Box
							display="flex"
							flexDirection="column"
							textAlign="right"
						>
							<Typography
								variant="h4"
								color="white"
							>
								INNOVATIVE SOLUTIONS
							</Typography>

							<Typography
								variant="body1"
								color="white"
							>
								CodeHouse,  is a leading global provider of telecom solutions, software products and services for communications networks. CodeHouse’s solutions enable network operators and service providers to monetize every potential connection beyond limits while enhancing subscriber experience.

							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default OurClients;