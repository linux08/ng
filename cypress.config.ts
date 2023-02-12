import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'cypress';

const { combinedEnv } = loadEnvConfig(process.cwd());
export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		retries: {
			runMode: 3
		},
		viewportHeight: 1080,
		viewportWidth: 1920,
		video: false,
		screenshotOnRunFailure: false,
		experimentalSessionAndOrigin: true,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		}
	},

	component: {
		devServer: {
			framework: 'next',
			bundler: 'webpack'
		}
	}
});
