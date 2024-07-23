/**
 * The `CommentForm` component in TypeScript React allows users to leave a review with a textarea input
 * and a submit button.
 * @returns The `CommentForm` component is being returned. It is a functional component that renders a
 * form for leaving a review. The form includes a textarea for entering the review text and a submit
 * button. When the form is submitted, the entered review text is cleared.
 */
'use client';

import React, { useState } from 'react';
import Button from './ui/Button';
interface CommentFormProps {}

const CommentForm: React.FC<CommentFormProps> = () => {
	const [comment, setReview] = useState('');

	const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setReview(e.target.value);
	};

	const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setReview('');
	};

	return (
		<div>
			<h3 className="text-xl font-bold">Leave a review</h3>
			<form onSubmit={handleCommentSubmit} className="mt-3">
				<textarea
					value={comment}
					onChange={handleCommentChange}
					className="w-full p-2 border border-gray-300 rounded-md mb-5"
					rows={4}
					placeholder="Write your review here..."
					required
				></textarea>
				<Button type="submit" variant="primary" size="medium">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default CommentForm;
