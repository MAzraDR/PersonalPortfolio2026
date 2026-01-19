import Profile from "../assets/Resize.jpg";
import { contactData } from "../data/contactData";

export default function Contact() {
	return (
		<>
			<section
				id="contact"
				className="overflow-hidden h-full w-full flex flex-col justify-center items-center pt-10 md:pt-0">
				<div className="shadow-2xl p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
					<div className="w-full h-full px-4 flex flex-col justify-center items-center lg:items-start gap-10 md:flex-row">
						<div className="order-2 md:order-1 ">
							<h1 className="text-center md:text-left text-2xl font-bold text-mainAccent uppercase">
								Contact me
							</h1>
							<p className=" text-center md:text-left text-base mb-2 tracking-wider">
								mazradwir@gmail.com
							</p>
							<div className="flex md:flex-col gap-3 md:mt-30">
								{contactData.map((item, i) => (
									<a
										href={item.href}
										key={i}
										className="group font-mono text-lg w-fit">
										{item.text}{" "}
										<span className="block max-w-0 group-hover:max-w-full group-active:max-w-full transition-all duration-500 h-0.5 bg-mainAccent"></span>
									</a>
								))}
							</div>
						</div>
						<div className="mt-5 md:mt-0 order-1 md:order-2 flex justify-center">
							<img
								src={Profile}
								alt="profile"
								className="max-h-100 w-fit object-contain grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-400 ease-in-out cursor-pointer active:scale-90 rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
