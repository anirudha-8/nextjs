async function getUserDetail(userId) {
	try {
		const response = await fetch(`https://dummyjson.com/users/${userId}`);
		const result = await response.json();
		return result;
	} catch (error) {
		throw new Error(error);
	}
}

export default async function UserDetail({ params }) {
	console.log(params);

	const userData = await getUserDetail(params.details);

	return (
		<>
			<div className="p-10 text-2xl">
				<h1 className="text-4xl font-bold mb-3">User Detail</h1>
				<p>
					User Name: {userData?.firstName} {userData?.lastName}
				</p>
				<p>Age: {userData?.age}</p>
				<p>Gender: {userData?.gender}</p>
				<p>Email: {userData?.email}</p>
			</div>
		</>
	);
}
