export default function ProductReview({ params }) {
	console.log(params);

	return (
		<div>
			<h1>
				This is the Product Review page, which are reviewed by different
				users
				<br />
				And this will catch all the routes / segments i.e multiple slugs
				in the route
			</h1>
		</div>
	);
}
