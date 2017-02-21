let plugins = [
  require('postcss-pxtorem')({
    root_value: 40,
    minPixelValue: 3,
    prop_white_list: []
  }),
  require('autoprefixer')
];

if(process.env.NODE_ENV === 'production'){
  plugins.push(require('cssnano'));
}

module.exports = {
  plugins
}
