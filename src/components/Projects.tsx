import { useState } from "react";
import { projectsData } from "../data/projectsData";

export default function Projects() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	console.log(expandedIndex);

	return (
		<section id="projects" className="overflow-hidden h-full w-full px-4">
			<div className="h-full mx-auto overflow-y-auto vertical-scroll py-20 lg:py-0 flex flex-col lg:justify-center items-center">
				{/* Section Header */}
				<div
					className={`mb-12 text-center ${
						expandedIndex != null ? "lg:mt-40" : "lg:mt-15"
					}`}>
					<h2 className="text-4xl font-bold  mb-4">My Projects</h2>
					<div className="h-1 w-20 bg-mainAccent mx-auto rounded-full"></div>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-start mb-10">
					{projectsData.map((item, i) => {
						const isExpanded = expandedIndex === i;

						return (
							<div
								key={i}
								className="group relative flex flex-col rounded-xl overflow-hidden max-w-75 min-h-100 shadow-xl bg-white/20 backdrop-blur-md border border-white/30 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
								{/* Image Container with Hover Zoom */}
								<div className="relative top-0 overflow-hidden aspect-[4/3] w-full flex items-start justify-center">
									{item.img == "" ? (
										<div className=" flex flex-col items-center justify-center max-h-[144px] h-full w-full text-gray-400">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-12 w-12 mb-2 "
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={1}
													d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
												/>
											</svg>
											<span className="text-xs font-medium uppercase tracking-widest">
												No Preview Available
											</span>
										</div>
									) : (
										<img
											src={item.img}
											alt={item.name}
											className="w-full h-full object-cover transition-transform duration-500"
										/>
									)}
								</div>

								{/* Content Section */}
								<div className="p-8 flex flex-col">
									<h3 className="text-2xl mb-1 font-bold  text-mainAccent">
										{item.name}
									</h3>
									<p
										className={`text-gray-500 text-sm font-normal leading-relaxed transition-all mb-2 
                                ${
									isExpanded
										? "line-clamp-none"
										: "line-clamp-3"
								}`}>
										{item.description}
									</p>
									<button
										onClick={() =>
											setExpandedIndex(
												isExpanded ? null : i
											)
										}
										className="text-mainAccent text-xs font-bold uppercase tracking-wider mb-5 text-left">
										{isExpanded ? "Show Less" : "Read More"}
									</button>
									{/* Footer / Link */}
									<div className="mt-auto flex items-center justify-between">
										<a
											href={item.liveLink}
											target="_blank"
											rel="noreferrer"
											className={`inline-flex items-center gap-2 px-6 py-2.5 bg-mainAccent text-white rounded-lg font-medium hover:brightness-110 transition-all shadow-md active:scale-95 ${
												item.liveLink == ""
													? "disabled opacity-60"
													: ""
											}`}>
											View Live
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
												/>
											</svg>
										</a>

										{/* Optional: GitHub or Tech stack icons could go here */}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
