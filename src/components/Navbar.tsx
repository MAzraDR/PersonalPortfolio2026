import { useEffect, useRef, useState } from "react";
import { navbarData } from "../data/navbarData";

export default function Navbar() {
	const [isVisible, setIsVisible] = useState(true);
	const scrollTimeOut = useRef<number | undefined>(undefined);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(false);

			if (scrollTimeOut.current) {
				clearTimeout(scrollTimeOut.current);
			}

			scrollTimeOut.current = setTimeout(() => {
				setIsVisible(true);
			}, 200);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(scrollTimeOut.current);
		};
	}, []);

	return (
		<>
			<div className="absolute w-full flex justify-center items-center mt-10">
				<nav
					className={`fixed w-fit px-10 py-3 bg-mainAccent rounded-4xl shadow-lg flex justify-center items-center gap-6 mx-auto uppercase font-semibold scale-80 md:scale-90 lg:scale-100 -translate-y-12 transition-all duration-500 ease-in-out text-white  ${
						isVisible
							? "translate-y-0 opacity-100 delay-200"
							: "-translate-y-12 opacity-50"
					}`}>
					{navbarData.map((item, i) => (
						<a
							href={item.href}
							className="relative group inline-block"
							key={i}>
							{item.text}{" "}
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
						</a>
					))}
				</nav>
			</div>
		</>
	);
}
