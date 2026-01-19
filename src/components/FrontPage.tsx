import { handleNavigation } from "../utils/useNavigation";

export default function FrontPage() {
	return (
		<>
			<div
				id="home"
				className="h-full w-screen flex flex-col justify-center items-center">
				<div className="text-center md:text-left">
					<h2 className="uppercase text-xl md:text-2xl font-semibold">
						Junior Front-end Developer
					</h2>
					<h1 className="uppercase text-5xl font-bold text-mainAccent">
						Muhammad <br /> Azra Dwi <br /> Rizky
					</h1>
					<button className="mt-2 group font-semibold text-base capitalize w-fit cursor-pointer">
						Download my resume{" "}
						<span className="block max-w-0 group-hover:max-w-full group-active:max-w-full transition-all duration-500 h-0.5 bg-mainAccent"></span>
					</button>
					<button
						onClick={() => handleNavigation("#about")}
						className="mt-5 md:mt-2 mx-auto md:mx-0 block bg-mainAccent rounded-2xl px-10 py-2 text-white font-semibold uppercase text-base cursor-pointer active:scale-80 transition-all duration-300">
						Get started
					</button>
				</div>
			</div>
		</>
	);
}
