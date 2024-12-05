import { Box } from "@mui/material";

import OurClients from "@/components/home-page/our-clients/our-clients";
import OurServices from "@/components/home-page/our-services/our-services";


const AppHome = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
		>
			<OurClients />
			<OurServices />
		</Box>
	);
};

export default AppHome;
