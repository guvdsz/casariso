import type { Metadata, Viewport } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const playFair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
});

const lato = Lato({
	variable: "--font-lato",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: "#8B6914",
};

export const metadata: Metadata = {
	title: {
		default: "Casa Risô | Restaurante de Cozinha Contemporânea em Teixeira de Freitas",
		template: "%s | Casa Risô Restaurante",
	},
	description:
		"Descubra a Casa Risô, restaurante de cozinha contemporânea em Teixeira de Freitas - BA. Gastronomia, elegância e natureza em perfeita harmonia. Risotos artesanais, ambiente acolhedor e sabores únicos. Faça sua reserva!",
	keywords: [
		"restaurante",
		"risoto",
		"risotos",
		"Casa Risô",
		"restaurante Teixeira de Freitas",
		"cozinha contemporânea",
		"gastronomia Bahia",
		"restaurante Bahia",
		"jantar romântico",
		"reserva restaurante",
		"melhor restaurante Teixeira de Freitas",
		"fine dining",
	],
	authors: [{ name: "Casa Risô Restaurante" }],
	creator: "Casa Risô",
	publisher: "Casa Risô Restaurante",
	formatDetection: {
		email: false,
		address: true,
		telephone: true,
	},
	metadataBase: new URL("https://casariso.vercel.app"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Casa Risô | Cozinha Contemporânea em Teixeira de Freitas",
		description:
			"Gastronomia, elegância e natureza em perfeita harmonia. Risotos artesanais e cozinha contemporânea. Reserve sua experiência!",
		url: "https://casariso.vercel.app",
		siteName: "Casa Risô Restaurante",
		images: [
			{
				url: "/foto-1.png",
				width: 1200,
				height: 630,
				alt: "Casa Risô - Restaurante de Risotos Artesanais",
			},
		],
		locale: "pt_BR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Casa Risô | Cozinha Contemporânea em Teixeira de Freitas",
		description:
			"Gastronomia, elegância e natureza em perfeita harmonia. Reserve sua experiência!",
		images: ["/foto-1.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	manifest: "/manifest.json",
	category: "restaurant",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Restaurant",
		name: "Casa Risô",
		image: "https://casariso.com.br/og-image.jpg",
		"@id": "https://casariso.com.br",
		url: "https://casariso.com.br",
		telephone: "(73) 99999-8888",
		priceRange: "$$",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Rua das Flores, 123",
			addressLocality: "Teixeira de Freitas",
			addressRegion: "BA",
			postalCode: "45985-000",
			addressCountry: "BR",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: -17.5401,
			longitude: -39.7437,
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
				],
				opens: "19:00",
				closes: "22:30",
			},
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Sunday",
				opens: "12:00",
				closes: "15:00",
			},
		],
		servesCuisine: ["Italian", "Risotto", "Contemporary"],
		acceptsReservations: "True",
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			reviewCount: "127",
		},
	};

	return (
		<html lang="pt-BR">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			</head>
			<body
				className={`${playFair.variable} ${lato.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
