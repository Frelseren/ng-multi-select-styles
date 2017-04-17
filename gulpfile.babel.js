import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';

/**
 * Compile SCSS into CSS
 */
gulp.task('sass', () => {
    return gulp.src('scss/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(autoprefixer())
      .pipe(gulp.dest('dist/'));
});
gulp.task('sass:watch', () => {
    gulp.watch('scss/**/*.scss', ['sass']);
});