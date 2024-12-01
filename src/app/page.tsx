import OurServices from '@/app/(components)/our-services/our-services';
import { Box } from '@mui/material';

const AppHome = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
		>
			<OurServices />
		</Box>
	);
};

export default AppHome;
