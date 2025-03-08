import { Box, Button, Container, Divider, Grid2 as Grid, Typography } from "@mui/material";

import BbImage from "@/assets/images/our-services-bg.svg";
import ServiceCards from "@/components/home-page/our-services/card-definitions";
import ServiceCard from "@/components/home-page/our-services/service-card";


const OurServices = () => {
	return (
		<Box
			py={10}
			sx={{
				backgroundImage: `url(${BbImage.src})`,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "start"
			}}
		>
			<Container>
				<Box
					display="flex"
					flexDirection="column"
					textAlign="center"
					gap={3}
				>
					<Typography
						component="h4"
						variant="h4"
					>
						Our services
					</Typography>

					<Box
						width={50}
						alignSelf="center"
					>
						<Divider
							sx={{
								borderBottomWidth: 3,
								backgroundColor: "text.primary"
							}}
						/>
					</Box>

					<Typography
						variant="body1"
						color="text.secondary"
					>
						Outsource
					</Typography>

					<Grid container spacing={2} justifyContent="center">
						{
							ServiceCards.map(service =>
								<Grid
									key={service.title}
									size={{ xl: 4, md: 6, xs: 12 }}
								>
									<ServiceCard
										title={service.title}
										description={service.description}
										icon={service.icon}
									/>
								</Grid>
							)
						}
					</Grid>

					<Button sx={{ alignSelf: "center" }} variant="outlined" color="primary" href="/learn-more" target="_blank">Learn More</Button>
				</Box>

			</Container>
		</Box>
	);
};

export default OurServices;
