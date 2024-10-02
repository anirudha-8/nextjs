export default function Products({ searchParams }) {
	console.log(searchParams);
	console.log(searchParams.search);
	console.log(searchParams.randomValue);

	return (
		<div>
			<h1>Product page</h1>
		</div>
	);
}
