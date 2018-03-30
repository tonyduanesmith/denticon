const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');

gulp.task('less', () => {
    return gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('babelify',()=>{
    gulp.src('src/js/denticon.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('html',()=>{
    gulp.src('dist/**/*.html')
})

gulp.task('watch', ()=>{
    gulp.watch('src/js/**/*.js', ['babelify']);
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('dist/**/*.html', ['html']);
})

gulp.task('default', ['watch'])
