import React from "react";
import Image from "next/image";
import { IMAGES, MENU_HIGHLIGHTS } from "../constants";
import { Reveal } from "./ui/Reveal";
import { ArrowRight } from "lucide-react";

export const MenuHighlight = () => {
	return (
		<section id="menu" className="py-24 bg-white relative">
			{/* Background textural element */}
			<div className="absolute top-0 left-0 w-full h-1/2 bg-riso-stone/10 pointer-events-none -z-10"></div>

			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col lg:flex-row gap-16 items-start">
					{/* Left: Image & Intro */}
					{/* Removed 'sticky top-24' to restore normal scrolling behavior */}
					<div className="w-full lg:w-5/12">
						<Reveal>
							<span className="text-riso-green text-sm tracking-widest uppercase font-semibold mb-4 block">
								Nossa Seleção
							</span>
							<h2 className="font-serif text-4xl md:text-5xl text-riso-dark mb-8">
								Do mar à terra, <br />
								<span className="text-riso-salmon italic">
									autenticidade em cada prato.
								</span>
							</h2>
						</Reveal>

						<Reveal delay={200} width="100%">
							<div className="aspect-[4/3] overflow-hidden rounded-sm relative group">
								<Image
									src={"/foto-3.png"}
									alt="Prato assinatura Casa Risô"
									fill
									className="object-cover shadow-xl transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 font-serif text-riso-dark text-sm border border-riso-stone">
									Filé de Salmão com Limão
									Siciliano
								</div>
							</div>
						</Reveal>
					</div>

					{/* Right: Menu List */}
					<div className="w-full lg:w-7/12 pt-8">
						<div className="space-y-12">
							{MENU_HIGHLIGHTS.map((item, index) => (
								<Reveal
									key={index}
									delay={index * 100}
									width="100%"
								>
									<div className="group border-b border-riso-stone pb-8 hover:border-riso-salmon/50 transition-colors duration-300">
										<div className="flex justify-between items-baseline mb-2">
											<h3 className="font-serif text-2xl text-riso-dark group-hover:text-riso-salmon transition-colors">
												{item.name}
											</h3>
											<span className="font-sans text-riso-brown font-medium ml-4 shrink-0">
												{item.price}
											</span>
										</div>
										<div className="flex justify-between items-end">
											<p className="text-riso-brown/70 font-light leading-relaxed max-w-md">
												{item.description}
											</p>
											<span className="text-xs uppercase tracking-wider text-riso-stone/80 group-hover:text-riso-salmon/80 transition-colors hidden md:block">
												{item.category}
											</span>
										</div>
									</div>
								</Reveal>
							))}
						</div>

						<Reveal delay={500}>
							<div className="mt-12 text-center md:text-left">
								<a
									href="#reservas"
									className="inline-flex items-center space-x-2 text-riso-dark uppercase tracking-widest text-xs font-bold border-b-2 border-transparent hover:border-riso-salmon pb-1 transition-all"
								>
									<span>
										Conheça nosso menu completo
									</span>
									<ArrowRight className="w-4 h-4" />
								</a>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
};
