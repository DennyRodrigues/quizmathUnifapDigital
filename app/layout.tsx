import type { Metadata } from "next";
import { Bungee, Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next"

const nunitoSans = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
});

const bungee = Bungee({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-bungee",
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "QuizMath",
	description: "Jogo Matemático regionalizado do Amapá",
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon.ico", sizes: "any" },
		],
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
};

const fonts = [nunitoSans.variable, geistMono.variable, bungee.variable];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={cn([...fonts], "antialiased")}>{children}
				<Analytics />
			</body>
		</html>
	);
}
