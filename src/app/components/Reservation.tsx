import React from "react";
import { CONTENT } from "../constants";
import { Reveal } from "./ui/Reveal";

export const Reservation = () => {
	return (
		<section id="reservas" className="py-24 bg-[#EBE9E4] text-center">
			<div className="max-w-3xl mx-auto px-6">
				<Reveal width="100%">
					<div className="mb-6 inline-block p-3 border border-riso-brown/20 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-riso-brown"
						>
							<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 2 1 8z" />
							<path d="M19 21c-3 0-7-1-7-8V5c0-1.25.756-2.017 2-2h4c1.25 0 2 .75 2 1.972V11c0 1.25-.75 2-2 2-1 2-1 8z" />
						</svg>
					</div>
				</Reveal>

				<Reveal delay={100} width="100%">
					<h2 className="font-serif text-4xl md:text-6xl text-riso-dark mb-6">
						Reserve a sua experiência.
					</h2>
				</Reveal>

				<Reveal delay={200} width="100%">
					<p className="text-riso-brown/80 text-lg font-light mb-8 max-w-lg mx-auto">
						Estamos prontos para recebê-lo em um ambiente onde
						cada detalhe importa.
					</p>
					<div className="mb-10 inline-block bg-riso-cream/50 px-6 py-3 rounded-lg border border-riso-brown/10 backdrop-blur-sm">
						<span className="block font-serif text-riso-dark text-lg mb-1">
							Horário de Funcionamento
						</span>
						<span className="block text-riso-brown/80 font-sans text-sm">
							{CONTENT.OPENING_HOURS}
						</span>
					</div>
				</Reveal>

				<Reveal delay={300} width="100%">
					<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
						<a
							href={`tel:${CONTENT.PHONE}`}
							className="px-10 py-4 border border-riso-brown text-riso-brown hover:bg-riso-brown hover:text-white transition-all duration-300 w-full md:w-auto min-w-[200px]"
						>
							Ligar Agora
						</a>
						<a
							href={CONTENT.RESERVATION_LINK}
							className="px-10 py-4 bg-riso-dark text-white hover:bg-riso-salmon transition-colors duration-300 w-full md:w-auto min-w-[200px] shadow-lg shadow-riso-dark/10"
						>
							Reservar Online
						</a>
					</div>
				</Reveal>

				<div className="mt-16 pt-10 border-t border-riso-dark/10">
					<div className="flex flex-col md:flex-row justify-center gap-8 text-riso-brown/60 text-sm tracking-wide font-sans">
						<span>{CONTENT.ADDRESS}</span>
						<span className="hidden md:inline">•</span>
						<span>{CONTENT.INSTAGRAM}</span>
					</div>
				</div>
			</div>
		</section>
	);
};
