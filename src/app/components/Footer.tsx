import React from "react";
import { CONTENT } from "../constants";

export const Footer = () => {
	return (
		<footer className="bg-riso-dark text-riso-stone/40 py-12 text-center text-xs">
			<div className="max-w-4xl mx-auto px-6 grid gap-4">
				<p className="font-serif text-lg text-riso-stone/80 mb-2">
					Casa Risô
				</p>
				<p className="uppercase tracking-widest text-[10px]">
					{CONTENT.OPENING_HOURS}
				</p>
				<div className="w-12 h-[1px] bg-riso-stone/20 mx-auto my-4"></div>
				<p>
					&copy; {new Date().getFullYear()} Casa Risô
					Restaurante. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
};
