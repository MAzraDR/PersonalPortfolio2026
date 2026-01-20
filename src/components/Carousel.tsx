import {
	FaHtml5,
	FaReact,
	FaBootstrap,
	FaCss3Alt,
	FaJsSquare,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Carousel() {
	const skills = [
		{
			name: "HTML5",
			icon: FaHtml5,
			color: "#E34F26",
		},
		{
			name: "React",
			icon: FaReact,
			color: "#61DAFB",
		},
		{
			name: "Bootstrap",
			icon: FaBootstrap,
			color: "#7952B3",
		},
		{
			name: "CSS3",
			icon: FaCss3Alt,
			color: "#1572B6",
		},
		{
			name: "JavaScript",
			icon: FaJsSquare,
			color: "#F7DF1E",
		},
		{
			name: "Next.js",
			icon: SiNextdotjs,
			color: "#000000",
		},
		{
			name: "Tailwind CSS",
			icon: SiTailwindcss,
			color: "#06B6D4",
		},
		{
			name: "TypeScript",
			icon: SiTypescript,
			color: "#3178C6",
		},
	];	

	return (
		<div className=" w-full mt-2 relative flex overflow-x-hidden gap-5">
			<div className="animate-marquee py-6 flex gap-5 whitespace-nowrap shrink-0">
				{skills.map(({ name, icon: Icon, color }) => (
					<Icon
						key={name}
						title={name}
						className="text-5xl hover:scale-110 transition"
						style={{ color }}
					/>
				))}
			</div>
			<div className="animate-marquee top-0 py-6 flex gap-5 whitespace-nowrap shrink-0">
				{skills.map(({ name, icon: Icon, color }) => (
					<Icon
						key={name}
						title={name}
						className="text-5xl hover:scale-110 transition"
						style={{ color }}
					/>
				))}
			</div>
		</div>
	);
}
