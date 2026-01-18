export default function App() {
	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen w-screen">
				<div className="bg-mainBg h-125 w-screen ">
					<div className="ms-10">
						<div className="h-9 mt-10 bg-mainAccent w-full"></div>
					</div>
					<div className="w-screen flex flex-col justify-center items-center mt-10">
						<div className="">
							<h2 className="uppercase text-2xl font-semibold">
								Junior Front-end Developer
							</h2>
							<h1 className="uppercase text-5xl font-bold text-mainAccent">
								Muhammad <br /> Azra Dwi <br /> Rizky
							</h1>
							<button className="mt-2 group font-bold text-base uppercase w-fit cursor-pointer">
								More about me?{" "}
								<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-mainAccent"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
