"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const handleAccountClick = () => {
		router.push("account");
	};
	const handleProductClick = () => {
		router.push("products");
	};
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div className="mb-3">
					<h2 className="text-lg font-bold text-center mb-2">
						Navigate using "Link"
					</h2>
					<Link
						className="mr-3 border-black border-[2px] p-1 rounded-md"
						href={"contact-us"}
					>
						Go to contact-us page
					</Link>
					<Link
						className="border-black border-[2px] p-1 rounded-md"
						href={"/about-us"}
					>
						Go to about-us page
					</Link>
				</div>
				<div className="h-0 w-full border-black border-[1px]"></div>
				<div>
					<h2 className="text-lg font-bold text-center my-2">
						Navigate using "useRouter"
					</h2>
					<button
						onClick={handleAccountClick}
						className="mr-3 border-black border-[2px] p-1 rounded-md"
					>
						Go to Account page
					</button>
					<button
						onClick={handleProductClick}
						className="border-black border-[2px] p-1 rounded-md"
					>
						Go to Products page
					</button>
				</div>
			</main>
		</div>
	);
}
