import { navbarData } from "../data/navbarData";

export default function Navbar() {
	const handleNavigation = (href: string) => {
		const targetSection = document.querySelector(href);
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<div className="z-50 absolute w-full flex justify-center items-center mt-10">
				<nav
					className={`fixed w-fit px-10 py-3 bg-mainAccent rounded-4xl shadow-lg flex justify-center items-center gap-6 mx-auto uppercase font-semibold scale-80 md:scale-90 lg:scale-100 text-white  `}>
					{navbarData.map((item, i) => (
						<button
							onClick={() => handleNavigation(item.href)}
							className="relative group inline-block cursor-pointer"
							key={i}>
							{item.text}{" "}
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
						</button>
					))}
				</nav>
			</div>
		</>
	);
}
