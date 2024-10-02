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
			<h1>Server Side Data Fetching</h1>
			<ul>
				{userData && userData.length > 0 ? (
					userData.map((user) => <li>{user.firstName}</li>)
				) : (
					<li>No users Found</li>
				)}
			</ul>
		</>
	);
}
