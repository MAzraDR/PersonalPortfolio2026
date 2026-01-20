import About from "./components/About";
import Contact from "./components/Contact";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import useScroll from "./hooks/useScroll";

export default function App() {
	const scrollRef = useScroll();

	return (
		<>
			<Navbar />
			<div className="h-screen w-screen flex items-center justify-center overflow-hidden">
				<div
					ref={scrollRef}
					className="h-screen lg:h-125 w-screen overflow-x-scroll overflow-y-hidden snap-x flex touch-pan-y">
					<section className="w-screen h-screen lg:h-125 snap-start shrink-0">
						<FrontPage />
					</section>

					<section className="w-screen h-screen lg:h-125 snap-start shrink-0">
						<About />
					</section>
					<section className="w-screen h-screen lg:h-125 snap-start shrink-0">
						<Services />
					</section>
					<section className="w-screen h-screen lg:h-125 snap-start shrink-0">
						<Projects />
					</section>
					<section className="w-screen h-screen lg:h-125 snap-start shrink-0">
						<Contact />
					</section>
				</div>
			</div>
		</>
	);
}
