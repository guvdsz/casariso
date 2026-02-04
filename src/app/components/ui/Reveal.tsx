"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
	children: React.ReactNode;
	width?: "fit-content" | "100%";
	delay?: number;
}

export const Reveal = ({
	children,
	width = "fit-content",
	delay = 0,
}: RevealProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // Only animate once
				}
			},
			{ threshold: 0.15 }, // Trigger when 15% visible
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} style={{ width }}>
			<div
				className={`transition-all duration-1000 ease-out transform ${
					isVisible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-12"
				}`}
				style={{ transitionDelay: `${delay}ms` }}
			>
				{children}
			</div>
		</div>
	);
};
