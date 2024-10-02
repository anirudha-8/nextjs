"use client";

import { useEffect, useState } from "react";

export default function ClientSideDataFetching() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const getUserData = async () => {
		try {
			setLoading(true);
			const apiResponse = await fetch("https://dummyjson.com/users");
			const result = await apiResponse.json();
			if (result?.users);
			{
				setData(result.users);
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
			setData([]);
			throw new Error(error);
		}
	};

	useEffect(() => {
		getUserData();
	}, []);

	if (loading) {
		return <h3 className="text-3xl font-bold">Loading...</h3>;
	}

	return (
		<>
			<div className="p-10">
				<h1 className="text-3xl font-bold mb-3">
					Client Side Data Fetching
				</h1>
				<ul>
					{data && data.length > 0 ? (
						data.map((user) => (
							<li className="cursor-pointer">{user.firstName}</li>
						))
					) : (
						<li>No User Found</li>
					)}
				</ul>
			</div>
		</>
	);
}
