"use client";
import Link from "next/link";

import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Grid2 as Grid, Input } from "@mui/material";


const ContactForm = () => {
	const [message, setMessage] = React.useState("");
	return (
		<Grid container spacing={5} py={5}>

			<Grid size={{ xl: 8, md: 8, xs: 12 }} >
				<Input
					placeholder="Enter your message" 
					fullWidth
					onChange={e => setMessage(e.target.value)}
				/>
			</Grid>

			<Grid size={{ xl: 4, md: 4, xs: 12 }} >
				<Button
					variant="contained"
					component={Link}
					color="primary"
					fullWidth
					href={`mailto:info@codehouse.com.tr?subject=Contact&body=${message}`}
					endIcon={React.cloneElement(<ArrowForwardIcon />)}
				>
					Contact With Us 
				</Button>
			</Grid>
		</Grid>
	);
};

export default ContactForm;
