/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['i.dummyjson.com'],
		formats: ['image/webp']
	},
	env: {
		API_URL: process.env.API_URL
	},
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true
	}
};

module.exports = nextConfig;
