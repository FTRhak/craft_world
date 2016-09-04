var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var replace = require("gulp-replace");
var compass = require('gulp-compass');

var PROJECT_SRC = 'src/';
var PROJECT_BUILD = 'client/';

//-----------CLEAN-----------------
gulp.task('build-clean', function () {
    return gulp.src(PROJECT_BUILD, { read: false })
        .pipe(clean());
});
//-----------CSS-------------------
gulp.task('sass-dev', function () {
    gulp.src(PROJECT_SRC + 'sass/style.scss')
        //.pipe(sass().on('error', sass.logError))
        .pipe(compass({
            css: PROJECT_BUILD + 'css',
            sass: PROJECT_SRC + 'sass',
            image: PROJECT_SRC + 'images',
        }))
        .pipe(gulp.dest(PROJECT_BUILD + 'css/'));
});
//-----------JS--------------------
gulp.task('js-libs-dev', function () {
    return gulp.src([
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/rxjs/bundles/Rx.umd.js',
        'node_modules/angular2/bundles/angular2-all.umd.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js'])
        .pipe(gulp.dest(PROJECT_BUILD + 'js/libs/'));
});
gulp.task('js-app-dev', function () {
    return gulp.src([
        PROJECT_SRC + 'js/tools.js',
        PROJECT_SRC + 'js/components/*.js',
        PROJECT_SRC + 'js/controllers/*.js',
        PROJECT_SRC + 'js/controllers/*/*.js',
        PROJECT_SRC + 'js/app.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(PROJECT_BUILD + 'js/'));
});
gulp.task('js-dev', ['js-libs-dev', 'js-app-dev']);
//-----------TEMPLATES-------------
gulp.task('template-dev', function () {
    return gulp.src([
        PROJECT_SRC + 'templates/*/*.html'])
    //.pipe(concat('app.js'))
        .pipe(gulp.dest(PROJECT_BUILD + 'templates/'));
});
//-----------ICONS-----------------
gulp.task('icons', function () {
    return gulp.src([
        PROJECT_SRC + 'icons/*',
        PROJECT_SRC + 'icons/*/*'])
    //.pipe(concat('app.js'))
        .pipe(gulp.dest(PROJECT_BUILD + 'icons/*'));
});
//-----------ICONS-----------------
gulp.task('game-images', function () {
    return gulp.src([
        PROJECT_SRC + 'images/*/*',
        PROJECT_SRC + 'images/*/*'])
    //.pipe(concat('app.js'))
        .pipe(gulp.dest(PROJECT_BUILD + 'images/'));
});
//-----------INDEX-----------------
var styleDev = [/*'bootstrap.css', 'bootstrap-theme.css',*/ 'style.css'];
var styleProd = [/*'base.min.css',*/ 'style.css'];

var libsScriptDev = [
    'libs/es6-shim.min.js',
    'libs/angular2-polyfills.js',
    'libs/Rx.umd.js',
//'libs/angular2.dev.js',
    'libs/angular2-all.umd.js',
    //'libs/router.dev.js'
];
var libsScriptProd = ['tools.js'];

var scriptDev = [/*'models.js',*/ 'app.js'];
var scriptProd = ['script.js'];

function launchStylesAsString(list, title) {
    var res = "";
    list.forEach(function (el) {
        res = res + '<link rel="stylesheet" type="text/css" href="css/' + el + '?v=' + title + '" media="all" />' + "\n";
    });
    return res;
}

function launchScriptsAsString(list, title) {
    var res = "";
    list.forEach(function (el) {
        res = res + "\n" + '<script type="text/javascript" src="js/' + el + '?v=' + title + '"></script>';
    });
    return res;
}
function supportedLanguagesDev(callback) {
    var res = '<script type="text/javascript" >';
    res += 'var supportedLanguages = [';

    /*fs.readdir(DIST_MOBILE_SOURCE + 'lang/', function (err, files) {
        files.forEach(function(file, index){
            var ln = file.substr(0, file.length - 5);
            res += (index === 0 ? '' : ',') + "'" + ln + "'";
        });
        res += '];</script>';
        callback(res);
    });*/
}
function supportedLanguagesProd(callback) {
    var files = ['en'];
    var res = '<script type="text/javascript" >';
    res += 'var supportedLanguages = [';
    files.forEach(function (file, index) {
        res += (index === 0 ? '' : ',') + "'" + file + "'";
    });
    res += '];</script>';
    callback(res);
}

gulp.task('index-dev', function () {
    var version = Math.random();
    supportedLanguagesProd(function (listLanguages) {
        gulp.src([PROJECT_SRC + 'view/index.html'])
            .pipe(replace(/(<!--STYLES-->)/g, launchStylesAsString(styleDev, version)))
            .pipe(replace(/(<!--JSLIBS-->)/g, launchScriptsAsString(libsScriptDev, 0.1)))
            .pipe(replace(/(<!--JSAPP-->)/g, launchScriptsAsString(scriptDev, version)))
            .pipe(replace(/(<!--LN-->)/g, listLanguages))
            .pipe(rename(function (path) {
                path.dirname = "/view/";
                //path.basename += "";
                path.extname = ".ejs"
            }))
            .pipe(gulp.dest(PROJECT_BUILD));
    });
});


//===============================
gulp.task('dev-web', ['sass-dev', 'js-dev', 'template-dev', 'game-images', 'index-dev']);