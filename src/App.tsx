import About from "./components/About";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import useScroll from "./hooks/useScroll";

export default function App() {	
	const scrollRef = useScroll();

	return (
		<>
			<Navbar />
			<div className="h-screen w-screen flex items-center justify-center overflow-hidden">
				<div className="absolute w-full h-5 bg-mainAccent top-20 md:top-25 "></div>
				<div
					ref={scrollRef}
					className="h-screen lg:h-125 w-screen overflow-x-scroll overflow-y-hidden snap-x bg-mainBg flex">					
					<section className="w-screen h-screen lg:h-125 snap-start shrink-0">
						<FrontPage />
					</section>

					<section className="w-screen h-screen lg:h-125 snap-start shrink-0">
						<About />
					</section>
					<section className="w-screen h-screen lg:h-125 snap-start shrink-0">
						<Projects />
					</section>
				</div>
			</div>
		</>
	);
}
