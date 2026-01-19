export const handleNavigation = (href: string) => {
	const targetSection = document.querySelector(href);
	if (targetSection) {
		targetSection.scrollIntoView({ behavior: "smooth" });
	}
};
