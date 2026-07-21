import { useState } from "react";
import { experienceData } from "../data/experienceData";
import Card from "./Card";

export default function Experience() {
	const [openCard, setOpenCard] = useState<number | null>(null);

	return (
		<>
			<section
				id="experience"
				className="overflow-hidden h-full w-full flex flex-col justify-center items-center md:pt-0">
				<h1 className="text-center font-bold mb-5 text-4xl uppercase">
					Work Experience
				</h1>
				{experienceData.map((experience, index) => (
					<Card
						key={index}
						card={experience}
						isOpen={openCard === index}
						onToggle={() =>
							setOpenCard(openCard === index ? null : index)
						}
					/>
				))}
			</section>
		</>
	);
}
