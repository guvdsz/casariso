import Image from "next/image";
import { IMAGES } from "../constants";
import { Reveal } from "./ui/Reveal";

export const Philosophy = () => {
	return (
		<section
			id="filosofia"
			className="py-24 md:py-32 bg-riso-cream overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					{/* Image Block - Intimacy */}
					<div className="relative order-2 md:order-1">
						<Reveal width="100%">
							<div className="relative aspect-[4/5] overflow-hidden rounded-sm">
								<Image
									src={"/foto-1.png"}
									alt="Detalhe da mesa posta com taça de vinho"
									fill
									className="object-cover transition-transform duration-[2s] hover:scale-105"
								/>
								{/* Decorative Box representing Wabi-Sabi imperfection */}
								<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-riso-stone -z-10 rounded-full opacity-50"></div>
							</div>
						</Reveal>
						<div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden lg:block writing-vertical-lr text-xs tracking-[0.4em] text-riso-brown/40">
							SERENIDADE • AFETO
						</div>
					</div>

					{/* Text Block */}
					<div className="order-1 md:order-2 md:pl-10">
						<Reveal>
							<h2 className="font-serif text-4xl md:text-5xl text-riso-dark mb-8 leading-snug">
								Sabor, afeto e <br />
								<span className="text-riso-clay italic">
									o prazer de viver bem.
								</span>
							</h2>
						</Reveal>

						<Reveal delay={200}>
							<p className="text-riso-brown/80 leading-relaxed mb-6 font-light text-lg">
								A Casa Risô nasceu do encontro entre a
								boa mesa e a natureza. Em cada receita,
								contamos uma história servida em um
								ambiente acolhedor onde o tempo parece
								desacelerar.
							</p>
						</Reveal>

						<Reveal delay={300}>
							<p className="text-riso-brown/80 leading-relaxed mb-10 font-light text-lg">
								Combinamos a sofisticação despretensiosa
								com ingredientes selecionados, criando
								um refúgio contemporâneo que convida
								você a pausar e apreciar.
							</p>
						</Reveal>

						<Reveal delay={400}>
							<div className="flex items-center space-x-4">
								<div className="h-[1px] w-12 bg-riso-salmon"></div>
								<span className="font-serif italic text-riso-dark">
									Bem-vindo à nossa casa.
								</span>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
};
