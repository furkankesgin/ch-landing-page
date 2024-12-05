import Image from "next/image";

import React from "react";

import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";

import client1 from "@/assets/images/client-Turkcell.jpg";


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

			<Box display="flex">
				<Box maxWidth={{ md: 500, xs: 250 }}>
					<Image
						width={0}
						height={0}
						layout="responsive"
						src={client1}
						alt="props.title"
					/>
				</Box>

				<Box maxWidth={{ md: 500, xs: 250 }}>
					<Image
						width={0}
						height={0}
						layout="responsive"
						src={client1}
						alt="props.title"
					/>
				</Box>

				<Box maxWidth={{ md: 500, xs: 250 }}>
					<Image
						width={0}
						height={0}
						layout="responsive"
						src={client1}
						alt="props.title"
					/>
				</Box>

				<Box maxWidth={{ md: 500, xs: 250 }}>
					<Image
						width={0}
						height={0}
						layout="responsive"
						src={client1}
						alt="props.title"
					/>
				</Box>

				<Box maxWidth={{ md: 500, xs: 250 }}>
					<Image
						width={0}
						height={0}
						layout="responsive"
						src={client1}
						alt="props.title"
					/>
				</Box>
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
								Problems come and get solved with ease
							</Typography>

							<Typography
								variant="body1"
								color="white"
							>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, nam. Suscipit delectus eligendi expedita eaque reprehenderit earum doloribus, facere quo.
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default OurClients;