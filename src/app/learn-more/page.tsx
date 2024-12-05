import React from "react";

import CardDefinitions from "@/app/learn-more/(components)/card-definitions";
import ContactUs from "@/app/learn-more/(components)/contact-us/contact-us";
import LearnMoreCard from "@/app/learn-more/(components)/learn-more-card";


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
		</div>
	);
};

export default Page;
