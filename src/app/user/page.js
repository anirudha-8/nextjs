import { redirect } from "next/navigation";

export default function UserProfile() {
	const isLoggedIn = null;
	// if (isLoggedIn === null) redirect("sign-in");
	if (isLoggedIn === null) redirect("cart?search=id&randomValue=123");
	return (
		<div>
			<h1>User Profile Section</h1>
		</div>
	);
}
