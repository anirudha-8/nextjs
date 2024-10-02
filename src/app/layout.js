import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Next.js Mastery",
	description: "self-thought journey to master the Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</body>
		</html>
	);
}
