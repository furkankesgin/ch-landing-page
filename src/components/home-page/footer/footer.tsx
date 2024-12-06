import Image from "next/image";

import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, IconButton, Typography } from "@mui/material";

import logo from "@/assets/images/logo.png";


const d = new Date();
const year = d.getFullYear();
const Footer = () => {
	return (
		<Box sx={{ backgroundColor: "#333", color: "#fff", py: 3 }}>
			<Container maxWidth="lg">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Image src={logo.src} alt="Logo" width={300} height={80} />

					<Typography variant="h6">
						© 
						{" "}

						{year}

						{" "}
						CodeHouse Company
					</Typography>

					<Box>
						<IconButton href="https://www.facebook.com/profile.php?id=100088285685300" target="_blank" sx={{ color: "#fff" }}>
							<FacebookIcon />
						</IconButton>

						<IconButton href="https://x.com/codehousecomtr" target="_blank" sx={{ color: "#fff" }}>
							<TwitterIcon />
						</IconButton>

						<IconButton href="https://www.instagram.com/codehouse.com.tr/" target="_blank" sx={{ color: "#fff" }}>
							<InstagramIcon />
						</IconButton>

						<IconButton href="https://www.linkedin.com/company/codehouse-yazılım-danışmanlık-a-ş/about/" target="_blank" sx={{ color: "#fff" }}>
							<LinkedInIcon />
						</IconButton>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;