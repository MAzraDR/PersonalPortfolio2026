import {
	FaHtml5,
	FaReact,
	FaBootstrap,
	FaCss3Alt,
	FaJsSquare,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import {
	VscChromeMinimize,
	VscChromeRestore,
	VscChromeClose,
} from "react-icons/vsc";

export default function About() {
	const iconStyle =
		"text-4xl md:text-5xl cursor-pointer hover:scale-110 transition-transform duration-300";
	const windowIconStyle =
		"w-5 h-5 text-white cursor-pointer hover:scale-110 transition-transform duration-300";

	return (
		<>
			<section className="overflow-hidden h-full w-full flex flex-col justify-center items-center">
				<div
					id="about"
					className="py-25 md:pt-15 md:pb-0 h-full overflow-y-auto vertical-scroll px-4">
					<div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center border-2 mt-5 lg:m-0 p-10 md:p-20 border-mainAccent relative">
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
							<h2 className="text-2xl font-bold mb-2 text-mainAccent">
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
						<div className="shadow-2xl p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
							<h2 className="uppercase text-2xl font-bold mb-2 text-mainAccent">
								Skills
							</h2>
							<div className="flex flex-row flex-wrap gap-8 max-w-md justify-center md:justify-start items-center sm:grid sm:grid-cols-2 lg:flex lg:flex-row ">
								{/* Row 1 */}
								<FaHtml5
									className={`${iconStyle}  text-[#E34F26]`}
									title="HTML5"
								/>
								<FaReact
									className={`${iconStyle}  text-[#61DAFB]`}
									title="React"
								/>
								<FaBootstrap
									className={`${iconStyle}  text-[#7952B3]`}
									title="Bootstrap"
								/>

								{/* Row 2 */}
								<FaCss3Alt
									className={`${iconStyle}  text-[#1572B6]`}
									title="CSS3"
								/>
								<SiNextdotjs
									className={`${iconStyle}  text-black`}
									title="Next.js"
								/>
								<SiTailwindcss
									className={`${iconStyle}  text-[#06B6D4]`}
									title="Tailwind CSS"
								/>

								{/* Row 3 */}
								<FaJsSquare
									className={`${iconStyle}  text-[#F7DF1E]`}
									title="JavaScript"
								/>
								<SiTypescript
									className={`${iconStyle}  text-[#3178C6] rounded-sm`}
									title="TypeScript"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
