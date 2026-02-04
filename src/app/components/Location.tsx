import React from "react";
import { Reveal } from "./ui/Reveal";
import { MapPin, ExternalLink } from "lucide-react";

export const Location = () => {
	return (
		<section id="localizacao" className="py-24 bg-riso-stone/20">
			<div className="max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="text-center mb-12">
					<Reveal width="100%">
						<h2 className="font-serif text-3xl md:text-5xl text-riso-dark mb-4">
							Onde Estamos
						</h2>
						<div className="w-16 h-[1px] bg-riso-salmon mx-auto"></div>
					</Reveal>
				</div>

				<div className="grid lg:grid-cols-1 gap-12">
					{/* Map Container */}
					<Reveal width="100%" delay={200}>
						<div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl border border-riso-stone bg-riso-stone group">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.342389826978!2d-39.73722792483157!3d-17.53887798337438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73545ef26a1e885%3A0xb58a25b93b746f6d!2sCasa%20Ris%C3%B4%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1770162860315!5m2!1spt-BR!2sbr"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
								title="Mapa de Localização Casa Risô"
							></iframe>

							{/* Overlay Label (Mobile/Desktop distinct) */}
							<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded shadow-sm border border-riso-stone/50 hidden sm:block pointer-events-none">
								<div className="flex items-center gap-2 text-riso-brown">
									<MapPin className="w-4 h-4 text-riso-salmon" />
									<span className="text-xs font-bold tracking-widest uppercase">
										Teixeira de Freitas, BA
									</span>
								</div>
							</div>
						</div>
					</Reveal>

					{/* Text / Actions */}
					<Reveal width="100%" delay={300}>
						<div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 md:p-8 rounded-lg shadow-sm border border-riso-stone/30">
							<div className="mb-6 md:mb-0 text-center md:text-left">
								<h3 className="font-serif text-xl text-riso-dark mb-1">
									Casa Risô Restaurante
								</h3>
								<p className="text-riso-brown/70 font-light text-sm">
									Venha nos fazer uma visita e viver
									essa experiência.
								</p>
							</div>

							<a
								href="https://maps.google.com/?q=Casa+Risô+Restaurante"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-3 px-6 py-3 bg-riso-dark text-white rounded hover:bg-riso-salmon transition-all duration-300"
							>
								<span className="uppercase text-xs tracking-widest font-medium">
									Traçar Rota
								</span>
								<ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</a>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
