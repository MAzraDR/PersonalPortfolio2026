import { useEffect, useRef } from "react";

export default function useScroll() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
	const isLocked = useRef(false);
	const currentIndex = useRef(0);

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		const handleScrollRequest = (direction: number) => {
			if (isLocked.current) return;

			const totalSections = el.children.length;
			const nextIndex = Math.min(
				Math.max(currentIndex.current + direction, 0),
				totalSections - 1
			);

			if (nextIndex === currentIndex.current) return;

			isLocked.current = true;
			currentIndex.current = nextIndex;

			el.scrollTo({
				left: nextIndex * el.clientWidth,
				behavior: "smooth",
			});

			setTimeout(() => {
				isLocked.current = false;
			}, 500);
		};

		const onWheel = (e: WheelEvent) => {
			if (Math.abs(e.deltaY) < 10) return;
			e.preventDefault();
			handleScrollRequest(e.deltaY > 0 ? 1 : -1);
		};

		const onKeyDown = (e: KeyboardEvent) => {
			const keys = ["ArrowRight", "ArrowLeft", " ", "PageDown", "PageUp"];
			if (keys.includes(e.key)) {
				e.preventDefault(); // Stop the browser's "stuttery" native move

				if (
					e.key === "ArrowRight" ||
					e.key === " " ||
					e.key === "PageDown"
				) {
					handleScrollRequest(1);
				} else {
					handleScrollRequest(-1);
				}
			}
		};

		el.addEventListener("wheel", onWheel, { passive: false });
		window.addEventListener("keydown", onKeyDown); // Listen globally for keys

		return () => {
			el.removeEventListener("wheel", onWheel);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, []);

    return scrollRef
}