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
			}, 600);
		};

		const onWheel = (e: WheelEvent) => {
			const activeSection = el.children[
				currentIndex.current
			] as HTMLElement;
			const verticalScroller = activeSection.querySelector(
				".vertical-scroll"
			) as HTMLElement | null;

			// ✅ If vertical scroll exists, check boundaries
			if (verticalScroller) {
				const { scrollTop, scrollHeight, clientHeight } =
					verticalScroller;
				const atTop = scrollTop <= 0;
				const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

				// Allow vertical scroll normally
				if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
					return; // ❗ DO NOT preventDefault
				}
			}

			// Horizontal scroll allowed
			e.preventDefault();
			handleScrollRequest(e.deltaY > 0 ? 1 : -1);
		};

		el.addEventListener("wheel", onWheel, { passive: false });

		return () => {
			el.removeEventListener("wheel", onWheel);
		};
	}, [scrollRef]);

	return scrollRef;
}
