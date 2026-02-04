import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Casa Risô - Cozinha Contemporânea em Teixeira de Freitas";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#f5ebe0",
				fontFamily: "serif",
			}}
		>
			{/* Decorative top element */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginBottom: 20,
				}}
			>
				<svg width="80" height="60" viewBox="0 0 80 60">
					<path
						d="M40 0C40 0 50 15 40 40C30 15 40 0 40 0Z"
						fill="#8B6914"
					/>
					<path
						d="M25 45C25 45 20 25 35 15C15 25 20 45 20 45C20 45 22 35 27 35C32 35 25 45 25 45Z"
						fill="#8B6914"
						opacity="0.8"
					/>
					<path
						d="M55 45C55 45 60 25 45 15C65 25 60 45 60 45C60 45 58 35 53 35C48 35 55 45 55 45Z"
						fill="#8B6914"
						opacity="0.8"
					/>
				</svg>
			</div>

			{/* Logo text */}
			<div
				style={{
					display: "flex",
					fontSize: 72,
					color: "#8B6914",
					letterSpacing: "-0.02em",
				}}
			>
				<span style={{ fontStyle: "italic" }}>Casa</span>
				<span style={{ marginLeft: 16 }}>Risô</span>
			</div>

			{/* Subtitle */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					marginTop: 16,
					gap: 16,
				}}
			>
				<div
					style={{
						width: 40,
						height: 1,
						backgroundColor: "#8B6914",
						opacity: 0.5,
					}}
				/>
				<span
					style={{
						fontSize: 18,
						color: "#8B6914",
						letterSpacing: "0.3em",
						textTransform: "uppercase",
						opacity: 0.7,
					}}
				>
					Restaurante
				</span>
				<div
					style={{
						width: 40,
						height: 1,
						backgroundColor: "#8B6914",
						opacity: 0.5,
					}}
				/>
			</div>

			{/* Tagline */}
			<div
				style={{
					display: "flex",
					marginTop: 40,
					fontSize: 24,
					color: "#5d4037",
					fontStyle: "italic",
				}}
			>
				Gastronomia, elegância e natureza em perfeita harmonia
			</div>

			{/* Location */}
			<div
				style={{
					display: "flex",
					marginTop: 20,
					fontSize: 16,
					color: "#8d6e63",
					letterSpacing: "0.1em",
				}}
			>
				Teixeira de Freitas • Bahia
			</div>
		</div>,
		{
			...size,
		},
	);
}
