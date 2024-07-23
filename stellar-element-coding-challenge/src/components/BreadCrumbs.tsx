/* The code snippet provided is a TypeScript React component called `Breadcrumb`. Here is a breakdown
of what the code is doing: */
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use `next/router` instead of `next/navigation`
import React from 'react';

interface BreadcrumbProps {
	current: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ current }) => {
	const router = useRouter();

	return (
		<section className="p-5 px-24">
			<div className="container mx-auto">
				<Link href="/books">Home</Link> {'/'}{' '}
				<span className="text-gray-500">{current}</span>
			</div>
		</section>
	);
};

export default Breadcrumb;
