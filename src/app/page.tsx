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
