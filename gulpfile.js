var gulp = require('gulp');

var jshint = require('gulp-jshint');
var zip = require('gulp-zip');

gulp.task('lint', function() {
	return gulp.src('Source/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
	return gulp.src('Source/*.js')
		.pipe(gulp.dest('Extensions/Chrome Extension/Source'))
		.pipe(gulp.dest('Extensions/Firefox Extension/Source'));
});

gulp.task('compresszipff', function() {
	return gulp.src('Extensions/Firefox Extension/Source/*')
		.pipe(zip('CancerTTV Firefox.zip'))
		.pipe(gulp.dest('Extensions/Firefox Extension'));
});

gulp.task('compresszipchrome', function() {
	return gulp.src('Extensions/Chrome Extension/Source/*')
		.pipe(zip('CancerTTV Chrome.zip'))
		.pipe(gulp.dest('Extensions/Chrome Extension'));
});

gulp.task('watch', function() {
	gulp.watch('Source/*.js', ['lint', 'scripts']);
});

gulp.task('default', ['lint','scripts', 'compresszipff', 'compresszipchrome']);