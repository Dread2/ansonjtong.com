module.exports = {
	plugins: [
		// Require is to compile postcss with css together if needed
		require('postcss-import'),
		require('postcss-css-variables'),
		require('postcss-preset-env')({
			stage: 1
		}),
		require('postcss-nested'),
		require('autoprefixer')
	],
	// Tailwindcss
	tailwindcss: {},
	autoprefixer: {}
}
