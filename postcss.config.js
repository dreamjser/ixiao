module.exports = {
	plugins: [
		require('postcss-pxtorem')({
			root_value: 40,
			minPixelValue: 3,
			prop_white_list: []
		}),
    require('autoprefixer')
	]
}
