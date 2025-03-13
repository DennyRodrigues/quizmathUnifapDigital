import type { Metadata } from "next";
import { Bungee, Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
};

const fonts = [nunitoSans.variable, geistMono.variable, bungee.variable];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn([...fonts], "antialiased")}>{children}</body>
		</html>
	);
}
