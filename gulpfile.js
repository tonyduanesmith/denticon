const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');

gulp.task('less', () => {
    return gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', ()=>{
    gulp.src('src/js/app.js')
        .pipe(browserify())
        .pipe(babel({
            presets: ['env'],
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('html', ()=>{
    gulp.src('dist/**/*.html');
});

gulp.task('watch', ()=>{
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('dist/**/*.html', ['html']);
});

gulp.task('default', ['watch']);
