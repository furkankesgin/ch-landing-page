import React from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box, Button, Container, Grid2 as Grid, TextareaAutosize, TextField, Typography } from "@mui/material";


const ContactUs = () => {
	return (
		<Container>
			<Box
				px={20}
				py={10}
			>
				<Box textAlign="center">
					<Typography
						component="h4"
						variant="h4"
						fontWeight={500}
					>
						Get In Touch With Us
					</Typography>

					<Typography
						variant="body1"
						color="text.secondary"
					>
						For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
					</Typography>
				</Box>

				<Grid
					container
					spacing={2}
					py={10}
				>

					<Grid
						size={{ xs: 12, md: 6 }}
						display="flex"
						flexDirection="column"
						gap={2}
						textAlign="left"
					>
						<Box
							display="flex"
							alignItems="center"
							gap={2}
							p={2}
						>
							<Box>
								<HomeIcon />
							</Box>

							<Box>
								<Typography
									variant="h6"
									color="text.primary"
								>
									Address:
								</Typography>

								<Typography
									variant="body2"
									color="text.secondary"
								>
									123 Main Street, New York, NY 10030
								</Typography>
							</Box>
						</Box>

						<Box
							display="flex"
							alignItems="center"
							gap={2}
							p={2}
						>
							<Box>
								<LocalPhoneIcon />
							</Box>

							<Box>
								<Typography
									variant="h6"
									color="text.primary"
								>
									Phone:
								</Typography>

								<Typography
									variant="body2"
									color="text.secondary"
								>
									+1 123 456 7890
								</Typography>
							</Box>
						</Box>

						<Box
							display="flex"
							alignItems="center"
							gap={2}
							p={2}
						>
							<Box>
								<AccessTimeIcon />
							</Box>

							<Box>
								<Typography
									variant="h6"
									color="text.primary"
								>
									Hours:
								</Typography>

								<Typography
									variant="body2"
									color="text.secondary"
								>
									Mon - Fri: 8:00am - 7:00pm
								</Typography>
							</Box>
						</Box>
					</Grid>

					<Grid
						size={{ xs: 12, md: 6 }}
						display="flex"
						flexDirection="column"
						gap={2}
						textAlign="left"
					>
						<Typography
							variant="body1"
							color="text.primary"
						>
							Name:
						</Typography>

						<TextField placeholder="Name" />

						<Typography
							variant="body1"
							color="text.primary"
						>
							Email:
						</Typography>

						<TextField placeholder="Email" />

						<Typography
							variant="body1"
							color="text.primary"
						>
							Subject:
						</Typography>

						<TextField placeholder="Subject" />

						<Typography
							variant="body1"
							color="text.primary"
						>
							Message:
						</Typography>

						<TextareaAutosize
							placeholder="Message"
							style={{ height: "100px" }}
						/>

						<Box display="flex">
							<Button
								variant="contained"
								color="warning"
								sx={{ alignSelf: "center", px: 8, py: 2 }}
							>
								Submit
							</Button>
						</Box>
					</Grid>

				</Grid>
			</Box>
		</Container >
	);
};

export default ContactUs;