import { Box } from "@mui/material";	

import ContactUs from "@/components/home-page/contact-us/contact-us";
import Faq from "@/components/home-page/faq/faq";
import FirstSection from "@/components/home-page/first-section/first-section";
import Footer from "@/components/home-page/footer/footer";
import OurClients from "@/components/home-page/our-clients/our-clients";
import OurServices from "@/components/home-page/our-services/our-services";
import WhyJoinUs from "@/components/home-page/why-join-us/why-join-us";


const AppHome = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			py={5}
			pb={0}

		>
			<FirstSection />

			<OurClients />

			<OurServices />

			<WhyJoinUs />

			<Faq />

			<ContactUs />

			<Footer />
		</Box>
	);
};

export default AppHome;
