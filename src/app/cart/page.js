"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Card() {
	const pathName = usePathname();
	console.log(pathName);
	const searchParams = useSearchParams();
	console.log("search param value: ", searchParams.get("search"));
	console.log("randomValue param value: ", searchParams.get("randomValue"));

	return (
		<>
			<h1>Cart Section</h1>
			<p>-- dedicated for learning "usePathname" and "useSearchParams"</p>
			<p>-- Used for get query params in client-side component</p>
		</>
	);
}
