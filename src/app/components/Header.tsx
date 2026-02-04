"use client";

import { useState, useEffect } from "react";
import { X, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { CONTENT } from "../constants";

interface MobileLinkProps {
	href: string;
	children: React.ReactNode;
	onClick: () => void;
	delay: string;
}

const MobileLink = ({ href, children, onClick, delay }: MobileLinkProps) => (
	<a
		href={href}
		onClick={onClick}
		className={`block text-4xl md:text-5xl font-serif text-riso-dark hover:text-riso-salmon transition-all duration-500 transform ${delay} hover:scale-105`}
	>
		{children}
	</a>
);

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Handle Scroll Effect for Navbar Background
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Handle Body Scroll Lock when Menu is Open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [mobileMenuOpen]);

	const navClasses = `fixed top-0 w-full z-40 transition-all duration-500 ${
		isScrolled
			? "bg-riso-cream/95 backdrop-blur-md py-3 shadow-sm"
			: "bg-transparent py-6"
	}`;

	const desktopLinkClasses = `text-sm uppercase tracking-widest font-medium hover:text-riso-salmon transition-colors duration-300 ${
		isScrolled ? "text-riso-brown" : "text-white/90 hover:text-white"
	}`;

	return (
		<>
			<nav className={navClasses}>
				<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
					{/* Logo - Text Based */}
					<a href="#" className="relative z-50 block group">
						<span
							className={`font-serif italic tracking-tight transition-all duration-300 block ${
								isScrolled
									? "text-xl md:text-xl text-riso-brown"
									: "text-2xl md:text-2xl text-white"
							}`}
						>
							Casa Risô
						</span>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-12 items-center">
						<a
							href="#filosofia"
							className={desktopLinkClasses}
						>
							O Refúgio
						</a>
						<a href="#menu" className={desktopLinkClasses}>
							Sabor
						</a>
						<a
							href="#ambiente"
							className={desktopLinkClasses}
						>
							Atmosfera
						</a>
						<a
							href="#reservas"
							className={`px-8 py-2 border transition-all duration-300 text-sm tracking-widest uppercase ${
								isScrolled
									? "border-riso-brown text-riso-brown hover:bg-riso-brown hover:text-white"
									: "border-white text-white hover:bg-white hover:text-riso-brown"
							}`}
						>
							Reservar
						</a>
					</div>

					{/* Mobile Toggle Button (Open Only) */}
					<button
						className="md:hidden relative z-50 p-2 focus:outline-none group"
						onClick={() => setMobileMenuOpen(true)}
						aria-label="Abrir Menu"
					>
						<span
							className={`block w-8 h-0.5 mb-1.5 transition-colors duration-300 ${isScrolled ? "bg-riso-brown" : "bg-white"}`}
						></span>
						<span
							className={`block w-8 h-0.5 transition-colors duration-300 ${isScrolled ? "bg-riso-brown" : "bg-white"}`}
						></span>
					</button>
				</div>
			</nav>

			{/* Mobile Menu Overlay - Totally Full Screen */}
			<div
				className={`fixed inset-0 z-[60] bg-riso-cream flex flex-col transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
					mobileMenuOpen
						? "opacity-100 pointer-events-auto visible"
						: "opacity-0 pointer-events-none invisible delay-200"
				}`}
			>
				{/* Close Button - Floating Top Right */}
				<div className="absolute top-4 right-6 z-10">
					<button
						onClick={() => setMobileMenuOpen(false)}
						className="p-4 text-riso-brown hover:text-riso-salmon transition-colors focus:outline-none transform hover:rotate-90 duration-300"
						aria-label="Fechar Menu"
					>
						<X className="w-10 h-10" strokeWidth={1.5} />
					</button>
				</div>

				{/* Decorative Background Element */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-riso-salmon/5 rounded-full blur-3xl pointer-events-none"></div>

				{/* Menu Content Container */}
				<div className="flex-1 flex flex-col h-full px-6 pb-8 pt-20">
					{/* Navigation Links - Centered Vertically */}
					<div className="flex-1 flex flex-col justify-center items-center space-y-8 text-center relative">
						<div
							className={`${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500 delay-100 ease-out`}
						>
							<MobileLink
								href="#filosofia"
								onClick={() => setMobileMenuOpen(false)}
								delay=""
							>
								O Refúgio
							</MobileLink>
						</div>
						<div
							className={`${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500 delay-150 ease-out`}
						>
							<MobileLink
								href="#menu"
								onClick={() => setMobileMenuOpen(false)}
								delay=""
							>
								Sabor
							</MobileLink>
						</div>
						<div
							className={`${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500 delay-200 ease-out`}
						>
							<MobileLink
								href="#ambiente"
								onClick={() => setMobileMenuOpen(false)}
								delay=""
							>
								Atmosfera
							</MobileLink>
						</div>
						<div
							className={`${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500 delay-250 ease-out`}
						>
							<MobileLink
								href="#reservas"
								onClick={() => setMobileMenuOpen(false)}
								delay=""
							>
								Reservar
							</MobileLink>
						</div>
					</div>

					{/* Practical Info Card - Bottom Anchored */}
					<div
						className={`bg-white p-6 rounded-xl shadow-lg border border-riso-stone/30 transform transition-all duration-700 delay-300 ${
							mobileMenuOpen
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
						}`}
					>
						{/* Info Grid */}
						<div className="grid grid-cols-1 gap-4 text-riso-brown/80 mb-6">
							<div className="flex items-center gap-4">
								<Clock className="w-5 h-5 text-riso-salmon" />
								<div>
									<p className="text-xs font-bold uppercase tracking-wider text-riso-dark">
										Horários
									</p>
									<p className="text-sm">
										{CONTENT.OPENING_HOURS}
									</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<MapPin className="w-5 h-5 text-riso-salmon" />
								<div>
									<p className="text-xs font-bold uppercase tracking-wider text-riso-dark">
										Endereço
									</p>
									<p className="text-sm">
										{CONTENT.ADDRESS}
									</p>
								</div>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="grid grid-cols-2 gap-3">
							<a
								href={`https://instagram.com/${CONTENT.INSTAGRAM.replace("@", "")}`}
								target="_blank"
								rel="noreferrer"
								className="flex items-center justify-center gap-2 py-3 border border-riso-stone rounded-lg text-riso-dark font-medium text-sm hover:bg-riso-cream transition-colors"
							>
								<Instagram className="w-4 h-4" />
								Instagram
							</a>
							<a
								href={`tel:${CONTENT.PHONE.replace(/\D/g, "")}`}
								className="flex items-center justify-center gap-2 py-3 bg-riso-dark text-white rounded-lg font-medium text-sm hover:bg-riso-salmon transition-colors shadow-lg shadow-riso-dark/10"
							>
								<Phone className="w-4 h-4" />
								Ligar Agora
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
