/**
 * The Pagination component in TypeScript React handles navigation between pages based on the current
 * page, total items, and items per page.
 * @param  - The `Pagination` component you provided is a React functional component that handles
 * pagination logic based on the given props. Here's a breakdown of the props used in the component:
 * @returns The Pagination component is being returned, which consists of two buttons for navigating to
 * the previous and next pages based on the current page number and total number of items.
 */
'use client';

import React from 'react';
import Button from './ui/Button';

interface PaginationProps {
	currentPage: number;
	onPageChange: (page: number) => void;
	totalItems: number;
	itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	onPageChange,
	totalItems,
	itemsPerPage,
}) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages - 1) {
			onPageChange(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 0) {
			onPageChange(currentPage - 1);
		}
	};

	return (
		<div className="flex justify-between mt-4 gap-10">
			<Button
				type="button"
				variant="primary"
				size="medium"
				onClick={handlePreviousPage}
				disabled={currentPage === 0}
			>
				Previous
			</Button>
			<Button
				type="button"
				variant="primary"
				size="medium"
				onClick={handleNextPage}
				disabled={currentPage >= totalPages - 1}
			>
				Next
			</Button>
		</div>
	);
};

export default Pagination;
