/* This code snippet is a TypeScript React component for a customizable button. Here's a breakdown of
what it does: */
'use client';

import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonStyles = cva(
	'px-10 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors hover:drop-shadow-sm disabled:bg-gray-200 capitalize',
	{
		variants: {
			variant: {
				primary:
					'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
				secondary:
					'bg-gray-300 text-black hover:bg-gray-400 focus:ring-gray-300',
				danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
			},
			size: {
				small: 'text-sm',
				medium: 'text-base',
				large: 'text-lg',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'medium',
		},
	}
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type = 'button',
	disabled = false,
	variant,
	size,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={buttonStyles({ variant, size })}
		>
			{children}
		</button>
	);
};

export default Button;
