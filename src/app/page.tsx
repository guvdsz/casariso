"use client";

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Philosophy } from "./components/Philosophy";
import { MenuHighlight } from "./components/MenuHighlight";
import { Details } from "./components/Details";
import { FAQ } from "./components/FAQ";
import { Reservation } from "./components/Reservation";
import { Location } from "./components/Location";

export default function Home() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const handleLoad = () => {
			setIsLoaded(true);
		};

		if (document.readyState === "complete") {
			setTimeout(() => setIsLoaded(true), 0);
		} else {
			window.addEventListener("load", handleLoad);
			return () => window.removeEventListener("load", handleLoad);
		}
	}, []);

	if (!isLoaded) {
		return (
			<div className="fixed inset-0 bg-[#f5ebe0] flex items-center justify-center">
				<div className="text-center animate-fade-in">
					{/* Logo Symbol - Animated Leaves */}
					<div className="relative w-20 h-16 mx-auto mb-6">
						{/* Center leaf */}
						<svg
							className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-8 animate-pulse"
							viewBox="0 0 16 32"
							fill="none"
							style={{ animationDelay: "0ms" }}
						>
							<path
								d="M8 0C8 0 16 12 8 32C0 12 8 0 8 0Z"
								fill="#8B6914"
								fillOpacity="0.9"
							/>
						</svg>
						{/* Left leaf */}
						<svg
							className="absolute left-1/2 -translate-x-[150%] top-4 w-6 h-10 animate-pulse origin-bottom-right -rotate-30"
							viewBox="0 0 24 40"
							fill="none"
							style={{ animationDelay: "150ms" }}
						>
							<path
								d="M20 40C20 40 24 20 12 8C0 20 4 40 4 40C4 40 8 28 12 28C16 28 20 40 20 40Z"
								fill="#8B6914"
								fillOpacity="0.8"
							/>
						</svg>
						{/* Right leaf */}
						<svg
							className="absolute left-1/2 translate-x-[50%] top-4 w-6 h-10 animate-pulse origin-bottom-left rotate-30"
							viewBox="0 0 24 40"
							fill="none"
							style={{ animationDelay: "300ms" }}
						>
							<path
								d="M4 40C4 40 0 20 12 8C24 20 20 40 20 40C20 40 16 28 12 28C8 28 4 40 4 40Z"
								fill="#8B6914"
								fillOpacity="0.8"
							/>
						</svg>
					</div>

					{/* Logo Text */}
					<h1 className="font-serif text-4xl md:text-5xl text-[#8B6914] tracking-wide">
						<span className="italic">Casa</span>
						<span className="font-normal">Risô</span>
					</h1>

					{/* Subtitle with animated line */}
					<div className="mt-3 flex items-center justify-center gap-3">
						<span className="block w-8 h-px bg-[#8B6914]/50 animate-expand-left"></span>
						<span className="text-[#8B6914]/70 text-xs tracking-[0.3em] uppercase">
							Restaurante
						</span>
						<span className="block w-8 h-px bg-[#8B6914]/50 animate-expand-right"></span>
					</div>

					{/* Loading dots */}
					<div className="mt-8 flex justify-center gap-2">
						<span
							className="w-2 h-2 bg-[#8B6914]/60 rounded-full animate-bounce"
							style={{ animationDelay: "0ms" }}
						></span>
						<span
							className="w-2 h-2 bg-[#8B6914]/60 rounded-full animate-bounce"
							style={{ animationDelay: "150ms" }}
						></span>
						<span
							className="w-2 h-2 bg-[#8B6914]/60 rounded-full animate-bounce"
							style={{ animationDelay: "300ms" }}
						></span>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-riso-cream min-h-screen font-sans selection:bg-riso-salmon selection:text-white">
			<Header />
			<main>
				<Hero />
				<Philosophy />
				<MenuHighlight />
				<Details />
				<FAQ />
				<Location />
				<Reservation />
			</main>
			<Footer />
		</div>
	);
}
