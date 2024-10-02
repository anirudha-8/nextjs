import Link from "next/link";

export default function NotFound() {
	return (
		<>
			<div className="m-2">
				<h1>Page Not Found!</h1>
				<Link href={"/"}>
					<button className="p-2 mt-2 rounded-lg border-black border-[2px]">
						Go Back to Home Page
					</button>
				</Link>
			</div>
		</>
	);
}
