'use client';

import BookList from '@/components/BookList';
import CategoryToggle from '@/components/CategoryToggle';
import Header from '@/components/Header';
import Pagination from '@/components/Pagination';
import getBooks from '@/libs/getBooks';
import { BooksApiResponse } from '@/types';
import { useEffect, useState } from 'react';

export default function BooksPage() {
	const [books, setBooks] = useState<BooksApiResponse | null>(null);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [query, setQuery] = useState<string>('');
	const [selectedCategory, setCategorySubject] = useState<string>('comic');
	const [itemsPerPage] = useState<number>(10);

	const categories = ['comic', 'humour', 'romance'];

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const data = await getBooks({
					startIndex: currentPage * itemsPerPage,
					query,
					selectedCategory,
				});
				setBooks(data);
			} catch (error) {
				console.error('Error fetching books:', error);
			}
		};

		fetchBooks();
	}, [currentPage, query, itemsPerPage, selectedCategory]);

	const handleSearch = (newQuery: string) => {
		setQuery(newQuery);
		setCurrentPage(0);
	};

	const handleCategorySelect = (subject: string) => {
		setCategorySubject(subject);
		setCurrentPage(0);
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between pb-10">
			<Header onSearch={handleSearch} />
			<section className="p-5 md:px-24 w-full">
				<div className="container mx-auto flex flex-col gap-10 ">
					<div className="md:w-1/2">
						<h1 className="capitalize mb-5">
							<span className="text-blue-500">
								{selectedCategory}
							</span>{' '}
							Books
						</h1>
						<CategoryToggle
							categories={categories}
							selectedCategory={selectedCategory}
							onSelect={handleCategorySelect}
						/>
					</div>
				</div>
			</section>

			{books ? (
				<>
					<BookList list={books.items} />
					<Pagination
						currentPage={currentPage}
						onPageChange={handlePageChange}
						totalItems={books.totalItems}
						itemsPerPage={itemsPerPage}
					/>
				</>
			) : (
				<p>Loading...</p>
			)}
		</main>
	);
}
