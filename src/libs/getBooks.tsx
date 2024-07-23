export default async function getBooks({
	startIndex = 0,
	query = '',
	selectedCategory = 'comic',
}: {
	startIndex?: number;
	query?: string;
	selectedCategory?: string;
}) {
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
			query
		)}subject:${selectedCategory}&maxResults=10&startIndex=${startIndex}&orderBy=relevance`
	);
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}
	return await response.json();
}
