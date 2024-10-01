"use client";

import { useRouter } from "next/navigation";

const Account = () => {
	const router = useRouter();

	return (
		<div>
			<h1>Account page</h1>
			<div className="mt-2 flex gap-2">
				<button
					className="border-[2px] border-black p-2 rounded-lg"
					onClick={() => router.push("account/dashboard")}
				>
					Goto Account Dashboard
				</button>
				<button
					className="border-[2px] border-black p-2 rounded-lg"
					onClick={() => router.push("account/membership")}
				>
					Goto Membership Sectoin
				</button>
			</div>
		</div>
	);
};

export default Account;
