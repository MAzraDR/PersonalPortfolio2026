import { servicesData } from "../data/servicesData";
import useAccordion from "../hooks/useAccordion";

export default function Services() {
	const { isOpen, toggleAccordion } = useAccordion();

	const ArrowUp = () => (
		<svg className="w-5 h-5 " viewBox="0 0 16 16" fill="currentColor">
			<path
				fillRule="evenodd"
				d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
				clipRule="evenodd"
			/>
		</svg>
	);

	return (
		<>
			<section
				id="services"
				className="overflow-hidden h-full w-full flex flex-col justify-center  md:pt-0">
				<h2 className="uppercase text-2xl text-center font-bold text-mainAccent">
					Provided Services
				</h2>
				<p className="text-center text-base">
					This is the list of what i mostly works with
				</p>
				{servicesData.map((item, i) => (
					<div
						key={i}
						className="border-b border-mainAccent mx-5 lg:mx-30 touch-pan-y"
						data-no-swipe>
						<button
							onClick={() => toggleAccordion(i)}
							className="w-full flex justify-between items-center py-5 cursor-pointer gap-10">
							<div className="">
								<p className="font-bold text-base md:text-lg uppercase text-left text-mainAccent">
									{item.packageName}
								</p>
								<p
									className={`font-normal text-left text-sm md:text-base ${
										isOpen(i)
											? "line-clamp-none"
											: "line-clamp-1"
									}`}>
									{item.useCase}
								</p>
							</div>
							<span
								className={`transition-transform duration-300 ${
									isOpen(i) ? "rotate-180" : ""
								}`}>
								<ArrowUp />
							</span>
						</button>

						<div
							className={`overflow-hidden transition-all duration-500 ease-in-out ${
								isOpen(i) ? "max-h-40" : "max-h-0"
							}`}>
							<div className="pb-2 flex items-center justify-between gap-10">
								<p className=" text-sm md:text-base font-normal ">
									{item.includedFeature}
								</p>
								{/* <p className="text-xs md:text-base uppercase font-semibold">
									{item.pricing}
								</p> */}
							</div>
						</div>
					</div>
				))}
			</section>
		</>
	);
}
