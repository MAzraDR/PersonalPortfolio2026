export default function NavLink({href, text}: {href:string, text:string}) {
    return (
		<>
			<a href={href} className="relative group inline-block">
				{text}{" "}
				<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-mainAccent"></span>
			</a>
		</>
	);
}