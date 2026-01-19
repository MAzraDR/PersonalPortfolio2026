import { useState } from "react";

export default function useAccordion() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	const isOpen = (index: number) => openIndex === index;

	return { isOpen, toggleAccordion };
}
