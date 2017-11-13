/* eslint-env node */
var gulp = require('gulp');

var zip = require('gulp-zip');
var bump = require('gulp-bump');
var semver = require('semver');

var chromeExtLoc = 'Extensions/Chrome Extension';
var ffExtLoc = 'Extensions/Firefox Extension';

gulp.task('scripts', function () {
    return gulp.src('Source/*.js')
        .pipe(gulp.dest(chromeExtLoc + '/Source'))
        .pipe(gulp.dest(ffExtLoc + '/Source'));
});

gulp.task('styles', function () {
    return gulp.src('Source/*.css')
        .pipe(gulp.dest(chromeExtLoc + '/Source'))
        .pipe(gulp.dest(ffExtLoc + '/Source'));
});

gulp.task('compresszipff', ['scripts', 'styles'], function () {
    return gulp.src(ffExtLoc + '/Source/*')
        .pipe(zip('CancerTTV Firefox.xpi'))
        .pipe(gulp.dest('Extensions/Firefox Extension'));
});

gulp.task('compresszipchrome', ['scripts', 'styles'], function () {
    return gulp.src(chromeExtLoc + '/Source/*')
        .pipe(zip('CancerTTV Chrome.zip'))
        .pipe(gulp.dest(chromeExtLoc + ''));
});

var fs = require('fs');
var getPackageJson = function (arg) {
    return JSON.parse(fs.readFileSync(arg, 'utf8'));
};

gulp.task(
    'bumpversion',
    ['bumpversionpackage', 'bumpversionchrome', 'bumpversionff']
);

var version = 'minor';
if (process.argv.indexOf('--patch') > -1)
    version = 'patch';

gulp.task('bumpversionpackage', function () {
    var pkg = getPackageJson('package.json');
    var newVer = semver.inc(pkg.version, version);
    return gulp.src('package.json')
        .pipe(bump({version: newVer}))
        .pipe(gulp.dest(''));
});

gulp.task('bumpversionchrome', function () {
    var pkg = getPackageJson(chromeExtLoc + '/Source/manifest.json');
    var newVer = semver.inc(pkg.version, version);
    return gulp.src(chromeExtLoc + '/Source/manifest.json')
        .pipe(bump({version: newVer}))
        .pipe(gulp.dest(chromeExtLoc + '/Source'));
});

gulp.task('bumpversionff', function () {
    var pkg = getPackageJson(ffExtLoc + '/Source/manifest.json');
    var newVer = semver.inc(pkg.version, version);
    return gulp.src(ffExtLoc + '/Source/manifest.json')
        .pipe(bump({version: newVer}))
        .pipe(gulp.dest(ffExtLoc + '/Source'));
});

gulp.task('watch', function () {
    gulp.watch('Source/*', ['styles', 'scripts']);
});

gulp.task('default', ['scripts', 'compresszipff', 'compresszipchrome']);