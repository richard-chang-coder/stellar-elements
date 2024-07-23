/**
 * The Header component in TypeScript React renders a header with a title and a search component for a
 * coding challenge website.
 * @param  - The code you provided is a React functional component called `Header`. It takes in a prop
 * `onSearch` which is a function that accepts a `query` parameter. The component renders a header
 * section with a title "Stellar Element Coding Challenge" and a `Search` component for searching. When
 * @returns The `Header` component is being returned, which is a functional component in React that
 * displays a header section with a title "Stellar Element Coding Challenge" and a search component.
 */
'use client';

import Link from 'next/link';
import React from 'react';
import Search from './Search';

interface HeaderProps {
	onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
	return (
		<header className="flex justify-between items-center p-5 border-b border-gray-200 w-full mb-10">
			<div className="container mx-auto w-full flex flex-col  gap-5 md:flex-row justify-between">
				<Link href="/books">
					<p className="text-sm font-bold">
						Stellar Element <br />
						Coding Challenge
					</p>
				</Link>
				{onSearch && <Search onSearch={onSearch} />}
			</div>
		</header>
	);
};

export default Header;
