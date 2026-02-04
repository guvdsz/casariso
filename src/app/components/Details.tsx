import React from "react";
import { Reveal } from "./ui/Reveal";
import Image from "next/image";

export const Details = () => {
	return (
		<section id="ambiente" className="py-32 bg-riso-cream">
			<div className="max-w-7xl mx-auto px-6">
				<div className="mb-20">
					<Reveal width="100%">
						<h2 className="font-serif text-3xl md:text-4xl text-riso-dark">
							Detalhes que contam histórias
						</h2>
					</Reveal>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-150">
					{/* Large Vertical - Neon/Entrance */}
					<div className="md:col-span-5 relative h-100 md:h-full group overflow-hidden">
						<Image
							src={"/foto-2.png"}
							alt="Neon Casa Risô em parede de tijolos"
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute bottom-0 left-0 p-8 bg-linear-to-t from-black/60 to-transparent w-full">
							<p className="text-white font-serif italic text-xl">
								Luz & Textura
							</p>
						</div>
					</div>

					<div className="md:col-span-7 flex flex-col gap-6">
						{/* Top Wide - Ceiling */}
						<div className="flex-1 relative overflow-hidden group h-75 md:h-auto">
							<Image
								src="/foto-4.png"
								alt="Teto decorativo"
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
								<span className="text-white tracking-widest uppercase text-sm">
									Artesanal
								</span>
							</div>
						</div>

						{/* Bottom Split */}
						<div className="flex-1 grid grid-cols-2 gap-6 h-50 md:h-auto">
							<div className="relative overflow-hidden group">
								<Image
									src="/foto-6.png"
									alt="Textura de madeira"
									fill
									className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
								/>
							</div>
							<div className="relative flex items-center justify-center bg-riso-stone/50 p-6 text-center">
								<Reveal delay={300}>
									<p className="font-serif text-riso-brown text-lg italic">
										&ldquo;A natureza é a maior
										artista.&rdquo;
									</p>
								</Reveal>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
