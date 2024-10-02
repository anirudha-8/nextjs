import Link from "next/link";

async function getUsers() {
	try {
		const apiResponse = await fetch("https://dummyjson.com/users");
		const result = await apiResponse.json();
		return result.users;
	} catch (error) {
		throw new Error(error);
	}
}

export default async function ServerSideDataFetching() {
	const userData = await getUsers();
	console.log(userData);

	return (
		<>
			<div className="p-10">
				<h1 className="text-3xl font-bold">
					Server Side Data Fetching
				</h1>
				<ul>
					{userData && userData.length > 0 ? (
						userData.map((user) => (
							<Link href={`server-data-fetch/${user.id}`}>
								<li
									key={user.id}
									className="mt-5 cursor-pointer"
								>
									{user.firstName}
								</li>
							</Link>
						))
					) : (
						<li>No users Found</li>
					)}
				</ul>
			</div>
		</>
	);
}
