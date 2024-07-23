interface bookDetailProps {
	bookId: string;
}
export default async function getBookDetail({ bookId }: bookDetailProps) {
	const response = await fetch(
		`https://www.googleapis.com/books/v1/volumes/${bookId}`
	);
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	return await response.json();
}
