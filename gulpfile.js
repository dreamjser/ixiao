'use strict';

const gulp = require('gulp');
// const gulpif = require('gulp-if');
// const scss = require('gulp-sass');
// const clean = require('gulp-clean');
// const rev = require('gulp-rev');
// const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// const eslint = require('gulp-eslint');
// const minicss = require('gulp-clean-css');
// const revcss = require('gulp-rev-css-url');
// const replace = require('gulp-replace');
const connect = require('gulp-connect');
// const base64 = require('gulp-base64');
// const imagemin = require('gulp-imagemin');
// const optipng = require('imagemin-optipng');
// const jpegtran = require('imagemin-jpegtran');
// const spritesmith = require('gulp.spritesmith');
// const sourcemaps = require('gulp-sourcemaps');
// const autoprefixer = require('gulp-autoprefixer');
// const environments = require('gulp-environments');
const runSequence = require('run-sequence');
// const changed = require('gulp-changed');

/****************************************** 变量 ********************************************/
const path = {
  src: 'src/',
  dist: 'dist/'
};

/****************************************** 独立执行 ********************************************/

gulp.task('js', function(){
  return gulp.src([
      'node_modules/promise-polyfill/promise.min.js',
      'node_modules/react/dist/react.min.js',
      'node_modules/react-dom/dist/react-dom.min.js'
    ])
    .pipe(concat('framework.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.src + 'js/utils'));
});

// 启动本地服务器
gulp.task('connect', function () {
	connect.server({
		root: './',
		port: 8000,
		livereload: true
	});
});

// 开启node服务器
gulp.task('node', function () {
	return nodemon({
		script: 'app.js',
		ignore:[
      'node_modules/**',
      'gulpfile.js'
    ],
		env: {
			'NODE_ENV': 'development'
		}
	});
})

