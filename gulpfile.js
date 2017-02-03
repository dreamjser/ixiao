'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const rev = require('gulp-rev');
const minicss = require('gulp-clean-css');
const revcss = require('gulp-rev-css-url');
const replace = require('gulp-replace');
const base64 = require('gulp-base64');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('run-sequence');

/****************************************** 变量 ********************************************/
const path = {
  src: 'static/src/',
  dist: 'static/dist/'
};

// 生产静态文件服务器目录
const PROD_HOST = 'http://s1.dreamjser.com/';

// 替换css中的图片字体正则表达式
const REPLACE_REG = /((?:\.\.\/)+)([^"\(\)]+\.(?:gif|jpe?g|png|woff2?|ttf|svg|eot))/g;

// 生产 task
gulp.task('prod', function () {
  runSequence('clean', 'css', 'rev', 'replace:json');
});

/****************************************** 生产环境 ********************************************/

// css
gulp.task('css', function () {
  return gulp.src('static/src/css/**')
    // .pipe(base64({
    //   maxImageSize: 8 * 1024
    // }))
    .pipe(autoprefixer())
    .pipe(minicss())
    .pipe(replace(REPLACE_REG, PROD_HOST + '$2'))
    .pipe(gulp.dest(path.src + 'css'));
});

// clean assets.json
gulp.task('clean', function () {
  return gulp.src(['server/assets.json'])
    .pipe(clean({
      force: true
    }));
});

// 生成md5版本号
gulp.task('rev', function () {
  return gulp.src([
      path.src + 'css/**',
      path.src + 'js/**',
      path.src + 'fonts/**',
      path.src + 'icon.png'
    ], {
      base: path.src
    })
    .pipe(rev())
    .pipe(revcss())
    .pipe(gulp.dest(path.dist))
    .pipe(rev.manifest({
      path: 'assets.json'
    }))
    .pipe(gulp.dest('server'));
});

// 删除assets.json的图片和字体映射
gulp.task('replace:json', function () {
  return gulp.src('server/assets.json')
    .pipe(replace(/\s*\".+\.(woff2?|ttf|svg|eot)\":\s\".+\.(woff2?|ttf|svg|eot)\",?/gi, ''))
    .pipe(gulp.dest('server'));
});
