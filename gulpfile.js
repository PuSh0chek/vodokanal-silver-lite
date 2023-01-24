const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const rename = require('gulp-rename');
const rollup = require('rollup-stream');
const babel = require('gulp-babel');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const del = require('del');
const browserSync = require('browser-sync');

// Styles

const styles = () => gulp.src('source/sass/style.scss')
  //.pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
    csso(),
  ]))
  .pipe(rename('style.min.css'))
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest('build/css'))
  .pipe(browserSync.stream());

exports.styles = styles;

// HTML

const html = () => gulp.src('source/*.html')
  .pipe(plumber())
  .pipe(gulp.dest('build'));

exports.html = html;

// Scripts

const scripts = () => {
  return rollup({
      input: 'source/js/main.js',
      format: 'es',
  })
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(babel({
      presets: ['@babel/preset-env']
  }))
  .pipe(gulp.dest('build/js'));
};

exports.scripts = scripts;

// Images

const images = () => gulp.src('source/img/**/*.{png,jpg,svg}')
  .pipe(imagemin([
    imagemin.mozjpeg({ progressive: true }),
    imagemin.optipng({ optimizationLevel: 3 }),
    imagemin.svgo(),
  ]))
  .pipe(gulp.dest('build/img'));

exports.images = images;

// Webp

const createWebp = () => gulp.src('source/img/**/*.{png,jpg}')
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest('build/img'));

exports.createWebp = createWebp;

const createWebpDev = () => gulp.src('source/img/**/*.{png,jpg}')
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest('source/img'));

exports.createWebpDev = createWebpDev;

// Sprite

const sprite = () => gulp.src('source/img/icons/*.svg')
  .pipe(svgstore())
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img'));

exports.sprite = sprite;

// Copy

const copy = (done) => {
  gulp.src([
    'source/fonts/*.{woff2,woff}',
    'source/*.{ico,svg}',
    'source/img/**/*.{jpg,png,svg}',
  ], {
    base: 'source',
  })
    .pipe(gulp.dest('build'));
  done();
};

exports.copy = copy;

// Clean

const clean = () => del('build');

exports.clean = clean;

// Server

const server = (done) => {
  browserSync.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  done();
};

exports.server = server;

// Reload

const reload = (done) => {
  browserSync.reload();
  done();
};

exports.reload = reload;

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.{scss, sass}', gulp.series(styles, reload));
  gulp.watch('source/js/*.js', gulp.series(scripts, reload));
  gulp.watch('source/*.html', gulp.series(html, reload));
};

exports.watcher = watcher;

// Build

exports.build = gulp.series(
  clean,
  copy,
  images,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp,
  ),
);

// Default

exports.default = gulp.series(
  clean,
  copy,
  images,
  gulp.parallel(
    styles,
    html,
    sprite,
    createWebp,
    scripts,
  ),
  gulp.series(
    server,
    watcher,
  ),
);
