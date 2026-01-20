import {
	VscChromeMinimize,
	VscChromeRestore,
	VscChromeClose,
} from "react-icons/vsc";
import Carousel from "./Carousel";

export default function About() {
	const windowIconStyle =
		"w-5 h-5 text-mainAccent cursor-pointer hover:scale-110 transition-transform duration-300";

	return (
		<>
			<section className="overflow-hidden h-full w-full ">
				<div
					id="about"
					className="py-20 md:pt-0 md:pb-0 h-full overflow-y-auto vertical-scroll px-4 flex flex-col justify-center items-center">
					<div className="flex flex-col justify-center border-2 mt-5 lg:m-0 p-10 md:p-15 border-mainAccent relative rounded-xl">
						<div className="absolute top-0 right-0 flex flex-row gap-2 p-2 border-2 border-mainAccent border-t-0 border-r-0">
							{/* Minimize */}
							<VscChromeMinimize
								className={windowIconStyle}
								title="Minimize"
							/>

							{/* Maximize / Restore */}
							<VscChromeRestore
								className={windowIconStyle}
								title="Restore"
							/>

							{/* Close */}
							<VscChromeClose
								className={`${windowIconStyle} hover:bg-red-500 hover:text-white`}
								title="Close"
							/>
						</div>
						<div className="max-w-md">
							<h2 className="text-2xl md:text-4xl font-bold mb-2 text-mainAccent">
								GAME LOVER FRONT-END DEV
							</h2>
							<p className="text-base leading-relaxed">
								As a fresh graduate and active freelancer, I
								specialize in building responsive,
								high-performance web applications using React,
								Next.js, and Tailwind CSS. I have a deep passion
								for gaming and interactive UI, which drives me
								to learn new tools and stay ahead of industry
								trends. I’m currently seeking a full-time role
								or internship to apply my knowledge in a
								collaborative team environment.
							</p>
						</div>
						<div className="max-w-3xs md:max-w-lg mx-auto">
							<Carousel />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
