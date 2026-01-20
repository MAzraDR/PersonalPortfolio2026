import { handleNavigation } from "../utils/useNavigation";
import { motion } from "motion/react";


export default function FrontPage() {
	return (
		<>
			<div
				id="home"
				className="relative h-full w-screen flex flex-col justify-center items-center">
				<div className="text-center md:text-left">
					<motion.h2
						initial={{ translateX: -900 }}
						animate={{ translateX: 0 }}
						transition={{
							ease: "easeInOut",
							duration: 1,
							delay: 0,
						}}
						className="uppercase text-xl md:text-2xl font-semibold">
						Junior Front-end Developer
					</motion.h2>
					<motion.h1
						initial={{ translateX: -900 }}
						animate={{ translateX: 0 }}
						transition={{
							ease: "easeInOut",
							duration: 1,
							delay: 0.5,
						}}
						className="uppercase text-5xl font-bold text-mainAccent">
						Muhammad <br /> Azra Dwi <br /> Rizky
					</motion.h1>
					<motion.div
						initial={{ translateX: -900 }}
						animate={{ translateX: 0 }}
						transition={{
							ease: "easeInOut",
							duration: 1,
							delay: 1,
						}}>
						<a
							href="/CV.pdf"
							download={"CV M. Azra Dwi Rizky.pdf"}
							className=" inline-block mt-2 group w-fit font-semibold text-base capitalize cursor-pointer">
							Download my CV{" "}
							<span className="block max-w-0 group-hover:max-w-full group-active:max-w-full transition-all duration-500 h-0.5 bg-mainAccent"></span>
						</a>
						<button
							onClick={() => handleNavigation("#about")}
							className="mt-5 md:mt-2 mx-auto md:mx-0 block bg-mainAccent rounded-2xl px-10 py-2 text-white font-semibold uppercase text-base cursor-pointer active:scale-80 transition-all duration-300">
							Get started
						</button>
					</motion.div>
				</div>
				<motion.div
					initial={{ translateX: -900 }}
					animate={{ translateX: 0 }}
					transition={{
						ease: "easeInOut",
						duration: 1,
						delay: 1.5,
					}}
				
					className="absolute bottom-20">
					<p className="text-sm text-center tracking-widest font-medium">
						This page use horizontal scroll, please scroll slowly
					</p>
				</motion.div>
			</div>
		</>
	);
}
