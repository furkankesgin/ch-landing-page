import React from "react";

import CardDefinitions from "@/app/learn-more/(components)/card-definitions";
import LearnMoreCard from "@/app/learn-more/(components)/learn-more-card";
import ContactUs from "@/components/home-page/contact-us/contact-us";
import Footer from "@/components/home-page/footer/footer";


const Page = () => {
	return (
		<div>
			{
				CardDefinitions.map((service, index) =>
					<LearnMoreCard
						key={index}
						variant={index % 2 === 0 ? "left" : "right"}
						title={service.title}
						description={service.description}
						image={service.image}
					/>
				)
			}

			<ContactUs />

			<Footer />
		</div>
	);
};

export default Page;
