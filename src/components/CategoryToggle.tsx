/**
 * The `CategorySubject` component in TypeScript React renders a list of categories as buttons with the
 * ability to select a category.
 * @param  - The `CategorySubject` component takes the following props:
 * @returns The `CategorySubject` component is being returned. It is a functional component in React
 * that displays a list of categories as buttons. The selected category is highlighted with a primary
 * variant button while the rest are displayed with a secondary variant button. The `onSelect` function
 * is called when a category button is clicked.
 */
'use client';

import React from 'react';
import Button from './ui/Button';

interface CategorySubjectProps {
	categories: string[];
	selectedCategory: string;
	onSelect: (catgory: string) => void;
}

const CategorySubject: React.FC<CategorySubjectProps> = ({
	categories,
	selectedCategory,
	onSelect,
}) => {
	return (
		<div className=" gap-2 mb-10 grid grid-cols-2 md:grid-cols-3 ">
			{categories.map((catgory) => (
				<Button
					key={catgory}
					onClick={() => onSelect(catgory)}
					variant={
						selectedCategory === catgory ? 'primary' : 'secondary'
					}
					size="small"
				>
					{catgory}
				</Button>
			))}
		</div>
	);
};

export default CategorySubject;
