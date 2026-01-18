import About from "./components/About";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import useScroll from "./hooks/useScroll";

export default function App() {
	

	const scrollRef = useScroll();

	return (
		<>
			<Navbar />
			<div className="h-screen w-screen flex items-center justify-center overflow-hidden">
				<div
					ref={scrollRef}
					className="h-[500px] w-screen overflow-x-scroll overflow-y-hidden snap-x bg-mainBg flex">
					<section className="w-screen h-[500px] snap-start shrink-0">
						<FrontPage />
					</section>

					<section className="w-screen h-[500px] snap-start shrink-0">
						<About />
					</section>
				</div>
			</div>
		</>
	);
}
