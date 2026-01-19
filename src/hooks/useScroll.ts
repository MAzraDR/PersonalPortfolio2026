import { useEffect, useRef } from "react";

export default function useScroll() {
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const isLocked = useRef(false);
	const currentIndex = useRef(0);

	const touchStartY = useRef(0);
	const touchEndY = useRef(0);

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

		const canScrollHorizontally = (deltaY: number) => {
			const activeSection = el.children[
				currentIndex.current
			] as HTMLElement;
			const verticalScroller = activeSection.querySelector(
				".vertical-scroll"
			) as HTMLElement | null;

			if (!verticalScroller) return true;

			const { scrollTop, scrollHeight, clientHeight } = verticalScroller;
			const atTop = scrollTop <= 0;
			const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

			if (deltaY > 0 && atBottom) return true; // swipe up
			if (deltaY < 0 && atTop) return true; // swipe down

			return false;
		};

		// Wheel support
		const onWheel = (e: WheelEvent) => {
			const activeSection = el.children[
				currentIndex.current
			] as HTMLElement;
			const verticalScroller = activeSection.querySelector(
				".vertical-scroll"
			) as HTMLElement | null;

			if (verticalScroller) {
				const { scrollTop, scrollHeight, clientHeight } =
					verticalScroller;
				const atTop = scrollTop <= 0;
				const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

				if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
					return;
				}
			}

			e.preventDefault();
			handleScrollRequest(e.deltaY > 0 ? 1 : -1);
		};

		// Touch support (vertical swipe → horizontal move)
		const onTouchStart = (e: TouchEvent) => {
			touchStartY.current = e.touches[0].clientY;
		};

		const onTouchMove = (e: TouchEvent) => {
			touchEndY.current = e.touches[0].clientY;
		};

		const onTouchEnd = () => {
			const deltaY = touchStartY.current - touchEndY.current;

			if (Math.abs(deltaY) < 50) return;

			if (!canScrollHorizontally(deltaY)) return;

			handleScrollRequest(deltaY > 0 ? 1 : -1);
		};

		el.addEventListener("wheel", onWheel, { passive: false });
		el.addEventListener("touchstart", onTouchStart, { passive: true });
		el.addEventListener("touchmove", onTouchMove, { passive: true });
		el.addEventListener("touchend", onTouchEnd);

		return () => {
			el.removeEventListener("wheel", onWheel);
			el.removeEventListener("touchstart", onTouchStart);
			el.removeEventListener("touchmove", onTouchMove);
			el.removeEventListener("touchend", onTouchEnd);
		};
	}, []);

	return scrollRef;
}
