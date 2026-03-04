// import { servicesData } from "../data/servicesData";
// import useAccordion from "../hooks/useAccordion";
import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function Services() {
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

	const buttonStyle =
		"bg-mainAccent w-full opacity-90 m-1 px-3 py-1 rounded transition-all duration-150 ease-in-out hover:opacity-100 active:scale-95 cursor-pointer font-semibold";

	return (
		<>
			<section
				id="activities"
				className="overflow-hidden h-full w-full flex flex-col justify-center items-center md:pt-0">
				<div className=" bg-[#2c130c] text-white flex flex-col gap-5 w-[90%] lg:w-fit p-5 rounded-lg">
					<h1 className=" text-center font-bold mb-5 text-lg uppercase">
						Github Activities
					</h1>

					<div className="flex gap-5 flex-col lg:flex-row">
						<GitHubCalendar
							username="MAzraDR"
							theme={{
								dark: ["#3B1E12", "#A88B71"], // [Lowest intensity (bg match), Highest intensity (bright green)]
							}}
							year={selectedYear}
						/>
						<div className="border-r-2 border-mainAccent "></div>
						<div className="flex flex-row lg:flex-col justify-around items-center">
							<button
								className={buttonStyle}
								onClick={() => setSelectedYear(2026)}>
								2026
							</button>
							<button className={buttonStyle} onClick={() => setSelectedYear(2025)}>
								2025
							</button>
							<button className={buttonStyle} onClick={() => setSelectedYear(2024)}>
								2024
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
