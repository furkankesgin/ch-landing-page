import { Box } from "@mui/material";

import OurClients from "@/app/components/our-clients/our-clients";
import OurServices from "@/app/components/our-services/our-services";


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
