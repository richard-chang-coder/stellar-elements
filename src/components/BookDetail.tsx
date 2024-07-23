/* This code snippet is a TypeScript React component called `BookDetail`. It receives a prop `detail`
of type `VolumeInfo` and displays detailed information about a book. Here's a breakdown of what the
code is doing: */
'use client';
import CommentForm from '@/components/CommentForm';
import { VolumeInfo } from '@/types';
import Image from 'next/image';
import React from 'react';

interface BookDetailProps {
	detail: VolumeInfo;
}

const BookDetail: React.FC<BookDetailProps> = ({ detail }) => {
	return (
		<section className="p-5 px-24">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row gap-10 p-4 w-full">
					<div className="w-full md:w-2/4 flex justify-center items-center relative">
						<div className="w-full max-w-sm z-10  ">
							{detail.imageLinks ? (
								<Image
									width={200}
									height={300}
									src={detail.imageLinks.thumbnail}
									alt={detail.title}
									className="object-contain w-full h-full object-center shadow-2xl rounded-2xl"
								/>
							) : (
								<div className="w-full  bg-gray-300 rounded-2xl h-[450px] flex justify-center items-center font-semibold text-gray-500">
									No Image
								</div>
							)}
						</div>
						<div className="md:w-[500px] md:h-[500px] bg-gray-100 px-50 rounded-full z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
					</div>
					<div className="flex-1 flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<h1>{detail.title}</h1>
							<p className="text-gray-500">
								By <strong>{detail.authors}</strong>
							</p>
						</div>
						<ul className="grid grid-cols-2 gap-2 border-t border-b border-gray-200 py-5">
							<li>
								<strong>Publisher:</strong> {detail.publisher}
							</li>
							<li>
								<strong>Published Date:</strong>{' '}
								{detail.publishedDate}
							</li>
							<li>
								<strong>Print Type: </strong>
								{detail.printType}
							</li>
							<li>
								<strong>Dimensions:</strong>{' '}
								{detail.dimensions.height}x
								{detail.dimensions.width}x{' '}
								{detail.dimensions.thickness}
							</li>
						</ul>
						<div>
							<CommentForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookDetail;
