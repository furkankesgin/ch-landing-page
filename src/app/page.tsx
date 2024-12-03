import ContactUs from '@/app/(components)/contact-us/contactUs';
import OurClients from '@/app/(components)/our-clients/our-clients';
import OurServices from '@/app/(components)/our-services/our-services';
import { Box } from '@mui/material';

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
