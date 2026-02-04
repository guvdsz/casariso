"use client";
import Image from "next/image";
import { IMAGES } from "../constants";
import { ArrowDown } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export const Hero = () => {
	return (
		<section className="relative h-screen w-full overflow-hidden">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0">
				<Image
					src={IMAGES.HERO_BG}
					alt="Teto decorado com cestos de vime"
					fill
					className="object-cover"
					priority
				/>
				{/* Gradient Overlay for text readability */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
				<Reveal>
					<span className="block text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4 border border-white/30 px-4 py-1 rounded-full backdrop-blur-sm">
						Cozinha Contemporânea
					</span>
				</Reveal>

				<Reveal delay={200}>
					<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-riso-cream mb-6 leading-tight">
						Gastronomia, <br />
						<span className="italic font-light">
							Elegância e Natureza
						</span>
					</h1>
				</Reveal>

				<Reveal delay={400}>
					<p className="text-white/90 max-w-lg mx-auto font-light text-lg mb-12 italic">
						&ldquo;Em perfeita harmonia.&rdquo;
					</p>
				</Reveal>

				<Reveal delay={600}>
					<a
						href="#filosofia"
						className="inline-flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 group"
					>
						<span className="text-xs tracking-widest uppercase mb-5">
							Descubra
						</span>
						<ArrowDown className="w-5 h-5 animate-bounce group-hover:text-riso-salmon" />
					</a>
				</Reveal>
			</div>
		</section>
	);
};
