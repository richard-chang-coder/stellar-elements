/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['books.google.com', 'placehold.co'],
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/books',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
