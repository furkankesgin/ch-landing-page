import { Box } from "@mui/material";

import FirstSection from "@/components/home-page/first-section/first-section";
import OurClients from "@/components/home-page/our-clients/our-clients";
import OurServices from "@/components/home-page/our-services/our-services";


const AppHome = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			py={5}

		>
			<FirstSection />
			<OurClients />
			<OurServices />
		</Box>
	);
};

export default AppHome;
