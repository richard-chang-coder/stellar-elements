/**
 * The Search component is a controlled input form in a React application that allows users to input a
 * search query and submit it to trigger a search action.
 * @param  - The code you provided is a React functional component called `Search` that represents a
 * search input field and button. It takes a prop `onSearch` which is a function that will be called
 * when the search form is submitted. The component maintains the search query state using the
 * `useState` hook.
 * @returns The `Search` component is being returned, which is a functional component in React that
 * renders a form with an input field for searching and a button to submit the search query. The
 * component takes a prop `onSearch` which is a function to handle the search action. Inside the
 * component, it maintains the search query state using `useState` hook and updates the query value as
 * the user types in the
 */
'use client';

import React, { useState } from 'react';

interface SearchProps {
	onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form
			onSubmit={handleSearchSubmit}
			className="flex items-center space-x-2"
		>
			<input
				type="text"
				value={query}
				onChange={handleInputChange}
				placeholder="Search..."
				className="p-2 border border-gray-300 rounded-md"
			/>
			<button
				type="submit"
				className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
			>
				Search
			</button>
		</form>
	);
};

export default Search;
