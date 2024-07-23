/* The code you provided is a TypeScript React component called `BookList`. Here is an overview of what
the code is doing: */
'use client';
import { Book } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface BookListProps {
	list: Book[];
}

const BookList: React.FC<BookListProps> = ({ list }) => {
	const router = useRouter();

	console.log(list);
	return (
		<section className="p-5 px-24">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
					{list ? (
						list?.map(({ id, volumeInfo }) => (
							<div
								key={id}
								onClick={() => router.push('/books/' + id)}
								className="group cursor-pointer"
							>
								<div className="relative h-full flex justify-start items-center flex-col text-center  ">
									<div className="h-full md:max-h-[450px] w-full relative rounded-2xl overflow-hidden transition-shadow group-hover:shadow-2xl">
										{volumeInfo.imageLinks ? (
											<Image
												width={200}
												height={300}
												src={
													volumeInfo.imageLinks
														.thumbnail
												}
												alt={volumeInfo.title}
												className="object-cover w-full h-full"
											/>
										) : (
											<div className="w-full  bg-gray-100 rounded-2xl h-[450px] flex justify-center items-center font-semibold text-gray-500">
												No Image
											</div>
										)}
									</div>
									<div className="px-10 py-5 flex gap-2 flex-col">
										<h6 className="font-bold ">
											{volumeInfo.title}
										</h6>
										<p className="text-gray-500">
											{volumeInfo.authors}
										</p>
									</div>
								</div>
							</div>
						))
					) : (
						<p className=" m-auto">No results</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default BookList;
