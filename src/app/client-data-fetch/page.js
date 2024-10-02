// ========> using "useEffect" hook <======== //
// "use client";

// import { useEffect, useState } from "react";

// export default function ClientSideDataFetching() {
// 	const [data, setData] = useState([]);
// 	const [loading, setLoading] = useState(false);

// 	const getUserData = async () => {
// 		try {
// 			setLoading(true);
// 			const apiResponse = await fetch("https://dummyjson.com/users");
// 			const result = await apiResponse.json();
// 			if (result?.users);
// 			{
// 				setData(result.users);
// 				setLoading(false);
// 			}
// 		} catch (error) {
// 			setLoading(false);
// 			setData([]);
// 			throw new Error(error);
// 		}
// 	};

// 	useEffect(() => {
// 		getUserData();
// 	}, []);

// 	if (loading) {
// 		return <h3 className="text-3xl font-bold">Loading...</h3>;
// 	}

// 	return (
// 		<>
// 			<div className="p-10">
// 				<h1 className="text-3xl font-bold mb-3">
// 					Client Side Data Fetching
// 				</h1>
// 				<ul>
// 					{data && data.length > 0 ? (
// 						data.map((user) => (
// 							<li className="cursor-pointer">{user.firstName}</li>
// 						))
// 					) : (
// 						<li>No User Found</li>
// 					)}
// 				</ul>
// 			</div>
// 		</>
// 	);
// }

// ========> using "swr" hook <======== //
"use client";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSideDataFetching() {
	const { data, error, isLoading } = useSWR(
		"https://dummyjson.com/users",
		fetcher
	);

	if (error) return <div className="text-3xl font-bold">failed to load</div>;

	if (isLoading) return <div className="text-3xl font-bold">loading...</div>;

	return (
		<>
			<div className="p-10">
				<h1 className="text-3xl font-bold mb-3">
					Client Side Data Fetching
				</h1>
				<ul className="text-sm">
					{data.users && data.users.length > 0 ? (
						data.users.map((user) => (
							<li>
								<div className="my-3 p-2 border-black border-[1px] rounded-lg flex flex-col flex-wrap">
									<p>
										User Name: {user.firstName}{" "}
										{user.lastName}
									</p>
									<p>User Email: {user.email}</p>
								</div>
							</li>
						))
					) : (
						<li>User Not Found!</li>
					)}
				</ul>
			</div>
		</>
	);
}
