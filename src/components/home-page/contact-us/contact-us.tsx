"use client";

import Link from "next/link";

import React from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box, Button, Container, Grid2 as Grid, TextareaAutosize, TextField, Typography } from "@mui/material";


const ContactUs = () => {
	const [message, setMessage] = React.useState("");
	const [name, setName] = React.useState("");
	const [subject, setSubject] = React.useState("");

	return (
		<Container>
			<Box
				// px={20}
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
									Kagıthane Cad. Dap Vadi Y Blokları No:5 Ic kapı:54

									Kagıthane / Istanbul
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
								<EmailIcon />
							</Box>

							<Box>
								<Typography
									variant="h6"
									color="text.primary"
								>
									Email:
								</Typography>

								<Typography
									variant="body2"
									color="text.secondary"
								>
									info@codehouse.com.tr
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

						<TextField
							placeholder="Name"
							onChange={e => setName(e.target.value)}
						/>

						<Typography
							variant="body1"
							color="text.primary"
						>
							Subject:
						</Typography>

						<TextField
							placeholder="Subject"
							onChange={e => setSubject(e.target.value)}
						/>

						<Typography
							variant="body1"
							color="text.primary"
						>
							Message:
						</Typography>

						<TextareaAutosize
							placeholder="Message"
							style={{ height: "100px" }}
							onChange={e => setMessage(e.target.value)}
						/>

						<Box display="flex">
							<Button
								variant="contained"
								color="warning"
								component={Link}
								href={`mailto:info@codehouse.com.tr?subject=${subject}&body=${name}, ${message}`}
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